# webdriverio-mocha-linting

Steps

- My first expect in the google.e2e.js file asserts that the correct page has loaded by checking the page title contains the word 'Google'
- I wrote a test script that entered "Test Automation Learning" into the Google search bar and clicked on the first link that went to the Udemy website. I had to implement a step that bypassed the cookies pop up that was previously stopping my test. I asserted the test was on the correct page by asserting the page title contained the string "Automation Testing"
- When writing a script to search an input through the Udemy search I ran into a blocker. I was not able to bypass Udemy's recaptcha security so I created a next test script starting from opening the browser straight from the desired results page. I was then able to automate the the selection of of the sort dropdown menu and click the Highest Rated option the re-render the page and have the result with the hightest rating appear as the first search result. I asserted this sort had taken place by comparing the first initial result when the page loaded to the first result returned after the sort button is selected.
