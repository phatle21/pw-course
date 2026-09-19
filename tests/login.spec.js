import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage.js';

test.describe('Practice Test Automation - Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Test Case 1: Positive LogIn test', async ({ page }) => {
    // 1. Nhập username & password đúng
    await loginPage.login('student', 'Password123');

    // 2. Verify URL chuyển sang trang thành công
    await expect(page).toHaveURL(/.*practicetestautomation.com\/logged-in-successfully\//);

    // 3. Verify tiêu đề trang mới chứa text thành công
    await expect(loginPage.successMessage).toBeVisible();
    await expect(loginPage.successMessage).toHaveText('Logged In Successfully');

    // 4. Verify nút Log out có hiển thị
    await expect(loginPage.logoutButton).toBeVisible();
  });

  test('Test Case 2: Negative Password test', async ({ page }) => {
    // 1. Nhập sai password
    await loginPage.login('student', 'incorrectPassword');

    // 2. Verify thông báo lỗi hiển thị đúng nội dung
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your password is invalid!');
  });
});