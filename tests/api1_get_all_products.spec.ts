import { test, expect } from '@playwright/test';

test.describe('API 1: Get All Products List', () => {

  test('Lấy danh sách sản phẩm và kiểm tra cấu trúc dữ liệu chuẩn', async ({ request }) => {
    // 1. Gửi request GET
    const response = await request.get('/api/productsList');
    expect(response.status()).toBe(200);

    // 2. Parse response body
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toBe(200);

    // 3. Kiểm tra mảng products
    expect(Array.isArray(responseBody.products)).toBeTruthy();
    expect(responseBody.products.length).toBeGreaterThan(0);

    // 4. Kiểm tra chi tiết sản phẩm đầu tiên (Bổ sung cấu trúc lồng nhau)
    const firstProduct = responseBody.products[0];
    
    // Kiểm tra các trường cấp 1
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('brand');
    expect(firstProduct).toHaveProperty('category');

    // Kiểm tra cấu trúc object lồng nhau (category & usertype)
    expect(firstProduct.category).toHaveProperty('category');
    expect(firstProduct.category).toHaveProperty('usertype');
    expect(firstProduct.category.usertype).toHaveProperty('usertype');

    // 5. Kiểm tra KIỂU DỮ LIỆU (Data Types) của sản phẩm đầu tiên
    expect(typeof firstProduct.id).toBe('number');
    expect(typeof firstProduct.name).toBe('string');
    expect(typeof firstProduct.price).toBe('string');
    expect(typeof firstProduct.brand).toBe('string');
    expect(typeof firstProduct.category.category).toBe('string');
    expect(typeof firstProduct.category.usertype.usertype).toBe('string');

    // 6. Kiểm tra toàn bộ danh sách (Mỗi phần tử đều phải có đủ id, name, price)
    for (const product of responseBody.products) {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
    }
  });

});
// Chạy file test vừa tạo
// npx playwright test tests/api1_get_all_products.spec.ts

// Chạy và hiển thị log chi tiết
// npx playwright test tests/api1_get_all_products.spec.ts --reporter=line