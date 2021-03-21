import { DATA } from "../data/Constants";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import UserInfo from "../pages/UserInfo";

fixture`Test Scenarios For Shopping Cart`
  .page`https://www.saucedemo.com/`.beforeEach(async (t) => {
  await LoginPage.login(DATA.LOGIN.USERNAME, DATA.LOGIN.PASSWORD);
  await t.expect(LoginPage.productsPage.exists).ok();
});
/*
test("Continue‌ ‌with‌ ‌missing‌ ‌mail‌ ‌information‌", async (t) => {
  const NumOfItems = 4;
  await ShoppingCartPage.addMoreItems(NumOfItems);

  await t
    .expect(ShoppingCartPage.CartItemCounter.innerText)
    .eql(NumOfItems.toString())
    .click(ShoppingCartPage.CartButton)
    .click(ShoppingCartPage.checkOutButton)
    .expect(UserInfo.checkoutHeader.exists)
    .ok()
    .typeText(UserInfo.firstName, DATA.LOGIN.USERNAME, { paste: true })
    .typeText(UserInfo.lastName, DATA.LOGIN.PASSWORD, { paste: true })
    .click(UserInfo.continueButton)
    .expect(UserInfo.errorMessage.exists).ok()
});

test("Fill‌ ‌user’s‌ ‌information‌", async (t) => {
  const NumOfItems = 4;
  await ShoppingCartPage.addMoreItems(NumOfItems);

  await t
    .expect(ShoppingCartPage.CartItemCounter.innerText)
    .eql(NumOfItems.toString())
    .click(ShoppingCartPage.CartButton)
    .click(ShoppingCartPage.checkOutButton)
    .expect(UserInfo.checkoutHeader.exists).ok()
    await UserInfo.fillValidUserInfo(DATA.CHECKOUT_INFO.FIRSTNAME, DATA.CHECKOUT_INFO.LASTNAME,DATA.CHECKOUT_INFO.ZIPCODE)
    await t 
    .expect(UserInfo.overviewHeader.exists).ok()
})
*/
test("Complete‌ ‌a‌ ‌purchase‌‌", async (t) => {
    const NumOfItems = 4;
    await ShoppingCartPage.addMoreItems(NumOfItems);
  
    await t
      .expect(ShoppingCartPage.CartItemCounter.innerText)
      .eql(NumOfItems.toString())
      .click(ShoppingCartPage.CartButton)
      .click(ShoppingCartPage.checkOutButton)
      .expect(UserInfo.checkoutHeader.exists).ok()
      await UserInfo.fillValidUserInfo(DATA.CHECKOUT_INFO.FIRSTNAME, DATA.CHECKOUT_INFO.LASTNAME,DATA.CHECKOUT_INFO.ZIPCODE)
      await t 
      .expect(UserInfo.overviewHeader.exists).ok()
      .click(UserInfo.finishButton)
      .expect(UserInfo.thankYouHeader.exists).ok()


  })