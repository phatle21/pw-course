import { test, expect } from '@playwright/test';

test.describe('API 5: Post To Search Products List', () => {

  test('Tìm kiếm sản phẩm thành công với từ khóa hợp lệ', async ({ request }) => {

    const searchKeyword = 'top';

    // 1. Gửi request POST kèm tham số search_product dạng Form Data
    const response = await request.post('/api/searchProduct', {
      form: {
        search_product: searchKeyword,
      },
    });

    // 2. Kiểm tra HTTP Status code cấp Network
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
    expect(typeof firstProduct.category.usertype.usertype).toBe('string');
    expect(typeof firstProduct.category.category).toBe('string');

// 7. (Nghiệp vụ quan trọng) Kiểm tra tất cả sản phẩm trả về có chứa từ khóa tìm kiếm không
    for (const product of responseBody.products) {
      const productName = product.name.toLowerCase();
      const categoryName = product.category.category.toLowerCase();
      const keyWord = searchKeyword.toLowerCase();

      const isMatch = productName.includes(keyWord) || categoryName.includes(keyWord);
      expect(isMatch).toBeTruthy();
    }
  });

});

// có thể làm dynamic searchKeyword

