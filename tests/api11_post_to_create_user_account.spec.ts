import { test, expect } from '@playwright/test';

test.describe('API 11: Post To All Crate Account', () => {

  test('Post để tạo một account mới', async ({ request }) => {

    const name = 'John Doe';
    const email = 'johndoe20264445500@test.com';
    const password = 'SecurePassword123!';
    const title = 'Mr';
    const birth_date = '15';  
    const birth_month = '08';
    const birth_year = '1990';
    const first_name = 'John';
    const last_name = 'Doe';
    const company = 'Tech Solutions LLC';
    const address1 = '123 Main St';
    const address2 = 'Apt 4B';
    const country = 'USA';
    const zipcode = '10001';
    const state = 'NY';
    const city = 'New York';
    const mobile_number = '123-456-7890';

    // 1. Gửi request POST kèm tham số search_product dạng Form Data
    const response = await request.post('/api/createAccount', {
      form: {
        name: name,
        email: email,
        password: password,
        title: title,
        birth_date: birth_date,
        birth_month: birth_month,
        birth_year: birth_year,
        firstname: first_name,
        lastname: last_name,
        company: company,
        address1: address1,
        address2: address2,
        country: country,
        zipcode: zipcode,
        state: state,
        city: city,
        mobile_number: mobile_number,
      },
    });

    // 2. Kiểm tra HTTP Status code cấp Network
    expect(response.status()).toBe(200);  

    // 2. Parse response body
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.responseCode).toBe(201);
    expect(responseBody.message).toBe('User created!');
  });

});

// có thể làm dynamic 

