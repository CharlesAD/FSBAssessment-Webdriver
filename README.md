# FSB Webdriver Assessment

## My Approach

When tackling this assessment I chose to do so in a manner that made my TestScripts and the rest of my code readable using techniques like abstraction to abstract away code when necessary in order to maintain clear and DRY code.
During the process I ran into a blocker on the Udemy website. The reCaptcha security of Udemy didn't allow for me to run my tests as intended so my approach was to write my tests from the perspective of having them pass the reCaptcha and demonstrate what I believed to be the next steps in order to complete the assessment.

## Context and Justifications

- My first expect in the google.e2e.js file asserts that the correct page has loaded by checking the page title contains the word 'Google'. After creating a method that opens the Google website (on a separate file) in the web browser I then called this same method in the test script. I used abstraction to separate out the code into the relevant separate files and call them.

- I wrote a test script that entered "Test Automation Learning" into the Google search bar and clicked on the first link that went to the Udemy website. I had to implement a step that bypassed the cookies pop up that was previously stopping my test. I asserted the test was on the correct page by asserting the page title contained the string "Automation Testing". I put method that allowed me to perform the search on the parent page.js file. Because google.page.js extends page.js I was able to call that method (searchGoogle & search) in my google.e2e.js file.

- When writing a script to search an input through the Udemy search I ran into a blocker. I was not able to bypass Udemy's reCaptcha security so I created another test script starting from opening the browser straight from the desired results page after a search. I was then able to automate the the selection of the sort dropdown menu and click the Highest Rated option. The re-render of the page would have the result with the hightest rating appear as the first search result. I asserted the first result back was the highest rated result by comparing the first initial result when the page loaded to the first result returned after the sort button is selected.

Thank you for reading.
