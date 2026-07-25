---
name: playwright-testing
description: Playwright test script writing patterns and best practices for this project.
---

# Playwright Testing Skill

## Test Structure
- Use `test.describe` blocks to group related tests.
- Keep each test focused on a single behavior.
- Use descriptive test names — they should read like sentences.

## Locators
- Prefer `getByRole`, `getByText`, `getByTestID`, `getByLabel` over CSS/XPath selectors.
- Use `page.locator()` only when semantic locators don't work.
- Chain locators for specificity: `page.getByRole('button').filter({ hasText: 'Submit' })`.

## Assertions
- Use `await expect(locator).toBeVisible()` before interacting.
- Prefer `toHaveText` / `toContainText` over `toBe` for text content.
- Use `toHaveCount` for list element assertions.

## Fixtures
- Use the built-in `page` fixture for most tests.
- Create custom fixtures in `utils/fixtures.ts` for shared setup.

## Page Object Model
- Store page-specific selectors and methods in `tests/pages/<PageName>.ts`.
- Page methods should return promises and use `await`.

## Web Tables
- Use `page.locator('table')` to find tables.
- Iterate rows with `table.locator('tbody tr')`.
- Use `await row.locator('td').nth(index)` to get specific cells.
