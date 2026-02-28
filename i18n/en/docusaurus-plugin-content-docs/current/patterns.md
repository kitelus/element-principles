---
sidebar_position: 4
---

# Component Patterns

## Lists and tables

Target rows by business key first, then scope actions inside that row.

```ts
const row = page.getByRole("row", { name: /INV-1001/ });
await row.getByRole("button", { name: "View" }).click();
```

Avoid `nth()` unless order itself is under test.

## Checkbox

Locate via label or test-id, then assert state and downstream behavior.

```ts
await page.getByLabel("Remember me").check();
await expect(page.getByLabel("Remember me")).toBeChecked();
```

## Radio group

Select by meaningful option name and assert selected state.

```ts
await page.getByRole("radio", { name: "Credit Card" }).check();
await expect(page.getByRole("radio", { name: "Credit Card" })).toBeChecked();
```

## Dropdown

### Native select

```ts
await page.locator("#country").selectOption("VN");
await expect(page.locator("#country")).toHaveValue("VN");
```

### Custom dropdown

```ts
await page.getByTestId("country-select").click();
await page.getByRole("option", { name: "Vietnam" }).click();
```

## Modal, dialog, toast

Scope interactions inside the modal container and assert open/close/result states.

```ts
const dialog = page.getByRole("dialog", { name: "Delete invoice" });
await dialog.getByRole("button", { name: "Confirm" }).click();
await expect(page.getByText("Deleted successfully")).toBeVisible();
```

## Dynamic UI helper pattern

Define 3 reusable helper methods per component:

- `open...`
- `select...` / `toggle...`
- `assert...`
