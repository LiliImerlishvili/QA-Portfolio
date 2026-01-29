
```gherkin
Feature: Prompts Sub-menu Display

  Scenario: Blog post sub-menu displays fully
    Given the user is logged in
    And the user opens the Prompts menu
    When the user selects Blog post
    Then the sub-menu is fully visible
    And it does not overlap other menus
