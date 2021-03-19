import LoginPage from "../pages/LoginPage";
import { DATA } from "../data/Constants";
import { differentUsers } from "../roles/Roles";

fixture`Test Scenarios For Login`.page`https://www.saucedemo.com/`;

test("Login with a valid user", async (t) => {
  await t.useRole(differentUsers);
  await t.expect(LoginPage.productsPage.exists).ok();
});

test("Login with invalid user", async (t) => {
  await LoginPage.login(
    DATA.INVALID_LOGIN.USERNAME,
    DATA.INVALID_LOGIN.PASSWORD
  );
  await t.expect(LoginPage.errorMessage.exists).ok();
});

test("Logout from product's page", async (t) => {
  await LoginPage.login(DATA.LOGIN.USERNAME, DATA.LOGIN.PASSWORD);
  await LoginPage.logoutProductPage();
  await t.expect(LoginPage.userNameField.exists).ok();
});
