import {test,expect} from  '@playwright/test';
test('SwagTest',async ({page})=> {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('//input[@id="user-name"]').fill('standard_user');
    page.pause();
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    

})

