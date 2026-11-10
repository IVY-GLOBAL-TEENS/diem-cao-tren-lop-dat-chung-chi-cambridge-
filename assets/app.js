/* IVY Teen – bảng điều khiển: Học sinh · Giáo viên · Tài liệu (HTML/CSS/JS thuần, chạy trên GitHub Pages) */
(function () {
  "use strict";
  const D = window.IVY_DATA;
  const app = document.getElementById("app");
  const C = Object.fromEntries(D.courses.map((c) => [c.id, c]));
  const LOOK = {
    fd: { color: "#16a394", panda: "panda-hello.png", icon: "🌱" },
    bu: { color: "#0b16b0", panda: "panda-run.png", icon: "🌉" },
    ko: { color: "#d7192a", panda: "panda-proud.png", icon: "🚀" },
    bo: { color: "#f28a1d", panda: "panda-stack.png", icon: "⚡" },
    pi: { color: "#5b2fb3", panda: "panda-look.png", icon: "🎓" },
  };
  const KET_INFO = {
    "Reading & Writing": [["R1", "Đọc 6 thông báo/tin nhắn ngắn"], ["R2", "Matching: 7 câu với 3 văn bản"], ["R3", "Bài đọc dài – 5 câu trắc nghiệm"], ["R4", "Multiple-choice cloze – 6 câu"], ["R5", "Open cloze – tự điền 6 từ"], ["W6", "Viết email/tin nhắn đủ 3 ý (25+ từ)"], ["W7", "Viết truyện theo 3 tranh (35+ từ)"]],
    Listening: [["L1", "Hội thoại ngắn – chọn tranh"], ["L2", "Nghe & điền ghi chú"], ["L3", "Hội thoại dài – 5 câu trắc nghiệm"], ["L4", "5 đoạn ngắn – chọn đáp án"], ["L5", "Matching: nối người với thông tin"]],
    Speaking: [["S1", "Phỏng vấn: trả lời về bản thân"], ["S2", "Thảo luận cặp theo tranh"]],
  };

  /* ---------- helpers ---------- */
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = (v) => v && v !== "—";
  const TYPE_CLS = { "Project & Check": "Project", "KET Lab": "KET-Lab", "Sự kiện": "Event" };
  const chipType = (t) => `<span class="chip t-${TYPE_CLS[t] || t.replace(/\s+/g, "-")}">${esc(t)}</span>`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };
  const img = (f) => `assets/img/${f}`;
  const ready = (c) => c.status === "ready";
  const sessLink = (c, s) => `#/giao-vien/${c.id}/buoi/${s.session_id}`;
  const examLink = (c) => `phong-thi/?lv=${c.exam}`;

  function ketParts(str) {
    const out = new Set();
    if (!str) return [];
    const re = /\b(R|L|S|W)\s*Part\s*([0-9][0-9\s&\/,+–-]*)/g;
    let m;
    while ((m = re.exec(str))) {
      const sk = m[1], seg = m[2];
      const range = seg.match(/(\d)\s*[–-]\s*(\d)/);
      if (range) for (let i = +range[1]; i <= +range[2]; i++) out.add(sk + i);
      (seg.match(/\d/g) || []).forEach((n) => out.add(sk + n));
    }
    return [...out];
  }
  const sessKet = (s) => (s.ket_codes && s.ket_codes.length ? s.ket_codes : ketParts([s.ket_part, ...s.in_class.map((a) => a.activity)].join(" · ")));

  function timelineBar(items, pct) {
    const total = items.reduce((a, b) => a + b.minutes, 0) || 1;
    return `<div class="timeline">${items.map((a) => `<div class="cat-${a.category}" style="flex:${a.minutes}" title="${esc(a.activity)} – ${a.minutes}'">${a.minutes / total > 0.07 ? (pct ? Math.round((a.minutes / total) * 100) + "%" : a.minutes + "'") : ""}</div>`).join("")}</div>`;
  }
  const legend = (cat, used) => `<div class="legend">${Object.entries(cat).filter(([k]) => !used || used.has(k)).map(([k, v]) => `<span><i class="cat-${k}"></i>${v}</span>`).join("")}</div>`;

  /* ---------- homework schedule (per class) ---------- */
  const HW_KEY = (cid) => "ivy-hw-v2-" + cid;
  (function migrate() { const old = store.get("ivy-hw-v1", null); if (old && !store.get(HW_KEY("ko"), null)) store.set(HW_KEY("ko"), old); })();
  const cfgOf = (cid) => store.get(HW_KEY(cid), { cls: "", start: "", days: ["2", "5"], done: {} });
  const DOW = [["1", "T2"], ["2", "T3"], ["3", "T4"], ["4", "T5"], ["5", "T6"], ["6", "T7"], ["0", "CN"]];
  const iso = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const fmt = (d) => ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][d.getDay()] + " " + d.getDate() + "/" + (d.getMonth() + 1);
  function schedule(c, cfg) {
    if (!cfg.start || !cfg.days || !cfg.days.length) return null;
    const d = new Date(cfg.start + "T00:00:00"); if (isNaN(d)) return null;
    const out = []; let guard = 0;
    while (out.length < c.sessions.length && guard++ < 1000) { if (cfg.days.includes(String(d.getDay()))) out.push(new Date(d)); d.setDate(d.getDate() + 1); }
    return out;
  }
  function nowState(c) {
    const cfg = cfgOf(c.id), dates = schedule(c, cfg);
    if (!dates) return { cfg, dates: null };
    const t = iso(new Date());
    const nextIdx = dates.findIndex((d) => iso(d) >= t);
    const lastIdx = nextIdx === -1 ? c.sessions.length - 1 : nextIdx - 1;
    return { cfg, dates, next: nextIdx >= 0 ? c.sessions[nextIdx] : null, nextDate: nextIdx >= 0 ? dates[nextIdx] : null, last: lastIdx >= 0 ? c.sessions[lastIdx] : null, lastDate: lastIdx >= 0 ? dates[lastIdx] : null };
  }
  const myClass = () => C[store.get("ivy-myclass", "")] || null;

  /* ---------- right column ---------- */
  function rightCol() {
    const c = myClass();
    let todo = "";
    if (c && ready(c)) {
      const st = nowState(c);
      if (!st.dates) todo = `<div class="todo alt"><div class="ti">📅</div><div><b>Thiết lập lịch học</b><span>Nhập ngày khai giảng của lớp ${esc(c.name)} để xem bài cần làm mỗi ngày.</span></div></div>
        <a class="todo-more" href="#/hoc-sinh/${c.id}">Mở lớp ${esc(c.name)} →</a>`;
      else {
        if (st.last) todo += `<div class="todo"><div class="ti">📝</div><div><b>Bài về nhà · Buổi ${st.last.session_no}</b><span>${esc(st.last.after)}</span></div></div>`;
        if (st.next) todo += `<div class="todo alt"><div class="ti">⏭️</div><div><b>Chuẩn bị · Buổi ${st.next.session_no} – ${fmt(st.nextDate)}</b><span>${esc(has(st.next.before) ? st.next.before : st.next.focus)}</span></div></div>`;
        todo += `<a class="todo-more" href="#/hoc-sinh/${c.id}">Hiển thị tất cả</a>`;
      }
    } else if (c) {
      todo = `<div class="todo alt"><div class="ti">🎯</div><div><b>Luyện theo Unit</b><span>Lộ trình lớp ${esc(c.name)} đang cập nhật. Em vào Phòng thi ảo để luyện nhé!</span></div></div><a class="todo-more" href="${examLink(c)}">Vào luyện ngay →</a>`;
    } else {
      todo = `<div class="todo alt"><div class="ti">🎒</div><div><b>Chọn lớp của em</b><span>Bấm vào thẻ lớp em đang học để xem bài tập mỗi ngày.</span></div></div>`;
    }
    return `<aside class="rcol">
      <div class="hero-card"><span class="logo-box"><img src="${img("logo-ivy.png")}" alt="IVY English"></span>
        <img class="panda" src="${img("panda-hello.png")}" alt="Linh vật gấu trúc đỏ IVY"><h3>IVY TEEN</h3><p>Học vui mỗi ngày · Tiến bộ thật sự</p></div>
      ${window.IVY_ACC ? window.IVY_ACC.accountPanel() : ""}
      <div class="panel"><div class="panel-h"><span class="pi">☰</span><div><b>Việc cần làm</b><small>${c ? "Lớp " + esc(c.name) : "Theo dõi lịch học của em"}</small></div></div>${todo}</div>
      <div class="panel"><div class="panel-h"><span class="pi">🔔</span><div><b>Mới cập nhật</b><small>Trên website IVY Teen</small></div></div>
        <ul class="news">
          <li><b>Bridge-up</b> có lộ trình 94 buổi và 89 trạm luyện theo Gold Experience A1.</li>
          <li><b>Kho đề KET</b>: 50 đề A2 Key for Schools theo 25 chủ điểm.</li>
          <li><b>Phòng thi ảo</b>: thi thật mô phỏng giao diện thi trên máy.</li>
        </ul></div>
    </aside>`;
  }

  function courseCard(c, href, sub) {
    const L = LOOK[c.id];
    const st = ready(c) && c.sessions ? nowState(c) : null;
    const badge = st && st.last && !(st.cfg.done[st.last.session_id + ":after"]) ? "<b>1</b>" : "";
    return `<a class="ccard ${ready(c) ? "" : "off"}" href="${href}">
      <div class="cover" style="--cc:${L.color}"><span class="dots">${L.icon}</span><span class="lv">${esc(c.name)}<small>${esc(c.cefr)}</small></span><img src="${img(L.panda)}" alt=""></div>
      <div class="ct"><b>${esc(c.name)} ${ready(c) ? "" : '<span class="badge-up">đang cập nhật</span>'}</b><span>${esc(sub || (c.book !== "—" ? c.book : c.note))}</span></div>
      <div class="ci"><i title="Bài tập">📝${badge}</i><i title="Luyện tập">🎯</i>${c.ketbank ? '<i title="Kho đề KET">🏆</i>' : ""}</div></a>`;
  }

  /* ---------- pages: home ---------- */
  function pageHome() {
    return `<div class="dash"><div>
      <div class="page-head"><div><h1>Bảng điều khiển</h1><p class="lead">Xin chào! Chào mừng em đến với góc học tập IVY Teen. Chọn lớp của em để xem bài hôm nay.</p></div><span class="sp"></span>
        <div class="pill-toggle"><a class="on" href="#/">🎒 Học sinh</a><a href="#/giao-vien">👩‍🏫 Giáo viên</a></div>
        <a class="btn-pill" href="phong-thi/">🎯 Phòng thi ảo</a></div>
      <div class="ccards">${D.courses.map((c) => courseCard(c, `#/hoc-sinh/${c.id}`)).join("")}</div>
      <h2>Lối tắt</h2>
      <div class="grid g3">
        <a class="card practice" href="phong-thi/"><span class="pi">🎯</span><div><b>Phòng thi ảo</b><span>Luyện theo Unit, luyện đề, thi thật</span></div></a>
        <a class="card practice" href="phong-thi/?view=ketbank"><span class="pi">📝</span><div><b>Kho đề KET</b><span>50 đề theo 25 chủ điểm</span></div></a>
        <a class="card practice" href="#/giao-vien"><span class="pi">👩‍🏫</span><div><b>Góc giáo viên</b><span>Lộ trình, giáo án, ngữ pháp, KET</span></div></a>
      </div>
      <h2>Mô hình học tại IVY</h2>
      <div class="card"><ul style="margin:0;padding-left:20px">${D.center.model.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></div>
    </div>${rightCol()}</div>`;
  }

  /* ---------- pages: student ---------- */
  function pageStudents() {
    return `<div class="dash"><div>
      <div class="page-head"><div><span class="eyebrow">Học sinh</span><h1>Lớp của em</h1><p class="lead">Mỗi lớp có bài hôm nay, luyện theo Unit và đề KET. Bấm vào lớp em đang học.</p></div></div>
      <div class="ccards">${D.courses.map((c) => courseCard(c, `#/hoc-sinh/${c.id}`)).join("")}</div>
    </div>${rightCol()}</div>`;
  }

  function practiceCards(c) {
    return `<div class="grid g3">
      <a class="card practice" href="${examLink(c)}"><span class="pi">🧩</span><div><b>Luyện theo Unit</b><span>Từ vựng, ngữ pháp, nghe, nói, viết và game – gom sao mở rương</span></div></a>
      ${c.ketbank ? `<a class="card practice" href="phong-thi/?view=ketbank"><span class="pi">📝</span><div><b>Kho đề KET</b><span>Làm từng Part, chế độ Luyện tập hoặc Test</span></div></a>` : ""}
      <a class="card practice" href="phong-thi/?view=mock"><span class="pi">🖥️</span><div><b>Thi thật</b><span>Mô phỏng giao diện thi trên máy, chấm điểm ngay</span></div></a>
    </div>`;
  }

  function pageClass(cid) {
    const c = C[cid];
    if (!c) return pageStudents();
    store.set("ivy-myclass", cid);
    const L = LOOK[cid];
    const hero = `<div class="class-hero" style="background:linear-gradient(120deg,var(--blue-dd),${L.color} 75%)"><span class="eyebrow">Lớp ${esc(c.cefr)}</span><h1>${esc(c.name)}</h1><p>${esc(c.note)}${c.book !== "—" ? " · " + esc(c.book) : ""}</p><img src="${img(L.panda)}" alt=""></div>`;
    if (!ready(c)) {
      return `${hero}<div class="card updating"><img src="${img("panda-sleep.png")}" alt=""><div><h3>Lộ trình lớp ${esc(c.name)} đang cập nhật</h3><p class="muted" style="margin:6px 0 0">Thầy cô đang soạn lộ trình và bài tập hằng ngày cho lớp này. Trong lúc chờ, em vẫn luyện được theo Unit trong Phòng thi ảo nhé!</p></div></div>
        <h2>Luyện tập</h2>${practiceCards(c)}`;
    }
    const acc = window.IVY_CORE && window.IVY_CORE.session();
    const locked = acc && acc.role === "hs" && acc.cls && acc.cls.course === cid && acc.cls.start;
    const st = nowState(c), cfg = st.cfg;
    const tasks = []; c.sessions.forEach((s) => { if (has(s.before)) tasks.push(s.session_id + ":before"); if (has(s.after)) tasks.push(s.session_id + ":after"); });
    const doneCount = tasks.filter((k) => cfg.done[k]).length, pct = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
    const today = st.dates ? `<div class="grid g2">
        <div class="card phase after"><h3>📝 Bài về nhà hiện tại</h3>${st.last ? `<div class="muted" style="font-size:13.5px">Buổi ${st.last.session_no} (${fmt(st.lastDate)}): ${esc(st.last.focus)}</div><p style="margin:8px 0 0">${has(st.last.after) ? esc(st.last.after) : "Buổi này không giao bài về nhà."}</p>` : `<p class="muted">Khoá học chưa bắt đầu.</p>`}</div>
        <div class="card phase before"><h3>⏭️ Chuẩn bị cho buổi tới</h3>${st.next ? `<div class="muted" style="font-size:13.5px">Buổi ${st.next.session_no} – ${fmt(st.nextDate)}: ${esc(st.next.focus)}</div><p style="margin:8px 0 0">${has(st.next.before) ? esc(st.next.before) : "Không có bài chuẩn bị riêng – nhớ mang sách và đi đúng giờ."}</p>` : `<p class="muted">Em đã hoàn thành khoá học 🎉</p>`}</div>
      </div>` : `<div class="card empty">📅 Nhập ngày khai giảng và 2 ngày học trong tuần ở dưới để xem bài cần làm hôm nay.</div>`;
    const rows = c.sessions.map((s, i) => {
      const d = st.dates ? st.dates[i] : null;
      const cb = (kind, text) => has(text) ? `<label class="hw-item ${cfg.done[s.session_id + ":" + kind] ? "done" : ""}"><input type="checkbox" class="hwDone" data-k="${s.session_id}:${kind}" ${cfg.done[s.session_id + ":" + kind] ? "checked" : ""}><span class="txt" style="font-size:14px">${esc(text)}</span></label>` : `<span class="muted">—</span>`;
      return `<tr class="${d && iso(d) === iso(new Date()) ? "today" : ""}"><td class="num">${s.session_no}</td><td style="white-space:nowrap">${d ? fmt(d) : "—"}</td>
        <td><div style="font-weight:600;font-size:14px">${esc(s.focus)}</div>${chipType(s.type)}</td><td data-l="Chuẩn bị trước">${cb("before", s.before)}</td><td data-l="Bài về nhà">${cb("after", s.after)}</td></tr>`;
    }).join("");
    return `${hero}
      <h2>Hôm nay</h2>${today}
      <h2>Luyện tập</h2>${practiceCards(c)}
      <h2>Tiến độ của em</h2>
      <div class="card">
        ${locked ? `<p style="margin:0 0 6px">Lớp <b>${esc(acc.cls.name)}</b> · khai giảng ${esc(acc.cls.start.split("-").reverse().join("/"))} · lịch học do thầy cô cài đặt. <a href="#/cua-em">Xem Góc của em →</a></p>` : ""}
        <div class="grid g3" ${locked ? "hidden" : ""}>
          <label class="field">Tên lớp<input id="hwCls" value="${esc(cfg.cls)}" placeholder="VD: ${esc(c.name)} K12"></label>
          <label class="field">Ngày khai giảng<input id="hwStart" type="date" value="${esc(cfg.start)}"></label>
          <div class="field">Lịch học (chọn 2 ngày)<div class="days">${DOW.map(([v, l]) => `<label><input type="checkbox" class="hwDay" value="${v}" ${cfg.days.includes(v) ? "checked" : ""}>${l}</label>`).join("")}</div></div>
        </div>
        <div style="margin-top:16px"><div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px"><b>Bài tập đã làm</b><span>${doneCount}/${tasks.length} · ${pct}%</span></div><div class="progress"><i style="width:${pct}%"></i></div></div>
        <p class="muted" style="font-size:13px;margin:10px 0 0">${esc(c.homework_note || "")} ${acc && acc.role === "hs" ? "Đánh dấu tự lưu về tài khoản của em để thầy cô theo dõi." : `Đánh dấu được lưu trên trình duyệt của máy này. <a href="#/dang-nhap">Đăng nhập</a> để lưu về tài khoản.`}</p>
      </div>
      <details class="more"><summary>Xem toàn bộ ${c.sessions.length} buổi và bài tập</summary>
        <div class="table-wrap"><table class="stack"><thead><tr><th>#</th><th>Ngày</th><th>Buổi học</th><th>Chuẩn bị trước</th><th>Bài về nhà</th></tr></thead><tbody>${rows}</tbody></table></div>
      </details>`;
  }

  function bindClass(cid) {
    const save = (mut) => { const cfg = cfgOf(cid); mut(cfg); store.set(HW_KEY(cid), cfg); if (window.IVY_CORE) window.IVY_CORE.soon(); };
    const rerender = () => { const y = window.scrollY; route(); window.scrollTo(0, y); };
    const q = (id) => document.getElementById(id);
    if (!q("hwStart")) return;
    q("hwCls").addEventListener("change", (e) => { save((c) => (c.cls = e.target.value.trim())); rerender(); });
    q("hwStart").addEventListener("change", (e) => { save((c) => (c.start = e.target.value)); rerender(); });
    document.querySelectorAll(".hwDay").forEach((el) => el.addEventListener("change", () => { save((c) => (c.days = [...document.querySelectorAll(".hwDay:checked")].map((x) => x.value))); rerender(); }));
    document.querySelectorAll(".hwDone").forEach((el) => el.addEventListener("change", () => { save((c) => { if (el.checked) c.done[el.dataset.k] = true; else delete c.done[el.dataset.k]; }); rerender(); }));
  }

  /* ---------- pages: teacher ---------- */
  function pageTeachers() {
    return `<div class="page-head"><div><span class="eyebrow">Giáo viên</span><h1>Góc giáo viên</h1><p class="lead">Chọn khoá để xem lộ trình 94 buổi, giáo án từng buổi, mạch ngữ pháp và bản đồ luyện KET.</p></div><span class="sp"></span>
      <div class="pill-toggle"><a href="#/">🎒 Học sinh</a><a class="on" href="#/giao-vien">👩‍🏫 Giáo viên</a></div></div>
      <div class="ccards">${D.courses.map((c) => courseCard(c, `#/giao-vien/${c.id}`, ready(c) ? `${c.total_sessions} buổi · ${c.book}` : c.book)).join("")}</div>
      <h2>Công cụ</h2>
      <div class="grid g3">
        <a class="card practice" href="#/giao-vien/game"><span class="pi">🎲</span><div><b>Game theo lứa tuổi</b><span>Chọn hình thức game theo tuổi, nội dung theo trình độ</span></div></a>
        <a class="card practice" href="tai-lieu/"><span class="pi">📁</span><div><b>Tài liệu chương trình</b><span>Curriculum CEFR, khung khoá học, khen thưởng, dashboard</span></div></a>
        <a class="card practice" href="phong-thi/"><span class="pi">🎯</span><div><b>Phòng thi ảo</b><span>Xem trước bài luyện học sinh sẽ làm</span></div></a>
      </div>`;
  }

  const TABS = [["", "Tổng quan"], ["lo-trinh", "Lộ trình"], ["ngu-phap", "Ngữ pháp"], ["ket", "Bản đồ KET"]];
  function courseHead(c, tab) {
    return `<div class="crumbs"><a href="#/giao-vien">Góc giáo viên</a> › ${esc(c.name)}</div>
      <div class="page-head"><div><span class="eyebrow">${esc(c.cefr)}</span><h1>${esc(c.name)}</h1><p class="lead">${esc(c.note)} · ${esc(c.book)}</p></div></div>
      ${ready(c) ? `<div class="tabs">${TABS.map(([k, l]) => `<a class="tab ${k === tab ? "on" : ""}" href="#/giao-vien/${c.id}${k ? "/" + k : ""}">${l}</a>`).join("")}</div>` : ""}`;
  }

  function pageCourse(c) {
    if (!ready(c)) return courseHead(c, "") + `<div class="card updating"><img src="${img("panda-sleep.png")}" alt=""><div><h3>Lộ trình khoá ${esc(c.name)} đang cập nhật</h3><p class="muted" style="margin:6px 0 0">Khi có khung chương trình, lộ trình 94 buổi, giáo án và bài tập sẽ hiện ở đây. Bài luyện theo Unit của khoá này đã có trong Phòng thi ảo.</p><div class="btn-row"><a class="btn primary" href="${examLink(c)}">Xem bài luyện trong Phòng thi</a></div></div></div>`;
    const m = {}; c.sessions.forEach((s) => s.in_class.forEach((a) => (m[a.category] = (m[a.category] || 0) + a.minutes)));
    const total = Object.values(m).reduce((a, b) => a + b, 0);
    const units = c.units.map((u) => `<div class="card unit-card"><div class="top"><span class="unit-no">${esc(u.unit)}</span><span class="chip">Buổi ${esc(u.sessions)}${u.hp ? " · HP " + esc(u.hp) : ""}</span></div><h3>${esc(u.title)}</h3><div class="muted" style="font-size:14px">${esc(u.theme)}</div>
      <dl class="kv"><dt>Ngữ pháp</dt><dd>${esc(u.grammar)}</dd>${has(u.cando_speaking) ? `<dt>Nói</dt><dd>${esc(u.cando_speaking)}</dd>` : ""}${has(u.cando_writing) ? `<dt>Viết</dt><dd>${esc(u.cando_writing)}</dd>` : ""}${has(u.project) ? `<dt>Dự án</dt><dd>${esc(u.project)}</dd>` : ""}</dl></div>`).join("");
    const mods = c.modules ? `<h2>5 học phần</h2><div class="table-wrap"><table><thead><tr><th>Học phần</th><th>Buổi (tuần)</th><th>Unit</th><th>Ngữ pháp trọng tâm</th><th>Part KET giới thiệu</th><th>Sự kiện</th></tr></thead><tbody>
      ${c.modules.map((x) => `<tr><td style="font-weight:700">${esc(x.name)}</td><td>${esc(x.sessions)}</td><td>${esc(x.units)}</td><td style="font-size:14px">${esc(x.grammar)}</td><td style="font-size:14px">${esc(x.ket)}</td><td style="font-size:14px">${esc(x.events)}</td></tr>`).join("")}</tbody></table></div>` : "";
    return courseHead(c, "") + `
      <div class="grid g4"><div class="card stat"><b>${c.total_sessions}</b><span>buổi học</span></div><div class="card stat"><b>${c.session_minutes}'</b><span>mỗi buổi · ${c.sessions_per_week} buổi/tuần</span></div>
        <div class="card stat"><b>${Math.ceil(c.total_sessions / c.sessions_per_week)}</b><span>tuần (khai giảng linh hoạt)</span></div><div class="card stat"><b>${c.units.length}</b><span>unit</span></div></div>
      <h2>Nhịp học</h2><div class="card"><p style="margin:0 0 6px">${esc(c.rhythm)}</p>${timelineBar(Object.entries(m).map(([k, v]) => ({ category: k, minutes: v, activity: c.cat[k] })), true)}${legend(c.cat, new Set(Object.keys(m)))}
        <p class="muted" style="margin:10px 0 0;font-size:14px">${Object.entries(m).map(([k, v]) => `${c.cat[k]}: ${Math.round((v / total) * 100)}%`).join(" · ")} (theo các buổi có khung thời gian).</p></div>
      ${mods}<h2>Các unit</h2><div class="grid g3">${units}</div>`;
  }

  function pagePlan(c, q) {
    const unit = q.get("unit") || "", type = q.get("type") || "", text = q.get("q") || "";
    const UNITS = [...new Set(c.sessions.map((s) => s.unit))], TYPES = [...new Set(c.sessions.map((s) => s.type))];
    return courseHead(c, "lo-trinh") + `<div class="toolbar">
      <input type="search" id="fText" placeholder="Tìm: past simple, email, Part 3…" value="${esc(text)}">
      <select id="fUnit"><option value="">Tất cả unit</option>${UNITS.map((u) => `<option ${u === unit ? "selected" : ""}>${esc(u)}</option>`).join("")}</select>
      <select id="fType"><option value="">Tất cả dạng buổi</option>${TYPES.map((t) => `<option ${t === type ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>
      <button class="btn" onclick="window.print()">In</button></div><div id="planTable"></div>`;
  }
  function renderPlanTable(c) {
    const text = (document.getElementById("fText").value || "").toLowerCase().trim(), unit = document.getElementById("fUnit").value, type = document.getElementById("fType").value;
    const list = c.sessions.filter((s) => (!unit || s.unit === unit) && (!type || s.type === type) && (!text || JSON.stringify(s).toLowerCase().includes(text)));
    const p = new URLSearchParams(); if (unit) p.set("unit", unit); if (type) p.set("type", type); if (text) p.set("q", text);
    history.replaceState(null, "", `#/giao-vien/${c.id}/lo-trinh` + (p.toString() ? "?" + p : ""));
    const box = document.getElementById("planTable");
    if (!list.length) { box.innerHTML = `<div class="card empty">Không có buổi nào khớp bộ lọc.</div>`; return; }
    let lastWeek = 0;
    box.innerHTML = `<p class="muted" style="margin:0 0 8px;font-size:14px">${list.length} buổi</p><div class="table-wrap"><table class="stack"><thead><tr><th>#</th><th>Unit / dạng</th><th>Trọng tâm</th><th>Trước buổi</th><th>Sau buổi</th></tr></thead><tbody>${list.map((s) => {
      const sep = s.week !== lastWeek ? `<tr class="week-sep"><td colspan="5">Tuần ${s.week}</td></tr>` : ""; lastWeek = s.week;
      return `${sep}<tr class="row-link" data-href="${sessLink(c, s)}"><td class="num">${s.session_no}</td><td><div style="font-weight:600">${esc(s.unit)} · ${esc(s.unit_title)}</div>${chipType(s.type)}</td>
        <td>${esc(s.focus)}${has(s.task) ? `<div class="muted" style="font-size:13px">${esc(s.task)}</div>` : ""}</td><td style="font-size:14px" data-l="Trước buổi">${esc(s.before)}</td><td style="font-size:14px" data-l="Sau buổi">${esc(s.after)}</td></tr>`;
    }).join("")}</tbody></table></div>`;
    box.querySelectorAll("tr.row-link").forEach((tr) => tr.addEventListener("click", () => (location.hash = tr.dataset.href)));
  }

  function homeworkMessage(c, s) {
    const next = c.sessions[s.session_no];
    let msg = `📚 IVY ${c.name} (${c.cefr}) – Buổi ${s.session_no}: ${s.focus}\n`;
    if (has(s.can_do)) msg += `🎯 Mục tiêu: ${s.can_do}\n`;
    if (has(s.after)) msg += `📝 Bài về nhà: ${s.after}\n`;
    if (next && has(next.before)) msg += `⏭️ Chuẩn bị cho buổi ${next.session_no}: ${next.before}\n`;
    return msg + `Các con làm bài và nộp đúng hạn nhé!`;
  }

  function pageSession(c, id) {
    const s = c.sessions.find((x) => x.session_id === id);
    if (!s) return courseHead(c, "lo-trinh") + `<div class="card empty">Không tìm thấy buổi học này.</div>`;
    const prev = c.sessions[s.session_no - 2], next = c.sessions[s.session_no];
    let t = 0;
    const f = (l, v) => (has(v) ? `<dt>${l}</dt><dd>${esc(v)}</dd>` : "");
    const used = new Set(s.in_class.map((a) => a.category));
    return `<div class="crumbs"><a href="#/giao-vien">Góc giáo viên</a> › <a href="#/giao-vien/${c.id}/lo-trinh">${esc(c.name)} · Lộ trình</a> › Buổi ${s.session_no}</div>
      <span class="eyebrow">Buổi ${s.session_no} · Tuần ${s.week}</span><h1>${esc(s.focus)}</h1>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">${chipType(s.type)}<span class="chip">${esc(s.unit)} · ${esc(s.unit_title)}</span>${has(s.sb_pages) ? `<span class="chip">SB ${esc(s.sb_pages)}</span>` : ""}${sessKet(s).map((p) => `<span class="chip brand">KET ${p}</span>`).join("")}</div>
      <div class="grid g2" style="margin-top:18px">
        <div class="card"><dl class="kv">${f("Nhiệm vụ", s.task)}${f("Từ vựng", s.vocabulary)}${f("Ngữ pháp", s.grammar)}${f("KET", s.ket_part)}</dl></div>
        <div class="card"><dl class="kv">${f("Mục tiêu", s.can_do)}${f("Photocopiable", s.photocopiable)}${f("Tài liệu", s.materials)}${f("Công dân TC", s.global_skills)}${f("Đánh giá", s.assessment)}</dl></div>
      </div>
      ${s.in_class.length ? `<h2>Tiến trình ${s.in_class.reduce((a, b) => a + b.minutes, 0)} phút trên lớp</h2><div class="card">${timelineBar(s.in_class)}${legend(c.cat, used)}
        <ol class="steps" style="margin-top:10px">${s.in_class.map((a) => { const from = t; t += a.minutes; return `<li><div class="min">${a.minutes}'<small>${from}–${t}</small></div><div><span class="dot cat-${a.category}"></span>${esc(a.activity)} <span class="chip">${esc(c.cat[a.category] || "")}</span></div></li>`; }).join("")}</ol></div>`
        : `<h2>Tiến trình trên lớp</h2><div class="card muted">Buổi này giáo viên tổ chức linh hoạt theo kết quả và mục tiêu ở trên.</div>`}
      <h2>Bài tập</h2>
      <div class="grid g2"><div class="card phase before"><h3>Trước buổi học</h3><p style="margin:0">${esc(s.before)}</p></div><div class="card phase after"><h3>Sau buổi học</h3><p style="margin:0">${esc(s.after)}</p></div></div>
      <div class="btn-row"><button class="btn primary" id="copyMsg">Sao chép tin nhắn giao bài</button><button class="btn" onclick="window.print()">In giáo án</button></div>
      <pre id="msgPreview" class="card" style="white-space:pre-wrap;font-family:inherit;font-size:14px;margin-top:12px">${esc(homeworkMessage(c, s))}</pre>
      <div class="pager">${prev ? `<a class="btn" href="${sessLink(c, prev)}">← Buổi ${prev.session_no}</a>` : "<span></span>"}${next ? `<a class="btn" href="${sessLink(c, next)}">Buổi ${next.session_no} →</a>` : "<span></span>"}</div>`;
  }

  function pageGrammar(c) {
    const g = c.grammar;
    const linkCol = g.first_col;
    return courseHead(c, "ngu-phap") + (g.note ? `<p class="lead" style="margin:0 0 14px">${esc(g.note)}</p>` : "") +
      `<div class="table-wrap"><table><thead><tr>${g.cols.map((x) => `<th>${esc(x)}</th>`).join("")}</tr></thead><tbody>${g.rows.map((r) => `<tr>${r.map((v, i) => {
        if (i === linkCol) { const n = parseInt(String(v).replace(/\D+/, ""), 10); const s = c.sessions.find((x) => x.session_no === n); return `<td>${s ? `<a href="${sessLink(c, s)}">${esc(v)}</a>` : esc(v)}</td>`; }
        return `<td style="${i === (g.cols[0] === "#" ? 1 : 0) ? "font-weight:700" : "font-size:14px"}">${esc(v)}</td>`;
      }).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function pageKet(c, q) {
    const sel = q.get("part") || "";
    const map = {}; c.sessions.forEach((s) => sessKet(s).forEach((p) => (map[p] = map[p] || []).push(s)));
    const max = Math.max(1, ...Object.values(map).map((a) => a.length));
    const list = sel ? map[sel] || [] : [];
    const subs = c.subskills ? `<h2>Sub-skill KET và mức cần đạt</h2><div class="table-wrap"><table><thead><tr><th>Mã</th><th>Học sinh luyện gì</th><th>Part KET</th><th>Giới thiệu ở HP</th><th>Mức cần đạt ở thi thử 2</th></tr></thead><tbody>${c.subskills.map((x) => `<tr><td class="num">${esc(x.code)}</td><td>${esc(x.what)}</td><td style="font-size:14px">${esc(x.part)}</td><td>${esc(x.hp)}</td><td style="font-size:14px">${esc(x.target)}</td></tr>`).join("")}</tbody></table></div>` : "";
    return courseHead(c, "ket") + `<p class="lead" style="margin:0 0 14px">Mỗi part của A2 Key for Schools được luyện ở những buổi nào. Bấm vào một part để xem danh sách buổi.</p>
      <div class="ket-grid">${Object.entries(KET_INFO).map(([paper, parts]) => `<div class="card"><h3>${paper}</h3>${parts.map(([p, d]) => `<div class="ket-part ${p === sel ? "sel" : ""}" data-part="${p}"><b>Part ${p.slice(1)}</b><div class="bar"><i style="width:${((map[p] || []).length / max) * 100}%"></i></div><em>${(map[p] || []).length} buổi</em></div><div class="muted" style="font-size:12.5px;margin-bottom:6px">${esc(d)}</div>`).join("")}</div>`).join("")}</div>
      ${sel ? `<h2>${{ R: "Reading", W: "Writing", L: "Listening", S: "Speaking" }[sel[0]]} Part ${sel.slice(1)} – ${list.length} buổi</h2><div class="table-wrap"><table><thead><tr><th>#</th><th>Unit</th><th>Trọng tâm</th><th>Nội dung KET</th></tr></thead><tbody>${list.map((s) => `<tr class="row-link" data-href="${sessLink(c, s)}"><td class="num">${s.session_no}</td><td>${esc(s.unit)} ${chipType(s.type)}</td><td>${esc(s.focus)}</td><td style="font-size:14px">${esc(s.ket_part)}</td></tr>`).join("")}</tbody></table></div>` : ""}
      ${subs}`;
  }

  function pageGame(q) {
    const gi = Math.min(+(q.get("lop") || 3), D.games.length - 1), g = D.games[gi];
    const opts = D.courses.filter(ready).flatMap((c) => c.units.map((u) => ({ v: c.id + "|" + u.unit, l: `${c.name} · ${u.unit} – ${u.title}`, u })));
    const cur = opts.find((o) => o.v === q.get("unit")) || opts[0];
    return `<div class="crumbs"><a href="#/giao-vien">Góc giáo viên</a> › Game theo lứa tuổi</div>
      <div class="page-head"><div><span class="eyebrow">Giáo viên</span><h1>Game theo lứa tuổi</h1><p class="lead">Chọn <b>hình thức game theo độ tuổi</b>, chọn <b>nội dung câu hỏi theo trình độ</b> của lớp.</p></div></div>
      <div class="tabs">${D.games.map((x, i) => `<button class="tab ${i === gi ? "on" : ""}" data-lop="${i}">${esc(x.grade)}</button>`).join("")}</div>
      <div class="grid g2"><div class="card"><span class="eyebrow">${esc(g.age)} · ${esc(g.stage)}</span><p style="margin:6px 0 14px">${esc(g.profile)}</p>
        ${g.games.map((x, i) => `<div class="game-item"><div class="ico">${i + 1}</div><div><b>${esc(x.name)}</b>${x.desc ? `<div class="muted" style="font-size:14px">${esc(x.desc)}</div>` : ""}</div></div>`).join("")}</div>
        <div class="card"><h3>Ghép game với unit đang dạy</h3><div class="field" style="margin:10px 0">Unit<select id="gUnit">${opts.map((o) => `<option value="${esc(o.v)}" ${o === cur ? "selected" : ""}>${esc(o.l)}</option>`).join("")}</select></div>
          <dl class="kv"><dt>Chủ đề</dt><dd>${esc(cur.u.theme)}</dd><dt>Ngữ pháp</dt><dd>${esc(cur.u.grammar)}</dd></dl>
          <div class="note" style="font-size:14px">Gợi ý: dùng <b>${esc(g.games[0].name)}</b> hoặc <b>${esc(g.games[1].name)}</b> để ôn từ vựng “${esc(cur.u.theme)}”, và <b>${esc(g.games[2].name)}</b> cho phần ngữ pháp.</div></div></div>
      <h2>Lưu ý khi chọn game</h2>${D.game_notes.map((n) => `<div class="note">${esc(n)}</div>`).join("")}`;
  }

  function pageGuide() {
    return `<div class="page-head"><div><span class="eyebrow">Hướng dẫn</span><h1>Dùng IVY Teen thế nào?</h1></div></div>
      <div class="roles">
        <a class="card" href="#/hoc-sinh"><span class="pi">🎒</span><h3>Học sinh</h3><span class="muted">Đăng nhập bằng mã thầy cô phát (lần đầu đặt mật khẩu) → xem bài hôm nay → luyện trong Phòng thi ảo → tick bài đã làm. Tiến độ tự lưu về tài khoản.</span></a>
        <a class="card" href="#/giao-vien"><span class="pi">👩‍🏫</span><h3>Giáo viên</h3><span class="muted">Đăng nhập bằng mã giáo viên → tạo lớp, cấp mã học sinh → theo dõi bài tập, điểm KET, học sinh cần chú ý. Góc giáo viên có lộ trình và giáo án từng buổi.</span></a>
        <a class="card" href="tai-lieu/"><span class="pi">📁</span><h3>Quản lý</h3><span class="muted">Tạo mã giáo viên ở mục Quản lý giáo viên. Tài liệu thiết kế chương trình: curriculum CEFR, khung từng khoá, khen thưởng, dashboard.</span></a>
      </div>`;
  }

  /* ---------- router ---------- */
  const LEGACY = { kickoff: "giao-vien/ko", "lo-trinh": "giao-vien/ko/lo-trinh", "ngu-phap": "giao-vien/ko/ngu-phap", ket: "giao-vien/ko/ket", game: "giao-vien/game", "bai-tap": "hoc-sinh/ko" };
  function route() {
    let raw = location.hash.replace(/^#\/?/, "");
    let [path, qs] = raw.split("?");
    const parts0 = path.split("/");
    if (LEGACY[parts0[0]] && parts0.length === 1) { location.replace("#/" + LEGACY[parts0[0]] + (qs ? "?" + qs : "")); return; }
    if (parts0[0] === "buoi" && parts0[1]) { location.replace("#/giao-vien/ko/buoi/" + parts0[1]); return; }
    const q = new URLSearchParams(qs || ""), p = path.split("/").filter(Boolean);
    let html, nav = "home", after = null;
    if (!p.length) html = pageHome();
    else if (p[0] === "hoc-sinh") { nav = "hoc-sinh"; if (p[1] && C[p[1]]) { html = pageClass(p[1]); after = () => bindClass(p[1]); } else html = pageStudents(); }
    else if (p[0] === "giao-vien") {
      nav = "giao-vien";
      if (p[1] === "game") { nav = "game"; html = pageGame(q); after = () => {
        document.querySelectorAll(".tab[data-lop]").forEach((b) => b.addEventListener("click", () => (location.hash = `#/giao-vien/game?lop=${b.dataset.lop}&unit=${encodeURIComponent(document.getElementById("gUnit").value)}`)));
        document.getElementById("gUnit").addEventListener("change", (e) => (location.hash = `#/giao-vien/game?lop=${q.get("lop") || 3}&unit=${encodeURIComponent(e.target.value)}`)); }; }
      else if (p[1] && C[p[1]]) {
        const c = C[p[1]];
        if (!ready(c) || !p[2]) html = pageCourse(c);
        else if (p[2] === "lo-trinh") { html = pagePlan(c, q); after = () => { renderPlanTable(c); ["fText", "fUnit", "fType"].forEach((id) => document.getElementById(id).addEventListener("input", () => renderPlanTable(c))); }; }
        else if (p[2] === "buoi") { html = pageSession(c, p[3]); after = () => { const b = document.getElementById("copyMsg"); if (b) b.addEventListener("click", async () => { const t = document.getElementById("msgPreview").textContent; try { await navigator.clipboard.writeText(t); b.textContent = "Đã sao chép ✓"; } catch (e) { const r = document.createRange(); r.selectNodeContents(document.getElementById("msgPreview")); getSelection().removeAllRanges(); getSelection().addRange(r); b.textContent = "Đã bôi đen – nhấn Ctrl+C"; } }); }; }
        else if (p[2] === "ngu-phap") html = pageGrammar(c);
        else if (p[2] === "ket") { html = pageKet(c, q); after = () => { document.querySelectorAll(".ket-part").forEach((el) => el.addEventListener("click", () => (location.hash = `#/giao-vien/${c.id}/ket?part=${el.dataset.part}`))); document.querySelectorAll("tr.row-link").forEach((tr) => tr.addEventListener("click", () => (location.hash = tr.dataset.href))); }; }
        else html = pageCourse(c);
      } else html = pageTeachers();
    }
    else if (p[0] === "huong-dan") html = pageGuide();
    else if (window.IVY_ACC && window.IVY_ACC.routes[p[0]]) { const r = window.IVY_ACC.routes[p[0]](p, q); html = r.html; nav = r.nav || "acc"; after = r.after || null; }
    else html = pageHome();
    app.innerHTML = html;
    document.querySelectorAll(".side a[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === nav));
    const h1 = app.querySelector("h1");
    document.title = (p.length && h1 ? h1.textContent + " · " : "") + "IVY Teen";
    if (after) after();
    if (window.IVY_ACC) window.IVY_ACC.updateBadge();
  }
  window.IVY_APP = { D, C, LOOK, esc, has, schedule, nowState, fmt, iso, route };
  window.addEventListener("ivy-auth", () => { const h = location.hash.split("?")[0]; if (!/dang-nhap|cua-em|lop-cua-toi|quan-ly/.test(h)) route(); });
  let lastPath = null;
  window.addEventListener("hashchange", () => { const pth = location.hash.split("?")[0]; route(); if (pth !== lastPath) window.scrollTo(0, 0); lastPath = pth; });
  lastPath = location.hash.split("?")[0];
  route();
})();
