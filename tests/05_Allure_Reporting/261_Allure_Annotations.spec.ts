import { test, expect } from '@playwright/test';

test.describe("Allure Reporting - Basic Annotations", () => {

    test("Test with description and tags", async ({ page }) => {
        // Allure tags and description
        test.info().annotations.push({
            type: 'description',
            description: 'This test verifies basic form input functionality'
        });

        await page.goto("https://awesomeqa.com/practice.html");
        await page.locator('[name="firstname"]').fill("John");
        
        const value = await page.locator('[name="firstname"]').inputValue();
        expect(value).toBe("John");
    });

    test("Test with severity and labels", async ({ page }) => {
        test.info().annotations.push(
            {
                type: 'severity',
                description: 'critical'
            },
            {
                type: 'owner',
                description: 'QA Team'
            },
            {
                type: 'feature',
                description: 'Login Form'
            }
        );

        await page.goto("https://awesomeqa.com/practice.html");
        await page.locator('[name="firstname"]').fill("Test User");
        
        expect(page).toBeDefined();
    });

    test("Test with steps and attachments", async ({ page }) => {
        test.info().annotations.push({
            type: 'description',
            description: 'Multi-step test with attachments'
        });

        // Step 1
        test.step("Navigate to practice page", async () => {
            await page.goto("https://awesomeqa.com/practice.html");
        });

        // Step 2
        test.step("Fill firstname field", async () => {
            await page.locator('[name="firstname"]').fill("John Doe");
        });

        // Step 3
        test.step("Verify firstname value", async () => {
            const value = await page.locator('[name="firstname"]').inputValue();
            expect(value).toBe("John Doe");
        });

        // Attach screenshot
        const screenshot = await page.screenshot();
        await test.info().attach('screenshot', { body: screenshot, contentType: 'image/png' });
    });
});

test.describe("Allure Reporting - Advanced Features", () => {

    test("Test with issue and test case links", async ({ page }) => {
        test.info().annotations.push(
            {
                type: 'issue',
                description: 'https://github.com/user/repo/issues/123'
            },
            {
                type: 'testCaseId',
                description: 'TC-001'
            }
        );

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });

    test("Test with custom parameter", async ({ page }) => {
        test.info().annotations.push({
            type: 'parameter',
            description: 'browser: chromium, headless: true'
        });

        await page.goto("https://awesomeqa.com/practice.html");
        const title = await page.title();
        expect(title).toBeTruthy();
    });

    test("Test with Allure steps and nested steps", async ({ page }) => {
        await page.goto("https://awesomeqa.com/practice.html");

        await test.step("Fill Form", async () => {
            await test.step("Enter First Name", async () => {
                await page.locator('[name="firstname"]').fill("John");
            });

            await test.step("Enter Last Name", async () => {
                await page.locator('[name="lastname"]').fill("Doe");
            });
        });

        await test.step("Verify Form Data", async () => {
            const firstName = await page.locator('[name="firstname"]').inputValue();
            const lastName = await page.locator('[name="lastname"]').inputValue();
            
            expect(firstName).toBe("John");
            expect(lastName).toBe("Doe");
        });
    });

    test("Test with multiple attachments", async ({ page }) => {
        test.info().annotations.push({
            type: 'description',
            description: 'Test demonstrating multiple attachments'
        });

        await page.goto("https://awesomeqa.com/practice.html");

        // Attach page content
        const content = await page.content();
        await test.info().attach('page-html', { body: content, contentType: 'text/html' });

        // Attach screenshot
        const screenshot = await page.screenshot();
        await test.info().attach('final-screenshot', { body: screenshot, contentType: 'image/png' });

        // Attach page title as text
        const title = await page.title();
        await test.info().attach('page-title', { body: title, contentType: 'text/plain' });
    });
});
