import { test, expect } from "@playwright/test";

// Load saved session — already logged in
test.use({
    storageState: "./user-session1.json"
});

test("go directly to Software Testing Engineer page — no login", async ({ page }) => {
    await page.goto("https://www.tester-today.com/qa");
    await expect(page).toHaveURL(/qa/);
    console.log("Software Testing Engineer Page— no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to email us page— no login", async ({ page }) => {
    await page.goto("https://www.tester-today.com/report");
    await expect(page).toHaveURL(/report/);
    console.log("Report loaded — still logged in ✅");
    await page.waitForTimeout(3000);
});