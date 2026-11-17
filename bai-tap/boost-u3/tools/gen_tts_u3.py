# -*- coding: utf-8 -*-
"""Sinh audio Gemini Flash TTS cho bài tập Unit 3.

1) node tools/u3_audio_list.js           → audio/u3/list.json (mỗi câu một id = giọng_hash)
2) GEMINI_API_KEY=... python3 tools/gen_tts_u3.py
   → audio/u3/<id>.mp3 (hoặc .wav nếu máy không có ffmpeg) + audio/u3/manifest.json
Trang bài tập tự đọc manifest.json: câu nào có file thì phát giọng Gemini, chưa có thì dùng giọng trình duyệt.
Chạy lại an toàn: câu đã có file sẽ bỏ qua (chỉ tốn tiền cho câu mới hoặc câu đã sửa).
Biến môi trường: GEMINI_TTS_MODEL (mặc định gemini-3.8-flash-tts), GEMINI_TTS_LIMIT (chỉ sinh N câu để thử).
"""
import base64, json, os, shutil, subprocess, sys, time, urllib.request, wave

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR = os.path.join(ROOT, 'audio', 'u3')
KEY = os.environ.get('GEMINI_API_KEY')
MODEL = os.environ.get('GEMINI_TTS_MODEL', 'gemini-3.8-flash-tts')
LIMIT = int(os.environ.get('GEMINI_TTS_LIMIT', '0'))
if not KEY:
    sys.exit('Thiếu GEMINI_API_KEY')
items = json.load(open(os.path.join(DIR, 'list.json'), encoding='utf-8'))
man_path = os.path.join(DIR, 'manifest.json')
manifest = json.load(open(man_path)) if os.path.exists(man_path) else {}
FF = shutil.which('ffmpeg')
URL = f'https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={KEY}'


def tts(it):
    prompt = f"{it['style']}. Read exactly this text in English: {it['text']}"
    body = {'contents': [{'parts': [{'text': prompt}]}],
            'generationConfig': {'responseModalities': ['AUDIO'],
                                 'speechConfig': {'voiceConfig': {'prebuiltVoiceConfig': {'voiceName': it['gemini']}}}}}
    req = urllib.request.Request(URL, json.dumps(body).encode(), {'Content-Type': 'application/json'})
    for k in range(4):
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                j = json.load(r)
            return base64.b64decode(j['candidates'][0]['content']['parts'][0]['inlineData']['data'])
        except Exception as e:  # 429 / lỗi mạng: chờ rồi thử lại
            print('  thử lại:', e); time.sleep(5 * (k + 1))
    raise RuntimeError('không sinh được ' + it['id'])


todo = [it for it in items if it['id'] not in manifest]
if LIMIT:
    todo = todo[:LIMIT]
secs = 0
for n, it in enumerate(todo, 1):
    pcm = tts(it)
    wav = os.path.join(DIR, it['id'] + '.wav')
    with wave.open(wav, 'wb') as w:  # PCM 16-bit, 24 kHz, mono
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)
    secs += len(pcm) / 48000
    name = it['id'] + '.wav'
    if FF:
        mp3 = os.path.join(DIR, it['id'] + '.mp3')
        subprocess.run([FF, '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-b:a', '48k', mp3], check=True)
        os.remove(wav); name = it['id'] + '.mp3'
    manifest[it['id']] = name
    json.dump(manifest, open(man_path, 'w'), indent=0)
    print(f"{n}/{len(todo)} {it['id']} [{it['gemini']}] {it['text'][:50]}")
print(f'Xong: {len(todo)} câu, ~{secs / 60:.1f} phút audio, ~{secs * 25:.0f} audio token đầu ra')
