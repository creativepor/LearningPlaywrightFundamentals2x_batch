import { test, expect } from '@playwright/test';
import TestData from "../../Data/test-data";

const makeAppntTestData = TestData.makeAppointmentTestData();

for (const appData of makeAppntTestData){
    test.describe('Make Appointment', () => {
    test.beforeEach('Login with valid credentials', async ({page}) => {
        await page.goto('https://katalon-demo-cura.herokuapp.com/');
        await expect(page).toHaveTitle('CURA Healthcare Service');
        await expect(page.locator("//h1")).toHaveText('CURA Healthcare Service');

        //Click on make Appointment button
        await page.getByRole('link', { name: 'Make Appointment' }).click();
        await expect(page.getByText('Please login to make appointment.')).toBeVisible();

        //Login Success

        await page.getByLabel('Username').fill("John Doe");
        await page.getByLabel('Password').fill("ThisIsNotAPassword");
        await page.getByRole('button', { name: 'Login' }).click();

        //Assert a text
        await expect(page.locator("h2")).toContainText("Make Appointment");

           
    });



test(`${appData.testID}`, async ({ page }) => {
   await page.getByRole('combobox', { name: 'Facility' }).click();
   await page.getByRole('combobox', { name: 'Facility'}).selectOption(appData.facility);

    await page.getByLabel('Apply for hospital readmission').click();

    await page.getByText(appData.hcp).click();

    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
    await page.getByRole('textbox', { name: 'Visit Date (Required)'}).fill(appData.visitDt);
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press("Enter");

    //Enter the comments section
    
    await page.getByRole('textbox', { name: 'Comment' }).click();
    await page.getByRole('textbox', { name: 'Comment' }).fill('this is for testing purpose');
    //

    await page.getByRole('button', { name: 'Book Appointment' }).click();

    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    

});

    });

}
