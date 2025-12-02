const { BasePage } = require('./BasePage');

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.first = '#first-name';
        this.last = '#last-name';
        this.zip = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.confirmText = '.complete-header';
    }


    async fillInfo() {
        await this.page.fill(this.first, 'John');
        await this.page.fill(this.last, 'Doe');
        await this.page.fill(this.zip, '2000');
    }
}

module.exports = { CheckoutPage };