import { test, expect } from '@playwright/test';

test.describe('API 2: Post To All Product', () => {

  test('Gửi phương thức POST đến endpoint chỉ hỗ trợ GET phải nhận về lỗi 405', async ({ request }) => {
    // 1. Gửi request GET
    const response = await request.post('/api/productsList');
    expect(response.status()).toBe(200);

    // 2. Parse response body
    const responseBody = JSON.parse(await response.text());

    // 4. Kiểm tra mã lỗi nghiệp vụ responseCode là 405
    expect(responseBody.responseCode).toBe(405);

    // 5. Kiểm tra thông điệp báo lỗi message chính xác
    expect(responseBody.message).toBe('This request method is not supported.');

    // 6. Kiểm tra kiểu dữ liệu (Data Types)
    expect(typeof responseBody.responseCode).toBe('number');
    expect(typeof responseBody.message).toBe('string');
  });

});
