import GooglePage from "../pageobjects/google.page";

describe("Google", function () {
  it("should display he correct title", async function () {
    await GooglePage.open();

    const title = await browser.getTitle();
    expect(title).toEqual("Google");
  });

  it("should search 'Test Automation Learning' and navigate to the Udemy link", async function () {
    const searchTerm = "Test Automation Learning";

    const search = await GooglePage.searchGoogle;
  });
});
