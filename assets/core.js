/* IVY Teen – lõi tài khoản: phiên đăng nhập, gọi máy chủ, đồng bộ tiến độ.
 * Dùng chung cho trang chính, Phòng thi ảo và Kho đề KET (cùng localStorage). */
(function () {
  "use strict";
  const API = ((window.IVY_CONFIG || {}).API_URL || "").trim();
  const ls = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
    keys() { try { return Object.keys(localStorage); } catch (e) { return []; } },
  };
  const pad = (n) => String(n).padStart(2, "0");
  const isoDay = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());

  const session = () => ls.get("ivy-acc", null);
  const setSession = (s) => ls.set("ivy-acc", s);

  async function api(action, data, opt) {
    if (!API) throw new Error("Website chưa kết nối máy chủ tài khoản.");
    const s = session();
    const body = JSON.stringify(Object.assign({ action, token: s && s.token }, data || {}));
    let r;
    try { r = await fetch(API, { method: "POST", body, keepalive: !!(opt && opt.keepalive), redirect: "follow" }); }
    catch (e) { throw new Error("Không kết nối được máy chủ. Kiểm tra mạng rồi thử lại."); }
    let j; try { j = await r.json(); } catch (e) { throw new Error("Máy chủ trả lời không hợp lệ."); }
    if (!j.ok) {
      if (j.auth && s) { ls.del("ivy-acc"); window.dispatchEvent(new Event("ivy-auth")); }
      const err = new Error(j.error || "Có lỗi xảy ra."); err.auth = !!j.auth; throw err;
    }
    return j;
  }

  /* ---------- ảnh chụp tiến độ ---------- */
  const PROGRESS_PREFIX = ["ivy-hw-v2-", "ketbank:res:", "ketbank:run:"];
  const PROGRESS_KEYS = ["ivy-exam-v3", "ivy-days", "ivy-sync-fp", "ivy-sync-at", "ivy-myclass", "ivy-hw-v1"];

  function snapshot() {
    const keys = ls.keys();
    const hw = {};
    keys.filter((k) => k.startsWith("ivy-hw-v2-")).forEach((k) => { const done = Object.keys((ls.get(k, {}) || {}).done || {}); if (done.length) hw[k.slice(10)] = done.sort(); });
    const S = ls.get("ivy-exam-v3", null);
    let exam = null;
    if (S) {
      const act = {}; let stars = 0, n = 0;
      Object.keys(S.act || {}).sort().forEach((id) => { const v = S.act[id]; if (v && v.stars) { act[id] = [v.stars, Math.round(v.best || 0), v.at || 0]; stars += v.stars; n++; } });
      exam = { xp: S.xp || 0, coins: S.coins || 0, stars, acts: n, act, best: S.best || {}, mocks: (S.mocks || []).slice(-12).map((m) => ({ exam: m.exam, short: m.short, paper: m.paper, pct: m.pct, grade: m.grade, at: m.at })), badges: S.badges || [], streak: S.streak || 0, lastDay: S.lastDay || null };
    }
    const ket = {};
    keys.filter((k) => k.startsWith("ketbank:res:")).sort().forEach((k) => (ket[k.slice(12)] = ls.get(k, {})));
    return { v: 1, hw, exam, ket };
  }
  function hashStr(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return s.length + ":" + h; }

  function days() { return ls.get("ivy-days", []); }
  function markToday() { const d = days(), t = isoDay(new Date()); if (!d.includes(t)) { d.push(t); ls.set("ivy-days", d.sort().slice(-180)); } }
  function streak(list) {
    const set = new Set(list || days()); const d = new Date();
    if (!set.has(isoDay(d))) d.setDate(d.getDate() - 1);
    let n = 0; while (set.has(isoDay(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* Gộp dữ liệu máy chủ vào máy này (khi học sinh đăng nhập trên máy mới). */
  function merge(snap) {
    if (!snap) return;
    Object.entries(snap.hw || {}).forEach(([c, done]) => {
      const k = "ivy-hw-v2-" + c, cfg = ls.get(k, null) || { cls: "", start: "", days: ["2", "5"], done: {} };
      cfg.done = cfg.done || {}; done.forEach((x) => (cfg.done[x] = true)); ls.set(k, cfg);
    });
    if (snap.exam) {
      const e = snap.exam, S = ls.get("ivy-exam-v3", null) || {};
      S.xp = Math.max(S.xp || 0, e.xp || 0); S.coins = Math.max(S.coins || 0, e.coins || 0);
      S.act = S.act || {};
      Object.entries(e.act || {}).forEach(([id, v]) => { const cur = S.act[id] || { stars: 0, best: 0 }; S.act[id] = { stars: Math.max(cur.stars || 0, v[0]), best: Math.max(cur.best || 0, v[1]), at: Math.max(cur.at || 0, v[2] || 0) }; });
      S.best = S.best || {};
      Object.entries(e.best || {}).forEach(([k, v]) => { if (!S.best[k] || (v && v.pct > S.best[k].pct)) S.best[k] = v; });
      const seen = new Set((S.mocks || []).map((m) => m.at)); S.mocks = (S.mocks || []).concat((e.mocks || []).filter((m) => !seen.has(m.at))).sort((a, b) => a.at - b.at);
      S.badges = [...new Set([...(S.badges || []), ...(e.badges || [])])];
      if (!S.lastDay || (e.lastDay && e.lastDay > S.lastDay)) { S.lastDay = e.lastDay; S.streak = e.streak; }
      ls.set("ivy-exam-v3", S);
    }
    Object.entries(snap.ket || {}).forEach(([id, res]) => {
      const k = "ketbank:res:" + id, cur = ls.get(k, {}) || {};
      Object.entries(res || {}).forEach(([key, v]) => { if (!cur[key] || (v && (v.at || 0) > (cur[key].at || 0))) cur[key] = v; });
      ls.set(k, cur);
    });
    if (snap.days) ls.set("ivy-days", [...new Set([...days(), ...snap.days])].sort().slice(-180));
    ls.del("ivy-sync-fp");
  }

  /* Xoá tiến độ trên máy (khi đổi người dùng trên máy dùng chung). */
  function wipeProgress() {
    ls.keys().forEach((k) => { if (PROGRESS_PREFIX.some((p) => k.startsWith(p)) || PROGRESS_KEYS.includes(k)) ls.del(k); });
  }

  let busy = null;
  async function push(force, opt) {
    const s = session();
    if (!API || !s || s.role !== "hs") return null;
    const snap = snapshot();
    const fp = hashStr(JSON.stringify(snap));
    const last = ls.get("ivy-sync-fp", null);
    if (last && last !== fp) markToday();
    if (!last && (Object.keys(snap.hw).length || snap.exam || Object.keys(snap.ket).length) && ls.get("ivy-sync-at", null) === null) markToday();
    if (fp === last && !force) return null;
    if (busy) return busy;
    snap.days = days();
    busy = api("sync", { snap }, opt).then((j) => { ls.set("ivy-sync-fp", fp); ls.set("ivy-sync-at", Date.now()); window.dispatchEvent(new Event("ivy-synced")); return j; }).finally(() => (busy = null));
    return busy;
  }
  let t = null;
  const soon = () => { clearTimeout(t); t = setTimeout(() => push().catch(() => {}), 2500); };

  /* Đăng nhập xong: gắn máy này với tài khoản, tải tiến độ về. */
  async function afterLogin(j) {
    const p = j.profile;
    if (p.role === "hs") {
      const owner = ls.get("ivy-owner", null);
      if (owner && owner !== p.code) wipeProgress();
      ls.set("ivy-owner", p.code);
    }
    setSession({ token: j.token, code: p.code, role: p.role, role_name: p.role_name, name: p.name, cls: p.cls || null, at: Date.now() });
    applyClass(p.cls);
    if (p.role === "hs") {
      try { const r = await api("pull"); merge(r.snap); } catch (e) {}
      try { await push(true); } catch (e) {}
    }
    window.dispatchEvent(new Event("ivy-auth"));
  }

  /* Lịch lớp do giáo viên đặt → tự điền vào trang "Lớp của em". */
  function applyClass(cls) {
    if (!cls || !cls.course) return;
    ls.set("ivy-myclass", cls.course);
    const k = "ivy-hw-v2-" + cls.course, cfg = ls.get(k, null) || { cls: "", start: "", days: ["2", "5"], done: {} };
    cfg.cls = cls.name; if (cls.start) cfg.start = cls.start; if (cls.days && cls.days.length) cfg.days = cls.days;
    ls.set(k, cfg);
  }

  async function refreshMe() {
    const s = session(); if (!API || !s) return;
    if (s.checked && Date.now() - s.checked < 10 * 60e3) return;
    try {
      const j = await api("me");
      const n = Object.assign(session() || {}, { name: j.profile.name, cls: j.profile.cls || null, checked: Date.now() });
      setSession(n); applyClass(j.profile.cls);
    } catch (e) {}
  }

  async function logout() {
    const s = session();
    if (s && s.role === "hs") { try { await push(true); } catch (e) {} wipeProgress(); ls.del("ivy-owner"); }
    ls.del("ivy-acc");
    window.dispatchEvent(new Event("ivy-auth"));
  }

  /* Tự đồng bộ khi học sinh đang đăng nhập. */
  if (API) {
    const s = session();
    if (s && s.role === "hs") {
      setTimeout(() => push().catch(() => {}), 1500);
      setInterval(() => push().catch(() => {}), 45000);
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") push(false, { keepalive: true }).catch(() => {}); });
      window.addEventListener("storage", soon);
      // Mọi lần lưu tiến độ (tick bài, sao, đề KET) → đồng bộ sau vài giây.
      try {
        const orig = Storage.prototype.setItem;
        Storage.prototype.setItem = function (k, v) {
          orig.call(this, k, v);
          if (this === window.localStorage && (k === "ivy-exam-v3" || k.startsWith("ivy-hw-v2-") || k.startsWith("ketbank:res:"))) soon();
        };
      } catch (e) {}
    }
    setTimeout(refreshMe, 800);
  }

  window.IVY_CORE = { API, ls, isoDay, session, setSession, api, snapshot, merge, push, soon, days, streak, afterLogin, logout, refreshMe, applyClass };
})();
