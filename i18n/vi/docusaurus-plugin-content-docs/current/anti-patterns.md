---
sidebar_position: 6
---

# Anti-Patterns to Avoid

## Fragile selectors

- Absolute XPath (`/html/body/...`)
- Positional selectors (`nth-child`, array index without business meaning)
- Style-coupled classes (generated utility hashes)

**Fix nhanh:** thay bằng semantic locator hoặc `data-testid`.

## Synchronization mistakes

- Fixed sleeps as primary sync strategy
- Clicking before actionable state is ready
- Asserting too early without waiting for stable render

**Fix nhanh:** wait cho trạng thái `visible/clickable/enabled`.

## Maintainability mistakes

- Duplicating selectors across test files
- Mixed naming conventions by person/team
- Embedding selector details directly inside test steps

**Fix nhanh:** gom locator vào page object/helper và chuẩn hóa naming.

## Design smell detector

Refactor ngay khi có 1 trong các dấu hiệu:

- One UI rename breaks many tests.
- Same element has many different selectors in codebase.
- New members cannot infer business intent from selector names.

## Pre-merge red flags

- Có `sleep(1000)` hoặc tương đương trong flow chính.
- Có absolute XPath mới được thêm vào PR.
- Test pass chỉ ở local nhưng flaky trên CI.
