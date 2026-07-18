import { test, expect } from '@playwright/test';

test('fill login form', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  const userName = page.locator("input[name='username']");
  const password = page.locator("input[name='password']");
  const loginButton = page.getByRole("button", { name: "Login" });

  // TODO: Fill username field with "tomsmith"
  await userName.fill("tomsmith");
  // TODO: Fill password field with "SuperSecretPassword!"
  await password.fill("SuperSecretPassword!");
  // TODO: Click the Login button
  await loginButton.click();
  // TODO: Verify successful login message appears
    const successMessage = page.getByText("You logged into a secure area!");
    await expect(successMessage).toBeVisible();

});