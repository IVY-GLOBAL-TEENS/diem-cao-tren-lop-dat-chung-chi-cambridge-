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


def to_mp3(raw, mime, dest):
    with tempfile.TemporaryDirectory() as tmp:
        if raw[:4] == b"RIFF":                       # newer models return WAV
            src = os.path.join(tmp, "in.wav"); open(src, "wb").write(raw); args = ["-i", src]
        else:                                        # raw 16-bit PCM, 24 kHz mono
            rate = "24000"
            if "rate=" in mime:
                rate = mime.split("rate=")[1].split(";")[0]
            src = os.path.join(tmp, "in.pcm"); open(src, "wb").write(raw)
            args = ["-f", "s16le", "-ar", rate, "-ac", "1", "-i", src]
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", *args,
                        "-af", "silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-18:TP=-2",
                        "-ac", "1", "-ar", "24000", "-b:a", "32k", dest], check=True)


def write_index(done):
    idx = {}
    for key in sorted(done):
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
    todo = []
    for tid, cs in clips.items():
        if ONLY and tid not in ONLY:
            continue
        for clip, turns in cs.items():
            key = f"{tid}/{clip}"
            if done.get(key) != script_hash(turns) or not os.path.exists(os.path.join(OUT, tid, clip + ".mp3")):
                todo.append((tid, clip, turns))
    print(f"Model {MODEL} · {len(todo)} clips to make · RPM {RPM}", flush=True)
    start, made, gap = time.time(), 0, 60.0 / max(RPM, 0.1)
    try:
        for tid, clip, turns in todo:
            if made >= MAX_REQUESTS or (time.time() - start) / 60 > MAX_MINUTES:
                print("Stopping for this run (limit reached); the next run continues.")
                break
            t0 = time.time()
            raw, mime = call_api(build_request(turns))
            os.makedirs(os.path.join(OUT, tid), exist_ok=True)
            to_mp3(raw, mime, os.path.join(OUT, tid, clip + ".mp3"))
            done[f"{tid}/{clip}"] = script_hash(turns)
            made += 1
            if made % 10 == 0:
                json.dump(done, open(DONE, "w"), indent=0)
            print(f"  ✓ {tid}/{clip}  ({made}/{len(todo)})", flush=True)
            time.sleep(max(0.0, gap - (time.time() - t0)))
    except DailyQuota as e:
        print("Daily quota used up – stopping now; the scheduled run will continue tomorrow.\n", e)
    finally:
        json.dump(done, open(DONE, "w"), indent=0)
        total = write_index(done)
        print(f"Made {made} clips this run · {total} of {sum(len(v) for v in clips.values())} ready in total.")


if __name__ == "__main__":
    main()
