


import { test, expect } from '@playwright/test';

test.describe('API 12: DELETE To Delete User Account', () => {

    test('DELETE To Delete User Account', async ({ request }) => {

        const email = 'testnewusersignup@gmail.com';
        const password = 'testnewusersignup';

        // 1. Gửi request DELETE kèm tham số email và password dạng Form Data
        const response = await request.delete('/api/deleteAccount', {
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
        expect(responseBody.message).toBe('Account deleted!');
    });
});


// có thể làm dynamic searchKeyword

