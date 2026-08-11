
```gherkin
Feature: Multi-Speaker Input Fields Layout

  Scenario: Multi-speaker inputs are aligned correctly
    Given the user is logged in
    And the user navigates to AI Audio
    When the user selects Multi-Speaker mode
    Then Voice input field and Speaker Name input field are aligned on the same row
    And the layout looks consistent on desktop and mobile
