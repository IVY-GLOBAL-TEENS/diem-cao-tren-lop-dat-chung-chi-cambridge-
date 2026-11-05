#!/usr/bin/env python3
"""Generate natural listening audio for the IVY KET practice bank with Gemini TTS.

Runs in GitHub Actions (see .github/workflows/ket-tts.yml) or on any computer with
Python 3.9+ and ffmpeg:   GEMINI_API_KEY=... python3 generate.py

Account-friendly design:
  * Each clip is generated ONCE and saved as a small MP3 (mono, 24 kHz, 32 kbps).
    Students only download files – they never call the API, so 1 student or 1,000
    students cost the same.
  * Clips that already exist (and whose script has not changed) are skipped, so the
    job can be re-run safely and simply continues where it stopped.
  * Requests are throttled to the per-minute limit (RPM) and the run stops politely
    when the daily quota is used up; the scheduled workflow resumes the next day.
"""
import base64, hashlib, json, os, subprocess, sys, tempfile, time, urllib.error, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
CLIPS = os.path.join(HERE, "clips.json")
OUT = os.path.join(HERE, "audio")
DONE = os.path.join(OUT, "done.json")          # clip -> hash of the script it was made from
INDEX = os.path.join(OUT, "index.json")        # test id -> list of available clips (read by the web app)

API_KEY = os.environ.get("GEMINI_API_KEY", "").strip()
MODEL = os.environ.get("TTS_MODEL", "gemini-3.1-flash-tts-preview").strip()
RPM = float(os.environ.get("TTS_RPM", "3"))                 # requests per minute allowed by your tier
MAX_REQUESTS = int(os.environ.get("TTS_MAX_REQUESTS", "100000"))
MAX_MINUTES = float(os.environ.get("TTS_MAX_MINUTES", "300"))
ONLY = [x for x in os.environ.get("TTS_ONLY", "").split(",") if x.strip()]   # e.g. "t01-1" to test one test first

# Two speakers per request at most (Gemini limit). Every KET clip has 1–2 speakers.
NAMES = {"F": "Woman", "M": "Man", "F2": "Girl", "M2": "Boy", "N": "Narrator"}
VOICES = {"F": "Leda", "M": "Puck", "F2": "Kore", "M2": "Charon", "N": "Aoede"}
STYLE = ("Read this as a recording for the Cambridge A2 Key for Schools listening exam. "
         "Use clear, natural British English at a calm, moderate pace for teenage learners, "
         "with short natural pauses between turns.")


def script_hash(turns):
    return hashlib.sha1((MODEL + json.dumps(turns, ensure_ascii=False)).encode()).hexdigest()[:16]


def build_request(turns):
    speakers = []
    for t in turns:
        if t["s"] not in speakers:
            speakers.append(t["s"])
    if len(speakers) == 1:
        text = STYLE + "\n\n" + "\n".join(t["t"] for t in turns)
        speech = {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": VOICES.get(speakers[0], "Kore")}}}
    else:
        names = [NAMES.get(s, s) for s in speakers]
        text = (STYLE + f"\n\nTTS the following conversation between {names[0]} and {names[1]}:\n"
                + "\n".join(f"{NAMES.get(t['s'], t['s'])}: {t['t']}" for t in turns))
        speech = {"multiSpeakerVoiceConfig": {"speakerVoiceConfigs": [
            {"speaker": NAMES.get(s, s), "voiceConfig": {"prebuiltVoiceConfig": {"voiceName": VOICES.get(s, "Kore")}}}
            for s in speakers[:2]]}}
    return {"contents": [{"role": "user", "parts": [{"text": text}]}],
            "generationConfig": {"responseModalities": ["AUDIO"], "speechConfig": speech}}


PACK_SECONDS = float(os.environ.get("TTS_PACK_SECONDS", "330"))   # max estimated length of one combined request
SEP = "###"


def est_seconds(turns):
    return sum(len(t["t"].split()) for t in turns) / 2.3 + 1.0      # ~138 words per minute


def make_packs(cs, failed):
    """Group a test's clips (in order) into requests with at most 2 voices and ~PACK_SECONDS of speech.
    Clips whose pack failed to split before are sent alone."""
    packs, cur, voices, secs = [], [], set(), 0.0
    for clip, turns in cs:
        sp = {t["s"] for t in turns}
        alone = clip in failed
        if cur and (alone or len(voices | sp) > 2 or secs + est_seconds(turns) > PACK_SECONDS):
            packs.append(cur); cur, voices, secs = [], set(), 0.0
        cur.append((clip, turns)); voices |= sp; secs += est_seconds(turns)
        if alone:
            packs.append(cur); cur, voices, secs = [], set(), 0.0
    if cur:
        packs.append(cur)
    return packs


def build_pack_request(pack):
    if len(pack) == 1:
        return build_request(pack[0][1])
    speakers = []
    for _, turns in pack:
        for t in turns:
            if t["s"] not in speakers:
                speakers.append(t["s"])
    names = [NAMES.get(s, s) for s in speakers]
    lines = []
    for i, (_, turns) in enumerate(pack):
        if i:
            lines.append(SEP)
        lines += [f"{NAMES.get(t['s'], t['s'])}: {t['t']}" if len(speakers) > 1 else t["t"] for t in turns]
    text = (STYLE + f" The text contains {len(pack)} separate recordings divided by the line {SEP}. "
            f"Do not read {SEP} aloud; instead leave a silence of about four seconds there.\n\n"
            + (f"TTS the following conversations between {names[0]} and {names[1]}:\n" if len(speakers) > 1 else "")
            + "\n".join(lines))
    if len(speakers) == 1:
        speech = {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": VOICES.get(speakers[0], "Kore")}}}
    else:
        speech = {"multiSpeakerVoiceConfig": {"speakerVoiceConfigs": [
            {"speaker": NAMES.get(s, s), "voiceConfig": {"prebuiltVoiceConfig": {"voiceName": VOICES.get(s, "Kore")}}}
            for s in speakers[:2]]}}
    return {"contents": [{"role": "user", "parts": [{"text": text}]}],
            "generationConfig": {"responseModalities": ["AUDIO"], "speechConfig": speech}}


def to_wav(raw, mime, dest):
    if raw[:4] == b"RIFF":
        open(dest, "wb").write(raw); return
    rate = mime.split("rate=")[1].split(";")[0] if "rate=" in mime else "24000"
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "s16le", "-ar", rate, "-ac", "1", "-i", "pipe:0", dest],
                   input=raw, check=True)


