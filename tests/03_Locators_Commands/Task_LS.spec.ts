import { test, expect } from '@playwright/test';


test('Verify Login page for the katalon demo app', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    const makeAppointmentButton = page.locator("xpath=//a[@id='btn-make-appointment']");    
    await makeAppointmentButton.click();

    const userNameInput = page.locator("xpath=//input[@id='txt-username']");
    await userNameInput.fill("John Doe");

    const passwordInput = page.locator("xpath=//input[@id='txt-password']");
    await passwordInput.fill("ThisIsNotAPassword");

    const loginButton = page.locator("xpath=//button[@id='btn-login']");
    await loginButton.click();  
    



});