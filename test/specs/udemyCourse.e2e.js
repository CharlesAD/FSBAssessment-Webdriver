import UdemyCoursePage from "../pageobjects/udemyCourse.page";

describe("Udemy Courses", function () {
  it("selects highest rated course", async function () {
    await UdemyCoursePage.open();

    const firstInitialCourse = await UdemyCoursePage.firstCourseResult; // saving the first initial result to later compare to first returned result after results are sorted

    await UdemyCoursePage.dropdown.click();
    const highestRatedCourse = await UdemyCoursePage.selectHighestRated(
      "Highest Rated"
    );

    await expect(highestRatedCourse).toHaveValueContaining("highest-rated");
    await expect(firstInitialCourse).not.toEqual(highestRatedCourse); // to assert that the first result of the page in now different from the first initial result on the page when it was loaded
  });
});
