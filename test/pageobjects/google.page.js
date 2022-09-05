import Page from "./page";

class GooglePage extends Page {
  open() {
    return browser.url("https://google.com"); // opens Google website in browser
  }
}

export default new GooglePage();
