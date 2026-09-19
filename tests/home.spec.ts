import { test, expect } from '@playwright/test';

test('Verify Home Page Loads Successfully', async ({ page }) => {
  // 1. Mở trang chủ với chế độ chờ domcontentloaded để tránh bị kẹt do quảng cáo/script chậm
  await page.goto('https://automationexercise.com/', { 
    waitUntil: 'domcontentloaded',
    timeout: 60000 
  });

  // 2. Kiểm tra Title trang web
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 3. Kiểm tra logo hiển thị
  const logo = page.locator('.logo img');
  await logo.waitFor({ state: 'visible', timeout: 15000 });
  await expect(logo).toBeVisible();
});