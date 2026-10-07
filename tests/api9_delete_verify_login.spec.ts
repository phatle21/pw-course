import { test, expect } from '@playwright/test';

test.describe('API 09: Delete to verify login', () => {

    test('Post để verify login với thông tin không hợp lệ', async ({ request }) => {

        // 1. Gửi request POST kèm tham số search_product dạng Form Data
        const response = await request.delete('/api/verifyLogin');        
        // 2. Kiểm tra HTTP Status code cấp Network
        expect(response.status()).toBe(200);

        // 2. Parse response body
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.responseCode).toBe(405);
        expect(responseBody.message).toBe('This request method is not supported.');
    });

});


// có thể làm dynamic searchKeyword

