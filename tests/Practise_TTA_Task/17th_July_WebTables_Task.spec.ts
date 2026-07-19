import { test, expect } from '@playwright/test';


test('Verify orangeHRM webtables', async ({ page }) => {

    await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');

    const userName = page.getByRole('textbox', {name: 'Username'});
    const passWord = page.getByPlaceholder('Password');
    await userName.fill('admin');
    await passWord.fill('Awesomeqa@4321');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");

    await expect(page.locator(".oxd-table-body")).toBeVisible();

    const rows = page.locator('.oxd-table-body .oxd-table-row');
    const rowCount = await rows.count();
    
    console.log("Count = ", await rows.count());


    //For loop

    for(let i = 0; i< rowCount; i++){
        const cellValues = await rows.nth(i).locator('.oxd-table-cell').allInnerTexts();
        const singlerowText = cellValues.join(' | ');
        if(singlerowText.includes('Terminated')){
            console.log(`First Terminated Employee Found in Row ${i + 1}: ${singlerowText}`);
            break;
        }

    }

});