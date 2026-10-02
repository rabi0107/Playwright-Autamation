const { test, expect } = require('@playwright/test');

test.describe('Mercury Tours demo', () => {
  const baseURL = 'https://demo.guru99.com/test/newtours/index.php';

  test('should log in successfully with valid credentials', async ({ page }) => {
    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Welcome: Mercury Tours/);

    await page.fill('input[name="userName"]', 'tutorial');
    await page.fill('input[name="password"]', 'tutorial');
    await page.click('input[name="submit"]');

    await expect(page).toHaveURL(/mercuryreservation/);
    await expect(page.locator('text=Login Successfully')).toBeVisible();
  });

  test('should navigate to the Flights page after login', async ({ page }) => {
    await page.goto(baseURL);
    await page.fill('input[name="userName"]', 'tutorial');
    await page.fill('input[name="password"]', 'tutorial');
    await page.click('input[name="submit"]');

    await expect(page.locator('text=Flights')).toBeVisible();
    await page.click('a:has-text("Flights")');

    await expect(page.locator('text=Find a Flight')).toBeVisible();
  });
});
