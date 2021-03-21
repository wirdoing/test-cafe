import { DATA } from "../data/Constants";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

fixture`Test Scenarios For Shopping Cart`
  .page`https://www.saucedemo.com/`.beforeEach(async (t) => {
  await LoginPage.login(DATA.LOGIN.USERNAME, DATA.LOGIN.PASSWORD);
  await t.expect(LoginPage.productsPage.exists).ok();
});
/*
test("Navigate‌ ‌to‌ ‌the‌ ‌shopping‌ ‌cart‌", async (t) => {
  await ShoppingCartPage.clickCart();
  await t.expect(ShoppingCartPage.Header.exists).ok();
});

test("Add‌ ‌a‌ ‌single‌ ‌item‌ ‌to‌ ‌the‌ ‌shopping‌ ‌cart‌", async (t) => {
  await ShoppingCartPage.addItem();
  await ShoppingCartPage.clickCart();
  await t.expect(ShoppingCartPage.Header.exists).ok();
  await t.expect(ShoppingCartPage.CartItem.exists).ok();
});

test("Add‌ ‌multiple‌ ‌items‌ ‌to‌ ‌the‌ ‌shopping‌ ‌cart‌", async (t) => {
  const NumOfItems = 2;
  await ShoppingCartPage.addMoreItems(NumOfItems);
  await t
    .expect(ShoppingCartPage.CartItemCounter.innerText)
    .eql(NumOfItems.toString());
});
*/