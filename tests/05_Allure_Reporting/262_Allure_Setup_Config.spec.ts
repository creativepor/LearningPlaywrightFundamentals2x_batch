import { test, expect } from '@playwright/test';

test.describe("Allure Reporting - Setup and Configuration", () => {

    test("Generate Allure report example", async ({ page }) => {
        /**
         * To generate and view Allure reports:
         * 
         * 1. Install Allure Reporter:
         *    npm install --save-dev @playwright/test allure-playwright
         * 
         * 2. Update playwright.config.ts:
         *    reporter: [
         *      ['list'],
         *      ['allure-playwright'],
         *      ['html']
         *    ]
         * 
         * 3. Run tests:
         *    npx playwright test
         * 
         * 4. Generate and open Allure report:
         *    allure generate allure-results -o allure-report --clean
         *    allure open allure-report
         */

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });

    test("Allure Report Features", async ({ page }) => {
        test.info().annotations.push({
            type: 'description',
            description: `
                Allure Report Features:
                - Visual representation of test execution
                - Hierarchical organization (Features → Stories → Tests)
                - Step-by-step test breakdown
                - Screenshots and attachments
                - Test history and trends
                - Severity levels (blocker, critical, normal, minor, trivial)
                - Flexible filtering and reporting
                - Integration with CI/CD pipelines
            `
        });

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });

    test("Allure vs Playwright Default Reporter", async ({ page }) => {
        test.info().annotations.push({
            type: 'description',
            description: `
                Playwright Built-in:
                - HTML report (lightweight)
                - Terminal output
                - JSON reporter
                
                Allure Report (Enhanced):
                - Rich visual interface
                - Better organization
                - Timeline view
                - Trend analysis
                - Integration with test management tools
                - More detailed analytics
            `
        });

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });
});

test.describe("Allure Reporting - Best Practices", () => {

    test("Best Practice - Descriptive Test Names", async ({ page }) => {
        // ✅ GOOD
        test.info().annotations.push({
            type: 'description',
            description: 'User should be able to login with valid credentials'
        });

        // ❌ AVOID
        // test("Test1")

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });

    test("Best Practice - Meaningful Steps", async ({ page }) => {
        // Break tests into logical, meaningful steps
        await test.step("Navigate to login page", async () => {
            await page.goto("https://app.vwo.com/login");
        });

        await test.step("Verify login form is visible", async () => {
            expect(page).toBeDefined();
        });
    });

    test("Best Practice - Attach Relevant Data", async ({ page }) => {
        await page.goto("https://awesomeqa.com/practice.html");

        // Only attach data that helps diagnose failures
        const screenshot = await page.screenshot();
        await test.info().attach('page-screenshot', { 
            body: screenshot, 
            contentType: 'image/png' 
        });
    });

    test("Best Practice - Use Severity Levels", async ({ page }) => {
        test.info().annotations.push({
            type: 'severity',
            description: 'critical'
        });

        // Severity levels help prioritize failures:
        // - blocker: Complete functionality broken
        // - critical: Major functionality affected
        // - normal: Standard functionality issue
        // - minor: Minor issue, workaround exists
        // - trivial: Cosmetic issue

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });

    test("Best Practice - Link to Issues and Test Cases", async ({ page }) => {
        test.info().annotations.push(
            {
                type: 'issue',
                description: 'https://github.com/org/repo/issues/456'
            },
            {
                type: 'testCaseId',
                description: 'QA-789'
            }
        );

        // Link tests to tracking systems for full traceability

        await page.goto("https://awesomeqa.com/practice.html");
        expect(page).toBeDefined();
    });
});
