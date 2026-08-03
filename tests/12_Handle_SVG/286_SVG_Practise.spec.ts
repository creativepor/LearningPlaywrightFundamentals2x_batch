import { test, expect, Locator } from '@playwright/test';

const URL = "https://app.thetestingacademy.com/playwright/widgets/svg";

test.describe('SVG Practise Task', () => {
    test.beforeEach(async ({ page }) => {
        console.log('Before each test block');
        await page.goto(URL);
    });

    test('Locate the SVG red circle and assert its visible', async ({ page }) => {
        console.log('TC001');
        const circleRoot: Locator = page.locator('#circle-blue');
        await expect(circleRoot).toBeVisible();
        await circleRoot.click();

        //by extracting all the innertext and printing the value
        const blueCircleOutput = await page.locator('#shapes-output').innerText();
        console.log(blueCircleOutput);
        expect(blueCircleOutput).toContain('Blue circle');

        //the rectangle bar svg element
        await page.getByRole( 'button', {name : /Q3 bar/}).click();
        await page.getByTestId('bar-q3').click();
        await page.locator('[data-value="92"]').click();


    





    });

   
  

});