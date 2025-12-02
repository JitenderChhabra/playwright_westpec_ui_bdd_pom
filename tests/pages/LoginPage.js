const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        this.errorMsg = '.error-button';
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }

    getError() {
        return this.page.locator(this.errorMsg);
    }
}

module.exports = { LoginPage };