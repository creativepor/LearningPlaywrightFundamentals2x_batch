import {test, expect} from '@playwright/test';

test("Verify our first TC", async ({page}) => {
    await page.goto("https://app.vwo.com");
    const logo_img = page.locator('#vow-login-logo');
    await expect(logo_img).toBeVisible();
});