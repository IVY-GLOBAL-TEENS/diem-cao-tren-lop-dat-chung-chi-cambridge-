/**
 * IVY Teen – máy chủ tài khoản (Google Apps Script gắn với Google Sheet).
 *
 * Cách cài: xem server/HUONG-DAN.md. Tóm tắt:
 *   1. Tạo Google Sheet mới → Tiện ích mở rộng → Apps Script → dán toàn bộ file này.
 *   2. Chạy hàm setup() một lần → mở trang tính "HuongDan" để lấy MÃ QUẢN LÝ.
 *   3. Triển khai → Ứng dụng web (Thực thi: Tôi · Ai có quyền truy cập: Bất kỳ ai) → copy URL.
 *   4. Dán URL vào assets/config.js trên GitHub.
 *
 * Dữ liệu (mã, họ tên, tiến độ) chỉ nằm trong Google Sheet của bạn, không nằm trên GitHub.
 * Mật khẩu không lưu dạng chữ: chỉ lưu muối (salt) + giá trị băm.
 */

const SHEETS = {
  acc: ['TaiKhoan', ['ma', 'vai_tro', 'ho_ten', 'lop', 'nguoi_tao', 'salt', 'hash', 'kich_hoat', 'tao_luc', 'lan_cuoi']],
  cls: ['Lop', ['ma_lop', 'ten_lop', 'khoa', 'gv', 'khai_giang', 'ngay_hoc', 'tao_luc']],
  prog: ['TienDo', ['ma', 'cap_nhat', 'bai_tap_xong', 'sao', 'xp', 'de_ket', 'ket_tb', 'chuoi_ngay', 'hoat_dong_cuoi', 'du_lieu']],
};
const COURSES = { fd: 'FD', bu: 'BU', ko: 'KO', bo: 'BO', pi: 'PI' };
const ROLE_NAME = { ql: 'Quản lý', gv: 'Giáo viên', hs: 'Học sinh' };
const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // bỏ I, O, 0, 1 cho dễ đọc
const TOKEN_DAYS = 60;
const MAX_FAILS = 8;

/* ============================== cài đặt ============================== */

function setup() {
  Object.keys(SHEETS).forEach(sheet_);
  const accs = rows_('acc');
  let ql = accs.find((a) => a.vai_tro === 'ql');
  if (!ql) {
    ql = { ma: 'QL-' + rand_(6), vai_tro: 'ql', ho_ten: 'Quản lý IVY', lop: '', nguoi_tao: '', salt: '', hash: '', kich_hoat: '', tao_luc: now_(), lan_cuoi: '' };
    writeRow_('acc', ql);
  }
  secret_();
  let g = ss_().getSheetByName('HuongDan');
  if (!g) g = ss_().insertSheet('HuongDan', 0);
  g.clear();
  g.getRange(1, 1, 8, 2).setValues([
    ['IVY Teen – máy chủ tài khoản', ''],
    ['Mã quản lý (dùng để kích hoạt lần đầu trên web)', ql.ma],
    ['Bước tiếp theo', 'Triển khai → Tùy chọn triển khai mới → Ứng dụng web → Thực thi: Tôi · Ai có quyền truy cập: Bất kỳ ai'],
    ['Sau đó', 'Dán URL ứng dụng web vào assets/config.js trên GitHub (API_URL)'],
    ['Trang tính TaiKhoan', 'Mỗi dòng là một tài khoản: ql = quản lý, gv = giáo viên, hs = học sinh'],
    ['Trang tính Lop', 'Các lớp giáo viên đã tạo trên web'],
    ['Trang tính TienDo', 'Tiến độ học sinh, tự đồng bộ từ web (cột du_lieu là dữ liệu chi tiết)'],
    ['Lưu ý', 'Không sửa cột salt/hash. Muốn cấp lại mật khẩu, dùng nút "Cấp lại" trên web.'],
  ]);
  g.getRange('A1').setFontWeight('bold').setFontSize(14);
  g.getRange('B2').setFontWeight('bold').setFontSize(14).setBackground('#fff4c2');
  g.setColumnWidth(1, 330); g.setColumnWidth(2, 620);
  Logger.log('Mã quản lý: ' + ql.ma);
  return ql.ma;
}

/* ============================== HTTP ============================== */

function doGet() {
  return json_({ ok: true, service: 'ivy-teen', time: now_() });
}

