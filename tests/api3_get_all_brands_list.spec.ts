import { test, expect } from '@playwright/test';

test.describe('API 3: Get All Brands List', () => {

  test('Lấy danh sách thương hiệu và kiểm tra cấu trúc dữ liệu chuẩn', async ({ request }) => {
    // 1. Gửi request GET
    const response = await request.get('/api/brandsList');
    expect(response.status()).toBe(200);

    // 2. Parse response body
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toBe(200);

    // 3. Kiểm tra mảng products
    expect(Array.isArray(responseBody.brands)).toBeTruthy();
    expect(responseBody.brands.length).toBeGreaterThan(0);

    // 4. Kiểm tra chi tiết sản phẩm đầu tiên (Bổ sung cấu trúc lồng nhau)
    const firstBrand = responseBody.brands[0];
    
    // Kiểm tra các trường cấp 1
    expect(firstBrand).toHaveProperty('id');
    expect(firstBrand).toHaveProperty('brand');

    // Kiểm tra cấu trúc object lồng nhau (category & usertype)
    expect(firstBrand).toHaveProperty('id');
    expect(firstBrand).toHaveProperty('brand');

    // 5. Kiểm tra KIỂU DỮ LIỆU (Data Types) của brand đầu tiên
    expect(typeof responseBody.responseCode).toBe('number');
    expect(typeof firstBrand.id).toBe('number');
    expect(typeof firstBrand.brand).toBe('string');


    // 6. Kiểm tra toàn bộ danh sách (Mỗi phần tử đều phải có đủ id, name, price)
    for (const item of responseBody.brands) {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('brand');
      expect(typeof item.id).toBe('number');
      expect(typeof item.brand).toBe('string');
    }
  });

});
