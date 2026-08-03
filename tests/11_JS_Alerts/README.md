# JavaScript Alerts Test - Step by Step Guide

This guide explains the Playwright test script `284_JS.spec.ts` located in the `tests/11_JS_Alerts/` folder.

## What This Script Does

This script automates the handling of three types of JavaScript dialogs (alerts) on the practice page:

`https://the-internet.herokuapp.com/javascript_alerts`

The three dialog types tested are:

1. **JS Alert** — a simple notification dialog with only an OK button.
2. **JS Confirm** — a dialog with OK and Cancel buttons.
3. **JS Prompt** — a dialog that asks the user to enter text.

---

## Step 1: Import Playwright Test Tools

```typescript
import { test, expect } from '@playwright/test';
```

- `test` is used to define test cases.
- `expect` is used to verify that actual results match expected results.

---

## Step 2: Group the Tests

```typescript
test.describe('Javascript Alerts', () => {
```

All three test cases are grouped under one describe block called `Javascript Alerts`. This keeps related tests organized and allows shared setup like `beforeEach`.

---

## Step 3: Open the Target Page Before Each Test

```typescript
test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});
```

- `test.beforeEach` runs before every test inside the describe block.
- It navigates to the JavaScript Alerts page so each test starts from the same state.

---

## Step 4: Handle a Simple Alert

### Test Name

```typescript
test('JS Alert accept 1', async ({ page }) => {
```

### Register the Dialog Handler

```typescript
page.once('dialog', async dialog => {
    console.log('Alert type:', dialog.type());
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
});
```

- `page.once('dialog', ...)` listens for the next dialog event only once.
- The handler runs when the alert appears.
- `dialog.type()` returns the dialog type, for example `alert`.
- `dialog.message()` returns the text shown in the dialog.
- `expect(dialog.message()).toBe('I am a JS Alert')` checks that the message is correct.
- `await dialog.accept()` clicks the OK button.

> Important: The handler must be registered **before** the action that triggers the alert.

### Trigger the Alert

```typescript
await page.getByRole('button', { name: "Click for JS Alert" }).click();
```

This finds the button labeled `Click for JS Alert` and clicks it.

### Verify the Result

```typescript
await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
```

After accepting the alert, the page displays a result message. This line checks that the message matches the expected text.

---

## Step 5: Handle a Confirm Dialog

### Test Name

```typescript
test('JS Confirm accept 2', async ({ page }) => {
```

### Register the Dialog Handler

```typescript
page.once('dialog', async dialog => {
    console.log('Alert type:', dialog.type());
    expect(dialog.type()).toBe('confirm');
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toBe('I am a JS Confirm');
    await dialog.accept();
});
```

- This time the handler checks that the dialog type is `confirm`.
- It also verifies the message text is `I am a JS Confirm`.
- `dialog.accept()` clicks OK.

### Trigger the Confirm Dialog

```typescript
await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
```

### Verify the Result

```typescript
await expect(page.locator('#result')).toHaveText('You clicked: Ok');
```

When OK is clicked on a confirm dialog, the page shows `You clicked: Ok`.

---

## Step 6: Handle a Prompt Dialog

### Test Name

```typescript
test('JS Prompt accept 3', async ({ page }) => {
```

### Define the Input Text

```typescript
const inputText = 'Hello from The Testing Academy';
```

This stores the text that will be entered into the prompt dialog.

### Register the Dialog Handler

```typescript
page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.defaultValue()).toBe('');
    await dialog.accept(inputText);
});
```

- The handler checks that the dialog type is `prompt`.
- `dialog.defaultValue()` returns the default text inside the prompt input box. The test expects it to be empty.
- `await dialog.accept(inputText)` clicks OK and submits the entered text.

### Trigger the Prompt Dialog

```typescript
await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
```

### Verify the Result

```typescript
await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
```

This checks that the page shows the text that was entered into the prompt.

---

## Key Concepts to Remember

| Concept | Purpose |
|---------|---------|
| `page.once('dialog', handler)` | Listens for the next dialog one time only. |
| `dialog.type()` | Returns the dialog type: `alert`, `confirm`, or `prompt`. |
| `dialog.message()` | Returns a message shown in the dialog. |
| `dialog.defaultValue()` | Returns the default value in a prompt dialog. |
| `dialog.accept()` | Clicks the OK button. |
| `dialog.accept(text)` | Clicks OK and submits text in a prompt dialog. |  
| `dialog.dismiss()` | Clicks the Cancel button. |

## Why Register the Handler First?

Playwright automatically dismisses unhandled dialogs and throws an error. If you click the button before setting up the handler, the dialog will not be handled correctly and the test will fail.

Always register the dialog handler **before** the action that opens the dialog.
