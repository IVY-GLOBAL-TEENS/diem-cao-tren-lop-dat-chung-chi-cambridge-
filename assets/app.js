/* IVY Teen – website giáo trình & bài tập (HTML/CSS/JS thuần, chạy được trên GitHub Pages) */
(function () {
  "use strict";
  const D = window.IVY_DATA;
  const app = document.getElementById("app");
  const S = D.sessions;
  const byId = Object.fromEntries(S.map((s) => [s.session_id, s]));

  const CAT = { routine: "Thường quy", book: "Sách (SB)", extension: "Mở rộng", test: "Kiểm tra" };
  const TYPES = [...new Set(S.map((s) => s.type))];
  const UNIT_ORDER = [...new Set(S.map((s) => s.unit))];
  const KET_INFO = {
    "Reading & Writing": [
      ["R1", "Đọc 6 thông báo/tin nhắn ngắn – chọn đáp án đúng"],
      ["R2", "Matching: 7 câu hỏi với 3 đoạn văn ngắn"],
      ["R3", "Đọc bài dài – 5 câu trắc nghiệm"],
      ["R4", "Multiple-choice cloze – 6 chỗ trống"],
      ["R5", "Open cloze – tự điền 6 từ"],
      ["W6", "Viết email/tin nhắn ngắn đủ 3 ý (25+ từ)"],
      ["W7", "Viết truyện theo 3 tranh (35+ từ)"],
    ],
    Listening: [
      ["L1", "5 đoạn hội thoại ngắn – chọn tranh đúng"],
      ["L2", "Nghe & điền thông tin vào ghi chú"],
      ["L3", "Hội thoại dài – 5 câu trắc nghiệm"],
      ["L4", "5 đoạn ngắn – chọn đáp án chữ"],
      ["L5", "Matching: nối người/vật với thông tin"],
    ],
    Speaking: [
      ["S1", "Phỏng vấn: trả lời câu hỏi về bản thân"],
      ["S2", "Thảo luận cặp theo tranh, nêu ý thích & lý do"],
    ],
  };

  /* ---------- helpers ---------- */
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = (v) => v && v !== "—";
  const typeClass = (t) => "t-" + (t === "Project & Check" ? "Project" : t.replace(/\s+/g, "-"));
  const chipType = (t) => `<span class="chip ${typeClass(t)}">${esc(t)}</span>`;
  const sessLink = (s) => `#/buoi/${s.session_id}`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };
  const unitInfo = (code) => D.units.find((u) => u.unit === code);
  const unitLabel = (s) => `${s.unit}${s.unit_title ? " · " + s.unit_title : ""}`;

  function ketParts(str) {
    const out = new Set();
    if (!str) return [];
    const re = /\b(R|L|S|W)\s*Part\s*([0-9][0-9\s&\/,+–-]*)/g;
    let m;
    while ((m = re.exec(str))) {
      const sk = m[1];
      const seg = m[2];
      const range = seg.match(/(\d)\s*[–-]\s*(\d)/);
      if (range) { for (let i = +range[1]; i <= +range[2]; i++) out.add(sk + i); }
      (seg.match(/\d/g) || []).forEach((n) => out.add(sk + n));
    }
    return [...out];
  }

  function minutesBy(sessions) {
    const t = { routine: 0, book: 0, extension: 0, test: 0 };
    sessions.forEach((s) => s.in_class.forEach((a) => (t[a.category] += a.minutes)));
    return t;
  }

  function timelineBar(items) {
    const total = items.reduce((a, b) => a + b.minutes, 0) || 1;
    return `<div class="timeline">${items.map((a) => `<div class="cat-${a.category}" style="flex:${a.minutes}" title="${esc(a.activity)} – ${a.minutes}'">${a.minutes / total > 0.07 ? a.minutes + "'" : ""}</div>`).join("")}</div>`;
  }
  const legend = () => `<div class="legend">${Object.entries(CAT).map(([k, v]) => `<span><i class="cat-${k}"></i>${v}</span>`).join("")}</div>`;

  /* ---------- pages ---------- */
  function pageHome() {
    const c = D.course;
    const units = D.units.filter((u) => /^U\d/.test(u.unit)).length;
    const tests = S.filter((s) => s.type === "Test").length;
    return `
    <section class="hero">
      <div>
        <div class="eyebrow">Trung tâm ${esc(D.center.name)} · ${esc(D.center.audience)}</div>
        <h1>Giáo trình tiếng Anh THCS – học theo năng lực, luyện đề Cambridge</h1>
        <p class="lead">Toàn bộ khung chương trình, lộ trình từng buổi, mạch ngữ pháp, kỹ năng KET, gợi ý game theo lứa tuổi và công cụ theo dõi bài tập về nhà – gom về một nơi cho giáo viên, học sinh và phụ huynh.</p>
        <div class="btn-row">
          <a class="btn primary" href="#/lo-trinh">Xem lộ trình 94 buổi</a>
          <a class="btn" href="#/bai-tap">Theo dõi bài tập</a>
          <a class="btn" href="phong-thi/" style="border-color:var(--accent);color:var(--accent)">Vào phòng thi ảo</a>
        </div>
      </div>
      <div class="hero-panel">
        <h3>Mô hình học tại IVY</h3>
        <ul>${D.center.model.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
      </div>
    </section>

    <h2>Kick-off (A2) trong một cái nhìn</h2>
    <div class="grid g4">
      <div class="card stat"><b>${c.total_sessions}</b><span>buổi học tại trung tâm</span></div>
      <div class="card stat"><b>${c.session_minutes}'</b><span>mỗi buổi · ${c.sessions_per_week} buổi/tuần</span></div>
      <div class="card stat"><b>${Math.ceil(c.total_sessions / c.sessions_per_week)}</b><span>tuần học (khai giảng linh hoạt)</span></div>
      <div class="card stat"><b>${units}</b><span>unit chính + Starter</span></div>
      <div class="card stat"><b>${D.grammar_spine.length}</b><span>điểm ngữ pháp nền tảng</span></div>
      <div class="card stat"><b>${tests}</b><span>buổi kiểm tra định kỳ</span></div>
    </div>

    <h2>Các cấp độ của IVY</h2>
    <div class="ladder">
      ${D.levels.map((l) => `
        <div class="rung ${l.name === c.name ? "on" : ""}">
          <div class="cefr">${esc(l.cefr)}</div>
          <h3>${esc(l.name)}</h3>
          <div class="muted" style="font-size:13.5px">${esc(l.book)}</div>
          <div style="font-size:13.5px;margin-top:6px">${esc(l.note)}</div>
          <div style="margin-top:8px"><span class="chip ${l.status === "Hoàn thiện" ? "brand" : ""}">${esc(l.status)}</span></div>
        </div>`).join("")}
    </div>

    <h2>Khám phá</h2>
    <div class="grid g3">
      ${[
        ["#/kickoff", "Kick-off A2", "11 unit, chủ đề, kỹ năng, dự án và kỹ năng công dân toàn cầu."],
        ["#/lo-trinh", "Lộ trình 94 buổi", "Từng buổi: mục tiêu, hoạt động theo phút, bài trước & sau buổi."],
        ["#/ngu-phap", "Mạch ngữ pháp", "19 điểm ngữ pháp: học lần đầu ở buổi nào, ôn lại ở đâu."],
        ["#/ket", "Bản đồ KET", "Mỗi part của A2 Key được luyện ở những buổi nào."],
        ["#/game", "Game theo lứa tuổi", "Chọn hình thức game theo tuổi, nội dung theo trình độ."],
        ["#/bai-tap", "Bài tập về nhà", "Lịch học theo ngày khai giảng, đánh dấu bài đã làm."],
        ["tai-lieu/", "Tài liệu chương trình", "Curriculum CEFR, Bridge-up 94 buổi, khung khen thưởng, đề xuất dashboard."],
        ["phong-thi/", "Phòng thi ảo KET/PET", "Học sinh luyện kỹ năng, làm đề mô phỏng thi máy, chơi game theo cấp độ."],
      ].map(([h, t, d]) => `<a class="card unit-card" href="${h}"><h3>${t} →</h3><span class="muted">${d}</span></a>`).join("")}
    </div>`;
  }

  function pageKickoff() {
    const c = D.course;
    const m = minutesBy(S);
    const total = Object.values(m).reduce((a, b) => a + b, 0);
    return `
    <div class="eyebrow">Khoá học · CEFR ${esc(c.cefr)}</div>
    <h1>${esc(c.name)} – ${esc(c.book)}</h1>
    <p class="lead">${c.total_sessions} buổi × ${c.session_minutes} phút, ${c.sessions_per_week} buổi/tuần. Mỗi unit gồm 8 buổi theo nhịp: Reading → Grammar → Vocabulary → Listening → Speaking → Writing → KET Lab → Project &amp; Check.</p>

    <h2>Phân bổ thời gian trên lớp (cả khoá)</h2>
    <div class="card">
      ${timelineBar(Object.entries(m).map(([k, v]) => ({ category: k, minutes: v, activity: CAT[k] })))}
      ${legend()}
      <p class="muted" style="margin:10px 0 0;font-size:14px">${Object.entries(m).map(([k, v]) => `${CAT[k]}: ${Math.round((v / total) * 100)}%`).join(" · ")} — tổng ${(total / 60).toFixed(0)} giờ học.</p>
    </div>

    <h2>Nhịp 8 buổi của một unit</h2>
    <div class="grid g4">
      ${["Reading", "Grammar", "Vocabulary", "Listening", "Speaking", "Writing", "KET Lab", "Project & Check"].map((t, i) => {
        const ex = S.find((s) => s.type === t && s.unit === "U1");
        return `<a class="card unit-card" href="${sessLink(ex)}"><div class="top"><span class="unit-no">S${i + 1}</span>${chipType(t)}</div><span style="font-size:14px">${esc(ex.task)}</span></a>`;
      }).join("")}
    </div>

    <h2>Các unit</h2>
    <div class="grid g3">
      ${D.units.map((u) => `
        <a class="card unit-card" href="#/lo-trinh?unit=${encodeURIComponent(u.unit)}">
          <div class="top"><span class="unit-no">${esc(u.unit)}</span><span class="chip">Buổi ${esc(u.sessions)} · SB ${esc(u.sb_pages)}</span></div>
          <h3>${esc(u.title)}</h3>
          <div class="muted" style="font-size:14px">${esc(u.theme)}</div>
          <dl class="kv">
            <dt>Ngữ pháp</dt><dd>${esc(u.grammar)}</dd>
            <dt>Nói</dt><dd>${esc(u.cando_speaking)}</dd>
            ${has(u.cando_writing) ? `<dt>Viết</dt><dd>${esc(u.cando_writing)}</dd>` : ""}
            ${has(u.project) ? `<dt>Dự án</dt><dd>${esc(u.project)}</dd>` : ""}
            ${has(u.global_skills) ? `<dt>Kỹ năng</dt><dd>${esc(u.global_skills)}</dd>` : ""}
          </dl>
          <div>${ketParts(u.ket_parts).map((p) => `<span class="chip brand">${p}</span>`).join(" ")}</div>
        </a>`).join("")}
    </div>`;
  }

  function pagePlan(q) {
    const unit = q.get("unit") || "";
    const type = q.get("type") || "";
    const text = q.get("q") || "";
    return `
    <h1>Lộ trình ${S.length} buổi</h1>
    <p class="lead">Bấm vào một buổi để xem chi tiết hoạt động theo phút, bài chuẩn bị và bài về nhà.</p>
    <div class="toolbar">
      <input type="search" id="fText" placeholder="Tìm: past simple, email, KET L Part 3…" value="${esc(text)}">
      <select id="fUnit"><option value="">Tất cả unit</option>${UNIT_ORDER.map((u) => `<option ${u === unit ? "selected" : ""}>${esc(u)}</option>`).join("")}</select>
      <select id="fType"><option value="">Tất cả dạng buổi</option>${TYPES.map((t) => `<option ${t === type ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>
      <button class="btn" onclick="window.print()">In</button>
    </div>
    <div id="planTable"></div>`;
  }

  function renderPlanTable() {
    const text = (document.getElementById("fText").value || "").toLowerCase().trim();
    const unit = document.getElementById("fUnit").value;
    const type = document.getElementById("fType").value;
    const list = S.filter((s) => (!unit || s.unit === unit) && (!type || s.type === type) &&
      (!text || JSON.stringify(s).toLowerCase().includes(text)));
    const params = new URLSearchParams();
    if (unit) params.set("unit", unit);
    if (type) params.set("type", type);
    if (text) params.set("q", text);
    history.replaceState(null, "", "#/lo-trinh" + (params.toString() ? "?" + params : ""));
    if (!list.length) { document.getElementById("planTable").innerHTML = `<div class="card empty">Không có buổi nào khớp bộ lọc.</div>`; return; }
    let lastWeek = 0;
    const rows = list.map((s) => {
      const sep = s.week !== lastWeek ? `<tr class="week-sep"><td colspan="5">Tuần ${s.week}</td></tr>` : "";
      lastWeek = s.week;
      return `${sep}<tr class="row-link" data-href="${sessLink(s)}">
        <td class="num">${s.session_no}</td>
        <td><div style="font-weight:600">${esc(unitLabel(s))}</div>${chipType(s.type)}</td>
        <td>${esc(s.focus)}${has(s.ket_part) ? `<div class="muted" style="font-size:13px">${esc(s.ket_part)}</div>` : ""}</td>
        <td style="font-size:14px" data-l="Trước buổi">${esc(s.before)}</td>
        <td style="font-size:14px" data-l="Sau buổi">${esc(s.after)}</td></tr>`;
    }).join("");
    document.getElementById("planTable").innerHTML = `
      <p class="muted" style="margin:0 0 8px;font-size:14px">${list.length} buổi</p>
      <div class="table-wrap"><table class="stack">
        <thead><tr><th>#</th><th>Unit / dạng</th><th>Trọng tâm</th><th>Trước buổi</th><th>Sau buổi</th></tr></thead>
        <tbody>${rows}</tbody></table></div>`;
    document.querySelectorAll("tr.row-link").forEach((tr) => tr.addEventListener("click", () => (location.hash = tr.dataset.href)));
  }

  function homeworkMessage(s) {
    const next = S[s.session_no];
    let msg = `📚 IVY ${D.course.name} (${D.course.cefr}) – Buổi ${s.session_no}: ${s.focus}\n`;
    if (has(s.can_do)) msg += `🎯 Mục tiêu: ${s.can_do}\n`;
    if (has(s.after)) msg += `📝 Bài về nhà: ${s.after}\n`;
    if (next && has(next.before)) msg += `⏭️ Chuẩn bị cho buổi ${next.session_no}: ${next.before}\n`;
    msg += `Các con làm và nộp bài trên web nhé!`;
    return msg;
  }

  function pageSession(id) {
    const s = byId[id];
    if (!s) return `<div class="card empty">Không tìm thấy buổi học <b>${esc(id)}</b>. <a href="#/lo-trinh">Quay lại lộ trình</a></div>`;
    const prev = S[s.session_no - 2], next = S[s.session_no];
    let t = 0;
    const field = (label, v) => has(v) ? `<dt>${label}</dt><dd>${esc(v)}</dd>` : "";
    return `
    <div class="crumbs"><a href="#/lo-trinh">Lộ trình</a> › <a href="#/lo-trinh?unit=${encodeURIComponent(s.unit)}">${esc(s.unit)}</a> › Buổi ${s.session_no}</div>
    <div class="eyebrow">Buổi ${s.session_no} · Tuần ${s.week} · ${esc(s.session_id)}</div>
    <h1>${esc(s.focus)}</h1>
    <div style="display:flex;gap:6px;flex-wrap:wrap">${chipType(s.type)}<span class="chip">${esc(unitLabel(s))}</span>${has(s.sb_pages) ? `<span class="chip">SB ${esc(s.sb_pages)}</span>` : ""}${ketParts(s.ket_part).map((p) => `<span class="chip brand">KET ${p}</span>`).join("")}</div>

    <div class="grid g2" style="margin-top:18px">
      <div class="card"><dl class="kv">
        ${field("Nhiệm vụ", s.task)}${field("Dạng KET", s.ket_part)}${field("Ngữ pháp", s.grammar)}${field("Từ vựng", s.vocabulary)}
      </dl></div>
      <div class="card"><dl class="kv">
        ${field("Can-do", s.can_do)}${field("Photocopiable", s.photocopiable)}${field("Kỹ năng", s.global_skills)}${field("Đánh giá", s.assessment)}
      </dl></div>
    </div>

    <h2>Tiến trình ${s.in_class.reduce((a, b) => a + b.minutes, 0)} phút trên lớp</h2>
    <div class="card">
      ${timelineBar(s.in_class)}${legend()}
      <ol class="steps" style="margin-top:10px">
        ${s.in_class.map((a) => { const from = t; t += a.minutes; return `<li><div class="min">${a.minutes}'<small>${from}–${t}</small></div><div><span class="dot cat-${a.category}"></span>${esc(a.activity)} <span class="chip">${CAT[a.category]}</span></div></li>`; }).join("")}
      </ol>
    </div>

    <h2>Bài tập trên web</h2>
    <div class="grid g2">
      <div class="card phase before"><h3>Trước buổi học</h3><p style="margin:0">${esc(s.before)}</p></div>
      <div class="card phase after"><h3>Sau buổi học (bài về nhà)</h3><p style="margin:0">${esc(s.after)}</p></div>
    </div>
    <div class="btn-row">
      <button class="btn primary" id="copyMsg">Sao chép tin nhắn giao bài</button>
      <button class="btn" onclick="window.print()">In giáo án buổi này</button>
    </div>
    <pre id="msgPreview" class="card" style="white-space:pre-wrap;font-family:inherit;font-size:14px;margin-top:12px">${esc(homeworkMessage(s))}</pre>

    <div class="pager">
      ${prev ? `<a class="btn" href="${sessLink(prev)}">← Buổi ${prev.session_no}</a>` : "<span></span>"}
      ${next ? `<a class="btn" href="${sessLink(next)}">Buổi ${next.session_no} →</a>` : "<span></span>"}
    </div>`;
  }

  function pageGrammar() {
    const max = D.course.total_sessions;
    const first = (g) => parseInt(String(g.first_session).split(/[–-]/)[0], 10);
    return `
    <h1>Mạch ngữ pháp nền tảng A2</h1>
    <p class="lead">Mục tiêu là xây <b>grammar foundation</b>: mỗi điểm ngữ pháp được dạy lần đầu, ôn lại ở các unit sau và trong các buổi Review/Final.</p>
    <div class="table-wrap" style="margin-top:18px"><table>
      <thead><tr><th>Ngữ pháp</th><th>Unit</th><th>Dạy lần đầu</th><th style="min-width:160px">Vị trí trong khoá</th><th>Ôn lại</th><th>Mục tiêu</th></tr></thead>
      <tbody>${D.grammar_spine.map((g) => {
        const n = first(g);
        const s = S.find((x) => x.session_no === n);
        return `<tr>
          <td style="font-weight:600">${esc(g.grammar)}</td>
          <td>${esc(g.unit)}</td>
          <td>${s ? `<a href="${sessLink(s)}">Buổi ${esc(g.first_session)}</a>` : esc(g.first_session)}</td>
          <td><div class="spine-bar"><span style="left:${(n / max) * 100}%"></span></div></td>
          <td style="font-size:14px">${esc(g.review)}</td>
          <td style="font-size:14px">${esc(g.goal)}</td></tr>`;
      }).join("")}</tbody></table></div>`;
  }

  function pageKet(q) {
    const sel = q.get("part") || "";
    const map = {};
    S.forEach((s) => ketParts([s.ket_part, ...s.in_class.map((a) => a.activity)].join(" · ")).forEach((p) => (map[p] = map[p] || []).push(s)));
    const max = Math.max(...Object.values(map).map((a) => a.length));
    const list = sel ? map[sel] || [] : [];
    return `
    <h1>Bản đồ luyện thi A2 Key (KET)</h1>
    <p class="lead">Mỗi part của bài thi được luyện ở những buổi nào trong khoá Kick-off (tính cả hoạt động luyện đề trên lớp). Bấm vào một part để xem danh sách buổi.</p>
    <div class="ket-grid" style="margin-top:18px">
      ${Object.entries(KET_INFO).map(([paper, parts]) => `
        <div class="card"><h3>${paper}</h3>
          ${parts.map(([p, d]) => `<div class="ket-part ${p === sel ? "sel" : ""}" data-part="${p}" title="${esc(d)}">
            <b>Part ${p.slice(1)}</b><div class="bar"><i style="width:${((map[p] || []).length / max) * 100}%"></i></div><em>${(map[p] || []).length} buổi</em></div>
            <div class="muted" style="font-size:12.5px;margin:-4px 0 4px">${esc(d)}</div>`).join("")}
        </div>`).join("")}
    </div>
    ${sel ? `<h2>${sel[0] === "W" ? "Writing" : sel[0] === "R" ? "Reading" : sel[0] === "L" ? "Listening" : "Speaking"} Part ${sel.slice(1)} – ${list.length} buổi</h2>
      <div class="table-wrap"><table><thead><tr><th>#</th><th>Unit</th><th>Trọng tâm</th><th>Dạng KET</th></tr></thead><tbody>
      ${list.map((s) => `<tr class="row-link" data-href="${sessLink(s)}"><td class="num">${s.session_no}</td><td>${esc(s.unit)} ${chipType(s.type)}</td><td>${esc(s.focus)}</td><td style="font-size:14px">${esc(s.ket_part)}</td></tr>`).join("")}
      </tbody></table></div>` : ""}`;
  }

  function pageGame(q) {
    const gi = Math.min(+(q.get("lop") || 3), D.games.length - 1);
    const g = D.games[gi];
    const unit = q.get("unit") || "U1";
    const u = unitInfo(unit);
    return `
    <h1>Game theo lứa tuổi</h1>
    <p class="lead">Chọn <b>hình thức game theo độ tuổi</b>, chọn <b>nội dung câu hỏi theo trình độ</b> của lớp.</p>
    <div class="tabs">${D.games.map((x, i) => `<button class="tab ${i === gi ? "on" : ""}" data-lop="${i}">${esc(x.grade)}</button>`).join("")}</div>
    <div class="grid g2">
      <div class="card">
        <div class="eyebrow">${esc(g.age)} · ${esc(g.stage)}</div>
        <p style="margin:6px 0 14px">${esc(g.profile)}</p>
        ${g.games.map((x, i) => `<div class="game-item" style="margin-bottom:12px"><div class="ico">${i + 1}</div><div><b>${esc(x.name)}</b>${x.desc ? `<div class="muted" style="font-size:14px">${esc(x.desc)}</div>` : ""}</div></div>`).join("")}
      </div>
      <div class="card">
        <h3>Ghép game với nội dung Kick-off</h3>
        <div class="field" style="margin:10px 0">Unit đang học
          <select id="gUnit">${D.units.map((x) => `<option value="${esc(x.unit)}" ${x.unit === unit ? "selected" : ""}>${esc(x.unit)} – ${esc(x.title)}</option>`).join("")}</select>
        </div>
        <dl class="kv">
          <dt>Chủ đề</dt><dd>${esc(u.theme)}</dd>
          <dt>Từ vựng</dt><dd>${esc(u.vocabulary)}</dd>
          <dt>Ngữ pháp</dt><dd>${esc(u.grammar)}</dd>
        </dl>
        <div class="note" style="font-size:14px">Gợi ý: dùng <b>${esc(g.games[0].name)}</b> hoặc <b>${esc(g.games[1].name)}</b> để ôn từ vựng “${esc(u.theme)}”, và <b>${esc(g.games[2].name)}</b> cho phần ngữ pháp.</div>
      </div>
    </div>
    <h2>Lưu ý khi chọn game</h2>
    ${D.game_notes.map((n) => `<div class="note">${esc(n)}</div>`).join("")}`;
  }

  /* ---------- Homework tracker ---------- */
  const HW_KEY = "ivy-hw-v1";
  const DOW = [["1", "T2"], ["2", "T3"], ["3", "T4"], ["4", "T5"], ["5", "T6"], ["6", "T7"], ["0", "CN"]];
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function fmt(d) { return ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][d.getDay()] + " " + d.getDate() + "/" + (d.getMonth() + 1); }
  function schedule(cfg) {
    if (!cfg.start || !cfg.days || !cfg.days.length) return null;
    const out = [];
    const d = new Date(cfg.start + "T00:00:00");
    if (isNaN(d)) return null;
    let guard = 0;
    while (out.length < S.length && guard++ < 1000) {
      if (cfg.days.includes(String(d.getDay()))) out.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }
    return out;
  }

  function pageHomework() {
    const cfg = store.get(HW_KEY, { cls: "", start: "", days: ["2", "5"], done: {} });
    const dates = schedule(cfg);
    const todayIso = iso(new Date());
    const tasks = [];
    S.forEach((s) => { if (has(s.before)) tasks.push(s.session_id + ":before"); if (has(s.after)) tasks.push(s.session_id + ":after"); });
    const doneCount = tasks.filter((k) => cfg.done[k]).length;
    const pct = Math.round((doneCount / tasks.length) * 100);

    let todayCard = "";
    if (dates) {
      const nextIdx = dates.findIndex((d) => iso(d) >= todayIso);
      const lastIdx = nextIdx === -1 ? S.length - 1 : nextIdx - 1;
      const nextS = nextIdx >= 0 ? S[nextIdx] : null;
      const lastS = lastIdx >= 0 ? S[lastIdx] : null;
      todayCard = `<div class="grid g2" style="margin-top:14px">
        <div class="card phase after"><h3>Bài về nhà hiện tại</h3>${lastS ? `<div class="muted" style="font-size:13.5px">Từ buổi ${lastS.session_no} (${fmt(dates[lastIdx])}): ${esc(lastS.focus)}</div><p style="margin:6px 0 0">${has(lastS.after) ? esc(lastS.after) : "Buổi này không giao bài về nhà."}</p>` : `<p class="muted">Khoá học chưa bắt đầu.</p>`}</div>
        <div class="card phase before"><h3>Chuẩn bị cho buổi tới</h3>${nextS ? `<div class="muted" style="font-size:13.5px">Buổi ${nextS.session_no} – ${fmt(dates[nextIdx])}: ${esc(nextS.focus)}</div><p style="margin:6px 0 0">${has(nextS.before) ? esc(nextS.before) : "Không có bài chuẩn bị riêng – nhớ mang sách và đi đúng giờ."}</p>` : `<p class="muted">Đã hoàn thành khoá học 🎉</p>`}</div>
      </div>`;
    }

    return `
    <h1>Bài tập về nhà ${cfg.cls ? "– " + esc(cfg.cls) : ""}</h1>
    <p class="lead">Nhập ngày khai giảng và lịch học, website tự xếp lịch ${S.length} buổi và cho biết bài cần làm hôm nay. Đánh dấu bài đã hoàn thành để theo dõi tiến độ.</p>
    <div class="card" style="margin-top:18px">
      <div class="grid g3">
        <label class="field">Tên lớp<input id="hwCls" value="${esc(cfg.cls)}" placeholder="VD: Kick-off K12"></label>
        <label class="field">Ngày khai giảng<input id="hwStart" type="date" value="${esc(cfg.start)}"></label>
        <div class="field">Lịch học (chọn 2 ngày)<div class="days">${DOW.map(([v, l]) => `<label><input type="checkbox" class="hwDay" value="${v}" ${cfg.days.includes(v) ? "checked" : ""}>${l}</label>`).join("")}</div></div>
      </div>
      <div style="margin-top:16px">
        <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px"><b>Tiến độ bài tập</b><span>${doneCount}/${tasks.length} · ${pct}%</span></div>
        <div class="progress"><i style="width:${pct}%"></i></div>
      </div>
      <p class="muted" style="font-size:13px;margin:10px 0 0">Dữ liệu đánh dấu được lưu ngay trên trình duyệt của máy này.</p>
    </div>
    ${dates ? todayCard : `<div class="card empty" style="margin-top:14px">Chọn ngày khai giảng và ngày học trong tuần để xem lịch.</div>`}
    <h2>Danh sách bài tập theo buổi</h2>
    <div class="table-wrap"><table class="stack">
      <thead><tr><th>#</th><th>Ngày</th><th>Buổi học</th><th>Chuẩn bị trước</th><th>Bài về nhà</th></tr></thead>
      <tbody>${S.map((s, i) => {
        const d = dates ? dates[i] : null;
        const cb = (kind, text) => has(text) ? `<label class="hw-item ${cfg.done[s.session_id + ":" + kind] ? "done" : ""}"><input type="checkbox" class="hwDone" data-k="${s.session_id}:${kind}" ${cfg.done[s.session_id + ":" + kind] ? "checked" : ""}><span class="txt" style="font-size:14px">${esc(text)}</span></label>` : `<span class="muted">—</span>`;
        return `<tr class="${d && iso(d) === todayIso ? "today" : ""}">
          <td class="num"><a href="${sessLink(s)}">${s.session_no}</a></td>
          <td style="white-space:nowrap">${d ? fmt(d) : "—"}</td>
          <td><div style="font-weight:600;font-size:14px">${esc(s.focus)}</div>${chipType(s.type)}</td>
          <td data-l="Chuẩn bị trước">${cb("before", s.before)}</td><td data-l="Bài về nhà">${cb("after", s.after)}</td></tr>`;
      }).join("")}</tbody></table></div>
    <div class="btn-row"><button class="btn" id="hwReset">Xoá đánh dấu</button><button class="btn" onclick="window.print()">In lịch học</button></div>`;
  }

  function bindHomework() {
    const save = (mut) => { const cfg = store.get(HW_KEY, { cls: "", start: "", days: ["2", "5"], done: {} }); mut(cfg); store.set(HW_KEY, cfg); };
    const rerender = () => { const y = window.scrollY; route(); window.scrollTo(0, y); };
    document.getElementById("hwCls").addEventListener("change", (e) => { save((c) => (c.cls = e.target.value.trim())); rerender(); });
    document.getElementById("hwStart").addEventListener("change", (e) => { save((c) => (c.start = e.target.value)); rerender(); });
    document.querySelectorAll(".hwDay").forEach((el) => el.addEventListener("change", () => {
      save((c) => (c.days = [...document.querySelectorAll(".hwDay:checked")].map((x) => x.value))); rerender();
    }));
    document.querySelectorAll(".hwDone").forEach((el) => el.addEventListener("change", () => {
      save((c) => { if (el.checked) c.done[el.dataset.k] = true; else delete c.done[el.dataset.k]; }); rerender();
    }));
    document.getElementById("hwReset").addEventListener("click", () => { if (confirm("Xoá toàn bộ đánh dấu bài tập?")) { save((c) => (c.done = {})); rerender(); } });
  }

  /* ---------- router ---------- */
  function route() {
    const raw = location.hash.replace(/^#\/?/, "");
    const [path, qs] = raw.split("?");
    const q = new URLSearchParams(qs || "");
    const parts = path.split("/");
    const name = parts[0] || "home";
    let html;
    switch (name) {
      case "kickoff": html = pageKickoff(); break;
      case "lo-trinh": html = pagePlan(q); break;
      case "buoi": html = pageSession(decodeURIComponent(parts[1] || "")); break;
      case "ngu-phap": html = pageGrammar(); break;
      case "ket": html = pageKet(q); break;
      case "game": html = pageGame(q); break;
      case "bai-tap": html = pageHomework(); break;
      default: html = pageHome();
    }
    app.innerHTML = html;
    const navName = name === "buoi" ? "lo-trinh" : name;
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === navName));
    document.getElementById("nav").classList.remove("open");
    document.title = (name === "home" ? "" : (document.querySelector("#app h1")?.textContent || "") + " · ") + "IVY Teen";

    if (name === "lo-trinh") {
      renderPlanTable();
      ["fText", "fUnit", "fType"].forEach((id) => document.getElementById(id).addEventListener("input", renderPlanTable));
    }
    if (name === "buoi") {
      const btn = document.getElementById("copyMsg");
      if (btn) btn.addEventListener("click", async () => {
        const text = document.getElementById("msgPreview").textContent;
        try { await navigator.clipboard.writeText(text); btn.textContent = "Đã sao chép ✓"; }
        catch (e) { const r = document.createRange(); r.selectNodeContents(document.getElementById("msgPreview")); getSelection().removeAllRanges(); getSelection().addRange(r); btn.textContent = "Đã bôi đen – nhấn Ctrl+C"; }
      });
    }
    if (name === "ket") {
      document.querySelectorAll(".ket-part").forEach((el) => el.addEventListener("click", () => (location.hash = "#/ket?part=" + el.dataset.part)));
      document.querySelectorAll("tr.row-link").forEach((tr) => tr.addEventListener("click", () => (location.hash = tr.dataset.href)));
    }
    if (name === "game") {
      const lop = q.get("lop") || "3";
      document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => (location.hash = `#/game?lop=${b.dataset.lop}&unit=${encodeURIComponent(document.getElementById("gUnit").value)}`)));
      document.getElementById("gUnit").addEventListener("change", (e) => (location.hash = `#/game?lop=${lop}&unit=${encodeURIComponent(e.target.value)}`));
    }
    if (name === "bai-tap") bindHomework();
  }

  let lastPath = null;
  window.addEventListener("hashchange", () => {
    const p = location.hash.split("?")[0];
    route();
    if (p !== lastPath) window.scrollTo(0, 0);
    lastPath = p;
  });
  document.getElementById("menuBtn").addEventListener("click", (e) => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  lastPath = location.hash.split("?")[0];
  route();
})();
