# Bật tài khoản IVY Teen (Google Sheet + Apps Script)

Khoảng 10 phút, làm **một lần**. Sau đó:

- **Quản lý** (bạn) tạo mã cho từng giáo viên.
- **Giáo viên** tạo lớp, dán danh sách học sinh, website cấp mã riêng cho từng em.
- **Học sinh** nhập mã, đặt mật khẩu, làm bài. Tiến độ tự lưu về Google Sheet của bạn.

Mã, họ tên và tiến độ chỉ nằm trong Google Sheet của bạn, **không** nằm trên GitHub.

---

## Bước 1 – Tạo Google Sheet

1. Mở <https://sheets.new> (đăng nhập Gmail của trung tâm).
2. Đặt tên, ví dụ **IVY Teen – Tài khoản**.

## Bước 2 – Dán mã máy chủ

1. Trong Sheet: **Tiện ích mở rộng → Apps Script**.
2. Xoá hết nội dung có sẵn trong `Code.gs`.
3. Mở file [`server/Code.gs`](Code.gs) trên GitHub → bấm biểu tượng **Copy raw file** → dán vào.
4. Bấm 💾 **Lưu**.

## Bước 3 – Chạy `setup` để lấy mã quản lý

1. Ở thanh trên cùng, chọn hàm **setup** → bấm **▶ Chạy**.
2. Google hỏi quyền → **Xem xét quyền** → chọn tài khoản → **Nâng cao → Đi tới … (không an toàn)** → **Cho phép**.
   (Cảnh báo này xuất hiện vì đây là script bạn tự tạo, chưa gửi Google duyệt.)
3. Quay lại Sheet: có thêm các trang tính **HuongDan, TaiKhoan, Lop, TienDo**.
   Ô **B2** của trang **HuongDan** là **mã quản lý** (dạng `QL-XXXXXX`). Giữ kín mã này.

## Bước 4 – Triển khai thành ứng dụng web

1. Trong Apps Script: **Triển khai → Tùy chọn triển khai mới**.
2. Bấm ⚙️ cạnh "Chọn loại" → **Ứng dụng web**.
3. Điền:
   - **Thực thi với tư cách:** Tôi
   - **Ai có quyền truy cập:** Bất kỳ ai
4. **Triển khai** → copy **URL ứng dụng web** (kết thúc bằng `/exec`).

## Bước 5 – Nối website với máy chủ

1. Trên GitHub, mở [`assets/config.js`](../assets/config.js) → bấm ✏️.
2. Dán URL vào giữa hai dấu ngoặc kép:
   ```js
   API_URL: "https://script.google.com/macros/s/……/exec",
   ```
3. **Commit changes**. Khoảng 1 phút sau website cập nhật.

(Hoặc gửi URL cho Claude, Claude dán và đẩy lên giúp.)

## Bước 6 – Dùng thử

1. Vào website → **Đăng nhập** → nhập mã quản lý → đặt mật khẩu.
2. **Quản lý giáo viên** → tạo mã cho từng giáo viên → gửi mã cho họ.
3. Giáo viên đăng nhập bằng mã của mình → **Tạo lớp** (tên lớp, khoá, ngày khai giảng, 2 ngày học) → tab **Học sinh & mã** → dán danh sách tên → **Cấp mã** → **In phiếu mã** hoặc **Sao chép danh sách mã** gửi Zalo.
4. Học sinh đăng nhập bằng mã → đặt mật khẩu → làm bài như bình thường.

---

## Câu hỏi thường gặp

**Học sinh quên mật khẩu?** Giáo viên vào lớp → tab *Học sinh & mã* → **Cấp lại**. Em nhập lại mã cũ và đặt mật khẩu mới; tiến độ vẫn giữ.

**Giáo viên quên mật khẩu?** Quản lý vào *Quản lý giáo viên* → **Cấp lại**.

**Quản lý quên mật khẩu?** Mở trang tính **TaiKhoan**, ở dòng mã `QL-…` xoá 3 ô `salt`, `hash`, `kich_hoat`, rồi kích hoạt lại trên web.

**Giáo viên thấy được gì?** Chỉ các lớp của mình. Quản lý thấy tất cả lớp.

**Tiến độ gồm những gì?** Bài về nhà đã tick, sao và XP trong Phòng thi ảo, điểm từng phần đề KET, và những ngày em có học trên web (để tính chuỗi ngày). Dữ liệu tự gửi lên vài giây sau mỗi lần em làm bài.

**"Cần chú ý" tính thế nào?** Em được đánh dấu khi: chưa kích hoạt mã; 7 ngày trở lên chưa học trên web; làm dưới 60% bài về nhà đến hạn; hoặc điểm KET trung bình dưới 50% (từ 2 lần làm trở lên).

**Sửa `Code.gs` sau này?** Dán bản mới → Lưu → **Triển khai → Quản lý triển khai** → ✏️ → *Phiên bản: Phiên bản mới* → **Triển khai**. URL giữ nguyên.

**Máy dùng chung?** Khi một em khác đăng nhập trên cùng máy, tiến độ của em trước được xoá khỏi máy (đã lưu trên Sheet). Nhắc các em bấm **Đăng xuất** khi dùng máy chung.