def wav_duration(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path],
                         capture_output=True, text=True).stdout.strip()
    return float(out)


def silences(path):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", path, "-af", "silencedetect=noise=-42dB:d=1.4",
                        "-f", "null", "-"], capture_output=True, text=True)
    out, start = [], None
    for line in r.stderr.splitlines():
        if "silence_start:" in line:
            start = float(line.split("silence_start:")[1].split()[0])
        elif "silence_end:" in line and start is not None:
            end = float(line.split("silence_end:")[1].split()[0]); out.append((start, end)); start = None
    return out


def split_pack(wav, pack):
    """Return cut points (seconds) between clips, or None if the audio can't be split reliably."""
    n = len(pack)
    if n == 1:
        return []
    total = wav_duration(wav)
    sil = [s for s in silences(wav) if 0.5 < s[0] and s[1] < total - 0.5]
    if len(sil) < n - 1:
        return None
    w = [est_seconds(t) for _, t in pack]
    cuts, used = [], set()
    for i in range(1, n):
        expect = total * sum(w[:i]) / sum(w)
        cands = [(abs((a + b) / 2 - expect) - 0.6 * (b - a), j) for j, (a, b) in enumerate(sil) if j not in used]
        if not cands:
            return None
        _, j = min(cands); used.add(j); a, b = sil[j]
        cuts.append((a + b) / 2)
    if cuts != sorted(cuts):
        return None
    bounds = [0.0] + cuts + [total]
    for i in range(n):                                   # each part must be roughly the expected length
        seg, exp = bounds[i + 1] - bounds[i], w[i] * total / sum(w)
        if not (0.55 * exp <= seg <= 1.6 * exp):
            return None
    return cuts


def save_mp3(src, dest, start=None, end=None):
    cut = []
    if start is not None:
        cut += ["-ss", f"{start:.3f}"]
    if end is not None:
        cut += ["-to", f"{end:.3f}"]
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", src, *cut,
                    "-af", "silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-18:TP=-2",
                    "-ac", "1", "-ar", "24000", "-b:a", "32k", dest], check=True)


class DailyQuota(Exception):
    pass


def call_api(body):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
    req = urllib.request.Request(url, data=json.dumps(body).encode(), method="POST",
                                 headers={"Content-Type": "application/json", "x-goog-api-key": API_KEY})
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                data = json.load(r)
            part = data["candidates"][0]["content"]["parts"][0]["inlineData"]
            return base64.b64decode(part["data"]), part.get("mimeType", "")
        except urllib.error.HTTPError as e:
            msg = e.read().decode("utf-8", "replace")
            if e.code == 429:
                if "PerDay" in msg or "per day" in msg.lower() or "RequestsPerDay" in msg:
                    raise DailyQuota(msg[:300])
                wait = 65
                try:
                    for d in json.loads(msg)["error"].get("details", []):
                        if "retryDelay" in d:
                            wait = int(float(d["retryDelay"].rstrip("s"))) + 3
                except Exception:
                    pass
                if attempt >= 2:
                    raise DailyQuota("still rate limited after several waits – probably the daily quota")
                print(f"   rate limited, waiting {wait}s", flush=True)
                time.sleep(wait)
                continue
            if e.code >= 500:
                time.sleep(20 * (attempt + 1))
                continue
            raise RuntimeError(f"HTTP {e.code}: {msg[:400]}")
        except (KeyError, IndexError):
            print("   no audio in response, retrying", flush=True)
            time.sleep(5)
        except urllib.error.URLError as e:
            print(f"   network error {e}, retrying", flush=True)
            time.sleep(15)
    raise RuntimeError("giving up on this clip after retries")


