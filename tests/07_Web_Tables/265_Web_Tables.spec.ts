import { test, expect } from '@playwright/test';

test.describe('07 Web Tables', () => {
  test('Validate table rows and columns', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    const table = page.locator('#customers');
    await expect(table).toBeVisible();

    const rows = table.locator('tr');
    await expect(rows).toHaveCountGreaterThan(1);

    const headers = table.locator('th');
    await expect(headers).toHaveCountGreaterThan(0);

    const firstRowCells = rows.nth(1).locator('td');
    await expect(firstRowCells).toHaveCount(3);

    const firstCompany = await firstRowCells.nth(0).textContent();
    expect(firstCompany).toContain('Alfreds Futterkiste');
  });
});
