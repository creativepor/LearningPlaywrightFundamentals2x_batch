import { test, expect } from '@playwright/test';

test('Basic verify how to handle multiple elements', async ({page}) => {
    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    const rightPanelLinktext: string[] = await page.locator("a.list-group-item").allInnerTexts();

    console.log(rightPanelLinktext.length);
    for (const link of rightPanelLinktext) {
        console.log(link);
    }
    for (let i = 0; i < rightPanelLinktext.length; i++) {
        console.log(rightPanelLinktext[i]);
    }

    for (const linkText of rightPanelLinktext) {
        if (linkText === "My Account") {
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }




});


  
