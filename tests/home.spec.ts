// tests/home.spec.js
const { test, expect } = require('@playwright/test');

test('Verify Home Page Loads Successfully', async ({ page }) => {
  // 1. Mở trang chủ
  await page.goto('https://automationexercise.com/');

  // 2. Kiểm tra Title trang web chứa từ "Automation Exercise"
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 3. Kiểm tra logo có hiển thị không
  const logo = page.locator('.logo img');
  await expect(logo).toBeVisible();
});