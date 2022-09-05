export default class Page {
  get searchGoogle() {
    // Using attribute selector
    return $("input[name='q']");
  }

  async search(searchTerm) {
    await this.searchGoogle.click();
    await this.searchGoogle.setValue(searchTerm);
    await this.searchGoogle.keys("Enter");
  }
}
