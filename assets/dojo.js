/* IVY Teen – giao diện lớp học kiểu "bảng điểm lớp": avatar quái vật, cho điểm theo kỹ năng,
 * bảng tin lớp, bộ công cụ trên lớp, báo cáo điểm. Dùng bởi assets/account.js. */
(function () {
  "use strict";
  const K = () => window.IVY_CORE;
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const srvMsg = (e) => (/Không rõ thao tác/.test(e.message) ? "Máy chủ chưa có chức năng này. Quản lý cần dán lại Code.gs mới và triển khai phiên bản mới (xem server/HUONG-DAN.md)." : e.message);

  /* ================= avatar gấu trúc đỏ (linh vật IVY) – vẽ khối 3D, nghiêng đầu, 24 mẫu ================= */
  const BG = [["#e3e9ff", "#b9c6ff"], ["#ffe9dc", "#ffc3a3"], ["#e2f7ea", "#ace6c4"], ["#fff4cf", "#ffdf85"], ["#f0e6ff", "#d2b9ff"], ["#dcf5fa", "#a5e3ef"]];
  const POSE = [[0, 0], [-10, -0.6], [9, 0.55], [-5, 0.9], [13, -0.3], [-14, 0.3]]; // [độ nghiêng, quay mặt -1..1]
  let AVN = 0;
  const EXPR = [
    (u) => `<ellipse cx="0" cy="0" rx="4.6" ry="5.2" fill="url(#${u}e)"/><circle cx="1.6" cy="-2" r="1.7" fill="#fff"/><circle cx="-1.4" cy="2" r=".8" fill="#fff" opacity=".8"/>`,
    () => `<path d="M-5 1Q0 -5 5 1" stroke="#2b1a12" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    (u) => `<ellipse cx="0" cy=".5" rx="4.2" ry="3.6" fill="url(#${u}e)"/><circle cx="1.4" cy="-.8" r="1.3" fill="#fff"/><path d="M-6 -6L5 -3.5" stroke="#3a2015" stroke-width="2.2" stroke-linecap="round"/>`,
    (u) => `<ellipse cx="0" cy="0" rx="5.6" ry="6.4" fill="url(#${u}e)"/><circle cx="2" cy="-2.6" r="2.3" fill="#fff"/><circle cx="-1.8" cy="2.6" r="1.1" fill="#fff" opacity=".85"/>`,
  ];
  const MOUTH = [
    () => `<path d="M-4.5 2.5Q0 9 4.5 2.5Z" fill="#7a2c1d"/><path d="M-2.2 5.6Q0 7.6 2.2 5.6" fill="#ff8fa3"/>`,
    () => `<path d="M-4.5 2Q-2.2 5 0 2.6Q2.2 5 4.5 2" stroke="#4a2a1a" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
    () => `<path d="M-3.5 4Q0 2.4 3.5 4" stroke="#4a2a1a" stroke-width="1.7" fill="none" stroke-linecap="round"/>`,
    () => `<path d="M-4 2.2Q-2 5.2 0 2.8Q2 5.2 4 2.2" stroke="#4a2a1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="5" rx="1.8" ry="1.4" fill="#ff8fa3"/>`,
  ];
  const ACC = [
    () => "",
    (u) => `<path d="M23 37Q25 15 50 14Q75 15 77 37Q50 31 23 37Z" fill="url(#${u}cap)"/><path d="M60 35Q83 32 91 40Q76 44 58 40Z" fill="#070e7a"/><circle cx="50" cy="15" r="2.6" fill="#d7192a"/><text x="50" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="#fff" font-family="Arial,sans-serif">IVY</text>`,
    (u) => `<path d="M15 57Q14 18 50 17Q86 18 85 57" stroke="#2c2f48" stroke-width="5.5" fill="none" stroke-linecap="round"/><rect x="8" y="49" width="13" height="20" rx="6" fill="url(#${u}hp)"/><rect x="79" y="49" width="13" height="20" rx="6" fill="url(#${u}hp)"/>`,
    () => `<g fill="#fff" fill-opacity=".22" stroke="#1d2a6b" stroke-width="2.3"><circle cx="-12.5" cy="0" r="8.6"/><circle cx="12.5" cy="0" r="8.6"/></g><path d="M-4 -.5Q0 -3 4 -.5" stroke="#1d2a6b" stroke-width="2.1" fill="none"/>`,
    () => `<g transform="translate(71 26) rotate(20)"><path d="M0 0L-12 -8Q-15 0 -12 8Z" fill="#ff5c8d"/><path d="M0 0L12 -8Q15 0 12 8Z" fill="#ff5c8d"/><path d="M-10 -5L-3 -1M10 -5L3 -1" stroke="#fff" stroke-opacity=".5" stroke-width="1.5"/><circle r="3.6" fill="#d81b60"/></g>`,
    () => `<path d="M50 8L85 20L50 32L15 20Z" fill="#23232f"/><path d="M50 8L85 20L50 24Z" fill="#3a3a4d"/><path d="M33 26V34Q50 41 67 34V26L50 32Z" fill="#2c2c3c"/><path d="M81 21V34" stroke="#ffc83d" stroke-width="2"/><circle cx="81" cy="36" r="2.8" fill="#ffc83d"/>`,
  ];
  const AVATARS = Array.from({ length: 24 }, (_, i) => "m" + String(i + 1).padStart(2, "0"));
  function hashAv(code) { let h = 0; for (const ch of String(code || "x")) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return AVATARS[h % AVATARS.length]; }
  function monster(id, code) {
    if (!/^m\d{2}$/.test(id || "")) id = hashAv(code);
    const i = Math.max(0, (parseInt(id.slice(1), 10) || 1) - 1) % 24;
    const ex = i % 4, ac = Math.floor(i / 4) % 6, [b1, b2] = BG[(i + Math.floor(i / 4)) % 6];
    const [tilt, turn] = POSE[(i * 5 + ac) % 6];
    const u = "rp" + (++AVN), dx = turn * 5.5;
    const near = turn >= 0 ? 1 : -1; // bên mặt gần người xem (to hơn)
    const sL = 1 - Math.max(0, turn) * 0.12, sR = 1 - Math.max(0, -turn) * 0.12; // co phía xa
    const ear = (side) => { const sc = side < 0 ? sL : sR; const x = 50 + side * 31; return `<g transform="translate(${x} 22) scale(${side * sc} ${sc})"><path d="M-14 22Q-17 -4 0 -9Q12 -3 13 14Z" fill="url(#${u}ear)"/><path d="M-10 18Q-12 -1 0 -4Q8 0 9 12Z" fill="#fff4ea"/><path d="M-7 16Q-8 2 0 0Q5 3 6 11Z" fill="#5b2a14"/></g>`; };
    const eyeAt = (side) => `<g transform="translate(${50 + side * 12.5 * (side < 0 ? sL : sR) + dx} 57)">${EXPR[ex](u)}</g>`;
    const patch = (side) => { const sc = side < 0 ? sL : sR; return `<g transform="translate(${50 + dx + side * 15 * sc} 60) scale(${side * sc} 1)"><path d="M-8 -9C-2 -12 7 -10 9 -2C11 7 6 13 -1 13C-8 13 -12 7 -11 0C-11 -4 -10 -7 -8 -9Z" fill="url(#${u}w)"/><path d="M-3 -6C2 -8 6 -4 5 2C4 8 0 14 -4 16C-5 10 -6 2 -3 -6Z" fill="url(#${u}tear)"/></g>`; };
    return `<svg viewBox="0 0 100 100" class="mon" aria-hidden="true"><defs>
      <radialGradient id="${u}bg" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${b1}"/><stop offset="1" stop-color="${b2}"/></radialGradient>
      <radialGradient id="${u}fur" cx="${0.38 - turn * 0.08}" cy=".3" r=".75"><stop offset="0" stop-color="#ffd2a3"/><stop offset=".45" stop-color="#f0a865"/><stop offset=".85" stop-color="#d27e3e"/><stop offset="1" stop-color="#b8652c"/></radialGradient>
      <radialGradient id="${u}ear" cx=".3" cy=".3" r=".9"><stop offset="0" stop-color="#e59a5c"/><stop offset="1" stop-color="#9c4e22"/></radialGradient>
      <radialGradient id="${u}w" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1e2d6"/></radialGradient>
      <linearGradient id="${u}tear" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6612c"/><stop offset="1" stop-color="#8a4420"/></linearGradient>
      <radialGradient id="${u}e" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#5a3a2a"/><stop offset=".6" stop-color="#22140d"/><stop offset="1" stop-color="#0d0705"/></radialGradient>
      <linearGradient id="${u}body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c96f33"/><stop offset="1" stop-color="#7a3a17"/></linearGradient>
      <linearGradient id="${u}cap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b48e0"/><stop offset="1" stop-color="#0b16b0"/></linearGradient>
      <linearGradient id="${u}hp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5a68"/><stop offset="1" stop-color="#b3101e"/></linearGradient>
      <filter id="${u}sh" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.2"/></filter></defs>
      <circle cx="50" cy="50" r="50" fill="url(#${u}bg)"/>
      <ellipse cx="50" cy="96" rx="30" ry="6" fill="#000" opacity=".12" filter="url(#${u}sh)"/>
      <path d="M20 100Q22 80 50 78Q78 80 80 100Z" fill="url(#${u}body)"/><path d="M34 100Q37 86 50 85Q63 86 66 100Z" fill="#5a2a12" opacity=".55"/>
      <g transform="rotate(${tilt} 50 60)">
        <ellipse cx="${50 + dx * 0.4}" cy="86" rx="24" ry="5" fill="#000" opacity=".18" filter="url(#${u}sh)"/>
        ${ear(-1)}${ear(1)}
        <path d="M50 28C74 28 87 41 87 57C87 63 85 67 82 70L86 73L79 74L81 78L73 77L72 82L64 80Q57 84 50 84Q43 84 36 80L28 82L27 77L19 78L21 74L14 73L18 70C15 67 13 63 13 57C13 41 26 28 50 28Z" fill="url(#${u}fur)"/>
        <path d="M18 70L14 73L21 74L19 78L27 77L28 82L36 80Q30 76 26 70Q22 70 18 70Z" fill="#fff8f0"/><path d="M82 70L86 73L79 74L81 78L73 77L72 82L64 80Q70 76 74 70Q78 70 82 70Z" fill="#fff8f0"/>
        <ellipse cx="${38 + dx}" cy="38" rx="13" ry="6" fill="#fff" opacity=".22"/>
        <ellipse cx="${36 + dx}" cy="44" rx="4.4" ry="2.4" fill="#fff"/><ellipse cx="${64 + dx}" cy="44" rx="4.4" ry="2.4" fill="#fff"/>
        ${patch(-1)}${patch(1)}
        <ellipse cx="${50 + dx * 1.15}" cy="69" rx="${11.5 - Math.abs(turn) * 1.5}" ry="8.6" fill="url(#${u}w)"/>
        ${eyeAt(-1)}${eyeAt(1)}
        <g transform="translate(${50 + dx * 1.3} 64.5)"><path d="M-3.8 -.6Q0 -2.6 3.8 -.6Q2.6 3 0 3.6Q-2.6 3 -3.8 -.6Z" fill="#241510"/><ellipse cx="-1" cy="-.4" rx="1.3" ry=".7" fill="#fff" opacity=".6"/></g>
        <g transform="translate(${50 + dx * 1.3} 66.5)">${MOUTH[ex]()}</g>
        <ellipse cx="${27 + dx * 0.6}" cy="71" rx="4.2" ry="2.4" fill="#ff7f97" opacity=".4"/><ellipse cx="${73 + dx * 0.6}" cy="71" rx="4.2" ry="2.4" fill="#ff7f97" opacity=".4"/>
        ${ac === 3 ? `<g transform="translate(${50 + dx} 57)">${ACC[3](u)}</g>` : ACC[ac](u)}
      </g></svg>`;
  }

  /* ================= kỹ năng ================= */
  const POS = [["Khen thưởng", "⭐"], ["Phát biểu", "🙋"], ["Làm BTVN", "📝"], ["Tập trung", "🎯"], ["Làm việc nhóm", "🤝"], ["Giúp đỡ bạn", "💛"], ["Sáng tạo", "💡"], ["Nói tiếng Anh", "🗣️"], ["Kiên trì", "💪"]];
  const NEG = [["Nói chuyện riêng", "🤐"], ["Quên BTVN", "📭"], ["Đi muộn", "⏰"], ["Mất tập trung", "😴"], ["Dùng điện thoại", "📵"], ["Quên sách vở", "🎒"]];
  const ICON = Object.fromEntries([...POS, ...NEG]);
  const skIcon = (s) => ICON[s] || "⭐";
  const total = (pts) => (pts || []).reduce((t, p) => t + (+p.v || 0), 0);
  const tally = (pts) => { let pos = 0, neg = 0; (pts || []).forEach((p) => (p.v > 0 ? (pos += p.v) : (neg -= p.v))); return { pos, neg, pct: pos + neg ? Math.round((pos / (pos + neg)) * 100) : null }; };
  const fmtAt = (at) => { const m = String(at || "").match(/^(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/); return m ? `${+m[3]}/${+m[2]}${m[4] ? " · " + m[4] + ":" + m[5] : ""}` : ""; };

  /* ================= âm thanh nhỏ ================= */
  let ac = null;
  function ding(good) {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const notes = good ? [660, 880, 1320] : [330, 247];
      notes.forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = good ? "triangle" : "sine"; o.frequency.value = f; g.gain.setValueAtTime(0.0001, ac.currentTime + i * 0.09); g.gain.exponentialRampToValueAtTime(0.18, ac.currentTime + i * 0.09 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + i * 0.09 + 0.25); o.connect(g).connect(ac.destination); o.start(ac.currentTime + i * 0.09); o.stop(ac.currentTime + i * 0.09 + 0.3); });
    } catch (e) {}
  }

  /* ================= khung hộp thoại ================= */
  function modal(html, cls) {
    close();
    const el = document.createElement("div");
    el.className = "dj-modal"; el.id = "djModal";
    el.innerHTML = `<div class="dj-sheet ${cls || ""}" role="dialog" aria-modal="true"><button class="dj-x" aria-label="Đóng">×</button>${html}</div>`;
    document.body.appendChild(el);
    el.addEventListener("click", (e) => { if (e.target === el || e.target.classList.contains("dj-x")) close(); });
    document.addEventListener("keydown", escClose);
    return el;
  }
  function escClose(e) { if (e.key === "Escape") close(); }
  function close() { const m = $("djModal"); if (m) m.remove(); document.removeEventListener("keydown", escClose); }
  function toast(html, good) {
    const t = document.createElement("div");
    t.className = "dj-toast " + (good ? "good" : "bad");
    t.innerHTML = html;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add("out"), 1700);
    setTimeout(() => t.remove(), 2200);
  }

  /* ================= chọn avatar ================= */
  function pickAvatar(cur, code, onDone) {
    const m = modal(`<h2 style="margin-top:0">Chọn gấu trúc đỏ của em</h2><p class="muted" style="margin:-4px 0 14px">Bấm chọn một bạn gấu trúc đỏ IVY. Đổi lại lúc nào cũng được.</p>
      <div class="av-grid">${AVATARS.map((a) => `<button class="av-opt ${a === cur ? "on" : ""}" data-av="${a}">${monster(a)}</button>`).join("")}</div><div class="auth-msg" id="avMsg"></div>`, "wide");
    m.querySelectorAll("[data-av]").forEach((b) => b.addEventListener("click", async () => {
      m.querySelectorAll(".av-opt").forEach((x) => x.classList.toggle("on", x === b));
      try { await K().api("setAvatar", { avatar: b.dataset.av }); K().setSession(Object.assign(K().session(), { avatar: b.dataset.av })); close(); onDone && onDone(b.dataset.av); }
      catch (e) {
        if (/Không rõ thao tác/.test(e.message)) { K().setSession(Object.assign(K().session(), { avatar: b.dataset.av })); close(); onDone && onDone(b.dataset.av); return; }
        const el = $("avMsg"); el.className = "auth-msg err"; el.textContent = srvMsg(e);
      }
    }));
  }

  /* ================= GIÁO VIÊN: lưới lớp học ================= */
  let lastBatch = null, SRV_OK = false;
  const SRV_WARN = `<div class="card srv-warn"><b>⚠️ Máy chủ chưa cập nhật nên chưa cộng sao được.</b><ol><li>Mở Google Sheet <b>IVY Teen – Tài khoản</b> → <b>Tiện ích mở rộng → Apps Script</b>.</li><li>Xoá mã cũ, dán toàn bộ mã mới từ <a href="https://raw.githubusercontent.com/IVY-GLOBAL-TEENS/diem-cao-tren-lop-dat-chung-chi-cambridge-/main/server/Code.gs" target="_blank" rel="noopener">link này</a> → bấm <b>Lưu</b>.</li><li><b>Triển khai → Quản lý triển khai → ✏️ → Phiên bản mới → Triển khai</b>, rồi tải lại trang này.</li></ol></div>`;
  function classroom(box, cl, sts, points, refresh) {
    const byCode = {}; points.forEach((p) => (byCode[p.code] = byCode[p.code] || []).push(p));
    let multi = false; const sel = new Set();
    let sort = K().ls.get("dj-sort", "name");
    if (!SRV_OK) K().api("ping").then(() => (SRV_OK = true)).catch((e) => { if (/Không rõ thao tác/.test(e.message) && box.isConnected) box.insertAdjacentHTML("afterbegin", SRV_WARN); });
    const draw = () => {
      const list = sts.slice().sort((a, b) => (sort === "pts" ? total(byCode[b.code]) - total(byCode[a.code]) : 0) || a.name.split(" ").pop().localeCompare(b.name.split(" ").pop(), "vi"));
      const classPts = total(points.filter((p) => sts.some((x) => x.code === p.code)));
      box.innerHTML = `<div class="dj-bar">
          <button class="btn ${multi ? "primary" : ""}" id="djMulti">${multi ? "✓ Đang chọn nhiều" : "☑️ Chọn nhiều em"}</button>
          ${multi ? `<button class="btn" id="djAll">Chọn cả lớp</button><button class="btn primary" id="djGiveSel" ${sel.size ? "" : "disabled"}>⭐ Cộng sao cho ${sel.size || ""} em</button>` : ""}
          <span class="sp"></span>
          <label class="dj-sort">Xếp theo <select id="djSort"><option value="name" ${sort === "name" ? "selected" : ""}>Tên</option><option value="pts" ${sort === "pts" ? "selected" : ""}>Điểm</option></select></label>
          ${lastBatch ? `<button class="btn" id="djUndo">↶ Huỷ lần vừa cho</button>` : ""}</div>
        <div class="dj-grid">
          <button class="dj-tile whole" id="djWhole"><span class="dj-av"><span class="whole-ic">👥</span></span><b>Cả lớp</b><span class="dj-pts ${classPts < 0 ? "neg" : ""}">${classPts}</span></button>
          ${list.map((x) => { const t = total(byCode[x.code]); return `<button class="dj-tile ${sel.has(x.code) ? "sel" : ""} ${x.activated ? "" : "off"}" data-code="${esc(x.code)}"><span class="dj-av">${monster(x.avatar, x.code)}</span><b>${esc(x.name.split(" ").slice(-2).join(" "))}</b><span class="dj-pts ${t < 0 ? "neg" : ""}">${t}</span>${multi ? `<i class="dj-check">${sel.has(x.code) ? "✓" : ""}</i>` : ""}</button>`; }).join("")}
        </div>
        <p class="muted" style="font-size:13px;margin-top:12px">Bấm <b>Cả lớp</b> để cộng sao cho cả lớp, bấm <b>một em</b> để cộng riêng, hoặc <b>Chọn nhiều em</b> rồi cộng một lượt. Chọn số sao (1–10) và kỹ năng trong bảng hiện ra. Học sinh thấy sao và lời nhận xét ngay trong trang của em. Ô mờ là em chưa kích hoạt mã.</p>`;
      $("djMulti").onclick = () => { multi = !multi; sel.clear(); draw(); };
      $("djSort").onchange = (e) => { sort = e.target.value; K().ls.set("dj-sort", sort); draw(); };
      if ($("djAll")) $("djAll").onclick = () => { sts.forEach((x) => sel.add(x.code)); draw(); };
      if ($("djGiveSel")) $("djGiveSel").onclick = () => giveModal(sts.filter((x) => sel.has(x.code)), done);
      if ($("djUndo")) $("djUndo").onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true;
        try { await K().api("undoPoints", { ids: lastBatch.map((p) => p.id) }); const ids = new Set(lastBatch.map((p) => p.id)); for (let i = points.length - 1; i >= 0; i--) if (ids.has(points[i].id)) points.splice(i, 1); Object.keys(byCode).forEach((k) => (byCode[k] = byCode[k].filter((p) => !ids.has(p.id)))); lastBatch = null; draw(); toast("↶ Đã huỷ", true); }
        catch (err) { b.disabled = false; alert(srvMsg(err)); }
      };
      $("djWhole").onclick = () => giveModal(sts, done, true);
      box.querySelectorAll(".dj-tile[data-code]").forEach((t) => (t.onclick = () => {
        const x = sts.find((y) => y.code === t.dataset.code);
        if (multi) { sel.has(x.code) ? sel.delete(x.code) : sel.add(x.code); draw(); } else giveModal([x], done);
      }));
    };
    const done = (given) => {
      given.forEach((p) => { points.push(p); (byCode[p.code] = byCode[p.code] || []).push(p); });
      lastBatch = given; sel.clear(); multi = false; draw();
    };
    draw();
  }

  function giveModal(list, done, whole) {
    if (!list.length) return;
    const one = list.length === 1 ? list[0] : null;
    const head = one ? `<div class="dj-mh"><span class="dj-av lg">${monster(one.avatar, one.code)}</span><div><h2>${esc(one.name)}</h2><span class="muted">Cộng hoặc trừ sao theo kỹ năng</span></div></div>`
      : `<div class="dj-mh"><span class="dj-av lg"><span class="whole-ic">👥</span></span><div><h2>${whole ? "Cả lớp" : list.length + " học sinh"}</h2><span class="muted">${list.length} em cùng nhận sao</span></div></div>`;
    let n = K().ls.get("dj-amt", 1) || 1;
    const tiles = (arr, sign) => arr.map(([nm, ic]) => `<button class="dj-sk ${sign > 0 ? "pos" : "neg"}" data-sk="${esc(nm)}" data-sign="${sign}"><span class="ic">${ic}</span><b>${esc(nm)}</b><span class="pv">${sign > 0 ? "+" : "−"}<i class="amt">${n}</i></span></button>`).join("");
    const m = modal(`${head}
      <div class="dj-amt"><span>Số sao mỗi lần:</span>${[1, 2, 3, 5, 10].map((k) => `<button data-amt="${k}" class="${k === n ? "on" : ""}">${k} ⭐</button>`).join("")}<label>Khác <input type="number" min="1" max="10" id="amtIn" value="${[1, 2, 3, 5, 10].includes(n) ? "" : n}" placeholder="1–10"></label></div>
      <div class="dj-tabs"><button class="on" data-t="pos">👍 Cộng sao · tích cực</button><button data-t="neg">💪 Trừ sao · cần cố gắng</button></div>
      <div class="dj-sks" data-p="pos">${tiles(POS, 1)}</div><div class="dj-sks" data-p="neg" hidden>${tiles(NEG, -1)}</div>
      <div class="auth-msg" id="gMsg"></div>`, "wide");
    const setAmt = (k) => { n = Math.max(1, Math.min(10, Math.round(+k) || 1)); K().ls.set("dj-amt", n); m.querySelectorAll("[data-amt]").forEach((b) => b.classList.toggle("on", +b.dataset.amt === n)); m.querySelectorAll(".amt").forEach((x) => (x.textContent = n)); };
    m.querySelectorAll("[data-amt]").forEach((b) => (b.onclick = () => { $("amtIn").value = ""; setAmt(b.dataset.amt); }));
    $("amtIn").oninput = (e) => { if (e.target.value) setAmt(e.target.value); };
    m.querySelectorAll(".dj-tabs button").forEach((b) => (b.onclick = () => { m.querySelectorAll(".dj-tabs button").forEach((x) => x.classList.toggle("on", x === b)); m.querySelectorAll(".dj-sks").forEach((p) => (p.hidden = p.dataset.p !== b.dataset.t)); }));
    m.querySelectorAll(".dj-sk").forEach((b) => (b.onclick = async () => {
      m.querySelectorAll(".dj-sk").forEach((x) => (x.disabled = true)); b.classList.add("busy");
      const v = +b.dataset.sign * n;
      try {
        const j = await K().api("givePoints", { codes: list.map((x) => x.code), skill: b.dataset.sk, value: v });
        close(); ding(v > 0);
        toast(`${one ? `<span class="dj-av sm">${monster(one.avatar, one.code)}</span>` : "<span class='big'>👥</span>"}<div><b>${v > 0 ? "+" + v : "−" + -v} ⭐ ${esc(b.dataset.sk)}</b><small>${one ? esc(one.name) : list.length + " em"}</small></div>`, v > 0);
        done(j.points || []);
      } catch (e) { m.querySelectorAll(".dj-sk").forEach((x) => (x.disabled = false)); b.classList.remove("busy"); const el = $("gMsg"); el.className = "auth-msg err"; el.textContent = srvMsg(e); }
    }));
  }

  /* ================= bảng tin lớp ================= */
  async function compress(file) {
    const url = URL.createObjectURL(file);
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
    URL.revokeObjectURL(url);
    const cv = document.createElement("canvas"), cx = cv.getContext("2d");
    for (const max of [900, 720, 560, 440, 340]) {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
      cx.fillStyle = "#fff"; cx.fillRect(0, 0, cv.width, cv.height); cx.drawImage(img, 0, 0, cv.width, cv.height);
      for (const q of [0.72, 0.58, 0.45]) { const d = cv.toDataURL("image/jpeg", q); if (d.length < 46000) return d; }
    }
    return null;
  }
  const storyCard = (st, canDel) => `<article class="card dj-post"><header><span class="dj-tav">${esc((st.by || "?").trim().split(/\s+/).pop().charAt(0))}</span><div><b>${esc(st.by || "Giáo viên")}</b><small>${esc(fmtAt(st.at))}</small></div>${canDel ? `<button class="btn sm danger" data-sdel="${esc(st.id)}">Xoá</button>` : ""}</header>
      ${st.text ? `<p>${esc(st.text).replace(/\n/g, "<br>").replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')}</p>` : ""}${st.img ? `<img src="${st.img}" alt="Ảnh hoạt động lớp" loading="lazy">` : ""}</article>`;

  async function story(box, cl, teacher) {
    box.innerHTML = `${teacher ? `<form class="card dj-compose" id="sForm"><textarea id="sText" rows="3" maxlength="2000" placeholder="Chia sẻ với cả lớp: thông báo, bài tập, khoảnh khắc trên lớp…"></textarea>
        <div class="dj-cbar"><label class="btn">📷 Thêm ảnh<input type="file" accept="image/*" id="sImg" hidden></label><span id="sPrev" class="dj-prev"></span><span class="sp"></span><button class="btn primary" id="sGo">Đăng lên bảng tin</button></div><div class="auth-msg" id="sMsg"></div></form>` : ""}
      <div id="sList"><div class="card empty">Đang tải bảng tin…</div></div>`;
    let img = "";
    const list = $("sList");
    const drawList = (arr) => {
      list.innerHTML = arr.length ? arr.map((x) => storyCard(x, teacher)).join("") : `<div class="card empty">${teacher ? "Chưa có bài đăng nào. Đăng thông báo hoặc ảnh hoạt động đầu tiên cho lớp nhé!" : "Thầy cô chưa đăng gì lên bảng tin lớp."}</div>`;
      list.querySelectorAll("[data-sdel]").forEach((b) => (b.onclick = async () => {
        if (!confirm("Xoá bài đăng này?")) return;
        b.disabled = true;
        try { await K().api("deleteStory", { sid: b.dataset.sdel }); arr = arr.filter((x) => x.id !== b.dataset.sdel); drawList(arr); } catch (e) { b.disabled = false; alert(srvMsg(e)); }
      }));
      return arr;
    };
    let items = [];
    try { items = drawList((await K().api("stories", { id: cl && cl.id })).stories || []); } catch (e) { list.innerHTML = `<div class="card empty">${esc(srvMsg(e))}</div>`; }
    if (!teacher) return;
    $("sImg").onchange = async (e) => {
      const f = e.target.files[0]; if (!f) return;
      $("sPrev").textContent = "Đang nén ảnh…";
      try { img = (await compress(f)) || ""; } catch (err) { img = ""; }
      $("sPrev").innerHTML = img ? `<img src="${img}" alt=""><button type="button" class="btn sm" id="sNoImg">Bỏ ảnh</button>` : "Không đọc được ảnh này.";
      if ($("sNoImg")) $("sNoImg").onclick = () => { img = ""; $("sPrev").innerHTML = ""; $("sImg").value = ""; };
    };
    $("sForm").onsubmit = async (e) => {
      e.preventDefault();
      const text = $("sText").value.trim(), m = $("sMsg");
      if (!text && !img) { m.className = "auth-msg err"; m.textContent = "Nhập nội dung hoặc chọn ảnh."; return; }
      $("sGo").disabled = true; $("sGo").textContent = "Đang đăng…";
      try {
        const j = await K().api("postStory", { id: cl.id, text, img });
        items = drawList([j.story].concat(items)); $("sText").value = ""; img = ""; $("sPrev").innerHTML = ""; $("sImg").value = "";
        m.className = "auth-msg ok"; m.textContent = "Đã đăng ✓ – học sinh trong lớp sẽ thấy trên trang của em.";
      } catch (err) { m.className = "auth-msg err"; m.textContent = srvMsg(err); }
      $("sGo").disabled = false; $("sGo").textContent = "Đăng lên bảng tin";
    };
  }

  /* ================= bộ công cụ trên lớp ================= */
  let timerT = null, noise = null;
  function stopTools() { clearInterval(timerT); timerT = null; if (noise) { try { noise.stream.getTracks().forEach((t) => t.stop()); noise.ctx.close(); } catch (e) {} cancelAnimationFrame(noise.raf); noise = null; } }
  window.addEventListener("hashchange", () => { stopTools(); close(); });

  function tools(box, cl, sts) {
    const T = [["timer", "⏱️", "Bấm giờ"], ["random", "🎲", "Gọi ngẫu nhiên"], ["groups", "👥", "Chia nhóm"], ["noise", "🔊", "Đo tiếng ồn"]];
    let cur = K().ls.get("dj-tool", "timer");
    const draw = () => {
      stopTools();
      box.innerHTML = `<div class="dj-tools">${T.map(([k, ic, l]) => `<button class="dj-tool ${k === cur ? "on" : ""}" data-tool="${k}"><span>${ic}</span>${l}</button>`).join("")}<span class="sp"></span><button class="btn" id="tFull">⛶ Toàn màn hình</button></div><div class="card dj-stage" id="tStage"></div>`;
      box.querySelectorAll("[data-tool]").forEach((b) => (b.onclick = () => { cur = b.dataset.tool; K().ls.set("dj-tool", cur); draw(); }));
      $("tFull").onclick = () => { const st = $("tStage"); (st.requestFullscreen || st.webkitRequestFullscreen || (() => {})).call(st); };
      ({ timer, random, groups, noiseMeter })[cur === "noise" ? "noiseMeter" : cur]($("tStage"), sts);
    };
    draw();
  }

  function timer(st) {
    let left = K().ls.get("dj-timer", 300), run = false, endAt = 0;
    const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    st.innerHTML = `<div class="tm-presets">${[1, 2, 3, 5, 10, 15].map((m) => `<button class="btn" data-m="${m}">${m} phút</button>`).join("")}<span class="tm-adj"><button class="btn" data-add="-30">−30s</button><button class="btn" data-add="30">+30s</button></span></div>
      <div class="tm-big" id="tmBig">${fmt(left)}</div><div class="tm-bar"><i id="tmBar" style="width:100%"></i></div>
      <div class="btn-row" style="justify-content:center"><button class="btn primary big" id="tmGo">▶ Bắt đầu</button><button class="btn big" id="tmReset">↺ Đặt lại</button></div>`;
    let full = left;
    const show = () => { $("tmBig").textContent = fmt(Math.max(0, left)); $("tmBar").style.width = (full ? (left / full) * 100 : 0) + "%"; $("tmBig").classList.toggle("warn", left <= 10 && left > 0); $("tmBig").classList.toggle("done", left <= 0); };
    const stop = () => { run = false; clearInterval(timerT); $("tmGo").textContent = "▶ Tiếp tục"; };
    const set = (s) => { stop(); left = full = Math.max(5, s); K().ls.set("dj-timer", left); $("tmGo").textContent = "▶ Bắt đầu"; show(); };
    st.querySelectorAll("[data-m]").forEach((b) => (b.onclick = () => set(+b.dataset.m * 60)));
    st.querySelectorAll("[data-add]").forEach((b) => (b.onclick = () => { left = Math.max(5, left + +b.dataset.add); full = Math.max(full, left); if (!run) K().ls.set("dj-timer", left); show(); }));
    $("tmReset").onclick = () => set(K().ls.get("dj-timer", 300));
    $("tmGo").onclick = () => {
      if (run) return stop();
      if (left <= 0) set(full);
      run = true; endAt = Date.now() + left * 1000; $("tmGo").textContent = "⏸ Tạm dừng";
      timerT = setInterval(() => { left = Math.round((endAt - Date.now()) / 1000); show(); if (left <= 0) { stop(); $("tmGo").textContent = "▶ Bắt đầu"; ding(true); setTimeout(() => ding(true), 400); setTimeout(() => ding(true), 800); } }, 250);
    };
    show();
  }

  function random(st, sts) {
    let pool = sts.slice(), noRepeat = true;
    st.innerHTML = `<div class="rd-wrap"><div class="rd-card" id="rdCard"><span class="dj-av xl"><span class="whole-ic">🎲</span></span><b>Sẵn sàng!</b></div>
      <div class="btn-row" style="justify-content:center"><button class="btn primary big" id="rdGo">🎲 Gọi tên</button></div>
      <label class="rd-opt"><input type="checkbox" id="rdNo" checked> Không gọi lại em đã được gọi <span class="muted" id="rdLeft"></span></label></div>`;
    const left = () => ($("rdLeft").textContent = `(còn ${pool.length}/${sts.length} em)`);
    $("rdNo").onchange = (e) => { noRepeat = e.target.checked; pool = sts.slice(); left(); };
    left();
    $("rdGo").onclick = () => {
      if (!sts.length) return;
      if (!pool.length) pool = sts.slice();
      const btn = $("rdGo"); btn.disabled = true;
      let n = 0; const spins = 16;
      const tick = () => {
        const x = pool[Math.floor(Math.random() * pool.length)];
        $("rdCard").innerHTML = `<span class="dj-av xl">${monster(x.avatar, x.code)}</span><b>${esc(x.name)}</b>`;
        if (++n < spins) return setTimeout(tick, 50 + n * 12);
        $("rdCard").classList.remove("pop"); void $("rdCard").offsetWidth; $("rdCard").classList.add("pop"); ding(true);
        if (noRepeat) pool = pool.filter((y) => y !== x);
        btn.disabled = false; left();
      };
      tick();
    };
  }

  function groups(st, sts) {
    let n = K().ls.get("dj-groups", 4), mode = "count";
    const COL = ["#ff7a59", "#3fbf7f", "#5b7cfa", "#f5b301", "#a462f0", "#18a9c2", "#ff4f86", "#7cb342", "#ff8f1f", "#6c63ff"];
    st.innerHTML = `<div class="gp-ctl"><label>Chia thành <select id="gpMode"><option value="count">số nhóm</option><option value="size">nhóm có số em</option></select></label>
      <button class="btn" id="gpMinus">−</button><b id="gpN">${n}</b><button class="btn" id="gpPlus">+</button><span class="sp"></span><button class="btn primary" id="gpGo">🔀 Chia nhóm</button></div><div class="gp-grid" id="gpOut"><p class="muted">Bấm “Chia nhóm” để xếp ngẫu nhiên.</p></div>`;
    const upd = () => ($("gpN").textContent = n);
    $("gpMode").onchange = (e) => (mode = e.target.value);
    $("gpMinus").onclick = () => { n = Math.max(2, n - 1); upd(); };
    $("gpPlus").onclick = () => { n = Math.min(12, n + 1); upd(); };
    $("gpGo").onclick = () => {
      K().ls.set("dj-groups", n);
      const a = sts.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      const g = Math.max(1, mode === "count" ? Math.min(n, a.length) : Math.ceil(a.length / n));
      const out = Array.from({ length: g }, () => []); a.forEach((x, i) => out[i % g].push(x));
      $("gpOut").innerHTML = out.map((grp, i) => `<div class="gp-card" style="--gc:${COL[i % COL.length]}"><h3>Nhóm ${i + 1}</h3>${grp.map((x) => `<div class="gp-m"><span class="dj-av sm">${monster(x.avatar, x.code)}</span>${esc(x.name.split(" ").slice(-2).join(" "))}</div>`).join("")}</div>`).join("");
      ding(true);
    };
  }

  function noiseMeter(st) {
    let limit = K().ls.get("dj-noise", 60);
    st.innerHTML = `<div class="nz-face" id="nzFace">🤫</div><div class="nz-bar"><i id="nzLvl"></i><span id="nzLim" style="left:${limit}%"></span></div>
      <div class="nz-ctl"><label>Mức cho phép <input type="range" min="15" max="95" value="${limit}" id="nzRange"></label><span class="sp"></span><button class="btn primary big" id="nzGo">🎙️ Bật micro</button></div>
      <p class="muted" style="font-size:13px;text-align:center">Trình duyệt sẽ hỏi quyền dùng micro. Âm thanh chỉ được đo trên máy này, không ghi âm, không gửi đi đâu.</p>`;
    $("nzRange").oninput = (e) => { limit = +e.target.value; K().ls.set("dj-noise", limit); $("nzLim").style.left = limit + "%"; };
    $("nzGo").onclick = async () => {
      if (noise) { stopTools(); $("nzGo").textContent = "🎙️ Bật micro"; return; }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const ctx = new (window.AudioContext || window.webkitAudioContext)(), an = ctx.createAnalyser(); an.fftSize = 512;
        ctx.createMediaStreamSource(stream).connect(an);
        const buf = new Uint8Array(an.fftSize); let smooth = 0;
        noise = { stream, ctx, raf: 0 };
        $("nzGo").textContent = "⏹ Tắt micro";
        const loop = () => {
          an.getByteTimeDomainData(buf); let sum = 0; for (const v of buf) sum += (v - 128) ** 2;
          const lvl = Math.min(100, Math.sqrt(sum / buf.length) * 3.2); smooth = smooth * 0.85 + lvl * 0.15;
          const el = $("nzLvl"); if (!el) return stopTools();
          el.style.width = smooth + "%"; el.className = smooth > limit ? "hot" : smooth > limit * 0.7 ? "warm" : "";
          $("nzFace").textContent = smooth > limit ? "🙉" : smooth > limit * 0.7 ? "😬" : smooth > 8 ? "🙂" : "🤫";
          noise.raf = requestAnimationFrame(loop);
        };
        loop();
      } catch (e) { $("nzFace").textContent = "🚫"; alert("Không bật được micro. Hãy cho phép trình duyệt dùng micro rồi thử lại."); }
    };
  }

  /* ================= báo cáo ================= */
  const PERIODS = [["week", "Tuần này"], ["lastweek", "Tuần trước"], ["month", "Tháng này"], ["all", "Tất cả"]];
  function range(p) {
    const d = new Date(); d.setHours(0, 0, 0, 0);
    const mon = new Date(d); mon.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    const iso = (x) => K().isoDay(x);
    if (p === "week") return [iso(mon), "9999"];
    if (p === "lastweek") { const a = new Date(mon); a.setDate(a.getDate() - 7); return [iso(a), iso(mon)]; }
    if (p === "month") return [iso(new Date(d.getFullYear(), d.getMonth(), 1)), "9999"];
    return ["0000", "9999"];
  }
  const inRange = (pts, p) => { const [a, b] = range(p); return pts.filter((x) => { const day = String(x.at).slice(0, 10); return day >= a && day < b; }); };
  const donut = (t, size) => `<div class="dj-donut" style="--p:${t.pct == null ? 0 : t.pct};--s:${size || 150}px"><div><b>${t.pct == null ? "—" : t.pct + "%"}</b><small>tích cực</small></div></div>`;
  function skillBars(pts) {
    const by = {}; pts.forEach((p) => { const k = p.skill; by[k] = by[k] || { pos: 0, neg: 0 }; p.v > 0 ? (by[k].pos += p.v) : (by[k].neg -= p.v); });
    const arr = Object.entries(by).map(([k, v]) => [k, v.pos || -v.neg]).sort((a, b) => b[1] - a[1]);
    const mx = Math.max(1, ...arr.map((x) => Math.abs(x[1])));
    return arr.length ? `<div class="dj-skbars">${arr.map(([k, v]) => `<div class="row"><span class="ic">${skIcon(k)}</span><span class="nm">${esc(k)}</span><span class="tr"><i class="${v < 0 ? "neg" : ""}" style="width:${(Math.abs(v) / mx) * 100}%"></i></span><b class="${v < 0 ? "neg" : ""}">${v > 0 ? "+" + v : v}</b></div>`).join("")}</div>` : `<p class="muted">Chưa có điểm trong khoảng này.</p>`;
  }
  function weeks(pts) {
    const out = []; const d = new Date(); d.setHours(0, 0, 0, 0); const mon = new Date(d); mon.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    for (let i = 7; i >= 0; i--) { const a = new Date(mon); a.setDate(a.getDate() - 7 * i); const b = new Date(a); b.setDate(b.getDate() + 7); const A_ = K().isoDay(a), B_ = K().isoDay(b); out.push([`${a.getDate()}/${a.getMonth() + 1}`, tally(pts.filter((x) => { const day = String(x.at).slice(0, 10); return day >= A_ && day < B_; }))]); }
    const mx = Math.max(1, ...out.map(([, t]) => t.pos + t.neg));
    return `<div class="dj-weeks">${out.map(([l, t]) => `<div class="wk" title="${l}: +${t.pos} / −${t.neg}"><div class="col"><i class="neg" style="height:${(t.neg / mx) * 100}%"></i><i class="pos" style="height:${(t.pos / mx) * 100}%"></i></div><small>${l}</small></div>`).join("")}</div>`;
  }

  function report(box, cl, sts, points) {
    let per = K().ls.get("dj-period", "week");
    const mine = points.filter((p) => sts.some((x) => x.code === p.code));
    const draw = (focus) => {
      const pts = inRange(mine, per), t = tally(pts);
      const rows = sts.map((x) => ({ x, t: tally(pts.filter((p) => p.code === x.code)) })).sort((a, b) => b.t.pos - b.t.neg - (a.t.pos - a.t.neg));
      box.innerHTML = `<div class="dj-periods">${PERIODS.map(([k, l]) => `<button class="${k === per ? "on" : ""}" data-per="${k}">${l}</button>`).join("")}</div>
        <div class="grid g2 dj-rep"><div class="card"><h3>Cả lớp</h3><div class="dj-sum">${donut(t)}<div><div class="big pos">+${t.pos}</div><small>sao tích cực</small><div class="big neg">−${t.neg}</div><small>cần cố gắng</small></div></div></div>
          <div class="card"><h3>Theo kỹ năng</h3>${skillBars(pts)}</div></div>
        <div class="card" style="margin-top:14px"><h3>8 tuần gần đây</h3>${weeks(mine)}<p class="muted" style="font-size:12.5px;margin:6px 0 0">Cột xanh: điểm tích cực · cột đỏ: cần cố gắng.</p></div>
        <h2>Từng học sinh</h2>
        <div class="table-wrap"><table class="stack dj-table"><thead><tr><th>Học sinh</th><th>Tích cực</th><th>Cần cố gắng</th><th>Tỉ lệ tích cực</th></tr></thead><tbody>${rows.map(({ x, t: s }) => `<tr class="row-link" data-code="${esc(x.code)}"><td><span class="dj-who"><span class="dj-av sm">${monster(x.avatar, x.code)}</span><b>${esc(x.name)}</b></span></td><td data-l="Tích cực" class="pos">${s.pos ? "+" + s.pos : "0"}</td><td data-l="Cần cố gắng" class="neg">${s.neg ? "−" + s.neg : "0"}</td><td data-l="Tỉ lệ">${s.pct == null ? `<span class="muted">—</span>` : `${s.pct}% <div class="progress sm ${s.pct < 60 ? "low" : ""}"><i style="width:${s.pct}%"></i></div>`}</td></tr>`).join("")}</tbody></table></div>
        <div id="repOne"></div>`;
      box.querySelectorAll("[data-per]").forEach((b) => (b.onclick = () => { per = b.dataset.per; K().ls.set("dj-period", per); draw(); }));
      box.querySelectorAll("tr[data-code]").forEach((tr) => (tr.onclick = () => one(sts.find((x) => x.code === tr.dataset.code))));
      if (focus) one(focus);
    };
    const one = (x) => {
      const pts = inRange(mine.filter((p) => p.code === x.code), per), t = tally(pts);
      $("repOne").innerHTML = `<h2 class="dj-who"><span class="dj-av sm">${monster(x.avatar, x.code)}</span>${esc(x.name)}</h2><div class="grid g2"><div class="card"><div class="dj-sum">${donut(t, 120)}<div><div class="big pos">+${t.pos}</div><div class="big neg">−${t.neg}</div></div></div>${skillBars(pts)}</div>
        <div class="card"><h3>Nhận xét gần đây</h3>${feed(pts)}</div></div>`;
      $("repOne").scrollIntoView({ behavior: "smooth", block: "start" });
    };
    draw();
  }
  const feed = (pts) => (pts.length ? `<ul class="dj-feed">${pts.slice().sort((a, b) => (b.at > a.at ? 1 : -1)).slice(0, 30).map((p) => `<li class="${p.v > 0 ? "pos" : "neg"}"><span class="ic">${skIcon(p.skill)}</span><b>${p.v > 0 ? "+" + p.v : "−" + -p.v}</b><span>${esc(p.skill)}</span><small>${esc(fmtAt(p.at))}</small></li>`).join("")}</ul>` : `<p class="muted">Chưa có nhận xét.</p>`);

  /* ================= HỌC SINH: đầu trang + điểm + bảng tin ================= */
  function studentHead(s, cls, extraHtml) {
    const pts = s.points || [];
    return `<div class="dj-me"><button class="dj-me-av" id="meAv" title="Đổi avatar">${monster(s.avatar, s.code)}<i>✏️</i></button>
      <div class="dj-me-t"><span class="eyebrow">${cls ? "Lớp " + esc(cls.name) : "Học sinh"}</span><h1>${esc(s.name)}</h1><div class="dj-me-chips"><span class="dj-pts big ${total(pts) < 0 ? "neg" : ""}" id="mePts">${total(pts)}</span><span>sao lớp học</span>${extraHtml || ""}</div></div></div>`;
  }
  function studentPoints(box, s) {
    let per = K().ls.get("dj-period-hs", "all");
    const draw = () => {
      const all = s.points || [], pts = inRange(all, per), t = tally(pts);
      box.innerHTML = `<div class="dj-periods">${PERIODS.map(([k, l]) => `<button class="${k === per ? "on" : ""}" data-per="${k}">${l}</button>`).join("")}</div>
        <div class="grid g2 dj-rep"><div class="card"><div class="dj-sum">${donut(t)}<div><div class="big pos">+${t.pos}</div><small>sao tích cực</small><div class="big neg">−${t.neg}</div><small>cần cố gắng</small></div></div>${skillBars(pts)}</div>
          <div class="card"><h3>Thầy cô nhận xét</h3>${feed(pts)}</div></div>
        <div class="card" style="margin-top:14px"><h3>8 tuần gần đây</h3>${weeks(all)}</div>`;
      box.querySelectorAll("[data-per]").forEach((b) => (b.onclick = () => { per = b.dataset.per; K().ls.set("dj-period-hs", per); draw(); }));
    };
    draw();
  }
  /* Thông báo điểm mới kể từ lần xem trước */
  function freshPoints(s) {
    const pts = s.points || [], seen = new Set(K().ls.get("dj-seen", []) || []);
    const fresh = pts.filter((p) => !seen.has(p.id));
    K().ls.set("dj-seen", pts.map((p) => p.id).slice(0, 400));
    if (!fresh.length || !seen.size) return;
    const t = tally(fresh);
    setTimeout(() => { ding(t.pos >= t.neg); toast(`<span class="dj-av sm">${monster(s.avatar, s.code)}</span><div><b>${t.pos ? "+" + t.pos + " sao" : ""}${t.pos && t.neg ? " · " : ""}${t.neg ? "−" + t.neg + " cần cố gắng" : ""}</b><small>${esc(fresh.slice(0, 3).map((p) => p.skill).join(", "))}</small></div>`, t.pos >= t.neg); }, 600);
  }

  /* ================= VIỆC CẦN LÀM (học sinh) + GIAO BÀI (giáo viên) ================= */
  const WD = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  const dOf = (iso) => new Date(String(iso).slice(0, 10) + "T00:00:00");
  const dayLbl = (iso) => { const d = dOf(iso); return `${WD[d.getDay()]} ${d.getDate()}.${d.getMonth() + 1}`; };
  const addDays = (iso, n) => { const d = dOf(iso); d.setDate(d.getDate() + n); return K().isoDay(d); };
  const linkOk = (u) => /^https?:\/\//.test(u || "");

  /* Bài về nhà theo lộ trình (tick trên máy, tự đồng bộ). */
  function curriculumItems(cls) {
    const app = window.IVY_APP; if (!app || !cls) return [];
    const c = app.C[cls.course];
    if (!c || c.status !== "ready" || !c.sessions || !cls.start || !(cls.days || []).length) return [];
    const dates = app.schedule(c, { start: cls.start, days: cls.days }); if (!dates) return [];
    const iso = dates.map((d) => K().isoDay(d));
    const done = ((K().ls.get("ivy-hw-v2-" + c.id, {}) || {}).done) || {};
    const out = [];
    c.sessions.forEach((ss, i) => {
      if (app.has(ss.before)) out.push({ kind: "lt", key: ss.session_id + ":before", date: i ? iso[i - 1] : addDays(iso[i], -2), due: iso[i], title: `Chuẩn bị buổi ${ss.session_no}`, text: ss.before, focus: ss.focus, done: !!done[ss.session_id + ":before"], course: c.id });
      if (app.has(ss.after)) out.push({ kind: "lt", key: ss.session_id + ":after", date: iso[i], due: iso[i + 1] || addDays(iso[i], 3), title: `Bài về nhà buổi ${ss.session_no}`, text: ss.after, focus: ss.focus, done: !!done[ss.session_id + ":after"], course: c.id });
    });
    return out;
  }
  function tickCurriculum(course, key, on) {
    const k = "ivy-hw-v2-" + course, cfg = K().ls.get(k, null) || { cls: "", start: "", days: [], done: {} };
    cfg.done = cfg.done || {}; if (on) cfg.done[key] = true; else delete cfg.done[key];
    K().ls.set(k, cfg); K().soon();
  }

  async function todo(box, s, onCount) {
    const cls = s.cls;
    box.innerHTML = `<div class="card empty">Đang tải việc cần làm…</div>`;
    let asg = [], subs = {};
    try { const j = await K().api("assignments"); asg = j.assignments || []; (j.submissions || []).forEach((x) => (subs[x.aid] = x)); } catch (e) {}
    const today = K().isoDay(new Date());
    const draw = () => {
      const items = asg.map((a) => ({ kind: "asg", a, key: a.id, date: a.date, due: a.due || a.date, title: a.title || "Bài tập", text: a.note, link: a.link, done: !!subs[a.id], sub: subs[a.id] })).concat(cls && cls.auto ? curriculumItems(cls) : []);
      const now = items.filter((x) => x.date <= today && x.due >= today && !x.done).sort((p, q) => (q.date > p.date ? 1 : q.date < p.date ? -1 : 0));
      const soon = items.filter((x) => x.kind === "asg" && x.date > today && !x.done).sort((p, q) => (p.date > q.date ? 1 : -1));
      const owe = items.filter((x) => x.due < today && !x.done && (x.kind === "asg" || (x.due >= addDays(today, -21) && x.due >= ((cls && cls.auto_from) || "")))).sort((p, q) => (q.due > p.due ? 1 : -1));
      if (onCount) onCount({ total: items.filter((x) => x.kind === "asg" && x.date <= today).length, done: items.filter((x) => x.kind === "asg" && x.done).length, owe: owe.filter((x) => x.kind === "asg").length });
      const fin = items.filter((x) => x.done && (x.kind === "asg" || x.due >= addDays(today, -7))).sort((p, q) => (q.date > p.date ? 1 : -1));
      const sec = (t, sub, arr, cls2, empty) => `<div class="td-sec ${cls2 || ""}"><h2>${t}${arr.length ? ` <span class="td-n">${arr.length}</span>` : ""}</h2>${sub ? `<p class="muted td-sub">${sub}</p>` : ""}${arr.length ? `<div class="td-list">${arr.map(card).join("")}</div>` : empty ? `<div class="card td-empty">${empty}</div>` : ""}</div>`;
      box.innerHTML = sec("📋 Cần làm hôm nay", `Hôm nay ${dayLbl(today)} · ${cls && cls.auto ? "bài thầy cô giao + bài về nhà theo lộ trình" : "bài thầy cô giao"}`, now, "", asg.length || (cls && cls.auto) ? "🎉 Hôm nay em không còn bài nào. Vào Phòng thi ảo luyện thêm để gom sao nhé!" : "Thầy cô chưa giao bài nào. Khi có bài mới, bài sẽ hiện ở đây theo ngày.")
        + (soon.length ? sec("🗓️ Sắp tới", "", soon, "soon") : "")
        + (owe.length ? sec("⏰ Bài còn nợ", "Những bài đã quá hạn mà em chưa làm – làm bù sớm nhé!", owe, "owe") : "")
        + (fin.length ? `<details class="td-sec fin"><summary><h2>✅ Đã hoàn thành <span class="td-n">${fin.length}</span></h2></summary><div class="td-list">${fin.map(card).join("")}</div></details>` : "");
      bind();
    };
    const card = (x) => {
      const late = !x.done && x.due < today;
      const shot = x.kind === "asg" ? `<button class="td-shot ${x.sub && x.sub.img ? "has" : ""}" data-sub="${esc(x.key)}" title="${x.done ? "Xem / sửa bài nộp" : "Chụp ảnh bài làm để nộp"}">${x.sub && x.sub.img ? "🖼️" : "📷"}</button>` : `<span class="td-shot lt">📘</span>`;
      const go = x.kind === "asg" ? (linkOk(x.link) ? `<a class="td-go" href="${esc(x.link)}" target="_blank" rel="noopener" data-start="${esc(x.key)}">Bắt đầu</a>` : "") : "";
      const act = x.kind === "asg"
        ? (x.done ? `<button class="td-done on" data-sub="${esc(x.key)}">✓ Đã nộp</button>` : `<button class="td-done" data-sub="${esc(x.key)}">Nộp bài</button>`)
        : `<button class="td-done ${x.done ? "on" : ""}" data-lt="${esc(x.key)}" data-course="${esc(x.course)}">${x.done ? "✓ Đã làm" : "Đánh dấu xong"}</button>`;
      return `<div class="td-card ${x.done ? "done" : ""} ${late ? "late" : ""}">${shot}
        <div class="td-main"><h3>${dayLbl(x.date)}</h3>
          ${x.kind === "asg" && linkOk(x.link) ? `<a class="td-link" href="${esc(x.link)}" target="_blank" rel="noopener">${esc(x.title || x.link)}</a>` : `<b class="td-title">${esc(x.title)}</b>`}
          ${x.text ? `<p>${esc(x.text)}</p>` : ""}
          <small>${late ? `<span class="td-late">Quá hạn ${dayLbl(x.due)}</span>` : `Hạn: ${dayLbl(x.due)}`} · ${x.kind === "asg" ? "Thầy cô giao" : "Lộ trình"}${cls ? " · " + esc(cls.name) : ""}${x.sub ? ` · nộp ${esc(fmtAt(x.sub.at))}` : ""}</small></div>
        <div class="td-act">${go}${act}</div></div>`;
    };
    const bind = () => {
      box.querySelectorAll("[data-lt]").forEach((b) => (b.onclick = () => { const on = !b.classList.contains("on"); tickCurriculum(b.dataset.course, b.dataset.lt, on); if (on) ding(true); setTimeout(draw, on ? 250 : 0); }));
      box.querySelectorAll("[data-sub]").forEach((b) => (b.onclick = () => submitModal(asg.find((a) => a.id === b.dataset.sub), subs[b.dataset.sub], (sub) => { if (sub) subs[sub.aid] = sub; else delete subs[b.dataset.sub]; draw(); })));
    };
    draw();
  }

  function submitModal(a, sub, done) {
    if (!a) return;
    let img = "", keep = !!(sub && sub.img);
    const m = modal(`<h2 style="margin-top:0">${sub ? "Bài em đã nộp" : "Nộp bài"}</h2>
      <p class="muted" style="margin:-4px 0 12px">${esc(a.title || "Bài tập")} · ${dayLbl(a.date)}</p>
      ${linkOk(a.link) ? `<p><a class="btn" href="${esc(a.link)}" target="_blank" rel="noopener">↗ Mở bài tập</a></p>` : ""}
      <label class="td-photo" id="tdPhoto">${keep ? `<span class="muted">Đang tải ảnh đã nộp…</span>` : `<span class="ic">📷</span><b>Chụp / chọn ảnh bài làm</b><small>Không bắt buộc – bài làm trên web thì bấm nộp luôn</small>`}<input type="file" accept="image/*" capture="environment" id="tdFile" hidden></label>
      <label class="field" style="margin-top:12px">Ghi chú cho thầy cô (không bắt buộc)<input id="tdNote" maxlength="300" value="${esc(sub ? sub.note : "")}" placeholder="VD: Em làm xong phần 1 và 2"></label>
      <div class="btn-row"><button class="btn primary" id="tdGo">${sub ? "Nộp lại" : "✓ Nộp bài"}</button>${sub ? `<button class="btn danger" id="tdUn">Huỷ nộp</button>` : ""}</div><div class="auth-msg" id="tdMsg"></div>`);
    const ph = $("tdPhoto");
    const showImg = (src) => { ph.classList.add("has"); ph.innerHTML = `<img src="${src}" alt="Ảnh bài làm"><small>Bấm để chọn ảnh khác</small><input type="file" accept="image/*" capture="environment" id="tdFile" hidden>`; bindFile(); };
    const bindFile = () => ($("tdFile").onchange = async (e) => { const f = e.target.files[0]; if (!f) return; ph.querySelector("small") && (ph.querySelector("small").textContent = "Đang nén ảnh…"); try { img = (await compress(f)) || ""; } catch (err) { img = ""; } if (img) { keep = false; showImg(img); } else { const el = $("tdMsg"); el.className = "auth-msg err"; el.textContent = "Không đọc được ảnh này."; } });
    bindFile();
    if (keep) K().api("submissionImg", { sid: sub.id }).then((j) => { if ($("tdPhoto") && j.img) showImg(j.img); }).catch(() => {});
    $("tdGo").onclick = async () => {
      const b = $("tdGo"); b.disabled = true; b.textContent = "Đang nộp…";
      try { const j = await K().api("submit", { aid: a.id, img, keepImg: keep, note: $("tdNote").value }); close(); ding(true); toast(`<span class="big">✅</span><div><b>Đã nộp bài!</b><small>${esc(a.title || "Bài tập")}</small></div>`, true); done(j.submission); }
      catch (e) { b.disabled = false; b.textContent = sub ? "Nộp lại" : "✓ Nộp bài"; const el = $("tdMsg"); el.className = "auth-msg err"; el.textContent = srvMsg(e); }
    };
    if ($("tdUn")) $("tdUn").onclick = async () => { if (!confirm("Huỷ bài đã nộp?")) return; try { await K().api("unsubmit", { aid: a.id }); close(); done(null); } catch (e) { const el = $("tdMsg"); el.className = "auth-msg err"; el.textContent = srvMsg(e); } };
  }

  /* Giáo viên: giao bài theo ngày, xem ai đã nộp */
  function nextClassDay(cl, from) {
    const d = dOf(from); for (let i = 1; i <= 7; i++) { d.setDate(d.getDate() + 1); if ((cl.days || []).includes(String(d.getDay()))) return K().isoDay(d); }
    return addDays(from, 2);
  }
  async function assign(box, cl, sts) {
    const today = K().isoDay(new Date());
    const app = window.IVY_APP, course = app && app.C[cl.course];
    box.innerHTML = `<div class="card as-mode"><h3>Cách giao bài cho lớp</h3>
        <label class="as-opt"><input type="radio" name="aMode" value="0" ${cl.auto ? "" : "checked"}><span><b>✋ Giáo viên tự giao</b><small>Học sinh chỉ thấy bài thầy cô giao ở mục “Cần làm”.</small></span></label>
        <label class="as-opt"><input type="radio" name="aMode" value="1" ${cl.auto ? "checked" : ""} ${course && course.status === "ready" ? "" : "disabled"}><span><b>⚙️ Tự động theo lộ trình</b><small>${course && course.status === "ready" ? `Bài về nhà từng buổi của ${esc(course.name)} tự hiện theo lịch lớp (cần đặt ngày khai giảng + lịch học ở tab Cài đặt). Thầy cô vẫn giao thêm được.` : "Khoá này chưa có lộ trình bài về nhà."}</small></span></label>
        <div class="auth-msg" id="aModeMsg"></div></div>
      <form class="card" id="aForm" style="margin-top:14px"><div class="as-fh"><h3>Giao bài mới</h3><span class="sp"></span><button type="button" class="btn" id="aPick">📚 Chọn từ kho bài tập ${esc(course ? course.name : "")}</button></div>
        <div class="grid g2"><label class="field">Tên bài<input id="aTitle" maxlength="120" placeholder="VD: Ôn từ vựng Unit 4"></label><label class="field">Link bài tập (dán link artifact, Quizlet, Google Form…)<input id="aLink" type="url" placeholder="https://…"></label></div>
        <div class="grid g3" style="margin-top:12px"><label class="field">Ngày giao<input id="aDate" type="date" value="${today}"></label><label class="field">Hạn nộp<input id="aDue" type="date" value="${nextClassDay(cl, today)}"></label><label class="field">Ghi chú cho học sinh<input id="aNote" maxlength="500" placeholder="VD: Làm phần 1–3, chụp ảnh nộp"></label></div>
        <div class="btn-row"><button class="btn primary" id="aGo">📋 Giao cho cả lớp</button></div><div class="auth-msg" id="aMsg"></div></form>
      <div id="aList"><div class="card empty">Đang tải bài đã giao…</div></div>`;
    $("aDate").onchange = () => { $("aDue").value = nextClassDay(cl, $("aDate").value || today); };
    box.querySelectorAll('input[name="aMode"]').forEach((r) => (r.onchange = async () => {
      const m = $("aModeMsg"), on = r.value === "1";
      m.className = "auth-msg"; m.textContent = "Đang lưu…";
      try { await K().api("updateClass", { id: cl.id, auto: on }); cl.auto = on; m.className = "auth-msg ok"; m.textContent = on ? "Đã bật giao bài tự động ✓" : "Đã chuyển sang giáo viên tự giao ✓"; }
      catch (e) { m.className = "auth-msg err"; m.textContent = srvMsg(e); box.querySelector(`input[name="aMode"][value="${cl.auto ? 1 : 0}"]`).checked = true; }
    }));
    $("aPick").onclick = () => pickFromBank(cl, (it) => {
      $("aTitle").value = it.title || ""; $("aLink").value = it.link || ""; $("aNote").value = it.note || "";
      if (it.date) { $("aDate").value = it.date; $("aDue").value = it.due || nextClassDay(cl, it.date); }
      $("aTitle").focus(); const m = $("aMsg"); m.className = "auth-msg"; m.textContent = "Đã điền bài từ kho – kiểm tra ngày rồi bấm “Giao cho cả lớp”.";
    });
    let asg = [], subs = [];
    const draw = () => {
      const list = asg.slice().sort((p, q) => (q.date > p.date ? 1 : q.date < p.date ? -1 : q.at > p.at ? 1 : -1));
      $("aList").innerHTML = list.length ? `<h2>Bài đã giao</h2>${list.map((a) => {
        const sb = subs.filter((x) => x.aid === a.id), n = sb.length, late = a.due < today;
        return `<div class="card as-card"><div class="as-head"><div class="as-date"><b>${dayLbl(a.date)}</b><small>Hạn ${dayLbl(a.due)}</small></div>
          <div class="as-main">${linkOk(a.link) ? `<a href="${esc(a.link)}" target="_blank" rel="noopener"><b>${esc(a.title || a.link)}</b></a>` : `<b>${esc(a.title)}</b>`}${a.note ? `<p class="muted">${esc(a.note)}</p>` : ""}
            <div class="progress sm ${late && n < sts.length ? "low" : ""}"><i style="width:${sts.length ? (n / sts.length) * 100 : 0}%"></i></div><small>${n}/${sts.length} em đã nộp${late && n < sts.length ? ` · ${sts.length - n} em còn nợ` : ""}</small></div>
          <div class="as-act"><button class="btn sm" data-open="${esc(a.id)}">Xem</button><button class="btn sm danger" data-adel="${esc(a.id)}">Xoá</button></div></div><div class="as-body" id="ab-${esc(a.id)}" hidden></div></div>`; }).join("")}` : `<div class="card empty">Chưa giao bài nào. Bài giao ở đây sẽ hiện trong mục “Cần làm” của học sinh theo đúng ngày.</div>`;
      $("aList").querySelectorAll("[data-open]").forEach((b) => (b.onclick = () => { const el = $("ab-" + b.dataset.open); el.hidden = !el.hidden; if (!el.hidden) detail(el, b.dataset.open); }));
      $("aList").querySelectorAll("[data-adel]").forEach((b) => (b.onclick = async () => { if (!confirm("Xoá bài tập này? Bài nộp của học sinh cũng bị xoá.")) return; b.disabled = true; try { await K().api("deleteAssignment", { aid: b.dataset.adel }); asg = asg.filter((x) => x.id !== b.dataset.adel); draw(); } catch (e) { b.disabled = false; alert(srvMsg(e)); } }));
    };
    const detail = (el, aid) => {
      const sb = {}; subs.filter((x) => x.aid === aid).forEach((x) => (sb[x.code] = x));
      const yes = sts.filter((x) => sb[x.code]), no = sts.filter((x) => !sb[x.code]);
      el.innerHTML = `<div class="grid g2"><div><h4>✅ Đã nộp (${yes.length})</h4>${yes.map((x) => `<div class="as-st"><span class="dj-av sm">${monster(x.avatar, x.code)}</span><div><b>${esc(x.name)}</b><small>${esc(fmtAt(sb[x.code].at))}${sb[x.code].note ? " · " + esc(sb[x.code].note) : ""}</small></div>${sb[x.code].img ? `<button class="btn sm" data-img="${esc(sb[x.code].id)}" data-n="${esc(x.name)}">🖼️ Xem ảnh</button>` : ""}</div>`).join("") || `<p class="muted">Chưa em nào nộp.</p>`}</div>
        <div><h4>⏳ Chưa nộp (${no.length})</h4><div class="as-chips">${no.map((x) => `<span class="as-chip"><span class="dj-av sm">${monster(x.avatar, x.code)}</span>${esc(x.name.split(" ").slice(-2).join(" "))}</span>`).join("") || `<p class="muted">Cả lớp đã nộp 🎉</p>`}</div></div></div>`;
      el.querySelectorAll("[data-img]").forEach((b) => (b.onclick = async () => { b.disabled = true; try { const j = await K().api("submissionImg", { sid: b.dataset.img }); modal(`<h2 style="margin-top:0">${esc(b.dataset.n)}</h2>${j.img ? `<img src="${j.img}" alt="Bài làm" style="max-width:100%;border-radius:14px">` : `<p class="muted">Không có ảnh.</p>`}`, "wide"); } catch (e) { alert(srvMsg(e)); } b.disabled = false; }));
    };
    try { const j = await K().api("assignments", { id: cl.id }); asg = j.assignments || []; subs = j.submissions || []; draw(); }
    catch (e) { $("aList").innerHTML = `<div class="card empty">${esc(srvMsg(e))}</div>`; }
    $("aForm").onsubmit = async (e) => {
      e.preventDefault(); const m = $("aMsg"), b = $("aGo");
      b.disabled = true; b.textContent = "Đang giao…";
      try { const j = await K().api("createAssignment", { id: cl.id, title: $("aTitle").value, link: $("aLink").value.trim(), date: $("aDate").value, due: $("aDue").value, note: $("aNote").value }); asg.push(j.assignment); draw(); $("aTitle").value = ""; $("aLink").value = ""; $("aNote").value = ""; m.className = "auth-msg ok"; m.textContent = "Đã giao ✓ – học sinh thấy bài trong mục “Cần làm”."; }
      catch (err) { m.className = "auth-msg err"; m.textContent = srvMsg(err); }
      b.disabled = false; b.textContent = "📋 Giao cho cả lớp";
    };
  }

  /* Kho bài tập theo khoá: trạm Phòng thi ảo theo Unit, BTVN từng buổi, kho đề KET/PET */
  let UNITCAT = null, KETCAT = null, PETCAT = null;
  const siteBase = () => location.href.split("#")[0].replace(/[^/]*$/, "");
  async function pickFromBank(cl, onPick) {
    const app = window.IVY_APP, c = app.C[cl.course];
    const tabs = [["unit", "🎯 Phòng thi ảo theo Unit"]];
    if (c && c.sessions) tabs.push(["buoi", "📘 Bài về nhà theo buổi"]);
    if (["bu", "ko"].includes(cl.course)) tabs.push(["ket", "📝 Kho đề KET"]);
    if (cl.course === "bo") tabs.push(["pet", "📗 Kho đề PET"]);
    let tab = tabs[0][0];
    const m = modal(`<h2 style="margin-top:0">📚 Kho bài tập · ${esc(c ? c.name + " " + c.cefr : cl.course)}</h2>
      <div class="dj-tabs pk-tabs">${tabs.map(([k, l]) => `<button data-pk="${k}" class="${k === tab ? "on" : ""}">${l}</button>`).join("")}</div>
      <input class="pk-q" id="pkQ" placeholder="Tìm theo tên bài, chủ đề, từ khoá…"><div id="pkBody" class="pk-body">Đang tải…</div>`, "wide");
    const base = siteBase();
    const pick = (it) => { close(); onPick(it); };
    const dates = c && c.sessions && cl.start && (cl.days || []).length ? app.schedule(c, { start: cl.start, days: cl.days }) : null;
    const draw = async () => {
      const q = ($("pkQ").value || "").toLowerCase().trim(), body = $("pkBody");
      const hit = (t) => !q || t.toLowerCase().includes(q);
      if (tab === "unit") {
        UNITCAT = UNITCAT || (await fetch("phong-thi/catalog-units.json").then((r) => r.json()).catch(() => []));
        const lv = UNITCAT.find((l) => l.id === (c && c.exam)) || null;
        if (!lv) { body.innerHTML = `<p class="muted">Chưa có trạm luyện cho khoá này.</p>`; return; }
        body.innerHTML = lv.units.map((u) => { const acts = u.acts.filter((a) => hit(u.name + " " + u.title + " " + u.topic + " " + a.title + " " + a.label)); if (!acts.length) return "";
          return `<details class="pk-unit" ${q ? "open" : ""}><summary><b>${esc(u.name)} · ${esc(u.title)}</b><small>${esc(u.topic)} · ${u.acts.length} trạm</small></summary>
            <button class="pk-item whole" data-u="${u.n}"><span>🗂️</span><b>Cả ${esc(u.name)}</b><small>Mở trang Unit, em làm lần lượt các trạm</small></button>
            ${acts.map((a) => `<button class="pk-item" data-u="${u.n}" data-a="${esc(a.id)}"><span>🎯</span><b>${esc(a.title)}</b><small>${esc(a.label)}</small></button>`).join("")}</details>`; }).join("") || `<p class="muted">Không tìm thấy.</p>`;
        body.querySelectorAll("[data-u]").forEach((b) => (b.onclick = () => {
          const u = lv.units.find((x) => x.n === +b.dataset.u), a = b.dataset.a ? u.acts.find((x) => x.id === b.dataset.a) : null;
          pick({ title: a ? `${u.name} · ${a.title}` : `${u.name} · ${u.title}`, link: `${base}phong-thi/?lv=${lv.id}&u=${u.n}${a ? "&act=" + encodeURIComponent(a.id) : ""}`, note: a ? `${a.label} – Phòng thi ảo, ${u.title}` : `Làm hết các trạm ${u.name} trong Phòng thi ảo (${u.topic})` });
        }));
      } else if (tab === "buoi") {
        const today = K().isoDay(new Date());
        const rows = c.sessions.map((ss, i) => ({ ss, i, d: dates ? K().isoDay(dates[i]) : null })).filter((r) => app.has(r.ss.after) || app.has(r.ss.before)).filter((r) => hit(`buổi ${r.ss.session_no} ${r.ss.focus} ${r.ss.after || ""} ${r.ss.before || ""}`));
        const near = rows.findIndex((r) => r.d && r.d >= today);
        body.innerHTML = rows.map((r, k) => `<div class="pk-sess ${k === near ? "near" : ""}" ${k === near ? 'id="pkNear"' : ""}><div class="pk-sh"><b>Buổi ${r.ss.session_no}</b>${r.d ? `<small>${dayLbl(r.d)}</small>` : ""}<span>${esc(r.ss.focus || "")}</span></div>
            ${app.has(r.ss.after) ? `<button class="pk-item" data-s="${r.i}" data-k="after"><span>📝</span><b>Về nhà</b><small>${esc(r.ss.after)}</small></button>` : ""}
            ${app.has(r.ss.before) ? `<button class="pk-item" data-s="${r.i}" data-k="before"><span>📖</span><b>Chuẩn bị</b><small>${esc(r.ss.before)}</small></button>` : ""}</div>`).join("") || `<p class="muted">Không tìm thấy.</p>`;
        body.querySelectorAll("[data-s]").forEach((b) => (b.onclick = () => {
          const i = +b.dataset.s, ss = c.sessions[i], k = b.dataset.k;
          const d = dates ? (k === "after" ? K().isoDay(dates[i]) : i ? K().isoDay(dates[i - 1]) : null) : null;
          const due = dates ? (k === "after" ? (dates[i + 1] ? K().isoDay(dates[i + 1]) : null) : K().isoDay(dates[i])) : null;
          pick({ title: `${k === "after" ? "Bài về nhà" : "Chuẩn bị"} buổi ${ss.session_no}${ss.focus ? " · " + ss.focus : ""}`.slice(0, 120), link: "", note: ss[k], date: d && d >= today ? d : null, due: d && d >= today ? due : null });
        }));
        if (!q && $("pkNear")) $("pkNear").scrollIntoView({ block: "center" });
      } else if (tab === "ket") {
        KETCAT = KETCAT || (await fetch("phong-thi/ket/catalog.json").then((r) => r.json()).catch(() => []));
        const P = [["", "Cả đề"], ["l", "Listening"], ["rw", "Reading & Writing"], ["s", "Speaking"]];
        body.innerHTML = `<div class="pk-grid">${KETCAT.filter((t) => hit(`đề ${+t[1]}.${t[2]} ${t[3]}`)).map((t) => `<div class="pk-test"><b>Đề ${+t[1]}.${t[2]}</b><small>${esc(t[3])}</small><div>${P.map(([k, l]) => `<button class="btn sm" data-t="${esc(t[0])}" data-p="${k}">${l}</button>`).join("")}</div></div>`).join("") || `<p class="muted">Không tìm thấy.</p>`}</div>`;
        body.querySelectorAll("[data-t]").forEach((b) => (b.onclick = () => { const t = KETCAT.find((x) => x[0] === b.dataset.t), p = b.dataset.p, pl = { l: "Listening", rw: "Reading & Writing", s: "Speaking" }[p];
          pick({ title: `KET Đề ${+t[1]}.${t[2]} · ${t[3]}${pl ? " · " + pl : ""}`, link: `${base}phong-thi/ket/#${t[0]}${p ? "/" + p : ""}`, note: pl ? `Làm phần ${pl} của đề, nộp bài trên web` : "Làm cả đề KET trên web" }); }));
      } else if (tab === "pet") {
        PETCAT = PETCAT || (await fetch("phong-thi/pet/topics.json").then((r) => r.json()).catch(() => []));
        const SK = [["reading", "Reading"], ["listening", "Listening"], ["writing", "Writing"], ["speaking", "Speaking"]];
        body.innerHTML = `<div class="pk-grid">${PETCAT.filter((t) => hit(t.title + " " + t.vi)).map((t) => `<div class="pk-test"><b>${t.icon || ""} ${esc(t.title)}</b><small>${esc(t.vi)}</small><div>${SK.map(([k, l]) => `<button class="btn sm" data-pt="${esc(t.id)}" data-p="${k}">${l}</button>`).join("")}</div></div>`).join("")}</div>`;
        body.querySelectorAll("[data-pt]").forEach((b) => (b.onclick = () => { const t = PETCAT.find((x) => x.id === b.dataset.pt), l = SK.find((x) => x[0] === b.dataset.p)[1];
          pick({ title: `PET · ${t.title} · ${l}`, link: `${base}phong-thi/pet/#${t.id}?${b.dataset.p}`, note: `Làm phần ${l} chủ đề ${t.vi}` }); }));
      }
    };
    m.querySelectorAll("[data-pk]").forEach((b) => (b.onclick = () => { tab = b.dataset.pk; m.querySelectorAll("[data-pk]").forEach((x) => x.classList.toggle("on", x === b)); draw(); }));
    $("pkQ").oninput = () => draw();
    draw();
  }

  window.IVY_DOJO = { monster, pickAvatar, classroom, story, tools, report, studentHead, studentPoints, freshPoints, total, stopTools, srvMsg, todo, assign };
})();