def write_index(done):
    idx = {}
    for key in sorted(done):
        if "/" not in key:
            continue
        tid, clip = key.split("/")
        if os.path.exists(os.path.join(OUT, tid, clip + ".mp3")):
            idx.setdefault(tid, []).append(clip)
    json.dump(idx, open(INDEX, "w"), separators=(",", ":"))
    return sum(len(v) for v in idx.values())


def main():
    if not API_KEY:
        print("GEMINI_API_KEY is not set yet – add it under Settings → Secrets and variables → Actions. Nothing to do.")
        return
    clips = json.load(open(CLIPS, encoding="utf-8"))
    os.makedirs(OUT, exist_ok=True)
    done = json.load(open(DONE)) if os.path.exists(DONE) else {}
    failed = set(done.get("_split_failed", []))
    errs = done.get("_errors", {})
    jobs = []
    for tid, cs in clips.items():
        if ONLY and tid not in ONLY:
            continue
        need = [(clip, turns) for clip, turns in cs.items() if errs.get(f"{tid}/{clip}", 0) < 3 and (
                done.get(f"{tid}/{clip}") != script_hash(turns) or not os.path.exists(os.path.join(OUT, tid, clip + ".mp3")))]
        for pack in make_packs(need, {c.split("/")[1] for c in failed if c.startswith(tid + "/")}):
            jobs.append((tid, pack))
    n_clips = sum(len(p) for _, p in jobs)
    print(f"Model {MODEL} · {n_clips} clips to make in {len(jobs)} requests · RPM {RPM}", flush=True)
    start, made, reqs, gap = time.time(), 0, 0, 60.0 / max(RPM, 0.1)
    try:
        for tid, pack in jobs:
            if reqs >= MAX_REQUESTS or (time.time() - start) / 60 > MAX_MINUTES:
                print("Stopping for this run (limit reached); the next run continues.")
                break
            t0 = time.time()
            try:
                raw, mime = call_api(build_pack_request(pack)); reqs += 1
            except RuntimeError as e:
                reqs += 1
                if len(pack) == 1:
                    key = f"{tid}/{pack[0][0]}"; errs[key] = errs.get(key, 0) + 1
                else:                       # retry the same pack once more before splitting it into single requests
                    pk = f"pack:{tid}/{pack[0][0]}"; errs[pk] = errs.get(pk, 0) + 1
                    if errs[pk] >= 2:
                        for clip, _ in pack:
                            failed.add(f"{tid}/{clip}")
                print(f"  ! {tid}: request failed ({str(e)[:150]})", flush=True)
                time.sleep(gap); continue
            os.makedirs(os.path.join(OUT, tid), exist_ok=True)
            with tempfile.TemporaryDirectory() as tmp:
                wav = os.path.join(tmp, "pack.wav"); to_wav(raw, mime, wav)
                cuts = split_pack(wav, pack)
                if cuts is None:
                    for clip, _ in pack:
                        failed.add(f"{tid}/{clip}")
                    print(f"  ✗ {tid}: could not split {len(pack)} clips – they will be made one by one next time", flush=True)
                else:
                    bounds = [None] + cuts + [None]
                    outs = []
                    for i, (clip, turns) in enumerate(pack):
                        tmpmp3 = os.path.join(tmp, clip + ".mp3")
                        save_mp3(wav, tmpmp3, bounds[i], bounds[i + 1])
                        ok = os.path.exists(tmpmp3) and os.path.getsize(tmpmp3) > 2000 and wav_duration(tmpmp3) > 1.5
                        outs.append((clip, turns, tmpmp3, ok))
                    if all(o[3] for o in outs):
                        for clip, turns, tmpmp3, _ in outs:
                            os.replace(tmpmp3, os.path.join(OUT, tid, clip + ".mp3"))
                            done[f"{tid}/{clip}"] = script_hash(turns); failed.discard(f"{tid}/{clip}"); made += 1
                        print(f"  ✓ {tid}: {', '.join(c for c, _ in pack)}  (request {reqs}/{len(jobs)})", flush=True)
                    else:
                        for clip, *_ in outs:
                            failed.add(f"{tid}/{clip}")
                        print(f"  ✗ {tid}: a clip came out empty – {len(pack)} clips will be made one by one next time", flush=True)
            done["_split_failed"] = sorted(failed)
            json.dump(done, open(DONE, "w"), indent=0)
            time.sleep(max(0.0, gap - (time.time() - t0)))
    except DailyQuota as e:
        print("Daily quota used up – stopping now; the scheduled run will continue tomorrow.\n", str(e)[:200])
    finally:
        done["_split_failed"] = sorted(failed); done["_errors"] = errs
        json.dump(done, open(DONE, "w"), indent=0)
        total = write_index(done)
        print(f"Made {made} clips with {reqs} requests this run · {total} of {sum(len(v) for v in clips.values())} ready in total.")


if __name__ == "__main__":
    main()
