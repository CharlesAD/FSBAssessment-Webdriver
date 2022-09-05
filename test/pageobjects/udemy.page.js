import Page from "./page";

class UdemyPage extends Page {
  async clickTarget(target) {
    await $(`h3*=${target}`).click();
  }

  get header() {
    return $("h1");
  }

  open() {
    return browser.url("https://www.udemy.com/"); // opens Udemy website in browser
  }
}

export default new UdemyPage();
