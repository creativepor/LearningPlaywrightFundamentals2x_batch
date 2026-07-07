import {chromium, Browser, BrowserContext, Page} from 'playwright';

async function run() {

    //level 1: launch Browser, heaviest operation, launch it once
    let browser: Browser = await chromium.launch({ headless: false});
    console.log("Browser launched", browser);

    //level 2: craete context, fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context created", context1);

    let context2: BrowserContext = await browser.newContext();
    console.log("Context created", context2);

    //level 3: create page, tab inside the context
    let page1: Page = await context1.newPage();
    console.log("Page created", page1);

    let page2: Page = await context1.newPage();
    console.log("Page created", page2);

    await page1.goto("https://app.vwo.com");
    await page2.goto("https://app.vwo.com");

    //cleanup in reverse order
    await page1.close();
    await page2.close();
    await context1.close();
    await context2.close();
    await browser.close();      

    
}
run();