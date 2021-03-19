import { Role } from "testcafe";
import LoginPage from "../pages/LoginPage";
import { DATA } from "../data/Constants";

export const differentUsers = Role(
  "https://www.saucedemo.com/",
  async (t) => {
    await t
      .typeText(LoginPage.userNameField, DATA.LOGIN.USERNAME)
      .typeText(LoginPage.passwordField, DATA.LOGIN.PASSWORD)
      .click(LoginPage.loginButton);
  },
  { preserveUrl: true }
);
