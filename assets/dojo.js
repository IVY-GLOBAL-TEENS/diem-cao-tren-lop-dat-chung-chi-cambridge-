/* IVY Teen – giao diện lớp học kiểu "bảng điểm lớp": avatar quái vật, cho điểm theo kỹ năng,
 * bảng tin lớp, bộ công cụ trên lớp, báo cáo điểm. Dùng bởi assets/account.js. */
(function () {
  "use strict";
  const K = () => window.IVY_CORE;
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);
  const srvMsg = (e) => (/Không rõ thao tác/.test(e.message) ? "Máy chủ chưa có chức năng này. Quản lý cần dán lại Code.gs mới và triển khai phiên bản mới (xem server/HUONG-DAN.md)." : e.message);

  /* ================= avatar quái vật (tự vẽ, 24 mẫu) ================= */
  const PAL = [["#ff7a59", "#ffc2b0"], ["#3fbf7f", "#a9ebc9"], ["#5b7cfa", "#c0ceff"], ["#f5b301", "#ffe49a"], ["#a462f0", "#dcc2ff"], ["#18a9c2", "#a7e8f2"], ["#ff4f86", "#ffb8cf"], ["#7cb342", "#d2eab1"], ["#ff8f1f", "#ffd3a1"], ["#6c63ff", "#cac6ff"], ["#00a884", "#97e3cf"], ["#e5484d", "#f8b8b5"]];
  const BODY = [
    (c) => `<circle cx="50" cy="62" r="30" fill="${c}"/>`,
    (c) => `<ellipse cx="50" cy="60" rx="26" ry="33" fill="${c}"/>`,
    (c) => `<rect x="20" y="31" width="60" height="60" rx="22" fill="${c}"/>`,
    (c) => `<path d="M50 27C69 27 74 45 77 59C81 81 70 92 50 92S19 81 23 59C26 45 31 27 50 27Z" fill="${c}"/>`,
  ];
  const TOP = [
    (c, l) => `<path d="M33 42L25 17L45 34Z" fill="${l}"/><path d="M67 42L75 17L55 34Z" fill="${l}"/>`,
    (c, l) => `<path d="M50 32V13" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="11" r="6" fill="${l}"/>`,
    (c, l) => `<circle cx="27" cy="36" r="11" fill="${c}"/><circle cx="27" cy="36" r="5.5" fill="${l}"/><circle cx="73" cy="36" r="11" fill="${c}"/><circle cx="73" cy="36" r="5.5" fill="${l}"/>`,
    (c) => `<path d="M38 34L42 20L47 32L51 17L55 32L60 20L63 34Z" fill="${c}"/>`,
  ];
  const eye = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x + r * 0.15}" cy="${y + r * 0.15}" r="${r * 0.5}" fill="#1d1d2b"/><circle cx="${x + r * 0.35}" cy="${y - r * 0.2}" r="${r * 0.18}" fill="#fff"/>`;
  const EYES = [
    () => eye(40, 54, 8) + eye(60, 54, 8),
    () => eye(50, 52, 12),
    () => eye(35, 54, 6.5) + eye(50, 49, 6.5) + eye(65, 54, 6.5),
  ];
  const MOUTH = [
    () => `<path d="M41 69Q50 78 59 69" stroke="#1d1d2b" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    () => `<path d="M42 68Q50 82 58 68Z" fill="#7a1f2b"/><path d="M46 74Q50 78 54 74" fill="#ff8fa3"/>`,
    () => `<path d="M40 68Q50 79 60 68Z" fill="#1d1d2b"/><rect x="44" y="68" width="5" height="4.5" rx="1" fill="#fff"/><rect x="51" y="68" width="5" height="4.5" rx="1" fill="#fff"/>`,
  ];
  const AVATARS = Array.from({ length: 24 }, (_, i) => "m" + String(i + 1).padStart(2, "0"));
  function hashAv(code) { let h = 0; for (const ch of String(code || "x")) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return AVATARS[h % AVATARS.length]; }
  function monster(id, code) {
    if (!/^m\d{2}$/.test(id || "")) id = hashAv(code);
    const i = Math.max(0, (parseInt(id.slice(1), 10) || 1) - 1) % 24;
    const h = i >= 12 ? 1 : 0, j = i % 12;
    const [c, l] = PAL[(j + h * 6) % 12];
    return `<svg viewBox="0 0 100 100" class="mon" aria-hidden="true"><circle cx="50" cy="50" r="50" fill="${l}" opacity=".45"/>${TOP[(Math.floor(j / 3) + h * 2) % 4](c, l)}${BODY[(j + h) % 4](c)}<ellipse cx="50" cy="80" rx="15" ry="9" fill="${l}" opacity=".7"/>${EYES[(Math.floor(j / 4) + h) % 3]()}<circle cx="31" cy="67" r="4" fill="#ff7aa2" opacity=".45"/><circle cx="69" cy="67" r="4" fill="#ff7aa2" opacity=".45"/>${MOUTH[(j * 5 + h) % 3]()}<ellipse cx="38" cy="92" rx="8" ry="4" fill="${c}"/><ellipse cx="62" cy="92" rx="8" ry="4" fill="${c}"/></svg>`;
  }

  /* ================= kỹ năng ================= */
  const POS = [["Phát biểu", "🙋"], ["Làm BTVN", "📝"], ["Tập trung", "🎯"], ["Làm việc nhóm", "🤝"], ["Giúp đỡ bạn", "💛"], ["Sáng tạo", "💡"], ["Nói tiếng Anh", "🗣️"], ["Kiên trì", "💪"]];
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
    const m = modal(`<h2 style="margin-top:0">Chọn bạn đồng hành của em</h2><p class="muted" style="margin:-4px 0 14px">Bấm vào một bạn quái vật. Đổi lại lúc nào cũng được.</p>
      <div class="av-grid">${AVATARS.map((a) => `<button class="av-opt ${a === cur ? "on" : ""}" data-av="${a}">${monster(a)}</button>`).join("")}</div><div class="auth-msg" id="avMsg"></div>`, "wide");
    m.querySelectorAll("[data-av]").forEach((b) => b.addEventListener("click", async () => {
      m.querySelectorAll(".av-opt").forEach((x) => x.classList.toggle("on", x === b));
      try { await K().api("setAvatar", { avatar: b.dataset.av }); K().setSession(Object.assign(K().session(), { avatar: b.dataset.av })); close(); onDone && onDone(b.dataset.av); }
      catch (e) { const el = $("avMsg"); el.className = "auth-msg err"; el.textContent = srvMsg(e); }
    }));
  }

  /* ================= GIÁO VIÊN: lưới lớp học ================= */
  let lastBatch = null;
  function classroom(box, cl, sts, points, refresh) {
    const byCode = {}; points.forEach((p) => (byCode[p.code] = byCode[p.code] || []).push(p));
    let multi = false; const sel = new Set();
    let sort = K().ls.get("dj-sort", "name");
    const draw = () => {
      const list = sts.slice().sort((a, b) => (sort === "pts" ? total(byCode[b.code]) - total(byCode[a.code]) : 0) || a.name.split(" ").pop().localeCompare(b.name.split(" ").pop(), "vi"));
      const classPts = total(points.filter((p) => sts.some((x) => x.code === p.code)));
      box.innerHTML = `<div class="dj-bar">
          <button class="btn ${multi ? "primary" : ""}" id="djMulti">${multi ? "✓ Đang chọn nhiều" : "☑️ Chọn nhiều em"}</button>
          ${multi ? `<button class="btn" id="djAll">Chọn cả lớp</button><button class="btn primary" id="djGiveSel" ${sel.size ? "" : "disabled"}>Cho điểm ${sel.size || ""} em</button>` : ""}
          <span class="sp"></span>
          <label class="dj-sort">Xếp theo <select id="djSort"><option value="name" ${sort === "name" ? "selected" : ""}>Tên</option><option value="pts" ${sort === "pts" ? "selected" : ""}>Điểm</option></select></label>
          ${lastBatch ? `<button class="btn" id="djUndo">↶ Huỷ lần vừa cho</button>` : ""}</div>
        <div class="dj-grid">
          <button class="dj-tile whole" id="djWhole"><span class="dj-av"><span class="whole-ic">👥</span></span><b>Cả lớp</b><span class="dj-pts ${classPts < 0 ? "neg" : ""}">${classPts}</span></button>
          ${list.map((x) => { const t = total(byCode[x.code]); return `<button class="dj-tile ${sel.has(x.code) ? "sel" : ""} ${x.activated ? "" : "off"}" data-code="${esc(x.code)}"><span class="dj-av">${monster(x.avatar, x.code)}</span><b>${esc(x.name.split(" ").slice(-2).join(" "))}</b><span class="dj-pts ${t < 0 ? "neg" : ""}">${t}</span>${multi ? `<i class="dj-check">${sel.has(x.code) ? "✓" : ""}</i>` : ""}</button>`; }).join("")}
        </div>
        <p class="muted" style="font-size:13px;margin-top:12px">Bấm vào một em để cho điểm <b style="color:#11804a">tích cực</b> hoặc <b style="color:var(--red)">cần cố gắng</b>. Học sinh thấy điểm và lời nhận xét ngay trong trang của em. Ô mờ là em chưa kích hoạt mã.</p>`;
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
    const head = one ? `<div class="dj-mh"><span class="dj-av lg">${monster(one.avatar, one.code)}</span><div><h2>${esc(one.name)}</h2><span class="muted">Cho điểm theo kỹ năng</span></div></div>`
      : `<div class="dj-mh"><span class="dj-av lg"><span class="whole-ic">👥</span></span><div><h2>${whole ? "Cả lớp" : list.length + " học sinh"}</h2><span class="muted">${list.length} em cùng nhận điểm</span></div></div>`;
    const tiles = (arr, v) => arr.map(([n, ic]) => `<button class="dj-sk ${v > 0 ? "pos" : "neg"}" data-sk="${esc(n)}" data-v="${v}"><span class="ic">${ic}</span><b>${esc(n)}</b><span class="pv">${v > 0 ? "+1" : "−1"}</span></button>`).join("");
    const m = modal(`${head}
      <div class="dj-tabs"><button class="on" data-t="pos">👍 Tích cực</button><button data-t="neg">💪 Cần cố gắng</button></div>
      <div class="dj-sks" data-p="pos">${tiles(POS, 1)}</div><div class="dj-sks" data-p="neg" hidden>${tiles(NEG, -1)}</div>
      <div class="auth-msg" id="gMsg"></div>`, "wide");
    m.querySelectorAll(".dj-tabs button").forEach((b) => (b.onclick = () => { m.querySelectorAll(".dj-tabs button").forEach((x) => x.classList.toggle("on", x === b)); m.querySelectorAll(".dj-sks").forEach((p) => (p.hidden = p.dataset.p !== b.dataset.t)); }));
    m.querySelectorAll(".dj-sk").forEach((b) => (b.onclick = async () => {
      m.querySelectorAll(".dj-sk").forEach((x) => (x.disabled = true)); b.classList.add("busy");
      const v = +b.dataset.v;
      try {
        const j = await K().api("givePoints", { codes: list.map((x) => x.code), skill: b.dataset.sk, value: v });
        close(); ding(v > 0);
        toast(`${one ? `<span class="dj-av sm">${monster(one.avatar, one.code)}</span>` : "<span class='big'>👥</span>"}<div><b>${v > 0 ? "+1" : "−1"} ${esc(b.dataset.sk)}</b><small>${one ? esc(one.name) : list.length + " em"}</small></div>`, v > 0);
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
        <div class="grid g2 dj-rep"><div class="card"><h3>Cả lớp</h3><div class="dj-sum">${donut(t)}<div><div class="big pos">+${t.pos}</div><small>điểm tích cực</small><div class="big neg">−${t.neg}</div><small>cần cố gắng</small></div></div></div>
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
      <div class="dj-me-t"><span class="eyebrow">${cls ? "Lớp " + esc(cls.name) : "Học sinh"}</span><h1>${esc(s.name)}</h1><div class="dj-me-chips"><span class="dj-pts big ${total(pts) < 0 ? "neg" : ""}" id="mePts">${total(pts)}</span><span>điểm lớp học</span>${extraHtml || ""}</div></div></div>`;
  }
  function studentPoints(box, s) {
    let per = K().ls.get("dj-period-hs", "all");
    const draw = () => {
      const all = s.points || [], pts = inRange(all, per), t = tally(pts);
      box.innerHTML = `<div class="dj-periods">${PERIODS.map(([k, l]) => `<button class="${k === per ? "on" : ""}" data-per="${k}">${l}</button>`).join("")}</div>
        <div class="grid g2 dj-rep"><div class="card"><div class="dj-sum">${donut(t)}<div><div class="big pos">+${t.pos}</div><small>điểm tích cực</small><div class="big neg">−${t.neg}</div><small>cần cố gắng</small></div></div>${skillBars(pts)}</div>
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
    setTimeout(() => { ding(t.pos >= t.neg); toast(`<span class="dj-av sm">${monster(s.avatar, s.code)}</span><div><b>${t.pos ? "+" + t.pos + " điểm tích cực" : ""}${t.pos && t.neg ? " · " : ""}${t.neg ? "−" + t.neg + " cần cố gắng" : ""}</b><small>${esc(fresh.slice(0, 3).map((p) => p.skill).join(", "))}</small></div>`, t.pos >= t.neg); }, 600);
  }

  window.IVY_DOJO = { monster, pickAvatar, classroom, story, tools, report, studentHead, studentPoints, freshPoints, total, stopTools, srvMsg };
})();
