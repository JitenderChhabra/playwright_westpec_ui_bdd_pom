const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.inventoryItems = '.inventory_item';
        this.cartBadge = '.shopping_cart_badge';
        this.sortDropdown = '.product_sort_container';
    }

    async addAllItems() {
        const buttons = await this.page.$$('button.btn_inventory');
        for (let btn of buttons) await btn.click();
    }

    async sortBy(value) {
        await this.page.selectOption(this.sortDropdown, value);
    }
}

module.exports = { HomePage };