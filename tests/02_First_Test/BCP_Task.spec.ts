//create a Browser context1 for tta cart page

import {test, expect} from '@playwright/test';

test("Verify browser context for tta cart page and tta bank page", async ({browser}) => {
    let context1 = await browser.newContext();
    let ttaCartpage = await context1.newPage();

    let context2 = await browser.newContext();
    let ttaBankpage = await context2.newPage();


    await ttaCartpage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("TTA Cart Page URL:", ttaCartpage.url());

    await ttaBankpage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("TTA Bank Page URL:", ttaBankpage.url());

    //wait for 5 seconds to see the pages
    await ttaCartpage.waitForTimeout(5000);
    await ttaBankpage.waitForTimeout(5000); 

    await context1.close();

    await context2.close();

});


