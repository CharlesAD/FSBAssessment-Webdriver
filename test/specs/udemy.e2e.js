import UdemyPage from "../pageobjects/udemy.page";

describe("Udemy Page", function () {
  it("searches for 'BDD with Cucumber' is Udemy search and selects highest rated course", async function () {
    await UdemyPage.open();

    await expect(browser).toHaveTitleContaining("Udemy");

    const searchTerm = "BDD with Cucumber";
    //  const target = "Udemy";

    await UdemyPage.search(searchTerm);
    // await UdemyPage.clickTarget(target);

    await expect(UdemyPage.header).toContain("BDD with Cucumber");
  });
});
