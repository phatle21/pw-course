
import {test} from '@playwright/test';

test.describe('Locate tests', () => {
    test('Register user flow', async ({ page }) => { 
        // navigate to Register page
        await page.goto('https://material.playwrightvn.com/');      

        const ads = await page.locator("//div[@id='ads-here']");
    });
});
