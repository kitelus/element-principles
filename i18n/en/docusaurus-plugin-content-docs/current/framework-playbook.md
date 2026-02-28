---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Framework Playbook

## Locator priority by framework

### Playwright

1. `getByRole()`
2. `getByLabel()`
3. `getByTestId()`
4. `locator()` with short CSS

### Selenium WebDriver

1. `By.id` / `By.cssSelector`
2. Relative XPath for edge cases
3. `WebDriverWait` for synchronization

### WebdriverIO

1. `$`/`$$` with stable test-id selectors
2. Accessibility-first selectors when suitable
3. `waitFor*` before action

### Cypress

1. `cy.findByRole()` / `cy.findByLabelText()` (if using testing-library)
2. `cy.get('[data-testid=...]')`
3. Short stable CSS selectors

## Login template (Tabs)

<Tabs groupId="framework-login-template-en">
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

## Click + wait template (Tabs)

<Tabs groupId="framework-click-wait-template-en">
  <TabItem value="playwright" label="Playwright" default>

```ts
const submit = page.getByTestId("checkout-submit");
await expect(submit).toBeEnabled();
await submit.click();
await expect(page.getByTestId("success-toast")).toBeVisible();
```

  </TabItem>
  <TabItem value="selenium" label="Selenium">

```java
By submit = By.cssSelector("[data-testid='checkout-submit']");
wait.until(ExpectedConditions.elementToBeClickable(submit)).click();
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("success-toast")));
```

  </TabItem>
  <TabItem value="webdriverio" label="WebdriverIO">

```ts
const submit = $('[data-testid="checkout-submit"]');
await submit.waitForClickable();
await submit.click();
await $('[data-testid="success-toast"]').waitForDisplayed();
```

  </TabItem>
  <TabItem value="cypress" label="Cypress">

```ts
cy.get('[data-testid="checkout-submit"]').click();
cy.get('[data-testid="success-toast"]').should("be.visible");
```

  </TabItem>
</Tabs>

## Cross-framework standards

- Keep business naming consistent.
- Keep the same locator strategy ladder.
- Keep the same review checklist.
- Do not merge if hard waits or brittle selectors remain.
- Keep flow structure similar across Playwright/Selenium/WebdriverIO/Cypress for faster onboarding.
