# IVY Teen – Bảng điều khiển học tập

Website tĩnh (HTML/CSS/JS thuần) chạy trên GitHub Pages, màu chủ đạo xanh IVY Teen, logo IVY English và linh vật gấu trúc đỏ.

## Bố cục
| Khu vực | Địa chỉ | Dành cho |
|---|---|---|
| Bảng điều khiển | `#/` | Mọi người: thẻ 5 lớp, việc cần làm, lối tắt |
| Lớp của em | `#/hoc-sinh/<lớp>` | Học sinh: bài hôm nay, luyện tập, tiến độ (tick bài) |
| Góc giáo viên | `#/giao-vien/<khoá>` | Tổng quan · Lộ trình · Giáo án từng buổi · Ngữ pháp · Bản đồ KET |
| Game theo lứa tuổi | `#/giao-vien/game` | Giáo viên |
| Phòng thi ảo | `phong-thi/` (`?lv=a1` mở thẳng cấp độ) | Học sinh |
| Kho đề KET | `phong-thi/ket/` | Học sinh |
| Tài liệu | `tai-lieu/` | Quản lý |
| Đăng nhập / kích hoạt mã | `#/dang-nhap` | Mọi người |
| Góc của em | `#/cua-em` | Học sinh: sao, chuỗi ngày học, bài về nhà, điểm KET |
| Lớp của tôi | `#/lop-cua-toi/<mã lớp>` | Giáo viên: tạo lớp, cấp mã học sinh, theo dõi tiến độ, học sinh cần chú ý |
| Quản lý giáo viên | `#/quan-ly` | Quản lý: tạo mã giáo viên |

Mã lớp/khoá: `fd` Foundation · `bu` Bridge-up · `ko` Kick-off · `bo` Boost · `pi` IELTS Skills up.
Foundation, Boost, IELTS Skills up hiện "đang cập nhật" lộ trình (bài luyện theo Unit đã có trong Phòng thi ảo).

## Cấu trúc thư mục
```
index.html, assets/       Bảng điều khiển (app.js, style.css, img/)
assets/config.js          URL máy chủ tài khoản (Apps Script)
assets/core.js            Phiên đăng nhập + đồng bộ tiến độ (dùng cả ở phong-thi/)
assets/account.js         Trang đăng nhập, Góc của em, Lớp của tôi, Quản lý
server/                   Code.gs (Google Apps Script) + HUONG-DAN.md cách cài
data/data.js              Dữ liệu các khoá (sinh từ tools/build_all.py)
phong-thi/                Phòng thi ảo · phong-thi/ket/ Kho đề KET
tai-lieu/                 Tài liệu chương trình
tools/                    Script sinh data.js
```
## Tài khoản
Lưu trong Google Sheet riêng của trung tâm qua Google Apps Script – xem [server/HUONG-DAN.md](server/HUONG-DAN.md).
Quản lý tạo mã giáo viên → giáo viên tạo lớp và cấp mã từng học sinh → học sinh kích hoạt mã, đặt mật khẩu.
Khi học sinh đã đăng nhập, bài tập đã tick, sao Phòng thi ảo, điểm đề KET và ngày học tự đồng bộ lên Sheet.
Khi `assets/config.js` chưa có URL, website vẫn chạy và tiến độ chỉ lưu trên trình duyệt.
