


import {test} from '@playwright/test';


test('Register user flow', async ({ page }) => { 
   
    
    // navigate to Register page
    await page.goto('https://material.playwrightvn.com/');
    
    // 
    await page.locator("//div[@id='ads-here']").fill('ads here');
    await page.locator("//div[@id='ads-here']").fill('ads here');

    await page.locator("//div[@id='ads-here']").fill('ads here');
    await page.locator("//div[@id='ads-here']").fill('ads here');
    await page.locator("//div[@id='ads-here']").fill('ads here');

    await page.selectOption('', "");

    await page.locator().fill();

    await page.locator().setInputFiles();

    await page.locator().fill();

    // click Btn Register
    await page.locator().click();

});

test('Click', async ({ page }) => {

    await page.goto('');

    await page.locator().click();
    

});