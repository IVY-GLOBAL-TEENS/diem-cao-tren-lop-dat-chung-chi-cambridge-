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
  acc: ['TaiKhoan', ['ma', 'vai_tro', 'ho_ten', 'lop', 'nguoi_tao', 'salt', 'hash', 'kich_hoat', 'tao_luc', 'lan_cuoi', 'avatar']],
  cls: ['Lop', ['ma_lop', 'ten_lop', 'khoa', 'gv', 'khai_giang', 'ngay_hoc', 'tao_luc', 'tu_dong']],
  prog: ['TienDo', ['ma', 'cap_nhat', 'bai_tap_xong', 'sao', 'xp', 'de_ket', 'ket_tb', 'chuoi_ngay', 'hoat_dong_cuoi', 'du_lieu']],
  bonus: ['ThuongSao', ['id', 'ma', 'ho_ten', 'lop', 'so_sao', 'ly_do', 'nguoi_thuong', 'luc']],
  pts: ['Diem', ['id', 'ma', 'ho_ten', 'lop', 'ky_nang', 'diem', 'nguoi_cham', 'luc']],
  story: ['BangTin', ['id', 'lop', 'nguoi_dang', 'ten_nguoi_dang', 'noi_dung', 'anh', 'luc']],
  asg: ['BaiTap', ['id', 'lop', 'tieu_de', 'link', 'ngay', 'han', 'ghi_chu', 'nguoi_giao', 'luc']],
  sub: ['NopBai', ['id', 'bai', 'ma', 'ho_ten', 'lop', 'anh', 'ghi_chu', 'luc']],
};
const BONUS_MAX = 10; // tối đa sao cho 1 lần thưởng / 1 em
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
  g.getRange(1, 1, 9, 2).setValues([
    ['IVY Teen – máy chủ tài khoản', ''],
    ['Mã quản lý (dùng để kích hoạt lần đầu trên web)', ql.ma],
    ['Bước tiếp theo', 'Triển khai → Tùy chọn triển khai mới → Ứng dụng web → Thực thi: Tôi · Ai có quyền truy cập: Bất kỳ ai'],
    ['Sau đó', 'Dán URL ứng dụng web vào assets/config.js trên GitHub (API_URL)'],
    ['Trang tính TaiKhoan', 'Mỗi dòng là một tài khoản: ql = quản lý, gv = giáo viên, hs = học sinh'],
    ['Trang tính Lop', 'Các lớp giáo viên đã tạo trên web'],
    ['Trang tính TienDo', 'Tiến độ học sinh, tự đồng bộ từ web (cột du_lieu là dữ liệu chi tiết)'],
    ['Trang tính ThuongSao', 'Sao giáo viên thưởng thêm cho học sinh (mỗi dòng 1 lần thưởng)'],
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
    const bonus = bonusByStudent_();
    const teachers = {}; accs.filter((x) => x.vai_tro !== 'hs').forEach((t) => (teachers[t.ma] = t.ho_ten));
    const students = accs.filter((s) => s.vai_tro === 'hs' && ids[s.lop]).map((s) => {
      const p = prog[s.ma];
      let snap = null; try { snap = p && p.du_lieu ? JSON.parse(p.du_lieu) : null; } catch (e) {}
      return { code: s.ma, name: s.ho_ten, avatar: s.avatar || '', cls: s.lop, activated: !!s.kich_hoat, last_login: str_(s.lan_cuoi), synced: p ? str_(p.cap_nhat) : '', snap: snap, bonus: bonus[s.ma] || [] };
    });
    const out = { classes: classes.map((c) => Object.assign(cls_(c), { teacher_name: teachers[c.gv] || '' })), students: students };
    out.points = rows_('pts').filter((x) => ids[x.lop]).map(ptOut_);
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
    if (req.auto != null) c.tu_dong = req.auto ? (c.tu_dong || now_().slice(0, 10)) : '';
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
    const bs = sheet_('bonus');
    rows_('bonus').filter((x) => x.ma === s.ma).reverse().forEach((x) => bs.deleteRow(x._row));
    sheet_('acc').deleteRow(s._row);
    return {};
  },

  /** Giáo viên thưởng sao cho một hoặc nhiều học sinh. */
  giveStars(req) {
    const a = auth_(req, ['gv', 'ql']);
    const n = Math.round(+req.stars);
    if (!(n >= 1 && n <= BONUS_MAX)) fail_('Số sao mỗi lần thưởng từ 1 đến ' + BONUS_MAX + '.');
    const why = clean_(req.reason, 80);
    const codes = (Array.isArray(req.codes) ? req.codes : []).map(norm_).filter(Boolean);
    if (!codes.length) fail_('Chọn ít nhất 1 học sinh.');
    if (codes.length > 60) fail_('Mỗi lần thưởng tối đa 60 học sinh.');
    const accs = {}; rows_('acc').forEach((x) => (accs[String(x.ma).toUpperCase()] = x));
    const mine = {}; rows_('cls').forEach((c) => { if (a.vai_tro === 'ql' || c.gv === a.ma) mine[c.ma_lop] = 1; });
    const sh = sheet_('bonus'), head = SHEETS.bonus[1], at = now_(), rows = [], given = [];
    const seen = {};
    codes.forEach((code, i) => {
      if (seen[code]) return; seen[code] = 1;
      const s = accs[code];
      if (!s || s.vai_tro !== 'hs' || !mine[s.lop]) fail_('Không tìm thấy học sinh ' + code + ' trong lớp của bạn.');
      const o = { id: 'T' + Date.now().toString(36).toUpperCase() + i.toString(36).toUpperCase() + rand_(3), ma: s.ma, ho_ten: s.ho_ten, lop: s.lop, so_sao: String(n), ly_do: why, nguoi_thuong: a.ma, luc: at };
      rows.push(head.map((h) => o[h]));
      given.push(bonusOut_(o, a.ho_ten));
    });
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, head.length).setNumberFormat('@').setValues(rows);
    return { given: given };
  },

  /** Huỷ một lần thưởng sao (bấm nhầm). */
  removeBonus(req) {
    const a = auth_(req, ['gv', 'ql']);
    const b = rows_('bonus').find((x) => x.id === String(req.id || ''));
    if (!b) fail_('Không tìm thấy lần thưởng này.');
    if (a.vai_tro !== 'ql') ownClass_(a, b.lop);
    sheet_('bonus').deleteRow(b._row);
    return {};
  },

  /** Kiểm tra phiên bản máy chủ. */
  ping() { return { version: 4 }; },

  /** Chọn avatar cho tài khoản. */
  setAvatar(req) {
    const a = auth_(req);
    const av = String(req.avatar || '');
    if (!/^m\d{2}$/.test(av)) fail_('Avatar không hợp lệ.');
    a.avatar = av; writeRow_('acc', a);
    return { avatar: av };
  },

  /** Cho điểm kiểu ClassDojo: +1 (tích cực) hoặc -1 (cần cố gắng) theo kỹ năng, cho 1 hoặc nhiều em. */
  givePoints(req) {
    const a = auth_(req, ['gv', 'ql']);
    const v = Math.round(+req.value);
    if (!(v >= -10 && v <= 10 && v !== 0)) fail_('Số sao mỗi lần từ 1 đến 10.');
    const skill = clean_(req.skill, 40);
    if (!skill) fail_('Chọn kỹ năng.');
    const codes = (Array.isArray(req.codes) ? req.codes : []).map(norm_).filter(Boolean);
    if (!codes.length) fail_('Chọn ít nhất 1 học sinh.');
    if (codes.length > 80) fail_('Tối đa 80 học sinh mỗi lần.');
    const accs = {}; rows_('acc').forEach((x) => (accs[String(x.ma).toUpperCase()] = x));
    const mine = {}; rows_('cls').forEach((c) => { if (a.vai_tro === 'ql' || c.gv === a.ma) mine[c.ma_lop] = 1; });
    const sh = sheet_('pts'), head = SHEETS.pts[1], at = now_(), rows = [], out = [], seen = {};
    codes.forEach((code, i) => {
      if (seen[code]) return; seen[code] = 1;
      const s = accs[code];
      if (!s || s.vai_tro !== 'hs' || !mine[s.lop]) fail_('Không tìm thấy học sinh ' + code + ' trong lớp của bạn.');
      const o = { id: 'P' + Date.now().toString(36).toUpperCase() + i.toString(36).toUpperCase() + rand_(3), ma: s.ma, ho_ten: s.ho_ten, lop: s.lop, ky_nang: skill, diem: String(v), nguoi_cham: a.ma, luc: at };
      rows.push(head.map((h) => o[h])); out.push(ptOut_(o));
    });
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, head.length).setNumberFormat('@').setValues(rows);
    return { points: out };
  },

  /** Huỷ điểm vừa cho (bấm nhầm). */
  undoPoints(req) {
    const a = auth_(req, ['gv', 'ql']);
    const ids = {}; (req.ids || []).forEach((x) => (ids[String(x)] = 1));
    const list = rows_('pts').filter((x) => ids[x.id]);
    if (!list.length) fail_('Không tìm thấy điểm cần huỷ.');
    list.forEach((x) => { if (a.vai_tro !== 'ql') ownClass_(a, x.lop); });
    const sh = sheet_('pts');
    list.sort((p, q) => q._row - p._row).forEach((x) => sh.deleteRow(x._row));
    return { removed: list.length };
  },

  /** Bảng tin lớp: giáo viên xem lớp mình, học sinh xem lớp của em. */
  stories(req) {
    const a = auth_(req);
    const id = a.vai_tro === 'hs' ? a.lop : String(req.id || '');
    if (a.vai_tro !== 'hs') ownClass_(a, id);
    const list = rows_('story').filter((x) => x.lop === id).reverse().slice(0, 40);
    return { stories: list.map((x) => ({ id: x.id, by: x.ten_nguoi_dang, text: x.noi_dung, img: x.anh || '', at: str_(x.luc) })) };
  },

  postStory(req) {
    const a = auth_(req, ['gv', 'ql']);
    const c = ownClass_(a, req.id);
    const text = String(req.text == null ? '' : req.text).replace(/[\u0000-\u0008\u000b-\u001f<>]/g, '').trim().slice(0, 2000);
    const img = String(req.img || '');
    if (img && (!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/.test(img) || img.length > 48000)) fail_('Ảnh không hợp lệ hoặc quá lớn.');
    if (!text && !img) fail_('Nhập nội dung hoặc chọn ảnh.');
    const o = { id: 'B' + Date.now().toString(36).toUpperCase() + rand_(3), lop: c.ma_lop, nguoi_dang: a.ma, ten_nguoi_dang: a.ho_ten, noi_dung: text, anh: img, luc: now_() };
    writeRow_('story', o);
    return { story: { id: o.id, by: o.ten_nguoi_dang, text: o.noi_dung, img: o.anh, at: o.luc } };
  },

  deleteStory(req) {
    const a = auth_(req, ['gv', 'ql']);
    const x = rows_('story').find((r) => r.id === String(req.sid || ''));
    if (!x) fail_('Không tìm thấy bài đăng.');
    if (a.vai_tro !== 'ql') ownClass_(a, x.lop);
    sheet_('story').deleteRow(x._row);
    return {};
  },

  /** Bài tập giao theo ngày. Học sinh: lớp của em + bài em đã nộp. Giáo viên: một lớp + bài nộp của cả lớp. */
  assignments(req) {
    const a = auth_(req);
    const id = a.vai_tro === 'hs' ? a.lop : String(req.id || '');
    if (a.vai_tro !== 'hs') ownClass_(a, id);
    const list = rows_('asg').filter((x) => x.lop === id).map(asgOut_);
    const subs = rows_('sub').filter((x) => x.lop === id && (a.vai_tro !== 'hs' || x.ma === a.ma)).map(subOut_);
    return { assignments: list, submissions: subs };
  },

  createAssignment(req) {
    const a = auth_(req, ['gv', 'ql']);
    const c = ownClass_(a, req.id);
    const title = clean_(req.title, 120);
    const link = String(req.link || '').trim().slice(0, 500);
    if (link && !/^https?:\/\/[^\s<>"]+$/.test(link)) fail_('Link phải bắt đầu bằng http:// hoặc https://');
    if (!title && !link) fail_('Nhập tên bài hoặc link bài tập.');
    const day = date_(req.date);
    if (!day) fail_('Chọn ngày.');
    const due = date_(req.due) || day;
    const o = { id: 'A' + Date.now().toString(36).toUpperCase() + rand_(3), lop: c.ma_lop, tieu_de: title, link: link, ngay: day, han: due < day ? day : due, ghi_chu: clean_(req.note, 500), nguoi_giao: a.ma, luc: now_() };
    writeRow_('asg', o);
    return { assignment: asgOut_(o) };
  },

  deleteAssignment(req) {
    const a = auth_(req, ['gv', 'ql']);
    const x = rows_('asg').find((r) => r.id === String(req.aid || ''));
    if (!x) fail_('Không tìm thấy bài tập.');
    if (a.vai_tro !== 'ql') ownClass_(a, x.lop);
    const sh = sheet_('sub');
    rows_('sub').filter((r) => r.bai === x.id).sort((p, q) => q._row - p._row).forEach((r) => sh.deleteRow(r._row));
    sheet_('asg').deleteRow(x._row);
    return {};
  },

  /** Học sinh nộp bài (đánh dấu xong, kèm ảnh bài làm nếu có). Nộp lại sẽ thay bài cũ. */
  submit(req) {
    const a = auth_(req, ['hs']);
    const x = rows_('asg').find((r) => r.id === String(req.aid || ''));
    if (!x || x.lop !== a.lop) fail_('Không tìm thấy bài tập trong lớp của em.');
    const img = String(req.img || '');
    if (img && (!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/.test(img) || img.length > 48000)) fail_('Ảnh không hợp lệ hoặc quá lớn.');
    const old = rows_('sub').find((r) => r.bai === x.id && r.ma === a.ma);
    const o = Object.assign(old || { id: 'N' + Date.now().toString(36).toUpperCase() + rand_(3) }, { bai: x.id, ma: a.ma, ho_ten: a.ho_ten, lop: a.lop, anh: img || (old && req.keepImg ? old.anh : ''), ghi_chu: clean_(req.note, 300), luc: now_() });
    writeRow_('sub', o);
    return { submission: subOut_(o) };
  },

  unsubmit(req) {
    const a = auth_(req, ['hs']);
    const old = rows_('sub').find((r) => r.bai === String(req.aid || '') && r.ma === a.ma);
    if (old) sheet_('sub').deleteRow(old._row);
    return {};
  },

  /** Xem ảnh bài nộp. */
  submissionImg(req) {
    const a = auth_(req);
    const x = rows_('sub').find((r) => r.id === String(req.sid || ''));
    if (!x) fail_('Không tìm thấy bài nộp.');
    if (a.vai_tro === 'hs') { if (x.ma !== a.ma) fail_('Không có quyền.'); }
    else ownClass_(a, x.lop);
    return { img: x.anh || '' };
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
  const out = { code: a.ma, role: a.vai_tro, role_name: ROLE_NAME[a.vai_tro], name: a.ho_ten, avatar: a.avatar || '' };
  if (a.vai_tro === 'hs') {
    const c = rows_('cls').find((x) => x.ma_lop === a.lop);
    if (c) out.cls = cls_(c);
    out.bonus = bonusByStudent_()[a.ma] || [];
    out.points = rows_('pts').filter((x) => x.ma === a.ma).map(ptOut_).reverse().slice(0, 300);
  }
  return out;
}

/** Sao thưởng theo mã học sinh, mới nhất trước. */
function bonusByStudent_() {
  const names = {}; rows_('acc').forEach((x) => { if (x.vai_tro !== 'hs') names[x.ma] = x.ho_ten; });
  const out = {};
  rows_('bonus').forEach((b) => { (out[b.ma] = out[b.ma] || []).push(bonusOut_(b, names[b.nguoi_thuong])); });
  Object.keys(out).forEach((k) => out[k].reverse());
  return out;
}
function bonusOut_(b, by) {
  return { id: b.id, code: b.ma, n: +b.so_sao || 0, why: b.ly_do || '', by: by || '', at: str_(b.luc) };
}

function asgOut_(x) { return { id: x.id, title: x.tieu_de, link: x.link, date: str_(x.ngay), due: str_(x.han) || str_(x.ngay), note: x.ghi_chu || '', at: str_(x.luc) }; }
function subOut_(x) { return { id: x.id, aid: x.bai, code: x.ma, name: x.ho_ten, img: !!x.anh, note: x.ghi_chu || '', at: str_(x.luc) }; }
function ptOut_(x) { return { id: x.id, code: x.ma, skill: x.ky_nang, v: +x.diem || 0, at: str_(x.luc) }; }

function cls_(c) {
  return { id: c.ma_lop, name: c.ten_lop, course: c.khoa, teacher: c.gv, start: str_(c.khai_giang), days: String(c.ngay_hoc || '').split(',').filter(String), auto: !!String(c.tu_dong || ''), auto_from: /^\d{4}-\d{2}-\d{2}$/.test(String(c.tu_dong || '')) ? String(c.tu_dong) : '' };
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

const HEAD_OK_ = {};
function sheet_(k) {
  const name = SHEETS[k][0], head = SHEETS[k][1];
  let sh = ss_().getSheetByName(name);
  if (!sh) {
    sh = ss_().insertSheet(name);
    sh.getRange(1, 1, 1000, head.length).setNumberFormat('@');
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold').setBackground('#0b16b0').setFontColor('#ffffff');
    sh.setFrozenRows(1);
  } else if (!HEAD_OK_[k]) {
    const cur = sh.getRange(1, head.length).getValue();
    if (cur !== head[head.length - 1]) sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold').setBackground('#0b16b0').setFontColor('#ffffff');
  }
  HEAD_OK_[k] = 1;
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
