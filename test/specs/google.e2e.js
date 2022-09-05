import GooglePage from "../pageobjects/google.page";

describe("Google", function () {
  it("should display he correct title", async function () {
    await GooglePage.open();

    const title = await browser.getTitle();
    expect(title).toEqual("Google");
  });
});
