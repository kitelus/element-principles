---
sidebar_position: 3
---

# Practical Techniques

## 1) Semantic locator first

**Use when:** elements expose role/label/text clearly.  
**Benefit:** readable tests and user-centric behavior.

```ts
await page.getByLabel("Email").fill("qa@example.com");
await page.getByRole("button", { name: "Login" }).click();
```

## 2) Test ID contract

**Use when:** UI text can change by language or copy updates.  
**Rule:** standardize one test attribute (`data-testid`).

```ts
await page.getByTestId("checkout-submit").click();
```

## 3) Short stable CSS selector

**Use when:** semantic selectors are unavailable.

```ts
const applyCoupon = page.locator('[name="coupon"][type="text"]');
```

## 4) Relative XPath for edge cases

**Use when:** complex DOM cannot be targeted cleanly otherwise.

```java
By rowByCode = By.xpath("//tr[.//td[normalize-space()='INV-1001']]");
```

**Avoid:** absolute XPath like `/html/body/...`.

## 5) Scoped locator

**Use when:** repeated labels/buttons exist.

```ts
const row = page
  .locator('[data-testid="invoice-row"]')
  .filter({ hasText: "INV-1001" });
await row.getByRole("button", { name: "Delete" }).click();
```

## 6) Wait by meaningful state

**Use when:** race conditions cause flaky interactions.

```ts
await expect(page.getByRole("button", { name: "Pay now" })).toBeEnabled();
await page.getByRole("button", { name: "Pay now" }).click();
await expect(page.getByText("Payment successful")).toBeVisible();
```

## 7) Centralized page object mapping

```ts
export const loginPage = {
  email: '[data-testid="email-input"]',
  password: '[data-testid="password-input"]',
  submit: '[data-testid="login-submit"]',
};
```

## 8) Two-layer assertions

- Layer 1: UI state (`visible`, `checked`, `enabled`).
- Layer 2: business outcome (status updated, transaction created, side effect confirmed).

## 9) Naming rule

- ✅ `customerEmailInput`, `checkoutSubmitButton`, `invoiceRowByCode`
- ❌ `input1`, `btnPrimary`, `row-3`

## 10) Mini practical flow

1. Pick locator by ladder.
2. Scope to smallest safe container.
3. Wait meaningful state.
4. Act.
5. Assert two layers.
