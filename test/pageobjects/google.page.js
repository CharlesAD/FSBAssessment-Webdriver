import Page from "./page";

class GooglePage extends Page {
  async clickTarget(target) {
    await $(`h3*=${target}`).click();
  }

  open() {
    return browser.url("https://google.com"); // opens Google website in browser
  }
}

export default new GooglePage();
