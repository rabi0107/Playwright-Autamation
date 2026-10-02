import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeEmpty();
  await expect(page.locator('[data-test="password"]')).toBeEmpty();
});