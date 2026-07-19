
```gherkin
Feature: Console Cleanliness on Load

  Scenario: No console warnings after page load
    Given the user opens the web application
    And DevTools Console is open
    When the page finishes loading
    Then no console warnings or errors are displayed
