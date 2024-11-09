
# Lịch sử Chi Tiêu

Lịch sử Chi Tiêu là một ứng dụng giúp người dùng theo dõi và quản lý chi tiêu hàng ngày của mình. Ứng dụng cho phép người dùng thêm chi tiêu, chỉnh sửa, xóa chi tiêu, tìm kiếm, lọc và sắp xếp các chi tiêu theo ngày hoặc số tiền. Ngoài ra, nó còn cung cấp biểu đồ thể hiện phân bổ chi tiêu theo các danh mục.

## Tính Năng
- Thêm chi tiêu với mô tả, số tiền và phân loại.
- Xóa và chỉnh sửa chi tiêu đã thêm.
- Tìm kiếm chi tiêu theo mô tả.
- Sắp xếp chi tiêu theo ngày (cũ nhất/mới nhất) hoặc theo số tiền (tăng dần/giảm dần).
- Hiển thị biểu đồ tròn phân bổ chi tiêu theo các phân loại.

## Công Nghệ Sử Dụng
- **HTML**: Cấu trúc cơ bản của trang web.
- **CSS**: Thiết kế giao diện người dùng.
- **JavaScript**: Xử lý logic và tương tác.
## Hướng Dẫn Cài Đặt

1. **Clone dự án**:
   Đầu tiên, bạn cần clone dự án về máy tính của mình bằng cách sử dụng lệnh sau:
   ```bash
   git clone https://github.com/kenjiakira/urban-waffle.git
   ```

2. **Cài đặt phụ thuộc**:
   Dự án này không yêu cầu cài đặt phụ thuộc ngoài các thư viện bên ngoài như `Chart.js`. Bạn chỉ cần mở tệp HTML trong trình duyệt là có thể sử dụng ngay.

3. **Mở ứng dụng**:
   Bạn chỉ cần mở file `index.html` trong trình duyệt của mình để bắt đầu sử dụng ứng dụng.

## Cấu Trúc Dự Án

```
/lich-su-chi-tieu
│
├── index.html          # Tệp HTML chứa cấu trúc trang web
├── styles.css          # Tệp CSS cho giao diện
├── script.js           # Tệp JavaScript xử lý logic chi tiêu và tương tác
├── config.json         # Tệp cấu hình cho các phần tử DOM
├── README.md           # Tệp này
```

## Cách Sử Dụng

1. **Thêm chi tiêu**:
   - Nhập mô tả chi tiêu, số tiền và phân loại vào các trường trong form "Thêm Các Khoản".
   - Nhấn nút "Thêm Chi Tiêu" để lưu chi tiêu.

2. **Xem và quản lý chi tiêu**:
   - Các chi tiêu sẽ hiển thị trong danh sách "Danh Sách Chi Tiêu".
   - Bạn có thể chỉnh sửa hoặc xóa các chi tiêu đã nhập.

3. **Tìm kiếm chi tiêu**:
   - Sử dụng ô tìm kiếm để tìm các chi tiêu theo mô tả.

4. **Sắp xếp chi tiêu**:
   - Sử dụng menu "Sắp xếp theo" để sắp xếp chi tiêu theo ngày hoặc số tiền.

5. **Xem biểu đồ chi tiêu**:
   - Biểu đồ tròn sẽ hiển thị phân bổ chi tiêu theo các phân loại.

## Liên Hệ
- **Facebook**: [KenjiDevv](https://www.facebook.com/KenjiDevv)
- **GitHub**: [kenjiakira](https://github.com/kenjiakira)

## Giấy Phép
Ứng dụng này được phát hành theo Giấy phép MIT. Xem chi tiết trong tệp `LICENSE`.
