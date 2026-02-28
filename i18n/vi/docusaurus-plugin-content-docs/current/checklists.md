---
sidebar_position: 7
---

# Checklists

## Automation-friendly UI checklist

- [ ] Element quan trọng có `id` hoặc `data-testid` ổn định.
- [ ] Input có label/accessibility name rõ ràng.
- [ ] Trạng thái control xác định được (enabled/disabled/loading).
- [ ] Dynamic content có dấu hiệu ready có thể chờ.
- [ ] Message success/error có thể assert bằng máy.

## Automation code review checklist

- [ ] Selector theo đúng ladder (semantic/test-id trước).
- [ ] Locator được centralized, tên theo nghiệp vụ.
- [ ] Không sleep cứng để đồng bộ.
- [ ] Có assert 2 lớp: UI state + business outcome.
- [ ] Test đọc được, debug được, refactor được.

## Ready-to-merge gate

PR chỉ merge khi **tất cả** điều kiện đúng:

1. Không có locator mong manh mới.
2. Không có sync risk (sleep cứng/race condition rõ rệt).
3. Không duplicate mapping locator.
4. Naming thể hiện đúng nghiệp vụ.

## Severity guide

- **Blocker:** flaky trên CI, absolute XPath mới, sleep cứng trong flow chính.
- **Major:** naming khó hiểu, selector quá dài/phụ thuộc layout.
- **Minor:** format chưa thống nhất nhưng không ảnh hưởng độ ổn định.
