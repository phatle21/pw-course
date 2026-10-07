


import { test, expect } from '@playwright/test';

test.describe('API 06: POST To Search Product Without Search Product Parameter', () => {

    test('POST To Search Product Without Search Product Parameter', async ({ request }) => {

        // 1. Gửi request POST kèm tham số search_product dạng Form Data
        const response = await request.post('/api/searchProduct');

        // 2. Kiểm tra HTTP Status code cấp Network
        expect(response.status()).toBe(200);

        // 2. Parse response body
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.responseCode).toBe(400);
        expect(responseBody.message).toBe('Bad request, search_product parameter is missing in POST request.');
    });
});


