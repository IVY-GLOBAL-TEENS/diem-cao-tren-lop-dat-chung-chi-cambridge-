// Liệt kê mọi câu có tiếng trong bài tập Unit 3 → audio/u3/list.json (dùng cho gen_tts_u3.py)
// Chạy: node tools/u3_audio_list.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
global.window = {}; eval(fs.readFileSync(path.join(root, "u3-data.js"), "utf8")); const D = window.U3;
const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = (Math.imul(h, 33) + s.charCodeAt(i)) >>> 0; return h.toString(36); };
const out = new Map(); const add = (v, t) => { if (!t) return; const id = v + "_" + hash(t); out.set(id, { id, voice: v, gemini: D.VOICES[v].gemini, style: D.VOICES[v].style, text: t }); };
const lns = (t) => (t.lines ? t.lines.map((l) => (Array.isArray(l) ? l : [t.voice || "nar", l])) : t.paras ? [[t.voice, t.full]] : t.text ? t.text.map((x) => [t.voice, x]) : []);
const fill = (it) => { const a = it.a[0]; if (it.split) { const p = a.split(" "); return it.s.replace("___", p[0]).replace("___", p.slice(1).join(" ")); } return it.s.replace("___", a); };
for (const s of D.sessions) for (const a of s.pre.concat(s.post)) {
  ({
    vocab: () => a.words.forEach((w) => { add("tch", w.w); if (w.s) add("tch", w.s.replace("___", w.a)); }),
    flash: () => a.words.forEach((w) => add("tch", w.w)),
    match: () => a.pairs.forEach((p) => add("tch", p[0])),
    slides: () => a.g.cards.forEach((c) => c.ex.forEach((e) => add("tch", e))),
    mcq: () => a.qs.forEach((q) => q.audio && add(q.audio[0], q.audio[1])),
    gap: () => a.audio && a.items.forEach((it) => add(a.voice || "tch", fill(it))),
    read: () => add(a.text.voice, a.text.full),
    dict: () => a.items.forEach((x) => add(a.voice, x)),
    shadow: () => a.items.forEach((x) => add(a.voice, x)),
    listen: () => lns(a.text).forEach((l) => add(l[0], l[1])),
    listenmark: () => lns(a.text).forEach((l) => add(l[0], l[1])),
    pet1: () => { lns(a.text).forEach((l) => add(l[0], l[1])); a.items.forEach((it) => it.lines.forEach((l) => add(l[0], l[1]))); },
    phrases: () => a.groups.forEach((g) => g[1].forEach((p) => add("tch", p))),
    dialog: () => a.lines.forEach((l) => l[0] !== "you" && add(l[0], l[1])),
    playlist: () => a.items.forEach((k) => lns(D.T[k]).forEach((l) => add(l[0], l[1]))),
    rate: () => a.samples.forEach((x) => add(x.voice, x.text)),
    select: () => add(a.text.voice, a.text.text.join(" ")),
    story: () => D.T[a.story].text.forEach((x) => add("nar", x)),
    dub: () => D.CLIPS[a.clip].lines.forEach((x) => add(D.CLIPS[a.clip].who, x)),
    video: () => D.CLIPS[a.clip].lines.forEach((x) => add("nar", x)),
  }[a.k] || (() => {}))();
}
const list = [...out.values()]; fs.mkdirSync(path.join(root, "audio/u3"), { recursive: true });
fs.writeFileSync(path.join(root, "audio/u3/list.json"), JSON.stringify(list, null, 1));
const words = list.reduce((t, x) => t + x.text.split(/\s+/).length, 0);
console.log(`${list.length} câu · ~${words} từ · ~${Math.round(words / 2.4 / 60)} phút audio`);
