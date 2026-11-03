# Âm thanh Listening cho Kho đề KET (Gemini TTS)

Thư mục này tạo file nghe giọng tự nhiên (Gemini TTS) cho 650 đoạn Listening của 50 đề A2 Key for Schools.

- `clips.json` – lời thoại các đoạn nghe (theo đề & Part)
- `generate.py` – gọi Gemini TTS, mỗi đoạn chỉ tạo **1 lần**, lưu MP3 nhỏ (32 kbps) vào `audio/`
- `audio/index.json` – danh sách đoạn đã có file (web đọc file này)
- Workflow: `.github/workflows/ket-tts.yml` (tab **Actions → KET listening audio**)

## Cách chạy
1. Tạo API key tại https://aistudio.google.com/apikey
2. Repo → **Settings → Secrets and variables → Actions → New repository secret**: tên `GEMINI_API_KEY`, dán key.
3. **Actions → KET listening audio (Gemini TTS) → Run workflow** (thử trước với ô *only* = `t01-1`).

Chạy lại bao nhiêu lần cũng được: đoạn nào đã có file sẽ được bỏ qua. Nếu hết hạn mức trong ngày, workflow tự chạy tiếp mỗi ngày lúc 16:17.
