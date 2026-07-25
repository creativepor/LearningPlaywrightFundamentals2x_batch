import {chromium     } from 'playwright';

async function multiTabTest() {

    let browser = await chromium.launch({ headless: false});
    let context = await browser.newContext();

   //Tab1
    let tab1 = await context.newPage();
    await tab1.goto("https://app.vwo.com/#login");
    console.log("Tab1: On login page");

    //Tab2
    let tab2 = await context.newPage();
    await tab2.goto("https://app.vwo.com/#dashboard");
    console.log("Tab2: On dashboard page");

}
multiTabTest();