---
sidebar_position: 3
---

# Practical Techniques

## 1) Semantic locator first

**Dùng khi:** element có role/label/text rõ ràng.  
**Lợi ích:** dễ đọc, gần với hành vi user.

```ts
await page.getByLabel("Email").fill("qa@example.com");
await page.getByRole("button", { name: "Login" }).click();
```

## 2) Test ID contract

**Dùng khi:** text có thể đổi theo ngôn ngữ/copywriting.  
**Chuẩn:** thống nhất `data-testid` toàn hệ thống.

```ts
await page.getByTestId("checkout-submit").click();
```

## 3) CSS selector ngắn, ổn định

**Dùng khi:** semantic chưa đủ hoặc không có test-id.

```ts
const applyCoupon = page.locator('[name="coupon"][type="text"]');
```

## 4) Relative XPath cho edge case

**Dùng khi:** DOM đặc biệt, khó định danh bằng cách khác.

```java
By rowByCode = By.xpath("//tr[.//td[normalize-space()='INV-1001']]");
```

**Không dùng:** absolute XPath kiểu `/html/body/...`.

## 5) Scoped locator (tránh đụng phần tử trùng)

**Dùng khi:** nhiều phần tử cùng text/role.

```ts
const row = page
  .locator('[data-testid="invoice-row"]')
  .filter({ hasText: "INV-1001" });
await row.getByRole("button", { name: "Delete" }).click();
```

## 6) Wait theo trạng thái có ý nghĩa

**Dùng khi:** thao tác bị race condition.

```ts
await expect(page.getByRole("button", { name: "Pay now" })).toBeEnabled();
await page.getByRole("button", { name: "Pay now" }).click();
await expect(page.getByText("Payment successful")).toBeVisible();
```

## 7) Mapping tập trung trong page object

**Dùng khi:** muốn refactor nhanh và giảm duplicate selector.

```ts
export const loginPage = {
  email: '[data-testid="email-input"]',
  password: '[data-testid="password-input"]',
  submit: '[data-testid="login-submit"]',
};
```

## 8) Assertion 2 lớp

- Lớp 1: UI state (`visible`, `checked`, `enabled`).
- Lớp 2: business outcome (đơn tạo thành công, trạng thái cập nhật, API side effect).

## 9) Naming rule thực dụng

- ✅ `customerEmailInput`, `checkoutSubmitButton`, `invoiceRowByCode`
- ❌ `input1`, `btnPrimary`, `row-3`

## 10) Mini flow mẫu

1. Chọn locator theo ladder.
2. Scope theo vùng nhỏ nhất.
3. Wait trạng thái có ý nghĩa.
4. Action.
5. Assert 2 lớp.
