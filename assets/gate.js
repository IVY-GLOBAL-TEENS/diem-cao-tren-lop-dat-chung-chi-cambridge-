/* IVY Teen – chặn trang khi chưa đăng nhập hoặc sai vai trò.
 * Đặt trong <head>, sau config.js:  <script src="../assets/gate.js" data-roles="hs,gv,ql"></script>
 * Chưa đăng nhập → về trang đăng nhập (kèm ?next= để quay lại đúng trang sau khi đăng nhập). */
(function () {
  var me = document.currentScript;
  var roles = ((me && me.getAttribute("data-roles")) || "hs,gv,ql").split(",");
  var root = new URL("..", me.src); // thư mục gốc website (assets/ nằm ngay dưới)
  var s = null;
  try { s = JSON.parse(localStorage.getItem("ivy-acc") || "null"); } catch (e) {}
  if (s && s.token) {
    try {
      var b = s.token.split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
      var p = JSON.parse(atob(b + "===".slice((b.length + 3) % 4)));
      if (!p.e || p.e < Date.now()) { localStorage.removeItem("ivy-acc"); s = null; }
    } catch (e) { s = null; }
  }
  var api = ((window.IVY_CONFIG || {}).API_URL || "").trim();
  var here = location.href.slice(root.href.length);
  if (!api || !s || !s.token) {
    document.documentElement.style.visibility = "hidden";
    location.replace(root.href + "#/dang-nhap?next=" + encodeURIComponent(here));
  } else if (roles.indexOf(s.role) < 0) {
    document.documentElement.style.visibility = "hidden";
    location.replace(root.href + "#/");
  }
})();
