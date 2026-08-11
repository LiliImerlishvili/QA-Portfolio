
```gherkin
Feature: Multi-Speaker Speaker-to-Text Mapping

  Scenario: Each speaker reads only their assigned text
    Given the user is logged in
    And the user navigates to AI Audio
    And the user selects Multi-Speaker mode
    When the user assigns Speaker 1 and Speaker 2
    And the user enters text for each speaker
    And the user generates the audio
    Then Speaker 1 reads only Speaker 1 text
    And Speaker 2 reads only Speaker 2 text
