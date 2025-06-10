# Kế hoạch tổng thể i18n hóa FAP Beautifier

## 1. Phạm vi
- Áp dụng i18n cho toàn bộ text hiển thị cho người dùng ở tất cả các page chính (theo app-routing-setup.tsx).
- Bao gồm: tiêu đề, label, placeholder, button, thông báo, trạng thái, table header, empty state, error, tooltip, dialog, modal, notification, toast, ...

## 2. Quy ước đặt key
- Theo chuẩn: `[FEATURE].[SCOPE].[ELEMENT]` hoặc `COMMON.*` nếu dùng chung.
- Chỉ dùng tiếng Anh, viết hoa, phân tách bằng dấu chấm.
- Đặt key rõ ràng, ngắn gọn, không trùng lặp, dễ tra cứu.
- Đối với các trạng thái, action, label phổ biến: dùng chung key ở domain `COMMON` (VD: `COMMON.SAVE`, `COMMON.CANCEL`, `COMMON.SEARCH`, `COMMON.STATUS.APPROVED`...)

## 3. Quy trình thực hiện
1. **Audit text cứng**: Quét từng page/component, liệt kê toàn bộ text cứng.
2. **Định nghĩa key**: Đặt key cho từng text theo quy ước.
3. **Cập nhật code**: Thay thế text cứng bằng i18n key, dùng `intl.formatMessage({ id })`.
4. **Cập nhật file ngôn ngữ**: Thêm key vào `en.json` và `vi.json`.
5. **Kiểm tra & review**: Chuyển đổi ngôn ngữ, kiểm tra UI, đảm bảo không còn text cứng/missing key.
6. **Cập nhật checklist**: Đánh dấu tiến độ cho từng page trong file checklist.

## 4. Ví dụ key cho các loại text
- `GRADE.STUDENT_TRANSCRIPT.EMPTY_STATE`: "No transcript data available"
- `COMMON.SAVE`: "Save"
- `COMMON.CANCEL`: "Cancel"
- `SCHEDULE.WEEKLY_SCHEDULE.HEADER`: "Weekly Schedule"
- `EXAM.SCHEDULE.NO_EXAM`: "No exams scheduled"
- `APPLICATION.STATUS.APPROVED`: "Approved"
- `TRANSACTION.REPORT.TOTAL_BALANCE`: "Total Balance"
- `HELP.FAQ.TITLE`: "Frequently Asked Questions"
- `COMMON.ERROR.UNKNOWN`: "An unknown error occurred"

## 5. Lộ trình triển khai cụ thể
- Bắt đầu từ DashboardPage, thực hiện tuần tự theo checklist.
- Mỗi page hoàn thành đủ 5 bước sẽ chuyển sang page tiếp theo.
- Sau mỗi đợt refactor lớn, cập nhật memory bank và checklist.

## 6. Lưu ý quan trọng
- Không để sót text cứng trong UI.
- Đảm bảo mọi key đều có trong cả `en.json` và `vi.json`.
- Định kỳ review lại checklist và cập nhật tiến độ.
- Ghi chú lại các trường hợp đặc biệt hoặc cần thống nhất trong file này.

---
*Luôn cập nhật checklist và kế hoạch khi có thay đổi hoặc hoàn thành từng phần việc.* 