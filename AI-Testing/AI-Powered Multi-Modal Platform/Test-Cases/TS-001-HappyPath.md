```gherkin
Feature: Clean Console on Page Refresh

  Scenario: Page refresh without console warnings
    Given the user opens the web application
    And the browser DevTools Console tab is open
    When the user refreshes the page
    Then the page loads successfully
    And no console warnings or errors are displayed---
