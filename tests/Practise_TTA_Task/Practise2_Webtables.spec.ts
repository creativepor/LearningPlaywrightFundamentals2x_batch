import { test, expect } from '@playwright/test';

test.describe('WebTable- Customers', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://awesomeqa.com/webtable.html');
    });

    test('Verify the Headers', async ({ page }) => {
        const headers = await page.locator('#customers tbody th').allTextContents();
        await expect(headers).toEqual(['Company', 'Contact', 'Country']);
    });

    test('Verify the data row count', async ({ page }) => {
        const table = page.locator('#customers');
        const rows = table.locator('tbody tr');
        await expect(rows).toHaveCount(7);
    });

    test('Verify a specific cell value', async ({ page }) => {
        const cell = page.locator('#customers tbody tr').filter({ hasText: 'Meta' }).locator('td').nth(1);
        await expect(cell).toHaveText('Francisco Chang');
    });

    test('Verify Country for a known Company', async ({ page }) => {
        const country = page.locator('#customers tbody tr').filter({ hasText: 'Microsoft' }).locator('td').nth(2);
        await expect(country).toHaveText('Austria');
    });

});