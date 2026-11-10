/* IVY Teen – trang tài khoản: đăng nhập/kích hoạt mã, Góc của em (học sinh),
 * Lớp của tôi (giáo viên), Quản lý (mã giáo viên). Cần assets/core.js. */
(function () {
  "use strict";
  const K = window.IVY_CORE;
  const A = () => window.IVY_APP; // helpers của app.js (gán trước khi route)
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const DOW = [["1", "T2"], ["2", "T3"], ["3", "T4"], ["4", "T5"], ["5", "T6"], ["6", "T7"], ["0", "CN"]];
  const dowName = (days) => (days || []).map((d) => (DOW.find((x) => x[0] === d) || [, "?"])[1]).join(", ");
  const dmy = (s) => { if (!s) return "—"; const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${+m[3]}/${+m[2]}/${m[1]}` : s; };
  const ago = (iso) => { if (!iso) return null; const d = new Date(String(iso).slice(0, 10) + "T00:00:00"); if (isNaN(d)) return null; return Math.round((new Date(K.isoDay(new Date()) + "T00:00:00") - d) / 864e5); };
  const agoTxt = (n) => (n == null ? "chưa học" : n <= 0 ? "hôm nay" : n === 1 ? "hôm qua" : n + " ngày trước");
  const ROLE_HOME = { hs: "#/", gv: "#/", ql: "#/" };
  const nextUrl = (q) => { const n = (q && q.get("next")) || ""; return /^(#\/|phong-thi\/|tai-lieu\/)/.test(n) && !/dang-nhap/.test(n) ? n : null; };
  const goNext = (q, role) => { const n = nextUrl(q); if (n && !n.startsWith("#")) location.href = n; else location.hash = n || ROLE_HOME[role]; };
  let catalog = null; // danh sách đề KET
  let dashCache = null;

  function msg(el, text, kind) { if (!el) return; el.className = "auth-msg " + (kind || ""); el.textContent = text || ""; }
  async function busy(btn, fn) {
    const t = btn.textContent; btn.disabled = true; btn.textContent = "Đang xử lý…";
    try { return await fn(); } finally { btn.disabled = false; btn.textContent = t; }
  }
  function loadCatalog() {
    if (catalog) return Promise.resolve(catalog);
    return fetch("phong-thi/ket/catalog.json").then((r) => r.json()).then((c) => (catalog = Object.fromEntries(c.map((x) => [x[0], x])))).catch(() => (catalog = {}));
  }

  /* ---------- số liệu học sinh ---------- */
  function homework(snap, cls) {
    const app = A(), c = cls && app.C[cls.course];
    if (!c || c.status !== "ready" || !c.sessions) return null;
    const done = new Set(((snap && snap.hw) || {})[c.id] || []);
    const all = [], due = [];
    const dates = cls.start && cls.days && cls.days.length ? app.schedule(c, { start: cls.start, days: cls.days }) : null;
    const today = K.isoDay(new Date());
    c.sessions.forEach((s, i) => {
      const d = dates ? K.isoDay(dates[i]) : null;
      if (app.has(s.before)) { all.push(s.session_id + ":before"); if (d && d <= today) due.push(s.session_id + ":before"); }
      if (app.has(s.after)) { all.push(s.session_id + ":after"); if (d && d < today) due.push(s.session_id + ":after"); }
    });
    const doneDue = due.filter((k) => done.has(k)).length;
    return { done: [...done].filter((k) => all.includes(k)).length, total: all.length, due: due.length, doneDue, pct: due.length ? Math.round((doneDue / due.length) * 100) : null, missing: due.filter((k) => !done.has(k)) };
  }
  function ketStats(snap) {
    let s = 0, mx = 0, n = 0; const list = [];
    Object.entries((snap && snap.ket) || {}).forEach(([id, res]) => {
      let any = false;
      Object.entries(res || {}).forEach(([key, v]) => { if (v && +v.mx > 0) { s += +v.s || 0; mx += +v.mx; any = true; list.push({ id, key, s: +v.s || 0, mx: +v.mx, mode: v.mode, at: v.at || 0 }); } });
      if (any) n++;
    });
    return { tests: n, avg: mx ? Math.round((s / mx) * 100) : null, list: list.sort((a, b) => b.at - a.at) };
  }
  function analyze(st, cls) {
    const snap = st.snap || {};
    const hw = homework(snap, cls), ket = ketStats(snap);
    const days = (snap.days || []).slice().sort();
    const last = days.length ? days[days.length - 1] : null;
    const idle = ago(last);
    const why = [];
    if (!st.activated) why.push("Chưa kích hoạt mã");
    else if (idle == null || idle >= 7) why.push(idle == null ? "Chưa học buổi nào trên web" : `${idle} ngày chưa học`);
    if (st.activated && hw && hw.due >= 2 && hw.pct < 60) why.push(`Thiếu BTVN (${hw.doneDue}/${hw.due})`);
    if (ket.avg != null && ket.list.length >= 2 && ket.avg < 50) why.push(`KET thấp (${ket.avg}%)`);
    return { hw, ket, stars: (snap.exam && snap.exam.stars) || 0, xp: (snap.exam && snap.exam.xp) || 0, streak: K.streak(days), last, idle, why, days };
  }
  const bar = (pct, cls) => `<div class="progress ${cls || ""}"><i style="width:${Math.max(0, Math.min(100, pct || 0))}%"></i></div>`;
  function ketLabel(id) { const c = catalog && catalog[id]; return c ? `Đề ${+c[1]}.${c[2]} · ${c[3]}` : id; }
  const keyLabel = (k) => { const [paper, part, mode] = String(k).split("-"); const P = { rw: "Reading & Writing", l: "Listening", s: "Speaking" }[paper] || paper; return `${P} · ${!part || part === "all" ? "cả bài" : "Part " + part} · ${mode === "test" ? "Test" : "Luyện tập"}`; };

  /* ---------- khung chung ---------- */
  function notConfigured() {
    return `<div class="auth-wrap"><div class="card auth-card"><img class="auth-panda" src="assets/img/panda-sleep.png" alt=""><h1>Tài khoản chưa bật</h1>
      <p class="muted">Website chưa được nối với Google Sheet lưu tài khoản. Người quản lý làm theo hướng dẫn cài đặt (khoảng 10 phút), sau đó học sinh và giáo viên đăng nhập được bằng mã.</p>
      <div class="btn-row"><a class="btn primary" href="https://github.com/IVY-GLOBAL-TEENS/diem-cao-tren-lop-dat-chung-chi-cambridge-/blob/main/server/HUONG-DAN.md" target="_blank" rel="noopener">Xem hướng dẫn cài đặt</a><a class="btn" href="#/">Về trang chủ</a></div></div></div>`;
  }
  function needLogin(role) {
    const s = K.session();
    if (!K.API) return notConfigured();
    if (!s) { location.replace("#/dang-nhap"); return ""; }
    if (role && !role.includes(s.role)) { location.replace(ROLE_HOME[s.role] || "#/"); return ""; }
    return null;
  }

  /* ---------- đăng nhập / kích hoạt ---------- */
  function pageLogin(q) {
    if (!K.API) return { html: notConfigured() };
    const s = K.session();
    if (s) { location.replace(ROLE_HOME[s.role] || "#/"); return { html: "" }; }
    const pre = (q.get("ma") || "").toUpperCase();
    return {
      html: `<div class="auth-wrap">
        <div class="card auth-card">
          <img class="auth-panda" src="assets/img/panda-hello.png" alt="">
          <span class="eyebrow">Tài khoản IVY Teen</span><h1>Đăng nhập</h1>
          <p class="muted" id="aLead">Nhập mã thầy cô phát cho em (giáo viên nhập mã giáo viên).</p>
          <form id="fCode" autocomplete="on">
            <label class="field">Mã đăng nhập<input id="aCode" name="username" autocomplete="username" autocapitalize="characters" spellcheck="false" placeholder="VD: BU-K12-07-HX4" value="${esc(pre)}" required></label>
            <div id="pwBox" hidden>
              <label class="field" id="pw1L">Mật khẩu<input id="aPw" type="password" autocomplete="current-password" minlength="6"></label>
              <label class="field" id="pw2L" hidden>Nhập lại mật khẩu<input id="aPw2" type="password" autocomplete="new-password" minlength="6"></label>
            </div>
            <div class="btn-row"><button class="btn primary" id="aGo">Tiếp tục</button><button type="button" class="btn" id="aBack" hidden>Đổi mã khác</button></div>
          </form>
          <div id="aMsg" class="auth-msg" role="status"></div>
        </div>
        <div class="card auth-steps"><h3>Lần đầu dùng mã?</h3>
          <ol><li><b>Nhận mã</b> từ thầy cô (mỗi em một mã riêng).</li><li><b>Nhập mã</b> → website chào tên em.</li><li><b>Đặt mật khẩu</b> (ít nhất 6 ký tự) – chỉ làm 1 lần.</li><li>Lần sau đăng nhập bằng <b>mã + mật khẩu</b>, trên máy nào cũng được.</li></ol>
          <p class="muted" style="font-size:13.5px;margin:10px 0 0">Bài tập đã tick, sao trong Phòng thi ảo và điểm đề KET sẽ tự lưu về tài khoản để thầy cô theo dõi. Quên mật khẩu? Nhờ thầy cô bấm “Cấp lại”.</p></div>
      </div>`,
      after() {
        let stage = "code", info = null;
        const code = $("aCode"), pw = $("aPw"), pw2 = $("aPw2"), go = $("aGo"), m = $("aMsg");
        const reset = () => { stage = "code"; info = null; $("pwBox").hidden = true; $("aBack").hidden = true; code.readOnly = false; go.textContent = "Tiếp tục"; $("aLead").textContent = "Nhập mã thầy cô phát cho em (giáo viên nhập mã giáo viên)."; msg(m, ""); code.focus(); };
        $("aBack").addEventListener("click", reset);
        $("fCode").addEventListener("submit", async (e) => {
          e.preventDefault(); msg(m, "");
          const c = code.value.toUpperCase().replace(/\s+/g, "");
          if (!c) return;
          try {
            if (stage === "code") {
              info = await busy(go, () => K.api("check", { code: c }));
              code.value = c; code.readOnly = true; $("pwBox").hidden = false; $("aBack").hidden = false;
              if (info.activated) {
                stage = "login"; $("pw2L").hidden = true; $("pw1L").firstChild.textContent = "Mật khẩu"; pw.autocomplete = "current-password";
                $("aLead").innerHTML = `Xin chào <b>${esc(info.name)}</b>! Nhập mật khẩu để vào.`; go.textContent = "Đăng nhập";
              } else {
                stage = "activate"; $("pw2L").hidden = false; $("pw1L").firstChild.textContent = "Đặt mật khẩu mới"; pw.autocomplete = "new-password";
                $("aLead").innerHTML = `Xin chào <b>${esc(info.name)}</b>! Đây là lần đầu dùng mã này – hãy đặt mật khẩu (ít nhất 6 ký tự) và nhớ kỹ nhé.`; go.textContent = "Kích hoạt tài khoản";
              }
              pw.value = ""; pw2.value = ""; pw.focus();
            } else if (stage === "activate") {
              if (pw.value.length < 6) return msg(m, "Mật khẩu cần ít nhất 6 ký tự.", "err");
              if (pw.value !== pw2.value) return msg(m, "Hai mật khẩu chưa giống nhau.", "err");
              const j = await busy(go, () => K.api("activate", { code: c, password: pw.value }));
              await busy(go, () => K.afterLogin(j));
              goNext(q, j.profile.role);
            } else {
              const j = await busy(go, () => K.api("login", { code: c, password: pw.value }));
              await busy(go, () => K.afterLogin(j));
              goNext(q, j.profile.role);
            }
          } catch (err) { msg(m, err.message, "err"); }
        });
        if (pre) $("fCode").requestSubmit(); else code.focus();
      },
    };
  }

  function pwForm() {
    return `<details class="more"><summary>Đổi mật khẩu</summary><form id="fChg" class="card" style="margin-top:10px">
      <div class="grid g3"><label class="field">Mật khẩu cũ<input id="cOld" type="password" autocomplete="current-password" required></label><label class="field">Mật khẩu mới<input id="cNew" type="password" autocomplete="new-password" minlength="6" required></label><label class="field">Nhập lại<input id="cNew2" type="password" autocomplete="new-password" minlength="6" required></label></div>
      <div class="btn-row"><button class="btn primary" id="cGo">Lưu mật khẩu</button></div><div id="cMsg" class="auth-msg"></div></form></details>`;
  }
  function bindPw() {
    const f = $("fChg"); if (!f) return;
    f.addEventListener("submit", async (e) => {
      e.preventDefault(); const m = $("cMsg");
      if ($("cNew").value !== $("cNew2").value) return msg(m, "Hai mật khẩu mới chưa giống nhau.", "err");
      try { const j = await busy($("cGo"), () => K.api("changePassword", { old: $("cOld").value, password: $("cNew").value })); K.setSession(Object.assign(K.session(), { token: j.token })); f.reset(); msg(m, "Đã đổi mật khẩu ✓", "ok"); }
      catch (err) { msg(m, err.message, "err"); }
    });
  }
  function bindLogout() { const b = $("aOut"); if (b) b.addEventListener("click", () => busy(b, async () => { await K.logout(); location.hash = "#/dang-nhap"; })); }

  /* ---------- Góc của em (học sinh) ---------- */
  function pageMe() {
    const stop = needLogin(["hs"]); if (stop != null) return { html: stop };
    const s = K.session(), app = A(), cls = s.cls;
    const c = cls && app.C[cls.course], L = c ? app.LOOK[c.id] : app.LOOK.bu;
    const snap = Object.assign(K.snapshot(), { days: K.days() });
    const r = analyze({ activated: true, snap }, cls);
    const st = c && c.status === "ready" && cls.start ? app.nowState(c) : null;
    const hwCard = !c ? `<div class="card empty">Em chưa được xếp lớp. Nhờ thầy cô kiểm tra mã nhé.</div>`
      : !r.hw ? `<div class="card"><h3>🎯 Luyện theo Unit</h3><p class="muted" style="margin:6px 0 0">Lộ trình bài về nhà lớp ${esc(c.name)} đang cập nhật. Em vào Phòng thi ảo luyện mỗi ngày để gom sao nhé!</p><div class="btn-row"><a class="btn primary" href="phong-thi/?lv=${esc(c.exam)}">Vào luyện</a></div></div>`
      : `<div class="grid g2">
          <div class="card phase after"><h3>📝 Bài về nhà</h3>${st && st.last ? `<div class="muted" style="font-size:13.5px">Buổi ${st.last.session_no}: ${esc(st.last.focus)}</div><p style="margin:8px 0 0">${app.has(st.last.after) ? esc(st.last.after) : "Buổi này không có bài về nhà."}</p>` : `<p class="muted" style="margin:6px 0 0">${cls.start ? "Khoá học chưa bắt đầu." : "Thầy cô chưa đặt lịch học cho lớp."}</p>`}</div>
          <div class="card phase before"><h3>⏭️ Buổi tới</h3>${st && st.next ? `<div class="muted" style="font-size:13.5px">Buổi ${st.next.session_no} – ${app.fmt(st.nextDate)}: ${esc(st.next.focus)}</div><p style="margin:8px 0 0">${app.has(st.next.before) ? esc(st.next.before) : "Không có bài chuẩn bị riêng – nhớ mang sách nhé."}</p>` : `<p class="muted" style="margin:6px 0 0">—</p>`}</div>
        </div>`;
    const last14 = []; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); last14.push(d); }
    const dset = new Set(r.days);
    const syncAt = K.ls.get("ivy-sync-at", null);
    return {
      html: `<div class="class-hero me-hero" style="background:linear-gradient(120deg,var(--blue-dd),${L.color} 75%)">
          <span class="eyebrow">${cls ? "Lớp " + esc(cls.name) + (c ? " · " + esc(c.name) + " " + esc(c.cefr) : "") : "Học sinh"}</span>
          <h1>Xin chào, ${esc(s.name)}! 👋</h1><p>Mã của em: <b>${esc(s.code)}</b>${cls && cls.days && cls.days.length ? " · Lịch học: " + esc(dowName(cls.days)) : ""}</p>
          <div class="btn-row">${c ? `<a class="btn light" href="#/hoc-sinh/${c.id}">🎒 Bài tập của lớp</a>` : ""}<a class="btn light" href="phong-thi/${c ? "?lv=" + esc(c.exam) : ""}">🎯 Phòng thi ảo</a><a class="btn light" href="phong-thi/?view=ketbank">📝 Đề KET</a></div>
          <img src="assets/img/${L.panda}" alt=""></div>
        <div class="grid g4 me-stats">
          <div class="card stat"><b>⭐ ${r.stars}</b><span>sao Phòng thi ảo</span></div>
          <div class="card stat"><b>🔥 ${r.streak}</b><span>ngày học liên tiếp</span></div>
          <div class="card stat"><b>📝 ${r.hw ? (r.hw.due ? r.hw.doneDue + "/" + r.hw.due : r.hw.done) : "—"}</b><span>${r.hw && r.hw.due ? "bài về nhà đã làm (đến hôm nay)" : "bài về nhà đã làm"}</span></div>
          <div class="card stat"><b>🏆 ${r.ket.tests}</b><span>đề KET${r.ket.avg != null ? " · đúng " + r.ket.avg + "%" : ""}</span></div>
        </div>
        <h2>Hôm nay</h2>${hwCard}
        <h2>14 ngày gần đây</h2>
        <div class="card"><div class="daystrip">${last14.map((d) => `<div class="${dset.has(K.isoDay(d)) ? "on" : ""}" title="${app.fmt(d)}"><i>${dset.has(K.isoDay(d)) ? "🔥" : ""}</i><small>${["CN", "T2", "T3", "T4", "T5", "T6", "T7"][d.getDay()]}<br>${d.getDate()}</small></div>`).join("")}</div>
          <p class="muted" style="font-size:13px;margin:10px 0 0">Mỗi ngày em làm bài (tick bài tập, luyện trong Phòng thi ảo, làm đề KET) là một ngọn lửa. Giữ chuỗi thật dài nhé!</p></div>
        <h2>Kết quả đề KET gần đây</h2><div id="meKet" class="card">${r.ket.list.length ? "Đang tải…" : `<span class="muted">Em chưa làm đề KET nào. <a href="phong-thi/?view=ketbank">Làm đề đầu tiên →</a></span>`}</div>
        <div class="sync-line"><span id="syncTxt">${syncAt ? "Đã lưu về tài khoản lúc " + new Date(syncAt).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }) : "Chưa đồng bộ lần nào"}</span>
          <button class="btn" id="syncGo">↻ Đồng bộ ngay</button><button class="btn" id="aOut">Đăng xuất</button></div>
        ${pwForm()}`,
      after() {
        bindPw(); bindLogout();
        $("syncGo").addEventListener("click", () => busy($("syncGo"), async () => { try { await K.push(true); $("syncTxt").textContent = "Đã lưu về tài khoản ✓"; } catch (e) { $("syncTxt").textContent = e.message; } }));
        if (r.ket.list.length) loadCatalog().then(() => {
          const box = $("meKet"); if (!box) return;
          box.innerHTML = `<div class="table-wrap flat"><table><thead><tr><th>Đề</th><th>Phần</th><th>Điểm</th><th></th></tr></thead><tbody>${r.ket.list.slice(0, 8).map((x) => `<tr><td>${esc(ketLabel(x.id))}</td><td style="font-size:13.5px">${esc(keyLabel(x.key))}</td><td><b>${x.s}/${x.mx}</b> ${bar((x.s / x.mx) * 100, "sm")}</td><td><a href="phong-thi/ket/#${esc(x.id)}">Làm lại</a></td></tr>`).join("")}</tbody></table></div>`;
        });
      },
    };
  }

  /* ---------- Lớp của tôi (giáo viên) ---------- */
  async function getDash(force) {
    if (dashCache && !force && Date.now() - dashCache.at < 20e3) return dashCache.d;
    const d = await K.api("dash");
    dashCache = { d, at: Date.now() };
    return d;
  }
  const courseOpts = (sel) => A().D.courses.map((c) => `<option value="${c.id}" ${c.id === sel ? "selected" : ""}>${esc(c.name)} (${esc(c.cefr)})${c.status === "ready" ? "" : " – lộ trình đang cập nhật"}</option>`).join("");
  const daysBoxes = (name, sel) => `<div class="days">${DOW.map(([v, l]) => `<label><input type="checkbox" name="${name}" value="${v}" ${(sel || []).includes(v) ? "checked" : ""}>${l}</label>`).join("")}</div>`;
  const checked = (name) => [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((x) => x.value);

  function pageClasses() {
    const stop = needLogin(["gv", "ql"]); if (stop != null) return { html: stop };
    const s = K.session();
    return {
      html: `<div class="page-head"><div><span class="eyebrow">${esc(s.role_name || "Giáo viên")} · ${esc(s.code)}</span><h1>${s.role === "ql" ? "Tất cả các lớp" : "Lớp của tôi"}</h1><p class="lead">Xin chào ${esc(s.name)}! Theo dõi bài tập, điểm luyện đề, KET và chuỗi ngày học của từng lớp.</p></div><span class="sp"></span>
          ${s.role === "ql" ? `<a class="btn-pill" href="#/quan-ly">🗝️ Quản lý giáo viên</a>` : ""}<button class="btn" id="aOut">Đăng xuất</button></div>
        <div id="clsBox"><div class="card empty">Đang tải danh sách lớp…</div></div>
        <h2>Tạo lớp mới</h2>
        <form class="card" id="fNew"><div class="grid g3">
          <label class="field">Tên lớp<input id="nName" placeholder="VD: K12, Bridge-up T7" maxlength="40" required></label>
          <label class="field">Khoá học<select id="nCourse">${courseOpts("bu")}</select></label>
          <label class="field">Ngày khai giảng<input id="nStart" type="date"></label></div>
          <div class="grid g3" style="margin-top:12px"><div class="field">Lịch học (2 ngày/tuần)${daysBoxes("nDay", ["2", "5"])}</div>
          ${s.role === "ql" ? `<label class="field">Giáo viên phụ trách<select id="nTeacher"><option value="">Tôi (quản lý)</option></select></label>` : ""}</div>
          <div class="btn-row"><button class="btn primary" id="nGo">+ Tạo lớp</button></div><div id="nMsg" class="auth-msg"></div></form>
        ${pwForm()}`,
      async after() {
        bindPw(); bindLogout();
        const box = $("clsBox");
        const draw = (d) => {
          if (s.role === "ql" && $("nTeacher") && $("nTeacher").options.length === 1) $("nTeacher").insertAdjacentHTML("beforeend", (d.teachers || []).map((t) => `<option value="${esc(t.code)}">${esc(t.name)} (${esc(t.code)})</option>`).join(""));
          if (!d.classes.length) { box.innerHTML = `<div class="card updating"><img src="assets/img/panda-look.png" alt=""><div><h3>Chưa có lớp nào</h3><p class="muted" style="margin:6px 0 0">Tạo lớp ở bên dưới, rồi thêm danh sách học sinh để website cấp mã cho từng em.</p></div></div>`; return; }
          box.innerHTML = `<div class="ccards cls-cards">${d.classes.map((cl) => {
            const c = A().C[cl.course], L = A().LOOK[cl.course] || A().LOOK.bu;
            const sts = d.students.filter((x) => x.cls === cl.id), an = sts.map((x) => analyze(x, cl));
            const act = sts.filter((x) => x.activated).length, warn = an.filter((x) => x.why.length).length;
            const hwv = an.filter((x) => x.hw && x.hw.pct != null).map((x) => x.hw.pct), hwAvg = hwv.length ? Math.round(hwv.reduce((a, b) => a + b, 0) / hwv.length) : null;
            return `<a class="ccard" href="#/lop-cua-toi/${esc(cl.id)}"><div class="cover" style="--cc:${L.color}"><span class="dots">${L.icon}</span><span class="lv">${esc(cl.name)}<small>${esc(c ? c.name : cl.course)}</small></span><img src="assets/img/${L.panda}" alt=""></div>
              <div class="ct"><b>${esc(cl.name)}</b><span>${sts.length} học sinh · ${act} đã kích hoạt${s.role === "ql" && cl.teacher_name ? " · GV " + esc(cl.teacher_name) : ""}</span></div>
              <div class="ci"><i title="BTVN trung bình">📝 ${hwAvg == null ? "—" : hwAvg + "%"}</i>${warn ? `<i class="warn" title="Học sinh cần chú ý">⚠️ ${warn}</i>` : `<i title="Không có học sinh cần chú ý">✅</i>`}</div></a>`;
          }).join("")}</div>`;
        };
        try { draw(await getDash(true)); } catch (e) { box.innerHTML = `<div class="card empty">${esc(e.message)}</div>`; }
        $("fNew").addEventListener("submit", async (e) => {
          e.preventDefault(); const m = $("nMsg");
          try {
            const j = await busy($("nGo"), () => K.api("createClass", { name: $("nName").value, course: $("nCourse").value, start: $("nStart").value, days: checked("nDay"), teacher: $("nTeacher") ? $("nTeacher").value : "" }));
            dashCache = null; location.hash = "#/lop-cua-toi/" + j.cls.id;
          } catch (err) { msg(m, err.message, "err"); }
        });
      },
    };
  }

  function pageClass(id, q) {
    const stop = needLogin(["gv", "ql"]); if (stop != null) return { html: stop };
    const tab = q.get("tab") || "tong-quan";
    return {
      html: `<div class="crumbs"><a href="#/">Lớp của tôi</a> › <span id="cName">Lớp</span></div><div id="cBox"><div class="card empty">Đang tải lớp…</div></div>`,
      async after() {
        const box = $("cBox");
        let d;
        try { d = await getDash(); } catch (e) { box.innerHTML = `<div class="card empty">${esc(e.message)}</div>`; return; }
        const cl = d.classes.find((x) => x.id === id);
        if (!cl) { box.innerHTML = `<div class="card empty">Không tìm thấy lớp này.</div>`; return; }
        await loadCatalog();
        renderClass(d, cl, tab);
      },
    };
  }

  function renderClass(d, cl, tab) {
    const app = A(), c = app.C[cl.course], L = app.LOOK[cl.course] || app.LOOK.bu, box = $("cBox"), s = K.session();
    $("cName").textContent = cl.name;
    const sts = d.students.filter((x) => x.cls === cl.id).map((x) => Object.assign({}, x, { a: analyze(x, cl) }));
    const act = sts.filter((x) => x.activated);
    const avg = (arr) => (arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null);
    const hwAvg = avg(sts.map((x) => x.a.hw && x.a.hw.pct).filter((x) => x != null));
    const ketAvg = avg(sts.map((x) => x.a.ket.avg).filter((x) => x != null));
    const starAvg = avg(act.map((x) => x.a.stars));
    const warn = sts.filter((x) => x.a.why.length);
    const head = `<div class="class-hero" style="background:linear-gradient(120deg,var(--blue-dd),${L.color} 75%)"><span class="eyebrow">${esc(c ? c.name + " · " + c.cefr : cl.course)}${s.role === "ql" && cl.teacher_name ? " · GV " + esc(cl.teacher_name) : ""}</span><h1>Lớp ${esc(cl.name)}</h1>
        <p>${sts.length} học sinh · Khai giảng ${esc(dmy(cl.start))} · Lịch học ${esc(dowName(cl.days) || "chưa đặt")}</p><img src="assets/img/${L.panda}" alt=""></div>
      <div class="tabs">${[["tong-quan", "Tổng quan"], ["hoc-sinh", "Học sinh & mã"], ["cai-dat", "Lịch & cài đặt"]].map(([k, l]) => `<a class="tab ${k === tab ? "on" : ""}" href="#/lop-cua-toi/${esc(cl.id)}?tab=${k}">${l}</a>`).join("")}<span class="sp"></span><button class="btn" id="cReload">↻ Làm mới</button></div>`;
    let body = "";
    if (tab === "hoc-sinh") {
      body = `<div class="grid g2">
        <form class="card" id="fAdd"><h3>Thêm học sinh</h3><p class="muted" style="font-size:13.5px;margin:4px 0 10px">Mỗi dòng một họ tên. Website cấp cho mỗi em một mã riêng; em dùng mã để kích hoạt và tự đặt mật khẩu.</p>
          <textarea id="addNames" rows="6" placeholder="Nguyễn Minh Anh&#10;Trần Bảo Châu&#10;Lê Gia Huy"></textarea>
          <div class="btn-row"><button class="btn primary" id="addGo">Cấp mã</button></div><div id="addMsg" class="auth-msg"></div></form>
        <div class="card"><h3>Gửi mã cho học sinh</h3><p class="muted" style="font-size:13.5px;margin:4px 0 10px">In phiếu mã cắt nhỏ phát tại lớp, hoặc sao chép danh sách gửi nhóm phụ huynh. Học sinh vào <b>Đăng nhập</b> trên website, nhập mã và đặt mật khẩu.</p>
          <div class="btn-row"><button class="btn primary" id="prGo">🖨️ In phiếu mã</button><button class="btn" id="cpGo">📋 Sao chép danh sách mã</button></div><div id="cpMsg" class="auth-msg"></div></div></div>
        <h2>Danh sách ${sts.length} học sinh</h2>
        ${sts.length ? `<div class="table-wrap"><table class="stack"><thead><tr><th>#</th><th>Họ tên</th><th>Mã đăng nhập</th><th>Trạng thái</th><th></th></tr></thead><tbody>${sts.map((x, i) => `<tr><td class="num">${i + 1}</td><td><b>${esc(x.name)}</b></td><td data-l="Mã"><code class="code">${esc(x.code)}</code></td>
          <td data-l="Trạng thái">${x.activated ? `<span class="chip ok">Đã kích hoạt</span>${x.last_login ? `<div class="muted" style="font-size:12.5px">Đăng nhập ${esc(dmy(x.last_login))}</div>` : ""}` : `<span class="chip">Chưa kích hoạt</span>`}</td>
          <td class="acts"><button class="btn sm" data-ren="${esc(x.code)}" data-name="${esc(x.name)}">Sửa tên</button>${x.activated ? `<button class="btn sm" data-reset="${esc(x.code)}" title="Xoá mật khẩu để em kích hoạt lại">Cấp lại</button>` : ""}<button class="btn sm danger" data-del="${esc(x.code)}" data-name="${esc(x.name)}">Xoá</button></td></tr>`).join("")}</tbody></table></div>` : `<div class="card empty">Lớp chưa có học sinh. Thêm danh sách ở trên nhé.</div>`}
        <div class="print-only slips">${sts.map((x) => `<div class="slip"><img src="assets/img/logo-ivy.png" alt=""><div><small>IVY Teen · Lớp ${esc(cl.name)}</small><b>${esc(x.name)}</b><span>Mã: <code>${esc(x.code)}</code></span><small>Vào website IVY Teen → Đăng nhập → nhập mã → đặt mật khẩu</small></div></div>`).join("")}</div>`;
    } else if (tab === "cai-dat") {
      body = `<form class="card" id="fEdit"><h3>Lịch lớp</h3><p class="muted" style="font-size:13.5px;margin:4px 0 10px">Lịch này tự áp dụng cho trang bài tập của mọi học sinh trong lớp, và dùng để tính bài về nhà đến hạn.</p>
          <div class="grid g3"><label class="field">Tên lớp<input id="eName" value="${esc(cl.name)}" maxlength="40"></label><label class="field">Ngày khai giảng<input id="eStart" type="date" value="${esc(cl.start)}"></label><div class="field">Lịch học${daysBoxes("eDay", cl.days)}</div></div>
          ${s.role === "ql" ? `<label class="field" style="margin-top:12px;max-width:360px">Giáo viên phụ trách<select id="eTeacher">${[{ code: d.me_code, name: "Quản lý" }].concat(d.teachers || []).map((t) => `<option value="${esc(t.code)}" ${t.code === cl.teacher ? "selected" : ""}>${esc(t.name)} (${esc(t.code)})</option>`).join("")}</select></label>` : ""}
          <div class="btn-row"><button class="btn primary" id="eGo">Lưu</button></div><div id="eMsg" class="auth-msg"></div></form>
        <h2>Xoá lớp</h2><div class="card"><p class="muted" style="margin:0 0 10px;font-size:14px">Chỉ xoá được khi lớp không còn học sinh.</p><button class="btn danger" id="dGo" ${sts.length ? "disabled" : ""}>Xoá lớp ${esc(cl.name)}</button><div id="dMsg" class="auth-msg"></div></div>`;
    } else {
      const order = sts.slice().sort((a, b) => b.a.why.length - a.a.why.length || (a.a.hw ? a.a.hw.pct || 0 : 0) - (b.a.hw ? b.a.hw.pct || 0 : 0));
      body = `<div class="grid g4">
          <div class="card stat"><b>${act.length}/${sts.length}</b><span>học sinh đã kích hoạt</span></div>
          <div class="card stat"><b>${hwAvg == null ? "—" : hwAvg + "%"}</b><span>bài về nhà đến hạn đã làm</span></div>
          <div class="card stat"><b>${ketAvg == null ? "—" : ketAvg + "%"}</b><span>điểm KET trung bình</span></div>
          <div class="card stat"><b>⭐ ${starAvg == null ? "—" : starAvg}</b><span>sao trung bình / em</span></div></div>
        <h2>⚠️ Học sinh cần chú ý ${warn.length ? `<span class="chip warn">${warn.length}</span>` : ""}</h2>
        ${warn.length ? `<div class="warn-list">${warn.map((x) => `<div class="card warn-item"><b>${esc(x.name)}</b><div>${x.a.why.map((w) => `<span class="chip warn">${esc(w)}</span>`).join(" ")}</div></div>`).join("")}</div>`
          : sts.length ? `<div class="card empty">✅ Cả lớp đang theo kịp – không có em nào cần chú ý.</div>` : `<div class="card empty">Lớp chưa có học sinh. Vào tab <a href="#/lop-cua-toi/${esc(cl.id)}?tab=hoc-sinh">Học sinh & mã</a> để thêm.</div>`}
        ${sts.length ? `<h2>Tiến độ từng em</h2>
        <div class="table-wrap"><table class="stack prog-table"><thead><tr><th>Học sinh</th><th>Bài về nhà</th><th>Phòng thi ảo</th><th>Đề KET</th><th>Chuỗi ngày</th><th>Hoạt động cuối</th></tr></thead><tbody>
        ${order.map((x) => { const a = x.a; return `<tr class="row-link ${a.why.length ? "warn-row" : ""}" data-code="${esc(x.code)}"><td><b>${esc(x.name)}</b>${x.activated ? "" : ` <span class="chip">chưa kích hoạt</span>`}</td>
          <td data-l="Bài về nhà">${a.hw ? (a.hw.due ? `${a.hw.doneDue}/${a.hw.due} <small class="muted">(${a.hw.pct}%)</small>${bar(a.hw.pct, "sm" + (a.hw.pct < 60 ? " low" : ""))}` : `${a.hw.done} bài <small class="muted">(chưa đến hạn)</small>`) : `<span class="muted">—</span>`}</td>
          <td data-l="Phòng thi ảo">⭐ ${a.stars} <small class="muted">· ${a.xp} XP</small></td>
          <td data-l="Đề KET">${a.ket.tests ? `${a.ket.tests} đề · <b class="${a.ket.avg < 50 ? "low-t" : ""}">${a.ket.avg}%</b>` : `<span class="muted">chưa làm</span>`}</td>
          <td data-l="Chuỗi ngày">🔥 ${a.streak}</td><td data-l="Hoạt động cuối">${esc(agoTxt(a.idle))}</td></tr>`; }).join("")}</tbody></table></div>
        <p class="muted" style="font-size:13px">Bấm vào một em để xem chi tiết. Số liệu tự cập nhật khi học sinh làm bài lúc đã đăng nhập. “Cần chú ý” khi: chưa kích hoạt, 7+ ngày chưa học, làm dưới 60% bài về nhà đến hạn, hoặc KET trung bình dưới 50%.</p>
        <div id="stuDetail"></div>` : ""}`;
    }
    box.innerHTML = head + body;
    $("cReload").addEventListener("click", () => busy($("cReload"), async () => { try { const nd = await getDash(true); const ncl = nd.classes.find((x) => x.id === cl.id); if (ncl) renderClass(nd, ncl, tab); } catch (e) { alertBox(e.message); } }));
    const refresh = async () => { const nd = await getDash(true); const ncl = nd.classes.find((x) => x.id === cl.id); if (ncl) renderClass(nd, ncl, tab); else location.hash = "#/lop-cua-toi"; };

    if (tab === "hoc-sinh") {
      $("fAdd").addEventListener("submit", async (e) => {
        e.preventDefault(); const names = $("addNames").value.split(/\n+/).map((x) => x.replace(/^\s*\d+[.)]\s*/, "").trim()).filter(Boolean);
        if (!names.length) return msg($("addMsg"), "Nhập ít nhất 1 tên.", "err");
        try { const j = await busy($("addGo"), () => K.api("addStudents", { id: cl.id, names })); await refresh(); msg($("addMsg"), `Đã cấp ${j.created.length} mã ✓`, "ok"); } catch (err) { msg($("addMsg"), err.message, "err"); }
      });
      $("prGo").addEventListener("click", () => { document.body.classList.add("print-slips"); window.print(); setTimeout(() => document.body.classList.remove("print-slips"), 500); });
      $("cpGo").addEventListener("click", async () => {
        const t = `Mã đăng nhập IVY Teen – lớp ${cl.name}\nVào website → Đăng nhập → nhập mã → đặt mật khẩu (ít nhất 6 ký tự):\n${location.origin + location.pathname}#/dang-nhap\n\n` + sts.map((x, i) => `${i + 1}. ${x.name}: ${x.code}`).join("\n");
        try { await navigator.clipboard.writeText(t); msg($("cpMsg"), "Đã sao chép – dán vào Zalo/Messenger nhé ✓", "ok"); } catch (e) { msg($("cpMsg"), "Không sao chép được trên trình duyệt này.", "err"); }
      });
      box.querySelectorAll("[data-reset]").forEach((b) => b.addEventListener("click", async () => {
        if (!confirm("Cấp lại mã " + b.dataset.reset + "? Mật khẩu cũ bị xoá, học sinh dùng mã này đặt mật khẩu mới.")) return;
        try { await busy(b, () => K.api("resetAccount", { code: b.dataset.reset })); await refresh(); } catch (e) { alertBox(e.message); }
      }));
      box.querySelectorAll("[data-del]").forEach((b) => b.addEventListener("click", async () => {
        if (!confirm(`Xoá học sinh ${b.dataset.name}? Toàn bộ tiến độ của em trên máy chủ cũng bị xoá.`)) return;
        try { await busy(b, () => K.api("removeStudent", { code: b.dataset.del })); await refresh(); } catch (e) { alertBox(e.message); }
      }));
      box.querySelectorAll("[data-ren]").forEach((b) => b.addEventListener("click", async () => {
        const n = prompt("Tên mới cho học sinh:", b.dataset.name); if (!n || n.trim() === b.dataset.name) return;
        try { await busy(b, () => K.api("renameStudent", { code: b.dataset.ren, name: n })); await refresh(); } catch (e) { alertBox(e.message); }
      }));
    } else if (tab === "cai-dat") {
      $("fEdit").addEventListener("submit", async (e) => {
        e.preventDefault();
        try { await busy($("eGo"), () => K.api("updateClass", { id: cl.id, name: $("eName").value, start: $("eStart").value, days: checked("eDay"), teacher: $("eTeacher") ? $("eTeacher").value : "" })); await refresh(); msg($("eMsg"), "Đã lưu ✓", "ok"); } catch (err) { msg($("eMsg"), err.message, "err"); }
      });
      $("dGo").addEventListener("click", async () => {
        if (!confirm("Xoá lớp " + cl.name + "?")) return;
        try { await busy($("dGo"), () => K.api("deleteClass", { id: cl.id })); dashCache = null; location.hash = "#/"; } catch (e) { msg($("dMsg"), e.message, "err"); }
      });
    } else {
      box.querySelectorAll("tr.row-link[data-code]").forEach((tr) => tr.addEventListener("click", () => { const x = sts.find((y) => y.code === tr.dataset.code); showStudent(x, cl); }));
    }
  }

  function showStudent(x, cl) {
    const box = $("stuDetail"); if (!box || !x) return;
    const a = x.a, app = A(), c = app.C[cl.course];
    const ex = (x.snap && x.snap.exam) || {};
    const miss = a.hw && a.hw.missing.length ? a.hw.missing.slice(-6).map((k) => { const [sid, kind] = k.split(":"); const s = c.sessions.find((y) => y.session_id === sid); return s ? `<li>Buổi ${s.session_no} · ${kind === "before" ? "Chuẩn bị" : "Về nhà"}: ${esc(s[kind])}</li>` : ""; }).join("") : "";
    const last14 = []; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); last14.push(d); }
    const dset = new Set(a.days);
    box.innerHTML = `<h2>${esc(x.name)} <code class="code">${esc(x.code)}</code></h2>
      <div class="grid g2"><div class="card"><h3>📝 Bài về nhà</h3>${a.hw ? `<p style="margin:6px 0">Đã làm ${a.hw.done}/${a.hw.total} bài cả khoá${a.hw.due ? ` · đến hạn ${a.hw.doneDue}/${a.hw.due}` : ""}.</p>${miss ? `<div class="muted" style="font-size:13.5px">Bài đến hạn chưa tick (gần nhất):</div><ul class="miss">${miss}</ul>` : `<p class="muted">Không thiếu bài đến hạn 👍</p>`}` : `<p class="muted">Khoá này chưa có lộ trình bài về nhà.</p>`}</div>
        <div class="card"><h3>🔥 14 ngày gần đây · chuỗi ${a.streak}</h3><div class="daystrip">${last14.map((d) => `<div class="${dset.has(K.isoDay(d)) ? "on" : ""}"><i>${dset.has(K.isoDay(d)) ? "🔥" : ""}</i><small>${d.getDate()}/${d.getMonth() + 1}</small></div>`).join("")}</div>
          <p class="muted" style="font-size:13.5px;margin:10px 0 0">Phòng thi ảo: ⭐ ${a.stars} sao · ${ex.acts || 0} trạm đã qua · ${a.xp} XP${(ex.mocks || []).length ? ` · thi thật gần nhất: ${esc(ex.mocks[ex.mocks.length - 1].short || "")} ${ex.mocks[ex.mocks.length - 1].pct}%` : ""}</p></div></div>
      <div class="card" style="margin-top:14px"><h3>🏆 Đề KET</h3>${a.ket.list.length ? `<div class="table-wrap flat"><table><thead><tr><th>Đề</th><th>Phần</th><th>Điểm</th><th>Ngày</th></tr></thead><tbody>${a.ket.list.slice(0, 12).map((k) => `<tr><td>${esc(ketLabel(k.id))}</td><td style="font-size:13.5px">${esc(keyLabel(k.key))}</td><td><b>${k.s}/${k.mx}</b> ${bar((k.s / k.mx) * 100, "sm")}</td><td style="font-size:13.5px">${k.at ? new Date(k.at).toLocaleDateString("vi-VN") : "—"}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">Chưa làm đề KET nào.</p>`}</div>`;
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function alertBox(t) { window.alert(t); }

  /* ---------- Quản lý: mã giáo viên ---------- */
  function pageAdmin() {
    const stop = needLogin(["ql"]); if (stop != null) return { html: stop };
    return {
      html: `<div class="crumbs"><a href="#/">Tất cả các lớp</a> › Quản lý giáo viên</div>
        <div class="page-head"><div><span class="eyebrow">Quản lý</span><h1>Mã giáo viên</h1><p class="lead">Mỗi giáo viên một mã. Giáo viên dùng mã để kích hoạt, đặt mật khẩu, rồi tạo lớp và cấp mã cho học sinh của mình – chỉ thấy lớp của mình.</p></div></div>
        <form class="card" id="fT"><div class="grid g3"><label class="field">Họ tên giáo viên<input id="tName" maxlength="60" placeholder="VD: Cô Lan" required></label><div class="field" style="justify-content:flex-end"><button class="btn primary" id="tGo">+ Tạo mã giáo viên</button></div></div><div id="tMsg" class="auth-msg"></div></form>
        <div id="tBox" style="margin-top:16px"><div class="card empty">Đang tải…</div></div>`,
      async after() {
        const draw = async (force) => {
          const d = await getDash(force), box = $("tBox");
          box.innerHTML = d.teachers && d.teachers.length ? `<div class="table-wrap"><table class="stack"><thead><tr><th>Giáo viên</th><th>Mã</th><th>Trạng thái</th><th>Số lớp</th><th></th></tr></thead><tbody>${d.teachers.map((t) => `<tr><td><b>${esc(t.name)}</b></td><td data-l="Mã"><code class="code">${esc(t.code)}</code></td><td data-l="Trạng thái">${t.activated ? `<span class="chip ok">Đã kích hoạt</span>` : `<span class="chip">Chưa kích hoạt</span>`}</td><td data-l="Số lớp">${t.classes}</td>
              <td class="acts"><button class="btn sm" data-ren="${esc(t.code)}" data-name="${esc(t.name)}">Sửa tên</button>${t.activated ? `<button class="btn sm" data-reset="${esc(t.code)}">Cấp lại</button>` : ""}<button class="btn sm danger" data-del="${esc(t.code)}" data-name="${esc(t.name)}" ${t.classes ? "disabled title='Còn lớp'" : ""}>Xoá</button></td></tr>`).join("")}</tbody></table></div>`
            : `<div class="card empty">Chưa có giáo viên nào. Tạo mã ở trên rồi gửi cho giáo viên.</div>`;
          const act = (sel, fn, ask) => box.querySelectorAll(sel).forEach((b) => b.addEventListener("click", async () => { const v = await ask(b); if (v === false) return; try { await busy(b, () => fn(b, v)); await draw(true); } catch (e) { alertBox(e.message); } }));
          act("[data-reset]", (b) => K.api("resetAccount", { code: b.dataset.reset }), (b) => confirm("Cấp lại mã " + b.dataset.reset + "? Giáo viên sẽ đặt lại mật khẩu."));
          act("[data-del]", (b) => K.api("removeTeacher", { code: b.dataset.del }), (b) => confirm("Xoá giáo viên " + b.dataset.name + "?"));
          act("[data-ren]", (b, n) => K.api("renameTeacher", { code: b.dataset.ren, name: n }), (b) => { const n = prompt("Tên mới:", b.dataset.name); return n && n.trim() ? n : false; });
        };
        try { await draw(true); } catch (e) { $("tBox").innerHTML = `<div class="card empty">${esc(e.message)}</div>`; }
        $("fT").addEventListener("submit", async (e) => {
          e.preventDefault();
          try { const j = await busy($("tGo"), () => K.api("createTeacher", { name: $("tName").value })); $("tName").value = ""; msg($("tMsg"), `Đã tạo mã ${j.code} cho ${j.name}. Gửi mã này cho giáo viên để kích hoạt.`, "ok"); await draw(true); } catch (err) { msg($("tMsg"), err.message, "err"); }
        });
      },
    };
  }

  /* ---------- nút tài khoản trên đầu trang ---------- */
  function updateBadge() {
    const el = document.getElementById("accBtn"); if (!el) return;
    const s = K.session();
    if (s) { el.href = ROLE_HOME[s.role] || "#/"; el.innerHTML = `<span class="av">${esc((s.name || "?").trim().split(/\s+/).pop().charAt(0).toUpperCase())}</span><span class="nm">${esc((s.name || "").split(/\s+/).slice(-2).join(" "))}</span>`; el.title = s.name + " · " + (s.role_name || ""); }
    else { el.href = "#/dang-nhap"; el.innerHTML = `<span class="av">👤</span><span class="nm">Đăng nhập</span>`; el.title = "Đăng nhập bằng mã"; }
  }
  window.addEventListener("ivy-auth", updateBadge);
  document.addEventListener("DOMContentLoaded", updateBadge);

  /* Ô tài khoản ở cột phải trang chủ */
  function accountPanel() {
    const s = K.session();
    if (!K.API) return "";
    if (!s) return `<div class="panel acc-panel"><div class="panel-h"><span class="pi">👤</span><div><b>Tài khoản của em</b><small>Lưu tiến độ, thầy cô theo dõi</small></div></div><a class="btn primary block" href="#/dang-nhap">Đăng nhập bằng mã</a></div>`;
    if (s.role !== "hs") return `<div class="panel acc-panel"><div class="panel-h"><span class="pi">👩‍🏫</span><div><b>${esc(s.name)}</b><small>${esc(s.role_name || "")}</small></div></div><a class="btn primary block" href="#/lop-cua-toi">Mở lớp của tôi →</a></div>`;
    const snap = Object.assign(K.snapshot(), { days: K.days() });
    const r = analyze({ activated: true, snap }, s.cls);
    return `<a class="panel acc-panel me" href="#/"><div class="panel-h"><span class="pi">🎒</span><div><b>${esc(s.name)}</b><small>${s.cls ? "Lớp " + esc(s.cls.name) : "Học sinh"}</small></div></div>
      <div class="mini-stats"><span>⭐ <b>${r.stars}</b><small>sao</small></span><span>🔥 <b>${r.streak}</b><small>ngày</small></span><span>🏆 <b>${r.ket.tests}</b><small>đề KET</small></span></div></a>`;
  }

  window.IVY_ACC = {
    routes: {
      "dang-nhap": (p, q) => Object.assign({ nav: "acc" }, pageLogin(q)),
      "tai-khoan": () => { const s = K.session(); location.replace(s ? ROLE_HOME[s.role] : "#/dang-nhap"); return { html: "", nav: "acc" }; },
      "cua-em": () => Object.assign({ nav: "acc" }, pageMe()),
      "lop-cua-toi": (p, q) => Object.assign({ nav: "acc" }, p[1] ? pageClass(decodeURIComponent(p[1]), q) : pageClasses()),
      "quan-ly": () => Object.assign({ nav: "acc" }, pageAdmin()),
    },
    accountPanel,
    updateBadge,
    analyze,
  };
})();
