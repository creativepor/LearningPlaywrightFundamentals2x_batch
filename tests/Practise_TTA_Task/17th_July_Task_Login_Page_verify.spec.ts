import { test, expect } from '@playwright/test';


test('Verify the Login page URL', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    const emailAddress = page.getByRole('textbox', {name: 'Email Address'});
    const password = page.getByRole('textbox', {name: 'Password'});

    await emailAddress.fill('poulomi.partho@gmail.com');
    await password.fill('Shoot@sun123');

    const checkBox = page.getByLabel('Remember me');

    await checkBox.check();

    await page.getByRole('button', { name: 'Login to Practice Account' }).click();
    //need to verify a specific url navigation
    await expect(page.url().includes("login-success"));





});