---
sidebar_position: 1
---

# ELEMENT Principles

ELEMENT là framework thực chiến để thiết kế locator bền vững cho UI automation.

Mục tiêu của ebook này: **ngắn, rõ, làm được ngay**.

## Dùng ebook này như thế nào

1. Đọc [7 Principles](./principles.md) để nắm chuẩn chung.
2. Vào [Techniques](./techniques.md) để chọn kỹ thuật đúng tình huống.
3. Áp dụng theo [Component Patterns](./patterns.md).
4. Copy template theo framework ở [Framework Playbook](./framework-playbook.md).
5. Chốt PR bằng [Checklists](./checklists.md).

## Quy tắc quyết định locator (30 giây)

1. Ưu tiên `role` / `label` / `name` / `data-testid`.
2. Nếu chưa đủ, dùng CSS ngắn với thuộc tính ổn định.
3. XPath chỉ dùng cho case đặc biệt.
4. Không dùng absolute XPath, class động, index mong manh.

## Workflow áp dụng nhanh (mỗi test case)

1. Xác định hành vi user cần verify.
2. Chọn locator theo thang ưu tiên ở trên.
3. Đặt locator vào page object/helper (không nhúng trực tiếp trong test).
4. Đồng bộ bằng trạng thái có ý nghĩa (visible/clickable/loaded), không sleep cứng.
5. Assert cả UI state và business outcome.

## Kết quả kỳ vọng

- Flaky test giảm rõ rệt.
- Code test dễ đọc với cả QA mới.
- Refactor UI ít làm vỡ test.

Tiếp theo: [7 Principles](./principles.md).
