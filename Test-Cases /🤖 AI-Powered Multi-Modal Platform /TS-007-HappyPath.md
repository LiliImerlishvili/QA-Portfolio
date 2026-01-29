
```gherkin
Feature: Image Text Extraction

  Scenario: Extracted text is returned from uploaded image
    Given the user is logged in
    And Deepseek Reasoner model is selected
    When the user uploads an image with readable text
    And the user clicks Extract Text
    Then the text is extracted successfully
    And the extracted content is displayed
