import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.successMessage = page.locator('.post-title');
    this.logoutButton = page.locator('a:has-text("Log out")');
    this.errorMessage = page.locator('#error');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}