function doPost(e) {
  let req = {};
  try { req = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return json_({ ok: false, error: 'Yêu cầu không hợp lệ.' }); }
  const fn = ACTIONS[req.action];
  if (!fn) return json_({ ok: false, error: 'Không rõ thao tác: ' + req.action });
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const out = fn(req) || {};
    out.ok = true;
    return json_(out);
  } catch (err) {
    if (err && err.auth) return json_({ ok: false, auth: true, error: err.msg });
    return json_({ ok: false, error: (err && (err.msg || err.message)) || String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

/* ============================== thao tác ============================== */

const ACTIONS = {
  /** Kiểm tra mã: trả về tên + đã kích hoạt chưa. */
  check(req) {
    const a = findAcc_(req.code);
    if (!a) fail_('Không tìm thấy mã này. Em kiểm tra lại với thầy cô nhé.');
    return { role: a.vai_tro, name: a.ho_ten, activated: !!a.kich_hoat };
  },

  /** Kích hoạt mã lần đầu: đặt mật khẩu. */
  activate(req) {
    const a = findAcc_(req.code);
    if (!a) fail_('Không tìm thấy mã này.');
    if (a.kich_hoat) fail_('Mã này đã được kích hoạt. Hãy đăng nhập bằng mật khẩu.');
    checkPw_(req.password);
    setPw_(a, req.password);
    a.kich_hoat = now_(); a.lan_cuoi = now_();
    writeRow_('acc', a);
    return { token: token_(a), profile: profile_(a) };
  },

  /** Đăng nhập bằng mã + mật khẩu. */
  login(req) {
    const code = norm_(req.code);
    const cache = CacheService.getScriptCache(), ck = 'fail:' + code;
    const fails = +(cache.get(ck) || 0);
    if (fails >= MAX_FAILS) fail_('Sai mật khẩu quá nhiều lần. Thử lại sau 15 phút hoặc nhờ thầy cô cấp lại.');
    const a = findAcc_(code);
    if (!a || !a.kich_hoat || hash_(a.salt, String(req.password || '')) !== a.hash) {
      cache.put(ck, String(fails + 1), 900);
      fail_(a && !a.kich_hoat ? 'Mã này chưa được kích hoạt.' : 'Sai mã hoặc mật khẩu.');
    }
    cache.remove(ck);
    a.lan_cuoi = now_();
    writeRow_('acc', a);
    return { token: token_(a), profile: profile_(a) };
  },

  me(req) {
    const a = auth_(req);
    return { profile: profile_(a) };
  },

  changePassword(req) {
    const a = auth_(req);
    if (hash_(a.salt, String(req.old || '')) !== a.hash) fail_('Mật khẩu cũ chưa đúng.');
    checkPw_(req.password);
    setPw_(a, req.password);
    writeRow_('acc', a);
    return { token: token_(a) };
  },

  /** Học sinh gửi ảnh chụp tiến độ (bài tập, sao, đề KET, ngày học). */
  sync(req) {
    const a = auth_(req, ['hs']);
    const snap = req.snap || {};
    let raw = JSON.stringify(snap);
    if (raw.length > 48000 && snap.exam) { delete snap.exam.act; raw = JSON.stringify(snap); }
    if (raw.length > 48000) fail_('Dữ liệu quá lớn.');
    const sum = summary_(snap);
    const p = rows_('prog').find((r) => r.ma === a.ma) || { ma: a.ma };
    Object.assign(p, sum, { cap_nhat: now_(), du_lieu: raw });
    writeRow_('prog', p);
    return { at: p.cap_nhat };
  },

  /** Học sinh tải tiến độ về máy mới. */
  pull(req) {
    const a = auth_(req, ['hs']);
    const p = rows_('prog').find((r) => r.ma === a.ma);
    return { snap: p && p.du_lieu ? JSON.parse(p.du_lieu) : null, at: p ? p.cap_nhat : null };
  },

  /** Bảng điều khiển giáo viên / quản lý: lớp + học sinh + tiến độ. */
  dash(req) {
    const a = auth_(req, ['gv', 'ql']);
    const accs = rows_('acc');
    const classes = rows_('cls').filter((c) => a.vai_tro === 'ql' || c.gv === a.ma);
    const ids = {}; classes.forEach((c) => (ids[c.ma_lop] = 1));
    const prog = {}; rows_('prog').forEach((p) => (prog[p.ma] = p));
    const teachers = {}; accs.filter((x) => x.vai_tro !== 'hs').forEach((t) => (teachers[t.ma] = t.ho_ten));
    const students = accs.filter((s) => s.vai_tro === 'hs' && ids[s.lop]).map((s) => {
      const p = prog[s.ma];
      let snap = null; try { snap = p && p.du_lieu ? JSON.parse(p.du_lieu) : null; } catch (e) {}
      return { code: s.ma, name: s.ho_ten, cls: s.lop, activated: !!s.kich_hoat, last_login: str_(s.lan_cuoi), synced: p ? str_(p.cap_nhat) : '', snap: snap };
    });
    const out = { classes: classes.map((c) => Object.assign(cls_(c), { teacher_name: teachers[c.gv] || '' })), students: students };
    if (a.vai_tro === 'ql') {
      out.teachers = accs.filter((t) => t.vai_tro === 'gv').map((t) => ({ code: t.ma, name: t.ho_ten, activated: !!t.kich_hoat, last_login: str_(t.lan_cuoi), classes: rows_('cls').filter((c) => c.gv === t.ma).length }));
      out.me_code = a.ma;
    }
    return out;
  },

  createClass(req) {
    const a = auth_(req, ['gv', 'ql']);
    const name = clean_(req.name, 40);
    if (!name) fail_('Nhập tên lớp.');
    if (!COURSES[req.course]) fail_('Chọn khoá học.');
    let gv = a.ma;
    if (a.vai_tro === 'ql' && req.teacher) {
      const t = findAcc_(req.teacher);
      if (!t || t.vai_tro === 'hs') fail_('Không tìm thấy giáo viên.');
      gv = t.ma;
    }
    const c = { ma_lop: 'L' + Date.now().toString(36).toUpperCase() + rand_(2), ten_lop: name, khoa: req.course, gv: gv, khai_giang: date_(req.start), ngay_hoc: days_(req.days), tao_luc: now_() };
    writeRow_('cls', c);
    return { cls: cls_(c) };
  },

  updateClass(req) {
    const a = auth_(req, ['gv', 'ql']);
    const c = ownClass_(a, req.id);
    if (req.name != null) { const n = clean_(req.name, 40); if (n) c.ten_lop = n; }
    if (req.start != null) c.khai_giang = date_(req.start);
    if (req.days != null) c.ngay_hoc = days_(req.days);
    if (a.vai_tro === 'ql' && req.teacher) { const t = findAcc_(req.teacher); if (t && t.vai_tro !== 'hs') c.gv = t.ma; }
    writeRow_('cls', c);
    return { cls: cls_(c) };
  },

  deleteClass(req) {
    const a = auth_(req, ['gv', 'ql']);
    const c = ownClass_(a, req.id);
    if (rows_('acc').some((s) => s.vai_tro === 'hs' && s.lop === c.ma_lop)) fail_('Lớp còn học sinh. Xoá học sinh trước khi xoá lớp.');
    sheet_('cls').deleteRow(c._row);
    return {};
  },

  /** Thêm học sinh (mỗi tên 1 mã). */
  addStudents(req) {
    const a = auth_(req, ['gv', 'ql']);
    const c = ownClass_(a, req.id);
    const names = (req.names || []).map((n) => clean_(n, 60)).filter(Boolean);
    if (!names.length) fail_('Nhập ít nhất 1 tên học sinh.');
    if (names.length > 60) fail_('Mỗi lần thêm tối đa 60 học sinh.');
    const accs = rows_('acc');
    const used = {}; accs.forEach((x) => (used[x.ma] = 1));
    let n = accs.filter((s) => s.vai_tro === 'hs' && s.lop === c.ma_lop).length;
    const short = (String(c.ten_lop).toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/Đ/g, 'D').replace(/[^A-Z0-9]/g, '').replace(/^(FOUNDATION|BRIDGEUP|BRIDGE|KICKOFF|BOOST|PILOT|LOP)/, '') || 'L').slice(-5);
    const created = [];
    const sh = sheet_('acc'), head = SHEETS.acc[1], rows = [];
    names.forEach((name) => {
      n++;
      let code;
      do { code = COURSES[c.khoa] + '-' + short + '-' + String(n).padStart(2, '0') + '-' + rand_(3); } while (used[code]);
      used[code] = 1;
      const s = { ma: code, vai_tro: 'hs', ho_ten: name, lop: c.ma_lop, nguoi_tao: a.ma, salt: '', hash: '', kich_hoat: '', tao_luc: now_(), lan_cuoi: '' };
      rows.push(head.map((h) => s[h]));
      created.push({ code: code, name: name });
    });
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, head.length).setNumberFormat('@').setValues(rows);
    return { created: created };
  },

  renameStudent(req) {
    const a = auth_(req, ['gv', 'ql']);
    const s = ownStudent_(a, req.code);
    const n = clean_(req.name, 60); if (!n) fail_('Nhập tên.');
    s.ho_ten = n; writeRow_('acc', s);
    return {};
  },

  /** Cấp lại: xoá mật khẩu, học sinh/giáo viên kích hoạt lại bằng mã cũ. */
  resetAccount(req) {
    const a = auth_(req, ['gv', 'ql']);
    const t = findAcc_(req.code);
    if (!t) fail_('Không tìm thấy mã.');
    if (t.vai_tro === 'hs') ownStudent_(a, t.ma);
    else if (a.vai_tro !== 'ql' || t.vai_tro === 'ql') fail_('Không có quyền.');
    t.salt = ''; t.hash = ''; t.kich_hoat = '';
    writeRow_('acc', t);
    return {};
  },

  removeStudent(req) {
    const a = auth_(req, ['gv', 'ql']);
    const s = ownStudent_(a, req.code);
    const p = rows_('prog').find((r) => r.ma === s.ma);
    if (p) sheet_('prog').deleteRow(p._row);
    sheet_('acc').deleteRow(s._row);
    return {};
  },

  /** Quản lý tạo mã giáo viên. */
  createTeacher(req) {
    const a = auth_(req, ['ql']);
    const name = clean_(req.name, 60);
    if (!name) fail_('Nhập tên giáo viên.');
    const used = {}; rows_('acc').forEach((x) => (used[x.ma] = 1));
    let code; do { code = 'GV-' + rand_(5); } while (used[code]);
    writeRow_('acc', { ma: code, vai_tro: 'gv', ho_ten: name, lop: '', nguoi_tao: a.ma, salt: '', hash: '', kich_hoat: '', tao_luc: now_(), lan_cuoi: '' });
    return { code: code, name: name };
  },

  renameTeacher(req) {
    auth_(req, ['ql']);
    const t = findAcc_(req.code);
    if (!t || t.vai_tro !== 'gv') fail_('Không tìm thấy giáo viên.');
    const n = clean_(req.name, 60); if (!n) fail_('Nhập tên.');
    t.ho_ten = n; writeRow_('acc', t);
    return {};
  },

  removeTeacher(req) {
    auth_(req, ['ql']);
    const t = findAcc_(req.code);
    if (!t || t.vai_tro !== 'gv') fail_('Không tìm thấy giáo viên.');
    if (rows_('cls').some((c) => c.gv === t.ma)) fail_('Giáo viên còn lớp. Chuyển lớp sang giáo viên khác trước.');
    sheet_('acc').deleteRow(t._row);
    return {};
  },
};

/* ============================== tiện ích ============================== */

function summary_(snap) {
  let hw = 0; Object.keys(snap.hw || {}).forEach((k) => (hw += (snap.hw[k] || []).length));
  const ex = snap.exam || {};
  let s = 0, mx = 0, tests = 0;
  Object.keys(snap.ket || {}).forEach((id) => {
    const r = snap.ket[id] || {}; let any = false;
    Object.keys(r).forEach((k) => { const x = r[k] || {}; if (+x.mx > 0) { s += +x.s || 0; mx += +x.mx; any = true; } });
    if (any) tests++;
  });
  const days = (snap.days || []).slice().sort();
  return { bai_tap_xong: hw, sao: ex.stars || 0, xp: ex.xp || 0, de_ket: tests, ket_tb: mx ? Math.round((s / mx) * 100) + '%' : '', chuoi_ngay: streak_(days), hoat_dong_cuoi: days.length ? days[days.length - 1] : '' };
}

function streak_(days) {
  if (!days.length) return 0;
  const set = {}; days.forEach((d) => (set[d] = 1));
  const tz = Session.getScriptTimeZone();
  const d = new Date();
  const f = (x) => Utilities.formatDate(x, tz, 'yyyy-MM-dd');
  if (!set[f(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (set[f(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

function profile_(a) {
  const out = { code: a.ma, role: a.vai_tro, role_name: ROLE_NAME[a.vai_tro], name: a.ho_ten };
  if (a.vai_tro === 'hs') {
    const c = rows_('cls').find((x) => x.ma_lop === a.lop);
    if (c) out.cls = cls_(c);
  }
  return out;
}

function cls_(c) {
  return { id: c.ma_lop, name: c.ten_lop, course: c.khoa, teacher: c.gv, start: str_(c.khai_giang), days: String(c.ngay_hoc || '').split(',').filter(String) };
}

function ownClass_(a, id) {
  const c = rows_('cls').find((x) => x.ma_lop === id);
  if (!c || (a.vai_tro !== 'ql' && c.gv !== a.ma)) fail_('Không tìm thấy lớp của bạn.');
  return c;
}

function ownStudent_(a, code) {
  const s = findAcc_(code);
  if (!s || s.vai_tro !== 'hs') fail_('Không tìm thấy học sinh.');
  if (a.vai_tro !== 'ql') ownClass_(a, s.lop);
  return s;
}

function auth_(req, roles) {
  const p = verify_(req.token);
  const a = findAcc_(p.c);
  if (!a || !a.kich_hoat || String(a.salt).slice(0, 8) !== p.s) throw { auth: true, msg: 'Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại.' };
  if (roles && roles.indexOf(a.vai_tro) < 0) fail_('Tài khoản này không có quyền làm việc này.');
  return a;
}

function token_(a) {
  const body = b64_(JSON.stringify({ c: a.ma, s: String(a.salt).slice(0, 8), e: Date.now() + TOKEN_DAYS * 864e5 }));
  return body + '.' + b64_(Utilities.computeHmacSha256Signature(body, secret_()));
}

function verify_(tok) {
  const parts = String(tok || '').split('.');
  if (parts.length !== 2 || b64_(Utilities.computeHmacSha256Signature(parts[0], secret_())) !== parts[1]) throw { auth: true, msg: 'Hãy đăng nhập.' };
  const pad = parts[0] + '==='.slice((parts[0].length + 3) % 4);
  const p = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(pad)).getDataAsString());
  if (!p.e || p.e < Date.now()) throw { auth: true, msg: 'Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại.' };
  return p;
}

function setPw_(a, pw) {
  a.salt = Utilities.getUuid().replace(/-/g, '');
  a.hash = hash_(a.salt, String(pw));
}

function checkPw_(pw) {
  if (String(pw || '').length < 6) fail_('Mật khẩu cần ít nhất 6 ký tự.');
  if (String(pw).length > 64) fail_('Mật khẩu quá dài.');
}

function hash_(salt, pw) {
  let h = salt + '|' + pw;
  for (let i = 0; i < 200; i++) h = b64_(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, h, Utilities.Charset.UTF_8));
  return h;
}

function secret_() {
  const p = PropertiesService.getScriptProperties();
  let s = p.getProperty('SECRET');
  if (!s) { s = Utilities.getUuid() + Utilities.getUuid(); p.setProperty('SECRET', s); }
  return s;
}

function b64_(x) { return Utilities.base64EncodeWebSafe(x).replace(/=+$/, ''); }
function rand_(n) { let s = ''; for (let i = 0; i < n; i++) s += ALPHA[Math.floor(Math.random() * ALPHA.length)]; return s; }
function norm_(code) { return String(code || '').toUpperCase().replace(/\s+/g, '').trim(); }
function clean_(s, max) { return String(s == null ? '' : s).replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max); }
function date_(s) { s = String(s || ''); return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : ''; }
function days_(d) { return (Array.isArray(d) ? d : String(d || '').split(',')).map(String).filter((x) => /^[0-6]$/.test(x)).join(','); }
function now_() { return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm'); }
function str_(v) { return v instanceof Date ? Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd') : String(v == null ? '' : v); }
function fail_(msg) { throw { msg: msg }; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function ss_() { return SpreadsheetApp.getActive(); }

function sheet_(k) {
  const name = SHEETS[k][0], head = SHEETS[k][1];
  let sh = ss_().getSheetByName(name);
  if (!sh) {
    sh = ss_().insertSheet(name);
    sh.getRange(1, 1, 1000, head.length).setNumberFormat('@');
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold').setBackground('#0b16b0').setFontColor('#ffffff');
    sh.setFrozenRows(1);
  }
  return sh;
}

function rows_(k) {
  const sh = sheet_(k), head = SHEETS[k][1];
  const last = sh.getLastRow();
  if (last < 2) return [];
  return sh.getRange(2, 1, last - 1, head.length).getValues().map((r, i) => {
    const o = { _row: i + 2 };
    head.forEach((h, j) => (o[h] = r[j] instanceof Date ? str_(r[j]) : r[j] === '' ? '' : String(r[j])));
    return o;
  }).filter((o) => o[head[0]]);
}

function findAcc_(code) {
  const c = norm_(code);
  if (!c) return null;
  return rows_('acc').find((a) => String(a.ma).toUpperCase() === c) || null;
}

function writeRow_(k, o) {
  const sh = sheet_(k), head = SHEETS[k][1];
  const vals = [head.map((h) => (o[h] == null ? '' : o[h]))];
  if (o._row) sh.getRange(o._row, 1, 1, head.length).setNumberFormat('@').setValues(vals);
  else { const r = sh.getLastRow() + 1; sh.getRange(r, 1, 1, head.length).setNumberFormat('@').setValues(vals); o._row = r; }
}
