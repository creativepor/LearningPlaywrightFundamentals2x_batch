import { test, expect } from '@playwright/test';


test.describe('Form Validation Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/booking/register');
  });


test('Verify that First and Last name are required fields', async ({ page }) => {
    //await page.goto("https://app.thetestingacademy.com/playwright/booking/register");
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.getByText('Please enter your first and last name.', { exact: true })).toBeVisible();
});


test('Verify Email address is a required field', async ({page}) => {
    await page.getByLabel('First name').fill('Geeta');
    await page.getByLabel('Last name').fill('Rani');
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.getByText('Enter a valid email address.', { exact: true })).toBeVisible();
    
});
    
    
   
test('Verify email field by entering invalid email address', async ({page}) => {
    await page.getByLabel('Email').fill('invalidemail');
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.getByText('Enter a valid email address.', { exact: true })).toBeVisible();

});

test('Verify email field with valid data', async ({page}) => {
    await page.getByLabel('Email').fill('jiya@testmail.com');
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.getByText('Password must be at least 8 characters long.', { exact: true })).toBeVisible();
    
});
    
   
test('Verify the Password field', async ({page}) => {
    await page.getByLabel('Password', { exact: true }).fill('Shoot@sun1234');
    await page.locator('#confirmPassword').fill('Shoot@sun1234');
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.getByText('Please choose your country.', { exact: true})).toBeVisible();
    
});
 
test('Verify the dropdown selection', async ({page}) => {
    await page.getByRole('combobox', { name: 'Country' }).selectOption('India');
    await page.getByRole('button', {name: 'Create Account'}).click();
    await expect(page.locator('[data-test="register-error"]')).toBeVisible();

    
});
    

test('Verify the TTA checkbox', async ({page}) => {
       await page.getByRole('checkbox').check();
       await page.waitForTimeout(10000);
    
});

});
 

    

