---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Code Examples (4 Frameworks)

Trang này dùng cùng 1 business flow, chỉ khác API theo framework.

## Scenario A — Login success

<Tabs groupId="scenario-login-success">
  <TabItem value="playwright" label="Playwright" default>

```ts
await page.getByLabel("Email").fill("qa@example.com");
await page.getByLabel("Password").fill("***");
await page.getByRole("button", { name: "Login" }).click();
await expect(page.getByText("Welcome")).toBeVisible();
```

  </TabItem>
  <TabItem value="selenium" label="Selenium">

```java
driver.findElement(By.id("email")).sendKeys("qa@example.com");
driver.findElement(By.id("password")).sendKeys("***");
By submit = By.cssSelector("[data-testid='login-submit']");
wait.until(ExpectedConditions.elementToBeClickable(submit)).click();
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("welcome-banner")));
```

  </TabItem>
  <TabItem value="webdriverio" label="WebdriverIO">

```ts
await $('[data-testid="email-input"]').setValue("qa@example.com");
await $('[data-testid="password-input"]').setValue("***");
await $('[data-testid="login-submit"]').click();
await $('[data-testid="welcome-banner"]').waitForDisplayed();
```

  </TabItem>
  <TabItem value="cypress" label="Cypress">

```ts
cy.get('[data-testid="email-input"]').type("qa@example.com");
cy.get('[data-testid="password-input"]').type("***");
cy.get('[data-testid="login-submit"]').click();
cy.get('[data-testid="welcome-banner"]').should("be.visible");
```

  </TabItem>
</Tabs>

## Scenario B — Delete invoice in table + confirm toast

<Tabs groupId="scenario-delete-invoice">
  <TabItem value="playwright" label="Playwright" default>

```ts
const row = page
  .locator('[data-testid="invoice-row"]')
  .filter({ hasText: "INV-1001" });
await row.getByRole("button", { name: "Delete" }).click();
await page
  .getByRole("dialog", { name: "Delete invoice" })
  .getByRole("button", { name: "Confirm" })
  .click();
await expect(page.getByText("Deleted successfully")).toBeVisible();
```

  </TabItem>
  <TabItem value="selenium" label="Selenium">

```java
By deleteBtn = By.xpath("//tr[.//td[normalize-space()='INV-1001']]//button[normalize-space()='Delete']");
wait.until(ExpectedConditions.elementToBeClickable(deleteBtn)).click();
By confirm = By.cssSelector("[data-testid='confirm-delete']");
wait.until(ExpectedConditions.elementToBeClickable(confirm)).click();
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("success-toast")));
```

  </TabItem>
  <TabItem value="webdriverio" label="WebdriverIO">

```ts
const row = $(`[data-testid="invoice-row"][data-code="INV-1001"]`);
await row.$("button=Delete").click();
await $('[data-testid="confirm-delete"]').waitForClickable();
await $('[data-testid="confirm-delete"]').click();
await $('[data-testid="success-toast"]').waitForDisplayed();
```

  </TabItem>
  <TabItem value="cypress" label="Cypress">

```ts
cy.get('[data-testid="invoice-row"][data-code="INV-1001"]').within(() => {
  cy.contains("button", "Delete").click();
});
cy.get('[data-testid="confirm-delete"]').click();
cy.contains("Deleted successfully").should("be.visible");
```

  </TabItem>
</Tabs>

## Scenario C — Custom dropdown selection

<Tabs groupId="scenario-custom-dropdown">
  <TabItem value="playwright" label="Playwright" default>

```ts
await page.getByTestId("country-select").click();
await page.getByRole("option", { name: "Vietnam" }).click();
await expect(page.getByTestId("country-value")).toHaveText("Vietnam");
```

  </TabItem>
  <TabItem value="selenium" label="Selenium">

```java
driver.findElement(By.cssSelector("[data-testid='country-select']")).click();
wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//li[@role='option' and normalize-space()='Vietnam']"))).click();
wait.until(ExpectedConditions.textToBe(By.id("country-value"), "Vietnam"));
```

  </TabItem>
  <TabItem value="webdriverio" label="WebdriverIO">

```ts
await $('[data-testid="country-select"]').click();
await $('li[role="option"]=Vietnam').click();
await expect($('[data-testid="country-value"]')).toHaveText("Vietnam");
```

  </TabItem>
  <TabItem value="cypress" label="Cypress">

```ts
cy.get('[data-testid="country-select"]').click();
cy.contains('[role="option"]', "Vietnam").click();
cy.get('[data-testid="country-value"]').should("have.text", "Vietnam");
```

  </TabItem>
</Tabs>

## Notes

- Cùng flow, khác API framework.
- Giữ chung locator strategy và checklist review.
