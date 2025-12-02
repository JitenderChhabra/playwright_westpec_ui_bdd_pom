const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');


let loginPage, homePage;


//Given I am logged in as "standard_user" "secret_sauce"
Given('I am logged in as {string} {string}', async function (user, pass) {
    loginPage = new LoginPage(this.page);
    await loginPage.open();
    await loginPage.login(user, pass);
    homePage = new HomePage(this.page);
});


When('I sort products by {string}', async function (value) {
    await homePage.sortBy(value);
});


Then('Items should be sorted by price', async function () {
    const prices = await this.page.$$eval('.inventory_item_price', els => els.map(e => parseFloat(e.textContent.replace('$', ''))));
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
});