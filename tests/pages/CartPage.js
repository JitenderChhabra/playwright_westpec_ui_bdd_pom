const { BasePage } = require('./BasePage');

class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartBtn = '.shopping_cart_link';
        this.checkoutBtn = '#checkout';
    }


    async openCart() { await this.page.click(this.cartBtn); }
    async checkout() { await this.page.click(this.checkoutBtn); }
}

module.exports = { CartPage };