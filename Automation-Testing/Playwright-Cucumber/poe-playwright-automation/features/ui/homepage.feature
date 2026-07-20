@ui @homepage
Feature: Poe.com Homepage

  Background:
    Given I navigate to the Poe homepage

  @smoke
  Scenario: Homepage redirects to login page
    Then I should be redirected to the login page

  @smoke
  Scenario: Homepage URL contains poe.com
    Then the homepage URL should contain "poe.com"

  @smoke
  Scenario: Homepage title contains Poe
    Then the homepage title should contain "Poe"

  @smoke
  Scenario: Poe logo is visible on homepage
    Then the Poe logo should be visible on the homepage

  @smoke
  Scenario: Email input is visible after redirect
    Then the email input should be visible on the homepage

  @smoke
  Scenario: Google login button is visible after redirect
    Then the Google login button should be visible on the homepage
