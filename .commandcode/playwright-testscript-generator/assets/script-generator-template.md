# Playwright Spec Template

Use this as the structural guide when writing tests from page exploration.
Fill every section; remove the HTML comments once real content replaces them.

Choose the pattern that fits the feature:

- **Spec-only** — single page, one-off interactions.
- **Page Object Model** — multi-step or reusable flows (recommended for most
  real-world suites).

---

## Option A — Spec-only

```ts
// Required env vars:
//   TEST_USER_EMAIL    - login email
//   TEST_USER_PASSWORD - login password (never commit the real value)

import { test, expect } from '@playwright/test';

<!-- describeTitle from URL helper -->
test.describe('<!-- e.g. Login flow -->', () => {
  test.beforeEach(async ({ page }) => {
    <!-- Use relative path when baseURL is set, otherwise full URL -->
    await page.goto('<!-- e.g. /login -->');
  });

  <!-- Smoke test -->
  test('should load the page', async ({ page }) => {
    await expect(page).toHaveTitle(/<!-- expected title -->/i);
    await expect(page.getByRole('<!-- e.g. heading -->', { name: '<!-- name -->' })).toBeVisible();
  });

  <!-- Primary flow -->
  test('should <!-- user-facing intent -->', async ({ page }) => {
    // Arrange
    await expect(page.getByLabel('<!-- field label -->')).toBeVisible();

    // Act
    await page.getByLabel('<!-- field label -->').fill('<!-- value -->');
    await page.getByRole('button', { name: '<!-- button text -->' }).click();

    // Assert
    await expect(page.getByText('<!-- expected outcome -->')).toBeVisible();
  });

  <!-- Edge case (optional) -->
  test('should show an error for <!-- invalid/empty case -->', async ({ page }) => {
    await page.getByRole('button', { name: '<!-- submit button text -->' }).click();
    await expect(page.getByText('<!-- error message -->')).toBeVisible();
  });
});
```

---

## Option B — Page Object Model

### `pages/<Feature>Page.ts`

```ts
import type { Page, Locator } from '@playwright/test';

export class <!-- Feature -->Page {
  readonly page: Page;
  readonly <!-- elementName -->: Locator;

  constructor(page: Page) {
    this.page = page;
    this.<!-- elementName --> = page.getByRole('<!-- role -->', { name: '<!-- accessible name -->' });
  }

  async goto() {
    await this.page.goto('<!-- e.g. /login -->');
  }

  async <!-- actionName -->(<!-- parameters -->) {
    <!-- fill / click / etc. -->
  }
}
```

### `tests/<feature>.spec.ts`

```ts
// Required env vars:
//   TEST_USER_EMAIL    - login email
//   TEST_USER_PASSWORD - login password (never commit the real value)

import { test, expect } from '@playwright/test';
import { <!-- Feature -->Page } from '../pages/<Feature>Page';

<!-- describeTitle from URL helper -->
test.describe('<!-- e.g. Login flow -->', () => {
  test.beforeEach(async ({ page }) => {
    const <!-- feature -->Page = new <!-- Feature -->Page(page);
    await <!-- feature -->Page.goto();
  });

  <!-- Smoke test -->
  test('should load the page', async ({ page }) => {
    await expect(page).toHaveTitle(/<!-- expected title -->/i);
    await expect(page.getByRole('<!-- e.g. heading -->', { name: '<!-- name -->' })).toBeVisible();
  });

  <!-- Primary flow -->
  test('should <!-- user-facing intent -->', async ({ <!-- feature -->Page }) => {
    await <!-- feature -->Page.<!-- actionName -->(<!-- arguments -->);
    await expect(<!-- feature -->Page.<!-- elementName -->).toHaveText('<!-- expected outcome -->');
  });

  <!-- Edge case (optional) -->
  test('should show an error for <!-- invalid/empty case -->', async ({ <!-- feature -->Page }) => {
    await <!-- feature -->Page.<!-- actionName -->(<!-- invalid arguments -->);
    await expect(<!-- feature -->Page.<!-- errorElement -->).toBeVisible();
  });
});
```

---

## Reminders

- Prefer `getByRole` / `getByLabel` / `getByPlaceholder` / `getByText` over CSS.
- Never use `page.waitForTimeout()`; use `await expect(...).toBeVisible()` instead.
- Avoid assertions inside page objects; keep assertions in the spec.
- Add a `// TODO:` comment on any locator that is a best-guess after limited exploration.
