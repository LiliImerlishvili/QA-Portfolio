@ui @login
Feature: Poe.com Login Page
  As an unauthenticated user
  I want to access the Poe login page
  So that I can sign in and start using the application

  Background:
    Given I am on the Poe login page

  # ─── Page Load & Branding ─────────────────────────────────────────────────────

  @smoke
  Scenario: Login page loads and is ready for user interaction
    Then the login page should be loaded successfully

  @smoke
  Scenario: Browser tab displays the correct application name
    Then the page title should contain "Poe"

  @smoke
  Scenario: Login page URL confirms the user is on the correct domain
    Then the URL should contain "poe.com"

  @smoke
  Scenario: Company logo is displayed on the login page
    Then the Poe logo should be visible

  @smoke
  Scenario: Login page communicates the product value proposition
    Then the heading should contain "Chat with the best AI"

  # ─── Email Authentication Form ────────────────────────────────────────────────

  @smoke
  Scenario: Email input field is visible and ready for user input
    Then the email input field should be visible

  @smoke
  Scenario: Email input field is empty on initial page load
    Then the email input field should be empty

  @smoke
  Scenario: Email authentication form has a submission button
    Then the Go button should be visible

  @smoke
  Scenario: Go button displays the correct label
    Then the Go button should display the text "Go"

  @smoke
  Scenario: Typed email value is retained in the input field
    When I enter email "test@example.com"
    Then the email input should contain the value "test@example.com"

  # ─── Social & Alternative Authentication ─────────────────────────────────────

  @smoke
  Scenario: User can authenticate using their Google account
    Then the Continue with Google button should be visible

  @smoke
  Scenario: User can authenticate using their Apple account
    Then the Continue with Apple button should be visible

  @smoke
  Scenario: User can choose to authenticate using a phone number
    Then the Use phone option should be visible

  # ─── Legal Compliance ─────────────────────────────────────────────────────────

  @smoke
  Scenario: Terms of Service link is accessible from the login page
    Then the Terms of Service link should be visible

  @smoke
  Scenario: Privacy Policy link is accessible from the login page
    Then the Privacy Policy link should be visible

  # ─── Page State ───────────────────────────────────────────────────────────────

  @smoke
  Scenario: No error messages are displayed on initial page load
    Then no error messages should be displayed on the login page

  # ─── Email Validation — Negative ──────────────────────────────────────────────

  @negative
  Scenario: Submitting plaintext without the @ symbol is rejected
    When I enter email "invalidemail"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting an email missing the domain part is rejected
    When I enter email "user@"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting an email missing the username is rejected
    When I enter email "@example.com"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting a string containing spaces does not proceed to the next step
    When I enter email "user @example.com"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting a numeric-only string does not proceed to the next step
    When I enter email "1234567890"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting a string with multiple @ symbols does not proceed to the next step
    When I enter email "user@@example.com"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting a single character does not proceed to the next step
    When I enter email "a"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting only special characters does not proceed to the next step
    When I enter email "!#$%^&*()"
    And I click Go
    Then the login page should still be displayed

  @negative
  Scenario: Submitting a URL-like string without proper email format is rejected
    When I enter email "https://poe.com"
    And I click Go
    Then the login page should still be displayed
