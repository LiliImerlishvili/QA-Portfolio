
```gherkin
Feature: AI Prediction Multilingual Support

  Scenario: Non-English text is processed successfully
    Given the user is logged in
    And the user opens AI Prediction
    When the user submits non-English text
    Then the scan completes successfully
    And a prediction result is displayed
