import { test, expect, Locator} from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

test.describe('Shadow handling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('Locate Shadow DOM and assert visible', async ({ page }) => {
        const card = page.getByTestId('card-account');
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.getByTestId('card-account-password').fill('pw');
        await card.getByTestId('card-account-submit').click();
        await expect(page.getByTestId('card-account-status')).toContainText('student@thetestingacademy.com');

        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', { name: 'Increment' }).click();
        await cart.getByRole('button', { name: 'Decrement' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('3');

        const nestedHost = page.getByTestId('nested-host');
        await nestedHost.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
        await nestedHost.getByTestId('card-inside-password').fill('pramod@123');
        await nestedHost.getByTestId('card-inside-submit').click();




    });

});