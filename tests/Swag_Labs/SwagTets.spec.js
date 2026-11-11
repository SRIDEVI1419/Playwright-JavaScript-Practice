import {test,expect} from  '@playwright/test';
test('SwagTest',async ({page})=> {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="password"]').fill('secret_sauce');
   await page.waitForTimeout(2000);
    await page.locator('//input[@id="login-button"]').click();
  await page.waitForTimeout(2000);
    await page.locator('//button[@name="add-to-cart-sauce-labs-backpack"]').first().click();
    await expect(page.locator('//span[@class="shopping_cart_badge"]')).toHaveText('1');
   
   await page.locator('//a[@class="shopping_cart_link"]').click();
   await page.waitForTimeout(2000);
   await page.locator('//button[@id="checkout"]').click();
   await page.waitForTimeout(2000);
   await page.locator('//input[@id="first-name"]').fill('Sridevi');
   await page.waitForTimeout(2000);
   await page.locator('//input[@id="last-name"]').fill('N');
   await page.waitForTimeout(2000);
   await page.locator('//input[@id="postal-code"]').fill('12345');
   await page.waitForTimeout(2000);
   await page.locator('//input[@id="continue"]').click();
   await page.waitForTimeout(2000);
   await expect(page.locator('//div[@class="summary_info"]')).toBeVisible();
   await page.waitForTimeout(2000);
   await page.locator('//button[@id="finish"]').click();
   await page.waitForTimeout(2000);
   await expect(page.locator('//h2[@class="complete-header"]')).toHaveText('Thank you for your order!');


    

});

