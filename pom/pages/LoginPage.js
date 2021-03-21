import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.userNameField = Selector("#user-name");
    this.passwordField = Selector("#password");
    this.loginButton = Selector("#login-button");
    this.errorMessage = Selector(".error-button");
    this.productsPage = Selector(".product_label");
    this.hamburgerButton = Selector("#react-burger-menu-btn");
    this.logoutButton = Selector("#logout_sidebar_link");
  }

  async login(username, password) {
    await t
      .typeText(this.userNameField, username, { paste: true })
      .typeText(this.passwordField, password, { paste: true })
      .click(this.loginButton);
  }

  async logoutProductPage() {
    await t.click(this.hamburgerButton).click(this.logoutButton);
  }
}

export default new LoginPage();
