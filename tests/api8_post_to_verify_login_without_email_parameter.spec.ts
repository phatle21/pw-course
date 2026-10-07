
import { test, expect } from '@playwright/test';

test.describe('API 07: POST To Verify Login with validdetails', () => {

    test('POST To Verify Login with validdetails', async ({ request }) => {

        const password = 'testnewusersignup';

        // 1. Gửi request POST kèm tham số search_product dạng Form Data
        const response = await request.post('/api/verifyLogin', {
            form: {
                password: password,
            },
        });

        // 2. Kiểm tra HTTP Status code cấp Network
        expect(response.status()).toBe(200);

        // 2. Parse response body
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.responseCode).toBe(400);
        expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.');
    });
});


// có thể làm dynamic searchKeyword

