# IVY Teen – Website giáo trình & bài tập

Website tĩnh (HTML/CSS/JavaScript thuần, không cần cài đặt gì) tổng hợp giáo trình tiếng Anh THCS của IVY:

- **Tổng quan** – mô hình học, 5 cấp độ (Foundation → IELTS Skills up)
- **Kick-off A2** – 11 unit theo Gold Experience A2, phân bổ thời gian trên lớp
- **Lộ trình 94 buổi** – tìm kiếm/lọc theo unit, dạng buổi; trang chi tiết từng buổi (105 phút theo phút, bài trước/sau buổi, nút sao chép tin nhắn giao bài, in giáo án)
- **Ngữ pháp** – 19 điểm ngữ pháp nền tảng, buổi dạy lần đầu và ôn lại
- **KET** – bản đồ part nào của A2 Key được luyện ở buổi nào
- **Game** – gợi ý game theo lứa tuổi (lớp 5–9) ghép với nội dung unit
- **Phòng thi ảo KET/PET** (`phong-thi/`) – học sinh luyện kỹ năng, làm đề mô phỏng thi trên máy, chơi game theo cấp độ (tiến độ lưu trên trình duyệt)
- **Tài liệu** (`tai-lieu/`) – Curriculum CEFR, Bridge-up 94 buổi, khung khen thưởng, đề xuất dashboard
- **Bài tập** – nhập ngày khai giảng + lịch học → tự xếp lịch 94 buổi, đánh dấu bài đã làm (lưu trên trình duyệt)

## Cấu trúc thư mục

```
index.html          Trang chính
assets/style.css    Giao diện
assets/app.js       Chức năng (các trang, bộ lọc, lịch bài tập)
phong-thi/index.html Phòng thi ảo (một file độc lập)
data/data.js        TOÀN BỘ nội dung giáo trình – sửa nội dung ở đây
```

## Sửa nội dung

Mở `data/data.js`, tìm buổi cần sửa (ví dụ `"session_id": "KO-U03-S2"`), sửa chữ trong dấu ngoặc kép rồi lưu. Giữ nguyên dấu `"`, `,`, `{ }`, `[ ]`. Trên GitHub có thể bấm biểu tượng ✏️ để sửa trực tiếp, sau đó **Commit changes** – website tự cập nhật sau 1–2 phút.

## Xem thử trên máy

Bấm đúp `index.html` là mở được bằng trình duyệt.
