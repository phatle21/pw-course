import { test, expect } from '@playwright/test';

test.describe('API 10: POST To Verify Login with invalid details', () => {

    test('Post để verify login với thông tin không hợp lệ', async ({ request }) => {

        const email = 'johndoe20264445500@test.com';
        const password = 'SecurePassword123!4444';

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
        expect(responseBody.responseCode).toBe(404);
        expect(responseBody.message).toBe('User not found!');
    });

});


// có thể làm dynamic searchKeyword

