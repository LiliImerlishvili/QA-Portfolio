@ui @login
Feature: Poe.com Login Page

  Background:
    Given I am on the Poe login page

  # ─── Page Load ────────────────────────────────────────────────────────────────

  # Smoke check that the login page opens successfully.
  @smoke
  Scenario: Login page loads successfully
    Then the login page should be loaded successfully

  # Checks that the browser tab shows the correct page title.
  @smoke
  Scenario: Login page has correct page title
    Then the page title should contain "Poe"

  # Checks that the current URL contains the login path.
  @smoke
  Scenario: Login page URL is correct
    Then the URL should contain "poe.com"

  # ─── Logo & Heading ───────────────────────────────────────────────────────────

  # Checks that the Poe logo is visible on the login page.
  @smoke
  Scenario: Poe logo is visible
    Then the Poe logo should be visible

  # Checks that the main heading text is correct.
  @smoke
  Scenario: Main heading is visible
    Then the heading should contain "Chat with the best AI"

  # ─── Login Options ────────────────────────────────────────────────────────────

  # Checks that the Google login button is visible.
  @smoke
  Scenario: Continue with Google button is visible
    Then the Continue with Google button should be visible

  # Checks that the Apple login button is visible.
  @smoke
  Scenario: Continue with Apple button is visible
    Then the Continue with Apple button should be visible

  # Checks that the email input field is visible.
  @smoke
  Scenario: Email input field is visible
    Then the email input field should be visible

  # Checks that the Go button is visible.
  @smoke
  Scenario: Go button is visible
    Then the Go button should be visible

  # Checks that the Use phone option is visible.
  @smoke
  Scenario: Use phone option is visible
    Then the Use phone option should be visible

  # ─── Legal Links ──────────────────────────────────────────────────────────────

  # Checks that the Terms of Service link is visible.
  @smoke
  Scenario: Terms of Service link is visible
    Then the Terms of Service link should be visible

  # Checks that the Privacy Policy link is visible.
  @smoke
  Scenario: Privacy Policy link is visible
    Then the Privacy Policy link should be visible

  # ─── Email Validation ─────────────────────────────────────────────────────────

  # Checks that an invalid email does not proceed to OTP screen.
  @negative
  Scenario: Invalid email does not proceed
    When I enter email "invalid-email"
    And I click Go
    Then the login page should still be displayed