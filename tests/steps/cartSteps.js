const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
//const { expect } = require('chai');

let loginPage, homePage, cartPage, checkoutPage;



When('I add products to cart', async function () {
    homePage = new HomePage(this.page);
    await homePage.addAllItems();
});


Then('I should see items in cart', async function () {
    cartPage = new CartPage(this.page);
    await cartPage.openCart();
    const count = await this.page.locator('.cart_item').count();
    expect(count).toBeGreaterThan(0);
});


When('I complete checkout', async function () {
    checkoutPage = new CheckoutPage(this.page);
    await cartPage.checkout();
    await checkoutPage.fillInfo();
    await this.page.click(checkoutPage.continueBtn);
    await this.page.click(checkoutPage.finishBtn);
});


Then('I should see order confirmation', async function () {
    expect(await this.page.locator('.complete-header').textContent()).toContain('Thank you for your order!');
});