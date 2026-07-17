import { test, expect } from '@playwright/test';


test('Verify signup page has an error with the incorrect email ID', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole('textbox', {name: 'email'}).fill("abccd");
   

    await page.getByRole('checkbox', ).check();
    await page.getByRole('button', {name: 'Create a Free Trial Account'}).click();

    let error_msg = await page.locator("xpath=//div[contains(@class, 'invalid-reason')]").first().textContent();

   expect(error_msg).toContain("The email address you entered is incorrect.");
    await page.waitForTimeout(10000);
});