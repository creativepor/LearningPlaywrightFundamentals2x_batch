import { test, expect, Locator } from '@playwright/test';

const URL = "https://www.flipkart.com/search";

test.describe('Flipkart Task', () => {
    test.beforeEach(async ({ page }) => {
        console.log('Before each test block');
        await page.goto(URL);
    });

    test("Flipkart task: TC001 @smoke @regression", async ({ page }) => {
        console.log('TC001');
        await page.locator('[name="q"]').fill('Macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        await page.waitForTimeout(5000);
    });

    test("TC002: Flipkart Random search result Title @smoke @regression", async ({ page }) => {
        console.log('TC002');
        await page.locator('[name="q"]').fill('Macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        await page.waitForLoadState('networkidle');

        const titleResults: Locator = page.locator('//div[@data-id]//a[2]');
        await titleResults.first().waitFor({ state: 'visible' });

        const titles: (string | null)[] = await titleResults.allTextContents();
        console.log(`Found ${titles.length} titles:`);
        titles.forEach((title, index) => {
            console.log(`${index + 1}. ${title}`);
        });
    });
});
