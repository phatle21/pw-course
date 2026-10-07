import { test, expect } from '@playwright/test';

test.describe('API 07: POST To Verify Login with validdetails', () => {

    test('POST To Verify Login with validdetails', async ({ request }) => {

        const email = 'testnewusersignup@gmail.com';
        const password = 'testnewusersignup';

        // 1. Gửi request POST kèm tham số search_product dạng Form Data
        const response = await request.post('/api/verifyLogin', {
            form: {
                email: email,
                password: password,
            },
        });

        // 2. Kiểm tra HTTP Status code cấp Network
        expect(response.status()).toBe(200);

        // 2. Parse response body
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.message).toBe('User exists!');
    });
});


// có thể làm dynamic searchKeyword

