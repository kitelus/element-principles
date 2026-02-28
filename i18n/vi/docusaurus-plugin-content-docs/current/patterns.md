---
sidebar_position: 4
---

# Component Patterns

## Lists and tables

- Chọn row bằng business key (email/code/tên), sau đó thao tác bên trong row đó.

```ts
const row = page.getByRole("row", { name: /INV-1001/ });
await row.getByRole("button", { name: "View" }).click();
```

Tránh dùng `nth()` nếu không thật sự test thứ tự.

## Checkbox

- Tìm bằng label hoặc test-id.
- Assert cả trạng thái check và hiệu ứng sau đó.

```ts
await page.getByLabel("Remember me").check();
await expect(page.getByLabel("Remember me")).toBeChecked();
```

## Radio group

- Chọn theo tên option có ý nghĩa nghiệp vụ.

```ts
await page.getByRole("radio", { name: "Credit Card" }).check();
await expect(page.getByRole("radio", { name: "Credit Card" })).toBeChecked();
```

## Dropdown

### Native select

- Dùng API chọn option native nếu framework có hỗ trợ.

```ts
await page.locator("#country").selectOption("VN");
await expect(page.locator("#country")).toHaveValue("VN");
```

### Custom dropdown

- Mở dropdown -> chờ listbox visible -> chọn option.

```ts
await page.getByTestId("country-select").click();
await page.getByRole("option", { name: "Vietnam" }).click();
```

## Modal, dialog, toast

- Scope locator trong modal để tránh click nhầm nền.
- Assert mở/đóng rõ ràng.
- Toast: assert nội dung + visible, không sleep cứng.

```ts
const dialog = page.getByRole("dialog", { name: "Delete invoice" });
await dialog.getByRole("button", { name: "Confirm" }).click();
await expect(page.getByText("Deleted successfully")).toBeVisible();
```

## Dynamic UI recommendation

Mỗi component nên có 3 helper rõ ràng:

- `open...`
- `select...` / `toggle...`
- `assert...`

Điều này giúp test ngắn hơn nhưng vẫn dễ debug.
