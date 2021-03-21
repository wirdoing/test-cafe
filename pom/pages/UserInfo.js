import { Selector, t } from "testcafe";

class UserInfo {
  constructor() {
    this.checkoutHeader = Selector(".subheader");
    this.firstName = Selector("#first-name");
    this.lastName = Selector("#last-name");
    this.zipCode = Selector("#postal-code");
    this.errorMessage = Selector(".error-button");
    this.continueButton = Selector(".btn_primary");
    this.cartButton = Selector("#logout_sidebar_link");
    this.overviewHeader = Selector(".subheader").withExactText(
      "Checkout: Overview"
    );
    this.finishButton = Selector(".btn_action").withExactText("FINISH");
    this.thankYouHeader = Selector(".complete-header").withExactText(
      "THANK YOU FOR YOUR ORDER"
    );
  }

  async fillValidUserInfo(firstName, lastName, zipCode) {
    await t
      .typeText(this.firstName, firstName, { paste: true })
      .typeText(this.lastName, lastName, { paste: true })
      .typeText(this.zipCode, zipCode, { paste: true })
      .click(this.continueButton);
  }
}

export default new UserInfo();
