import { test, expect } from '@playwright/test';


test('Verify Dynamic Dropdown of the Spicejet site', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');

    await page.getByTestId('to-testID-origin').click();
    await page.getByText('Delhi', {exact: true}).click();

    await page.getByTestId('to-testID-destination').click();
    await page.getByText('BLR', {exact: true}).click();

    //pause the test

    await page.pause();



});