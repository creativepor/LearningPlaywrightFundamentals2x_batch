import { test } from '@playwright/test';

test('Verify the Webtables Display and elements', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable.html');

    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const cols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicPath).innerText();

            if (data.includes('Maria Anders')) {
                const countryPath = `${firstPart}${i}${secondPart}${cols}${thirdPart}`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('------*********---------');
                console.log(`Maria Anders is In - ${countryText}`);
            }
        }
    }
});