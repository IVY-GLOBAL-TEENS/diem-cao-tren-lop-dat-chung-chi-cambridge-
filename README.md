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

Mã lớp/khoá: `fd` Foundation · `bu` Bridge-up · `ko` Kick-off · `bo` Boost · `pi` IELTS Skills up.
Foundation, Boost, IELTS Skills up hiện "đang cập nhật" lộ trình (bài luyện theo Unit đã có trong Phòng thi ảo).

## Cấu trúc thư mục
```
index.html, assets/       Bảng điều khiển (app.js, style.css, img/)
data/data.js              Dữ liệu các khoá (sinh từ tools/build_all.py)
phong-thi/                Phòng thi ảo · phong-thi/ket/ Kho đề KET
tai-lieu/                 Tài liệu chương trình
ket-audio/                Công cụ tạo file nghe KET bằng Gemini (GitHub Actions)
tools/                    Script sinh data.js
```
Tiến độ học sinh lưu trên trình duyệt của từng máy.
