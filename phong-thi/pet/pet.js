/* IVY Teen – Kho đề PET (B1 Preliminary for Schools) theo chủ đề.
 * Dữ liệu: topics.json (danh sách) + tests/<id>.json (từng chủ đề).
 * Kết quả lưu ở localStorage "ketbank:res:pet-<id>" → core.js tự đồng bộ lên máy chủ như đề KET. */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const L = "ABCDEFGH";
  const SK = { reading: ["📖", "Reading"], listening: ["🎧", "Listening"], writing: ["✍️", "Writing"], speaking: ["🗣️", "Speaking"] };
  const DEF_FROM = { reading: { 1: 1, 2: 6, 3: 11, 4: 16, 5: 21, 6: 27 } };
  const app = $("#app");
  const cache = {};
  let TOPICS = [];

  /* ---------- lưu kết quả ---------- */
  const rkey = (tid) => "ketbank:res:pet-" + tid;
  function results(tid) { try { return JSON.parse(localStorage.getItem(rkey(tid)) || "{}") || {}; } catch (e) { return {}; } }
  function saveResult(tid, sid, s, mx, mode) {
    const r = results(tid), old = r[sid];
    r[sid] = { s, mx, mode, at: Date.now(), best: Math.max(s, (old && old.best) || 0, (old && old.s) || 0) };
    try { localStorage.setItem(rkey(tid), JSON.stringify(r)); } catch (e) {}
  }

  /* ---------- tiện ích ---------- */
  const norm = (s) => String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?;:"]+$/g, "").replace(/\s+/g, " ").trim();
  const okText = (v, acc) => acc.some((a) => norm(a) === norm(v));
  const paras = (t) => String(t || "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const gapsIn = (t) => [...String(t).matchAll(/\{(\d+)\}/g)].map((m) => +m[1]);
  const docUrl = (id) => `https://docs.google.com/document/d/${id}/preview`;
  const docEdit = (id) => `https://docs.google.com/document/d/${id}/edit`;
  const audUrl = (id) => `https://drive.google.com/file/d/${id}/preview`;
  const audOpen = (id) => `https://drive.google.com/file/d/${id}/view`;
  function wcount(t) { return (String(t).trim().match(/\S+/g) || []).length; }
  function startOf(sec) {
    if (sec.from) return sec.from;
    if (["gaptext", "cloze", "open"].includes(sec.kind)) return Math.min(...gapsIn(sec.passage.text));
    return (DEF_FROM[sec.skill] || {})[sec.part] || 1;
  }
  function total(sec) {
    if (sec.kind === "sheet") return sec.groups.reduce((n, g) => n + g.answers.length, 0);
    if (sec.kind === "mcq" || sec.kind === "short") return sec.qs.length;
    if (sec.kind === "speak") return 0;
    return sec.answers.length;
  }

  async function loadTopic(id) {
    if (!cache[id]) cache[id] = await fetch("tests/" + id + ".json").then((r) => r.json());
    return cache[id];
  }

  /* ---------- trang chủ kho đề ---------- */
  function viewHome() {
    document.title = "Kho đề PET – IVY Teen";
    const nSec = TOPICS.reduce((n, t) => n + t.n, 0);
    app.innerHTML = `<section class="hero"><h1>📝 Kho đề PET for Schools theo chủ đề</h1>
      <p>Mỗi chủ đề gồm <b>Đề gốc</b> (mở đề và file nghe từ Drive, điền đáp án vào phiếu để web tự chấm) và <b>Bài tập tương tự</b> làm trực tiếp trên web, có chấm điểm và giải thích. Em làm lại bao nhiêu lần cũng được.</p>
      <div class="chips"><span class="chip">${TOPICS.length} chủ đề</span><span class="chip">${nSec} bài luyện</span><span class="chip">Reading · Listening · Writing · Speaking</span></div></section>
      <div class="grid">${TOPICS.map((t) => {
        const r = results(t.id), done = Object.keys(r).filter((k) => t.graded.includes(k)).length, pct = t.graded.length ? Math.round((done / t.graded.length) * 100) : 0;
        return `<a class="topic" href="#${t.id}"><span class="ic">${t.icon}</span><h3>${esc(t.title)}</h3><span class="vi">${esc(t.vi)}</span>
          <span class="meta">${t.n} bài · đã làm ${done}/${t.graded.length} bài chấm điểm<div class="bar"><i style="width:${pct}%"></i></div></span></a>`;
      }).join("")}</div>`;
  }

  /* ---------- trang một chủ đề ---------- */
  async function viewTopic(id, sk) {
    const T = await loadTopic(id), R = results(id);
    document.title = T.title + " – Kho đề PET";
    const skills = Object.keys(SK).filter((k) => T.sections.some((s) => s.skill === k));
    sk = skills.includes(sk) ? sk : skills[0];
    const list = T.sections.filter((s) => s.skill === sk);
    app.innerHTML = `<div class="crumb"><a href="#">← Kho đề PET</a></div>
      <section class="hero" style="padding-top:6px"><h1>${T.icon} ${esc(T.title)}</h1><p>${esc(T.vi)} · PET for Schools (B1)</p></section>
      <div class="tabs">${skills.map((k) => `<button class="tab ${k === sk ? "on" : ""}" data-sk="${k}">${SK[k][0]} ${SK[k][1]}<span class="n">${T.sections.filter((s) => s.skill === k).length}</span></button>`).join("")}</div>
      ${list.map((s) => {
        const r = R[s.id], mx = total(s), goc = s.kind === "sheet";
        const sub = goc ? `Phiếu trả lời ${mx} câu · cần mở đề gốc${s.skill === "listening" ? " và file nghe" : ""}` : s.kind === "speak" ? "Gợi ý, từ vựng, bài mẫu" : `${mx} câu · có ${s.exp ? "giải thích" : "đáp án"}`;
        return `<div class="sec ${goc ? "goc" : ""}"><span class="si">${goc ? "📄" : s.kind === "speak" ? "💬" : "✏️"}</span>
          <div><b>${esc(s.title)}</b><small>${sub}</small>${r ? `<div class="res">✓ Lần gần nhất ${r.s}/${r.mx}${r.best != null ? ` · cao nhất ${r.best}/${r.mx}` : ""}</div>` : ""}</div>
          <div class="act">${mx ? `<a class="btn" href="#${id}/${s.id}/luyen">Luyện tập</a><a class="btn pri" href="#${id}/${s.id}/test">Kiểm tra</a>` : `<a class="btn pri" href="#${id}/${s.id}/luyen">Mở</a>`}</div></div>`;
      }).join("") || `<p class="empty">Chưa có bài.</p>`}
      ${T.audio && T.audio.length ? `<div class="box" style="margin-top:18px"><h2>🎧 File nghe của chủ đề</h2>${audioList(T.audio)}</div>` : ""}`;
    app.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => (location.hash = `#${id}?${b.dataset.sk}`)));
    bindAudio();
  }

  function audioList(arr, only) {
    return `<div class="audios">${arr.map((a, i) => (only == null || only === i ? `<div class="aud"><div class="al">🎵 ${esc(a.label)}<a href="${audOpen(a.id)}" target="_blank" rel="noopener">Mở trên Drive ↗</a></div><button class="load" data-aid="${a.id}">▶ Bấm để tải trình phát</button></div>` : "")).join("")}</div>`;
  }
  function bindAudio(root = app) {
    root.querySelectorAll("button.load[data-aid]").forEach((b) => b.addEventListener("click", () => {
      const f = document.createElement("iframe"); f.src = audUrl(b.dataset.aid); f.allow = "autoplay"; f.title = "Audio"; b.replaceWith(f);
    }));
  }

  /* ---------- làm bài ---------- */
  let S = null; // {T, sec, mode, ans:{}, done:{}, submitted, from}
  async function viewSection(id, sid, mode) {
    const T = await loadTopic(id), sec = T.sections.find((s) => s.id === sid);
    if (!sec) { location.hash = "#" + id; return; }
    document.title = sec.title + " – " + T.title;
    S = { T, sec, mode: mode === "test" ? "test" : "luyen", ans: {}, done: {}, submitted: false, from: startOf(sec), saved: false };
    const hasDoc = sec.doc && T.docs && T.docs[sec.doc];
    const isSheet = sec.kind === "sheet";
    const audioIdx = sec.audio != null ? sec.audio : null;
    const needAudio = sec.skill === "listening" && T.audio && T.audio.length;
    const mx = total(sec);
    app.innerHTML = `<div class="crumb"><a href="#${id}?${sec.skill}">← ${esc(T.title)}</a><span class="muted">/ ${SK[sec.skill][1]}</span></div>
      <h1 style="font-size:23px;margin:6px 0 10px">${esc(sec.title)}</h1>
      ${mx ? `<div class="modebar"><div class="seg"><button data-m="luyen" class="${S.mode === "luyen" ? "on" : ""}">🎯 Luyện tập</button><button data-m="test" class="${S.mode === "test" ? "on" : ""}">📝 Kiểm tra</button></div>
        <span class="muted" style="font-size:13.5px">${S.mode === "luyen" ? "Chọn xong là biết đúng/sai ngay, có giải thích." : "Làm hết rồi bấm Nộp bài để xem điểm."}</span></div>` : ""}
      ${sec.note ? `<p class="note">${esc(sec.note)}</p>` : ""}
      ${sec.instr ? `<p class="muted" style="margin:0 0 12px">${esc(sec.instr)}</p>` : ""}
      ${sec.link ? `<p><a class="btn" href="${esc(sec.link.url)}" target="_blank" rel="noopener">🔗 ${esc(sec.link.label)}</a></p>` : ""}
      ${hasDoc || needAudio ? `<div class="box"><div class="resources">${hasDoc ? `<a class="btn" href="${docUrl(T.docs[sec.doc])}" target="_blank" rel="noopener">📄 Mở tài liệu gốc (tab mới)</a>${isSheet ? `<button class="btn ghost" id="toggleDoc">🪟 Hiện đề cạnh phiếu</button>` : ""}` : ""}</div>
        ${needAudio ? audioList(T.audio, audioIdx) : ""}</div>` : ""}
      <div class="split nodoc" id="split"><div class="docview" id="docview" hidden></div><div id="work"></div></div>
      ${mx ? `<div class="footbar"><span class="score" id="score"></span><span class="spacer" style="flex:1"></span>
        ${S.mode === "test" ? `<button class="btn pri" id="submit">Nộp bài</button>` : ""}<button class="btn ghost" id="redo">↺ Làm lại</button></div>` : ""}`;
    $("#work").innerHTML = render(sec);
    bind();
    bindAudio();
    app.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => (location.hash = `#${id}/${sid}/${b.dataset.m}`)));
    const tg = $("#toggleDoc");
    if (tg) tg.addEventListener("click", () => {
      const dv = $("#docview"), sp = $("#split");
      if (dv.hidden) { dv.innerHTML = `<iframe src="${docUrl(T.docs[sec.doc])}" title="Đề gốc"></iframe>`; dv.hidden = false; sp.classList.remove("nodoc"); tg.textContent = "✕ Ẩn đề"; }
      else { dv.hidden = true; dv.innerHTML = ""; sp.classList.add("nodoc"); tg.textContent = "🪟 Hiện đề cạnh phiếu"; }
    });
    const sb = $("#submit"); if (sb) sb.addEventListener("click", submit);
    const rd = $("#redo"); if (rd) rd.addEventListener("click", () => viewSection(id, sid, S.mode));
    updateScore();
    window.scrollTo(0, 0);
  }

  /* --- đáp án đúng của câu i (chỉ số trong bài) --- */
  function keyOf(i) {
    const s = S.sec;
    if (s.kind === "sheet") { let k = i; for (const g of s.groups) { if (k < g.answers.length) return { g, a: g.answers[k] }; k -= g.answers.length; } }
    if (s.kind === "mcq") return { a: s.qs[i].a };
    if (s.kind === "short") return { a: s.qs[i].a };
    return { a: s.answers[i] };
  }
  function isRight(i) {
    const v = S.ans[i]; if (v == null || v === "") return false;
    const k = keyOf(i);
    if (Array.isArray(k.a)) return okText(v, k.a);
    return v === k.a;
  }
  function keyText(i) {
    const s = S.sec, k = keyOf(i);
    if (Array.isArray(k.a)) return k.a.join(" / ");
    if (s.kind === "mcq") return L[k.a];
    if (s.kind === "cloze") return `${L[k.a]} (${s.opts[i][k.a]})`;
    return k.a;
  }
  const show = (i) => S.submitted || (S.mode === "luyen" && S.done[i]);

  function optsHtml(i, opts) {
    return `<div class="opts">${opts.map((o, j) => {
      let c = S.ans[i] === j ? "sel" : "";
      if (show(i)) { if (j === keyOf(i).a) c = "right"; else if (S.ans[i] === j) c = "wrong"; }
      return `<button class="opt ${c}" data-i="${i}" data-v="${j}"><span class="L">${L[j]}</span><span>${esc(o)}</span></button>`;
    }).join("")}</div>`;
  }
  function lettersHtml(i, letters) {
    return `<div class="letters">${[...letters].map((l) => {
      let c = S.ans[i] === l ? "sel" : "";
      if (show(i)) { if (l === keyOf(i).a) c = "right"; else if (S.ans[i] === l) c = "wrong"; }
      return `<button class="lt ${c}" data-i="${i}" data-v="${l}">${l}</button>`;
    }).join("")}</div>`;
  }
  function expHtml(i) {
    if (!show(i)) return "";
    const s = S.sec, ok = isRight(i);
    const e = s.kind === "mcq" || s.kind === "short" ? s.qs[i].exp : s.exp && s.exp[i];
    return `<div class="exp ${ok ? "" : "bad"}"><b>${ok ? "✓ Đúng" : S.ans[i] == null || S.ans[i] === "" ? "Chưa trả lời" : "✗ Chưa đúng"}</b> · Đáp án: <b style="color:var(--ok)">${esc(keyText(i))}</b>${e ? ` — ${esc(e)}` : ""}</div>`;
  }
  const qCls = (i) => (show(i) ? (isRight(i) ? "ok" : "bad") : "");

  function passageHtml(p, gapFn) {
    if (!p) return "";
    const body = paras(p.text).map((t) => `<p>${gapFn ? esc(t).replace(/\{(\d+)\}/g, (_, n) => gapFn(+n)) : esc(t).replace(/\n/g, "<br>")}</p>`).join("");
    return `<div class="passage">${p.title ? `<h3>${esc(p.title)}</h3>` : ""}${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ""}${body}</div>`;
  }

  function render(s) {
    const F = S.from;
    if (s.kind === "sheet") {
      let i = 0;
      return `<div class="box"><h2>🧾 Phiếu trả lời</h2><p class="muted" style="margin:0 0 10px;font-size:14px">Mở đề gốc${s.skill === "listening" ? " và nghe file audio" : ""}, rồi chọn/điền đáp án tương ứng với số câu trong đề.</p><div class="sheet">${s.groups.map((g) => `<div class="sg"><h4>${esc(g.label)}</h4>${g.answers.map((_, k) => {
        const n = g.from + k, idx = i++;
        const ctrl = g.text ? `<input type="text" data-i="${idx}" value="${esc(S.ans[idx] || "")}" placeholder="Đáp án…" class="${show(idx) ? (isRight(idx) ? "right" : "wrong") : ""}" ${S.submitted ? "disabled" : ""}>${show(idx) && !isRight(idx) ? `<span class="fix">→ ${esc(keyText(idx))}</span>` : ""}` : lettersHtml(idx, g.opts);
        return `<div class="srow ${qCls(idx)}"><span class="qn" style="${show(idx) ? `background:var(--${isRight(idx) ? "ok" : "bad"});color:#fff` : ""}">${n}</span>${ctrl}</div>`;
      }).join("")}</div>`).join("")}</div></div>`;
    }
    if (s.kind === "mcq") {
      return `${passageHtml(s.passage)}<div class="box">${s.qs.map((q, i) => `<div class="q ${qCls(i)}"><span class="qn">${F + i}</span><div>${q.text ? `<div class="ntc">${esc(q.text)}</div>` : ""}${q.q ? `<div class="qt">${esc(q.q)}</div>` : ""}${optsHtml(i, q.o)}</div>${expHtml(i)}</div>`).join("")}</div>`;
    }
    if (s.kind === "short") {
      return `<div class="box">${s.qs.map((q, i) => `<div class="q ${qCls(i)}"><span class="qn">${F + i}</span><div>${q.q ? `<div class="qt">${esc(q.q)}</div>` : ""}<input class="gapin" style="width:220px" data-i="${i}" value="${esc(S.ans[i] || "")}" placeholder="Nghe và viết từ…" ${S.submitted ? "disabled" : ""}></div>${expHtml(i)}</div>`).join("")}</div>`;
    }
    if (s.kind === "match") {
      return `<div class="box"><h2>👥 People</h2><div class="people">${s.people.map((p, i) => `<div class="q ${qCls(i)}"><span class="qn">${F + i}</span><div><div class="qt" style="font-weight:400">${esc(p.text).replace(esc(p.name), `<b>${esc(p.name)}</b>`)}</div>${lettersHtml(i, s.options.map((o) => o.l).join(""))}</div>${expHtml(i)}</div>`).join("")}</div></div>
        <div class="cards2">${s.options.map((o) => `<div class="pc"><b><i>${o.l}</i>${esc(o.title)}</b>${esc(o.text)}</div>`).join("")}</div>`;
    }
    if (s.kind === "gaptext") {
      const P = passageHtml(s.passage, (n) => { const i = n - F, v = S.ans[i]; const c = show(i) ? (isRight(i) ? "right" : "wrong") : ""; return `<span class="gap ${c}">(${n}) ${v || "……"}</span>`; });
      return `${P}<div class="cards2">${s.sentences.map((o) => `<div class="pc"><b><i>${o.l}</i></b>${esc(o.t)}</div>`).join("")}</div>
        <div class="box">${s.answers.map((_, i) => `<div class="q ${qCls(i)}"><span class="qn">${F + i}</span><div>${lettersHtml(i, s.sentences.map((o) => o.l).join(""))}</div>${expHtml(i)}</div>`).join("")}</div>`;
    }
    if (s.kind === "cloze") {
      const P = passageHtml(s.passage, (n) => { const i = n - F, v = S.ans[i]; const c = show(i) ? (isRight(i) ? "right" : "wrong") : ""; return `<span class="gap ${c}">(${n}) ${v != null ? esc(s.opts[i][v]) : "……"}</span>`; });
      return `${P}<div class="box">${s.opts.map((o, i) => `<div class="q ${qCls(i)}"><span class="qn">${F + i}</span><div>${optsHtml(i, o)}</div>${expHtml(i)}</div>`).join("")}</div>`;
    }
    if (s.kind === "open") {
      const P = passageHtml(s.passage, (n) => { const i = n - F; const c = show(i) ? (isRight(i) ? "right" : "wrong") : ""; return `<b class="muted" style="font-family:Lexend;font-size:13px">(${n})</b> <input class="gapin ${c}" data-i="${i}" value="${esc(S.ans[i] || "")}" ${S.submitted ? "disabled" : ""}>${show(i) && !isRight(i) ? `<span class="fix">→ ${esc(keyText(i))}</span>` : ""}`; });
      return `${P}${S.submitted || Object.keys(S.done).length ? `<div class="box">${s.answers.map((_, i) => (show(i) ? `<div class="q ${qCls(i)}"><span class="qn">${F + i}</span><div></div>${expHtml(i)}</div>` : "")).join("")}</div>` : ""}`;
    }
    if (s.kind === "speak") {
      return `${s.intro ? `<p class="note">${esc(s.intro)}</p>` : ""}${s.cards.map((c, ci) => `<div class="card"><h3>${esc(c.title)}</h3>
        ${c.lines ? c.lines.map(([a, b]) => `<div class="ln"><span>${esc(a)}</span><div>${esc(b)}</div></div>`).join("") : ""}
        ${c.vocab ? `<table class="vt"><tr><th>English</th><th>Tiếng Việt</th></tr>${c.vocab.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("")}</table>` : ""}
        ${c.rows ? `<div style="overflow-x:auto"><table class="vt"><tr>${c.cols.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>${c.rows.map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</table></div>` : ""}
        ${c.grammar ? `<div class="gram">✨ <b>Grammar:</b> ${esc(c.grammar)}</div>` : ""}
        ${c.write ? `<textarea data-w="${ci}" placeholder="Viết câu trả lời của em ở đây…">${esc(draft(ci))}</textarea><div class="wc"><span id="wc${ci}">Words: ${wcount(draft(ci))}${c.min ? ` / khoảng ${c.min}` : ""}</span>${c.model || c.example ? `<button class="btn ghost" data-show="${ci}">👀 Xem bài mẫu</button>` : ""}</div>
          ${c.model || c.example ? `<div class="model" id="mdl${ci}" hidden>${esc(c.model || c.example)}</div>` : ""}`
          : c.model || c.example ? `<div class="model">${esc(c.model || c.example)}</div>` : ""}
      </div>`).join("")}`;
    }
    return "";
  }
  const dkey = () => `pet-draft:${S.T.id}:${S.sec.id}`;
  function draft(ci) { try { return (JSON.parse(localStorage.getItem(dkey()) || "{}") || {})[ci] || ""; } catch (e) { return ""; } }
  function setDraft(ci, v) { try { const d = JSON.parse(localStorage.getItem(dkey()) || "{}") || {}; d[ci] = v; localStorage.setItem(dkey(), JSON.stringify(d)); } catch (e) {} }

  function rerender() {
    const y = window.scrollY, focusI = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.i : null;
    $("#work").innerHTML = render(S.sec); bind(); updateScore();
    window.scrollTo(0, y);
    if (focusI != null) { const el = $(`#work input[data-i="${focusI}"]`); if (el && !el.disabled) { el.focus(); const v = el.value; el.value = ""; el.value = v; } }
  }
  function bind() {
    const w = $("#work");
    w.querySelectorAll("button.opt, button.lt").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.i; if (S.submitted || (S.mode === "luyen" && S.done[i])) return;
      S.ans[i] = b.classList.contains("opt") ? +b.dataset.v : b.dataset.v;
      if (S.mode === "luyen") S.done[i] = true;
      rerender(); maybeFinish();
    }));
    w.querySelectorAll("input[data-i]").forEach((el) => {
      el.addEventListener("input", () => { S.ans[+el.dataset.i] = el.value; updateScore(); });
      const check = () => { const i = +el.dataset.i; if (S.mode !== "luyen" || S.submitted || S.done[i] || !String(S.ans[i] || "").trim()) return; S.done[i] = true; rerender(); maybeFinish(); };
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(); const nx = $(`#work input[data-i="${+el.dataset.i + 1}"]`); if (nx) nx.focus(); } });
      el.addEventListener("change", check);
    });
    w.querySelectorAll("textarea[data-w]").forEach((t) => t.addEventListener("input", () => {
      const ci = t.dataset.w, c = S.sec.cards[ci]; setDraft(ci, t.value);
      $("#wc" + ci).textContent = `Words: ${wcount(t.value)}${c.min ? ` / khoảng ${c.min}` : ""}`;
    }));
    w.querySelectorAll("[data-show]").forEach((b) => b.addEventListener("click", () => { const m = $("#mdl" + b.dataset.show); m.hidden = !m.hidden; b.textContent = m.hidden ? "👀 Xem bài mẫu" : "🙈 Ẩn bài mẫu"; }));
  }
  function counts() {
    const mx = total(S.sec); let ok = 0, ans = 0;
    for (let i = 0; i < mx; i++) { if (S.ans[i] != null && S.ans[i] !== "") ans++; if (isRight(i)) ok++; }
    return { ok, ans, mx };
  }
  function updateScore() {
    const el = $("#score"); if (!el) return;
    const c = counts();
    if (S.submitted) el.innerHTML = `🏁 Điểm: ${c.ok}/${c.mx} <span class="muted" style="font-weight:400;font-size:14px">(${Math.round((c.ok / c.mx) * 100)}%)</span>`;
    else if (S.mode === "luyen") { const d = Object.keys(S.done).length; el.innerHTML = `🎯 Đúng ${counts().ok}/${d} câu đã làm <span class="muted" style="font-weight:400;font-size:14px">· còn ${c.mx - d} câu</span>`; }
    else el.innerHTML = `📝 Đã trả lời ${c.ans}/${c.mx}`;
  }
  function maybeFinish() {
    if (S.mode !== "luyen" || S.saved) return;
    const c = counts();
    if (Object.keys(S.done).length >= c.mx) { S.saved = true; saveResult(S.T.id, S.sec.id, c.ok, c.mx, "practice"); toast(`Hoàn thành! Đúng ${c.ok}/${c.mx} câu.`); }
  }
  function submit() {
    const c = counts();
    if (c.ans < c.mx && !confirmBox(`Em còn ${c.mx - c.ans} câu chưa trả lời. Vẫn nộp bài?`)) return;
    S.submitted = true; rerender();
    if (!S.saved) { S.saved = true; saveResult(S.T.id, S.sec.id, c.ok, c.mx, "test"); }
    const sb = $("#submit"); if (sb) sb.remove();
    toast(`Điểm của em: ${c.ok}/${c.mx}`);
  }
  function confirmBox(msg) { return window.confirm(msg); }
  function toast(msg) {
    document.querySelectorAll(".pet-toast").forEach((x) => x.remove());
    const t = document.createElement("div"); t.className = "pet-toast";
    t.textContent = msg;
    t.style.cssText = "position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#1d2433;color:#fff;padding:10px 16px;border-radius:12px;font-weight:600;z-index:50;box-shadow:0 6px 20px rgba(0,0,0,.25)";
    document.body.appendChild(t); setTimeout(() => t.remove(), 2600);
  }

  /* ---------- điều hướng ---------- */
  async function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    const [path, q] = h.split("?");
    const p = path.split("/").filter(Boolean);
    try {
      if (!p.length) return viewHome();
      if (!TOPICS.some((t) => t.id === p[0])) return viewHome();
      if (p.length === 1) return viewTopic(p[0], q);
      return viewSection(p[0], p[1], p[2]);
    } catch (e) { app.innerHTML = `<p class="empty">Không tải được bài. Em thử tải lại trang nhé.</p>`; console.error(e); }
  }
  fetch("topics.json").then((r) => r.json()).then((t) => { TOPICS = t; route(); }).catch(() => (app.innerHTML = `<p class="empty">Không tải được danh sách chủ đề.</p>`));
  window.addEventListener("hashchange", route);
})();
