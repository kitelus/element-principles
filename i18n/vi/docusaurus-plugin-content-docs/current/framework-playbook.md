---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Framework Playbook

## Thứ tự ưu tiên locator theo framework

### Playwright

1. `getByRole()`
2. `getByLabel()`
3. `getByTestId()`
4. `locator()` CSS ngắn

### Selenium WebDriver

1. `By.id` / `By.cssSelector`
2. Relative XPath cho case khó
3. `WebDriverWait` cho đồng bộ

### WebdriverIO

1. `$`/`$$` + test-id ổn định
2. Locator accessibility khi phù hợp
3. `waitFor*` trước action

### Cypress

1. `cy.findByRole()` / `cy.findByLabelText()` (nếu dùng testing-library)
2. `cy.get('[data-testid=...]')`
3. CSS ngắn, ổn định

## Template login (Tabs)

<Tabs groupId="framework-login-template">
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

## Template click + wait (Tabs)

<Tabs groupId="framework-click-wait-template">
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

## Chuẩn chung cho mọi framework

- Giữ naming theo nghiệp vụ.
- Giữ cùng thang ưu tiên locator.
- Giữ cùng checklist review.
- Không merge nếu còn sleep cứng hoặc selector mong manh.
- Cùng một flow nên giữ cấu trúc test tương tự giữa Playwright/Selenium/WebdriverIO/Cypress.
