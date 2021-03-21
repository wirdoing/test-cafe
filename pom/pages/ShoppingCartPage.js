import { Selector, t } from "testcafe";

class ShoppingCartPage {
  constructor() {
    this.CartButton = Selector(".svg-inline--fa");
    this.Header = Selector(".subheader").withExactText("Your Cart");
    this.Product = Selector(".btn_primary");
    this.CartItem = Selector(".cart_item");
    this.CartItemCounter = Selector(".fa-layers-counter");
    this.ProductList = Selector(".inventory_item")
      .child(".pricebar")
      .child(".btn_primary");
    this.checkOutButton = Selector(".btn_action");
  }

  async clickCart() {
    await t.click(this.CartButton);
  }

  async addItem() {
    await t.click(this.Product);
  }

  async addMoreItems(NumOfItems) {
    var i = 0;
    const itemList = this.ProductList;
    while (i < NumOfItems) {
      await t.click(itemList);
      i++;
    }
  }
}

export default new ShoppingCartPage();
