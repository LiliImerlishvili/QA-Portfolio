

```gherkin
Feature: Chat Document Upload

  Scenario: Uploaded document is processed successfully
    Given the user is logged in
    And the user is on the Chat page
    When the user uploads a supported document
    And the user selects a Quick Prompt
    Then the document is processed
    And a response is generated based on the document
