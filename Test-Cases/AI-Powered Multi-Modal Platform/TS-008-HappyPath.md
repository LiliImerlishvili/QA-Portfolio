
```gherkin
Feature: Browser Extension UI Consistency

  Scenario: Only one extension UI is displayed
    Given the extension is installed and enabled
    When the user opens the browser
    Then only one extension interface is shown
    And no duplicate UI appears
