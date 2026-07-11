import {test, expect} from '@playwright/test';

test('verify Make an Appointment functionality', async ({page}) => {
    
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    const makeAppointmentButton = page.locator("xpath=//a[@id='btn-make-appointment']");    
    await makeAppointmentButton.click();

    const userNameInput = page.locator("xpath=//input[@id='txt-username']");
    await userNameInput.fill("John Doe");

    const passwordInput = page.locator("xpath=//input[@id='txt-password']");
    await passwordInput.fill("ThisIsNotAPassword");

    const loginButton = page.locator("xpath=//button[@id='btn-login']");
    await loginButton.click();

    const facilityDropdown = page.locator("xpath=//select[@id='combo_facility']");
    await facilityDropdown.selectOption("Hongkong CURA Healthcare Center");

    const checkboxReadmission = page.locator("xpath=//input[@id='chk_hospotal_readmission']");
    await checkboxReadmission.check();

    const radioButtonMedicaid = page.locator("xpath=//input[@id='radio_program_medicaid']");
    await radioButtonMedicaid.check();
    
    const dateInput = page.locator("xpath=//input[@id='txt_visit_date']");
    await dateInput.fill("12/25/2025");

    const commentInput = page.locator("xpath=//textarea[@id='txt_comment']");
    await commentInput.fill("This is a test comment for the appointment.");

    const bookAppointmentButton = page.locator("xpath=//button[@id='btn-book-appointment']");
    await bookAppointmentButton.click();

    //wait for sometime to see the result
    await page.waitForTimeout(7000);
});