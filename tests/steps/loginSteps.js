const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
//const { expect } = require('chai');

let loginPage;

Given('I navigate to saucedemo', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.open();
});


When('I login with username {string} and password {string}', async function (user, pass) {
    await loginPage.login(user, pass);
});


Then('I should be logged in successfully', async function () {
    await expect(this.page.url()).toContain('inventory.html');
});


Then('I should see an error message', async function () {
    await expect(loginPage.getError()).toBeVisible({ timeout: 10000 });
});