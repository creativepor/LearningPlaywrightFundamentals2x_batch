# Flipkart SVG Search Test - Step by Step Guide

This guide explains the Playwright test script `285_SVG.spec.ts` located in the `tests/12_Handle_SVG/` folder.

## What This Script Does

This script automates a product search on Flipkart. The search button on Flipkart is an SVG icon instead of a regular HTML button or input element, so the test demonstrates how to locate and interact with SVG elements using Playwright.

Target URL: `https://www.flipkart.com/search`

The test searches for `macmini`, clicks the SVG search icon, collects the product titles from the search results, and prints them to the console.

---

## Step 1: Import Playwright Test Tools

```typescript
import { test, expect, Locator } from '@playwright/test';
```

- `test` is used to define test cases.
- `expect` is used to write assertions.
- `Locator` is the Playwright type that represents one or more page elements.

---

## Step 2: Define the Target URL

```typescript
const URL = 'https://www.flipkart.com/search'
```

This stores the Flipkart search page URL in a constant so it can be reused easily.

---

## Step 3: Group the Tests

```typescript
test.describe('Flipkart Seach via the SVG', () => {
```

All test cases are grouped under one describe block named `Flipkart Seach via the SVG`. This keeps related tests organized.

---

## Step 4: Open the Target Page Before Each Test

```typescript
test.beforeEach(async ({ page }) => {
    console.log("Before running any Testcase!")
    await page.goto(URL);
})
```

- `test.beforeEach` runs before every test inside the describe block.
- It prints a message to the console.
- It navigates to the Flipkart search page so each test starts from the same state.

---

## Step 5: Define the Test Case

```typescript
test('TC#1 @smoke @regression', async ({ page }) => {
```

This creates a single test case named `TC#1`. The `@smoke` and `@regression` tags can be used later to filter which tests to run.

---

## Step 6: Enter the Search Keyword

```typescript
await page.locator('input[name="q"]').fill("macmini");
```

This finds the search input box using the CSS selector `input[name="q"]` and types the text `macmini` into it.

There is also a commented alternative:

```typescript
//await page.getByTitle('Search for products, brands and more').fill('macmini');
```

This shows another way to locate the same search box using the `title` attribute.

---

## Step 7: Locate and Click the SVG Search Icon

```typescript
const svgElements: Locator = page.locator('svg');
await svgElements.first().click();
```

- `page.locator('svg')` finds all SVG elements on the page.
- The result is stored in `svgElements` with the type `Locator`.
- `svgElements.first().click()` clicks the first SVG element found, which is the search icon.

This is the main purpose of the script: it demonstrates how to interact with an SVG element since the Flipkart search button is rendered as an SVG.

### Alternative Approach (Commented)

```typescript
// const svgElementsAll: Locator[] = await page.locator('svg').all();
// for(let svgElement in svgElementsAll){
//     // find and click()
// }
```

This commented code shows another way to get all SVG elements as an array and iterate over them. It is not used here because clicking the first SVG is enough.

---

## Step 8: Locate the Product Title Elements

```typescript
const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");
```

This XPath locator finds the product title links on the search results page.

Breakdown of the XPath:

- `//div` — selects any `div` element.
- `contains(@data-id,'CPU')` — checks if the `data-id` attribute contains `CPU`.
- `contains(@data-id,'ACC')` — checks if the `data-id` attribute contains `ACC`.
- `contains(@data-id,'COM')` — checks if the `data-id` attribute contains `COM`.
- `contains(@data-id,'MP')` — checks if the `data-id` attribute contains `MP`.
- `/div/a[2]` — from the matching `div`, selects the second `a` child inside a nested `div`, which holds the product title.

The `data-id` values represent different product categories on Flipkart.

---

## Step 9: Count and Loop Through the Results

```typescript
const count: number = await titleResults.count();
for (let i = 0; i < count; i++) {
    const title: string | null = await titleResults.nth(i).textContent();
    console.log(title);
}
```

- `titleResults.count()` returns the number of product title elements found.
- The `for` loop runs once for each title element.
- `titleResults.nth(i)` gets the element at index `i`.
- `textContent()` reads the visible text of that element.
- The title is printed to the console.

The type `string | null` is used because `textContent()` can return `null` if the element has no text.

---

## Step 10: Pause for Manual Inspection

```typescript
await page.pause();
```

This pauses the test execution and opens the Playwright Inspector. You can use it to inspect the page manually, debug locators, or verify the search results visually.

---

## Key Concepts to Remember

| Concept | Purpose |
|---------|---------|
| `page.locator('svg')` | Finds SVG elements on the page. |
| `locator.first()` | Selects the first matching element. |
| `locator.all()` | Returns all matching elements as an array. |
| `locator.count()` | Returns the number of matching elements. |
| `locator.nth(i)` | Selects the element at a specific index. |
| `textContent()` | Reads the text inside an element. |
| `page.pause()` | Pauses the test for debugging. |

## Why Use SVG Locators?

Some modern websites use SVG icons for buttons instead of regular HTML button tags. Playwright can locate SVG elements using the standard `svg` tag selector, just like any other HTML element. In this test, the Flipkart search icon is an SVG, so the script clicks it to submit the search.
