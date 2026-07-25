import { test, expect } from '@playwright/test';
import constants from "../../Data/constants.json";

test('Verify Constants Demo Data', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await expect(page).toHaveTitle('CURA Healthcare Service');

    await expect(page.locator("//h1")).toHaveText('CURA Healthcare Service');

    //in order to print the Constants data which is an object need to use
    //JSON.stringify function here
    console.log(`>> Constants Data: ${JSON.stringify(constants.STATUSCODES)}`);
    
});