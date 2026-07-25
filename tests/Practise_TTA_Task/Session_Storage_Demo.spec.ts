// This script is to practise Session Storage in Playwright.
//https://www.tester-today.com/login
//poulomi.partho@gmail.com//Datalearning&2026

import { chromium } from "playwright";
import dotenv from "dotenv";

dotenv.config();


const testerToday_USER = process.env.testerToday_USER;
const testerToday_PASS = process.env.testerToday_PASS;
  

async function saveSession() {

    if (!testerToday_USER || !testerToday_PASS) {
        throw new Error("Missing testerToday_USER / testerToday_PASS. Copy .env.example to .env and fill them in.");
    }

    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.tester-today.com/login");
    await page.waitForTimeout(2000);

    await page.fill("#username", testerToday_USER);
    await page.fill("#password", testerToday_PASS);
    await page.waitForTimeout(1500);

    await page.click("#bru-button");

    // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.
    //await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    //await page.waitForTimeout(3000);

    await context.storageState({ path: "./user-session1.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();

}

saveSession();



