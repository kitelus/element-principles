---
sidebar_position: 2
---

# 7 ELEMENT Principles

## E — Explicit Contract

- Dùng contract rõ ràng giữa Dev và QA: `id`, `data-testid`, `data-qa`.
- Chuẩn hóa **1 attribute duy nhất** toàn app.
- Tên theo nghiệp vụ: `checkout-submit`, không `btn-1`.

**Check nhanh:** đổi layout mà test vẫn pass.

## L — Logical Semantics

- Ưu tiên locator theo cách user nhìn thấy: role, label, text, accessible name.
- Test nên đọc như hành vi người dùng, không phải cấu trúc DOM.

```ts
await page.getByRole("button", { name: "Pay now" }).click();
```

## E — Efficient Query

- Selector càng ngắn càng tốt, miễn đủ phân biệt.
- CSS ngắn/semantic thường ổn định và nhanh hơn XPath phức tạp.

**Ưu tiên:** semantic -> test-id -> CSS ngắn -> XPath.

## M — Maintainable Mapping

- Tập trung locator vào page object/helper.
- Tên biến theo nghiệp vụ: `invoiceRowByCode`, `applyCouponButton`.

```ts
export const checkoutPage = {
  emailInput: '[data-testid="email-input"]',
  submitButton: '[data-testid="checkout-submit"]',
};
```

## E — Evolution-proof

- Tránh phụ thuộc layout/style: absolute XPath, `nth-child`, class sinh tự động.
- Chọn locator bền khi đổi UI nhưng không đổi hành vi.

## N — Non-Flaky Sync

- Đồng bộ bằng trạng thái có ý nghĩa: visible, enabled, network/data ready.
- Không dùng `sleep` làm chiến lược chính.

```ts
await expect(page.getByRole("button", { name: "Submit" })).toBeEnabled();
```

## T — Testable at Scale

- Chuẩn hóa naming và pattern giữa các team.
- Thiết kế để refactor hàng loạt nhanh, ít sửa từng test.

## Rule of thumb

Nếu selector không sống sót qua refactor UI (hành vi user không đổi), hãy thay selector đó.

Tiếp theo: [Techniques](./techniques.md).
