import { test, expect } from '@playwright/test';
import { log } from '../Helper/logger';


test('Verify Dynamic Dropdown of the Spicejet site', async ({ page }) => {


    await page.goto('https://www.spicejet.com/');

    

    await page.getByTestId('to-testID-origin').click();
    await page.getByText('Delhi', {exact: true}).click();

    await page.getByTestId('to-testID-destination').click();
    await page.getByText('BLR', {exact: true}).click();

    await log("error", "The page is not loaded");
    //await log("warn", "The Drop down is working fine");
    //await log("info", "Launching the AUT in QA env");

    //pause the test

    await page.pause();



});