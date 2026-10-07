import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000, 

  /* Tắt chạy song song các file test */
  fullyParallel: false,

  /* Cố định chỉ chạy 1 trình duyệt duy nhất tại một thời điểm (cả local lẫn CI) */
  workers: 1,

  /* Fail build trên CI nếu lỡ quên test.only */
  forbidOnly: !!process.env.CI,

  /* Retry khi chạy trên CI */
//  retries: process.env.CI ? 2 : 0,
  retries: 0,

  /* Xuất báo cáo dạng HTML */
 // reporter: 'html', 
  reporter: [
  ['monocart-reporter', {
    name: 'API Test Automation Report',
    outputFile: './monocart-report/report.html'
  }]
],

  /* Cấu hình chung */
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://automationexercise.com',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },

  /* Chỉ cấu hình duy nhất Google Chrome */
  projects: [
    {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome', // Dùng trình duyệt Google Chrome thực tế trên máy
      },
    },
  ],
});