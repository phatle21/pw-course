import { test, expect } from '@playwright/test';

test('API 14: Lấy thông tin chi tiết người dùng bằng Email', async ({ request }) => {
  const userEmail = 'testnewusersignup@gmail.com';

  // Dùng `params` để Playwright tự động nối ?email=... vào URL GET
  const response = await request.get('/api/getUserDetailByEmail', {
    params: {
      email: userEmail,
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = JSON.parse(await response.text());
  
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.user.email).toBe(userEmail);
  console.log('User details retrieved successfully:', responseBody.user.email);
  expect(typeof responseBody.user.name).toBe('string');
  expect(typeof responseBody.user.email).toBe('string');
});