

import { test, expect } from '@playwright/test';

test.describe('API 04: PUT To All Brands List', () => {

    test('PUT To All Brands List', async ({ request }) => {

        // 1. Gửi request POST kèm tham số search_product dạng Form Data
        const response = await request.put('/api/brandsList');

        // 2. Kiểm tra HTTP Status code cấp Network
        expect(response.status()).toBe(200);

        // 2. Parse response body
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.responseCode).toBe(405);
        expect(responseBody.message).toBe('This request method is not supported.');
    });
});


