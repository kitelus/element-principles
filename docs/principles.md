---
sidebar_position: 2
---

# 7 ELEMENT Principles

## E — Explicit Contract

- Use explicit contracts between Dev and QA: `id`, `data-testid`, `data-qa`.
- Standardize one test attribute across the app.
- Name by business meaning: `checkout-submit`, not `btn-1`.

## L — Logical Semantics

- Prefer user-facing locators: role, label, text, accessible name.
- Tests should read like user behavior, not DOM implementation.

```ts
await page.getByRole("button", { name: "Pay now" }).click();
```

## E — Efficient Query

- Keep selectors short and distinctive.
- Semantic and short CSS selectors are usually easier to maintain than complex XPath.

## M — Maintainable Mapping

- Centralize locators in page objects/helpers.
- Keep business-readable names.

```ts
export const checkoutPage = {
  emailInput: '[data-testid="email-input"]',
  submitButton: '[data-testid="checkout-submit"]',
};
```

## E — Evolution-proof

- Avoid absolute XPath, `nth-child`, and generated CSS classes.
- Prefer selectors that survive layout or style refactors.

## N — Non-Flaky Sync

- Wait for meaningful states (visible, enabled, loaded).
- Do not use hard sleeps as main synchronization.

```ts
await expect(page.getByRole("button", { name: "Submit" })).toBeEnabled();
```

## T — Testable at Scale

- Keep naming and patterns consistent across teams.
- Design for easy bulk refactor.

## Rule of thumb

If the same user behavior still exists but your selector breaks after a UI refactor, redesign the selector.

Next: [Techniques](./techniques.md).
