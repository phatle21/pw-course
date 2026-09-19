import { test, expect } from '@playwright/test';

test.describe('SauceDemo - Basic Playwright Test', () => {

  test.beforeEach(async ({ page }) => {
    // Mở website trước mỗi test
    await page.goto('https://www.saucedemo.com/');

    // Verify title
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('TC_01 - Login successfully', async ({ page }) => {

    // =========================
    // 1. Input username
    // =========================
    await page.locator('#user-name').fill('standard_user');

    // =========================
    // 2. Input password
    // =========================
    await page.locator('#password').fill('secret_sauce');

    // =========================
    // 3. Click Login
    // =========================
    await page.locator('#login-button').click();

    // =========================
    // 4. Verify URL
    // =========================
    await expect(page).toHaveURL(/inventory.html/);

    // =========================
    // 5. Verify Products page
    // =========================
    await expect(
      page.locator('.title')
    ).toHaveText('Products');

    // =========================
    // 6. Verify product list
    // =========================
    const products = page.locator('.inventory_item');

    await expect(products).toHaveCount(6);

    // =========================
    // 7. Verify first product
    // =========================
    await expect(
      products.first().locator('.inventory_item_name')
    ).toBeVisible();

    // =========================
    // 8. Add product to cart
    // =========================
    await products
      .first()
      .locator('button')
      .click();

    // =========================
    // 9. Verify cart
    // =========================
    const cart = page.locator('.shopping_cart_badge');

    await expect(cart).toHaveText('1');

    // =========================
    // 10. Take screenshot
    // =========================
    await page.screenshot({
      path: 'screenshots/products-page.png',
      fullPage: true
    });
  });


  test('TC_02 - Login with invalid password', async ({ page }) => {

    // Input username
    await page.locator('#user-name').fill('standard_user');

    // Input incorrect password
    await page.locator('#password').fill('wrong_password');

    // Click Login
    await page.locator('#login-button').click();

    // Verify error message
    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
      'Username and password do not match'
    );
  });


  test('TC_03 - Login with empty fields', async ({ page }) => {

    // Không nhập username/password

    // Click Login
    await page.locator('#login-button').click();

    // Verify error message
    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
      'Username is required'
    );
  });


  test('TC_04 - Add product and remove product', async ({ page }) => {

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Verify Products page
    await expect(page.locator('.title')).toHaveText('Products');

    // Add first product
    const firstProduct = page.locator('.inventory_item').first();

    await firstProduct
      .locator('button')
      .click();

    // Verify cart = 1
    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveText('1');

    // Remove product
    await firstProduct
      .locator('button')
      .click();

    // Verify cart badge disappears
    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveCount(0);
  });


  test('TC_05 - Open product detail', async ({ page }) => {

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Click first product
    await page
      .locator('.inventory_item_name')
      .first()
      .click();

    // Verify URL
    await expect(page).toHaveURL(/inventory-item.html/);

    // Verify product detail
    await expect(
      page.locator('.inventory_details_name')
    ).toBeVisible();

    // Verify Add to cart button
    await expect(
      page.locator('button[data-test^="add-to-cart"]')
    ).toBeVisible();
  });


  test('TC_06 - Logout successfully', async ({ page }) => {

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Open menu
    await page.locator('#react-burger-menu-btn').click();

    // Click Logout
    await page.locator('#logout_sidebar_link').click();

    // Verify redirect to login page
    await expect(page).toHaveURL(
      'https://www.saucedemo.com/'
    );

    // Verify Login button
    await expect(
      page.locator('#login-button')
    ).toBeVisible();
  });

});

