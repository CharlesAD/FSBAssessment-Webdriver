import Page from "./page";

class UdemyCoursePage extends Page {
  open() {
    return browser.url(
      "https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber"
    ); // opens Udemy to courses page after searching 'BDD with Cucumber' website in browser. I am going straight to the page here because otherwise the test gets stuck on the reCaptcha page
  }

  get sortBy() {
    return $("#u86-form-group--13");
  }

  get dropdown() {
    return $("select");
  }

  get firstCourseLink() {
    return this.firstCourseResult.$("a");
  }

  get firstCourseResult() {
    return $("div[class^='course-card--main-content']");
  }

  get firstRating() {
    return this.firstCourseResult
      .$("span[data-purpose='rating-number']")
      .getText();
  }

  async selectHighestRated(value = "highest-rated") {
    await this.dropdown.selectByVisibleText(value);
  }
}

export default new UdemyCoursePage();
