

import { test, expect } from '@playwright/test';

test.describe('API 13: PUT METHOD To Update User Account', () => {

  test('Cập nhật thông tin tài khoản thành công bằng phương thức PUT', async ({ request }) => {
    // Lưu ý: Email và Password phải là của tài khoản ĐÃ TỒN TẠI trên hệ thống
    const updateData = {
      name: 'John Doe test put again',
      email: 'testnewusersignup@gmail.com', // Email tài khoản hiện có
      password: 'testnewusersignup',
      title: 'Mr',
      birth_date: '20',
      birth_month: '09',
      birth_year: '1992',
      firstname: 'John Updated',
      lastname: 'Doe Updated',
      company: 'New Tech Corp',
      address1: '456 New Street',
      address2: 'Suite 101',
      country: 'United States',
      zipcode: '90001',
      state: 'CA',
      city: 'Los Angeles',
      mobile_number: '0987654321',
    };

    // 1. Gửi request PUT với đầy đủ thông tin dạng Form Data
    const response = await request.put('/api/updateAccount', {
      form: updateData,
    });

    // 2. Kiểm tra HTTP Status code
    expect(response.status()).toBe(200);

    // 3. Parse JSON response
    const responseBody = JSON.parse(await response.text());

    // 4. Kiểm tra responseCode là 200 và message là 'User updated!'
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe('User updated!');
  });

});