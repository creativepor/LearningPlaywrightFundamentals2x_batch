# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\260_TestVWO_Dashboard_noCustomReport.spec.ts >> go directly to dashboard — no login
- Location: tests\04_Session_Storage\260_TestVWO_Dashboard_noCustomReport.spec.ts:8:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://app.vwo.com/#/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://app.vwo.com/#/login"

```

```yaml
- main "Application main content":
  - img "Wingify"
  - list:
    - listitem:
      - textbox "Email address":
        - /placeholder: Enter email ID
    - listitem:
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility":
        - img
    - listitem:
      - button "Forgot Password?"
    - listitem:
      - text: Remember me
      - img
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google":
        - img
        - text: Sign in with Google
    - listitem:
      - button "Sign in using SSO":
        - img
        - text: Sign in using SSO
    - listitem:
      - button "Sign in with Passkey":
        - img
        - text: Sign in with Passkey
    - listitem: New to Wingify?
    - listitem:
      - link "Start a FREE TRIAL":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to Wingify's
      - link "Privacy policy":
        - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
      - text: "&"
      - link "Terms":
        - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
      - text: .
  - img "Wingify abtasty logo"
  - img
  - img "Wingify abtasty logo"
  - heading "Welcome to Wingify!" [level=1]
  - heading "app.vwo.com has transitioned to app.wingify.com" [level=2]
  - heading "Your plans, features, and data remain unchanged." [level=2]
  - link "Learn More":
    - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
    - text: Learn More
    - img
- img:
  - text: "'"
  - img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | // Load saved session — already logged in
  4  | test.use({
  5  |     storageState: "./user-session.json"
  6  | });
  7  | 
  8  | test("go directly to dashboard — no login", async ({ page }) => {
  9  |     await page.goto("https://app.vwo.com/#/dashboard/get-started?accountId=1227004");
> 10 |     await expect(page).toHaveURL(/dashboard/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  11 |     console.log("Dashboard loaded — no login needed ✅");
  12 |     await page.waitForTimeout(3000);
  13 | });
  14 | 
  15 | test("go directly to settings — no login", async ({ page }) => {
  16 |     await page.goto("https://app.vwo.com/#/settings/accounts/general?accountId=1227007");
  17 |     await expect(page).toHaveURL(/settings/);
  18 |     console.log("Settings loaded — still logged in ✅");
  19 |     await page.waitForTimeout(3000);
  20 | });
```