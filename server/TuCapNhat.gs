/**
 * IVY Teen – máy chủ TỰ CẬP NHẬT.
 *
 * Dán file này vào Apps Script THAY CHO Code.gs (chỉ cần dán 1 lần duy nhất).
 * Mỗi khi có yêu cầu, máy chủ tự tải bản Code.gs mới nhất trên GitHub về chạy,
 * nên sau này website có chức năng mới thì máy chủ cũng tự có, không phải dán lại.
 *
 * Dữ liệu (tài khoản, lớp, sao, bài nộp) vẫn nằm trong Google Sheet của bạn.
 * Mã máy chủ được lấy từ kho GitHub của trung tâm – chỉ người có quyền sửa kho đó mới thay đổi được.
 */

var IVY_SRC = 'https://raw.githubusercontent.com/IVY-GLOBAL-TEENS/diem-cao-tren-lop-dat-chung-chi-cambridge-/main/server/Code.gs';
var IVY_CACHE_SEC = 300; // 5 phút lấy bản mới một lần

function ivyCore_() {
  var cache = CacheService.getScriptCache();
  var code = cache.get('ivy-core');
  if (!code) {
    var res = UrlFetchApp.fetch(IVY_SRC + '?t=' + Date.now(), { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) {
      code = PropertiesService.getScriptProperties().getProperty('IVY_CORE_BACKUP');
      if (!code) throw new Error('Không tải được mã máy chủ từ GitHub (' + res.getResponseCode() + ').');
    } else {
      code = res.getContentText();
      try { cache.put('ivy-core', code, IVY_CACHE_SEC); } catch (e) {}
      try { PropertiesService.getScriptProperties().setProperty('IVY_CORE_BACKUP', code); } catch (e) {}
    }
  }
  return new Function(code + '\n;return { doGet: doGet, doPost: doPost, setup: setup };')();
}

function doGet(e) { return ivyCore_().doGet(e); }
function doPost(e) { return ivyCore_().doPost(e); }

/** Chạy 1 lần lúc cài đặt mới (tạo trang tính + mã quản lý). Đã cài rồi thì không cần. */
function setup() { return ivyCore_().setup(); }

/** Bấm ▶ Chạy hàm này sau khi dán để cấp quyền và kiểm tra. */
function kiemTra() {
  CacheService.getScriptCache().remove('ivy-core');
  var core = ivyCore_();
  var out = core.doPost({ postData: { contents: JSON.stringify({ action: 'ping' }) } });
  Logger.log('Máy chủ trả lời: ' + out.getContent());
}
