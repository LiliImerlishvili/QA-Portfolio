@ui @homepage
Feature: Poe.com Homepage Redirect
  As an unauthenticated user
  When I visit the Poe homepage
  I should be automatically redirected to the login page
  So that I can sign in before accessing the application

  Background:
    Given I navigate to the Poe homepage

  # ─── Redirect Behaviour ───────────────────────────────────────────────────────

  @smoke
  Scenario: Unauthenticated user is automatically redirected to the login page
    Then I should be redirected to the login page

  @smoke
  Scenario: Redirected page URL confirms the user is on the correct domain
    Then the homepage URL should contain "poe.com"

  @smoke
  Scenario: Redirect destination is the login path
    Then the homepage URL should contain "/login"

  @smoke
  Scenario: Browser tab displays the correct application name after redirect
    Then the homepage title should contain "Poe"

  # ─── Post-Redirect Page Load ──────────────────────────────────────────────────

  @smoke
  Scenario: Login page is fully loaded and interactive after redirect
    Then the login page should be fully loaded after redirect

  # ─── Post-Redirect Branding ───────────────────────────────────────────────────

  @smoke
  Scenario: Company logo is visible after redirect
    Then the Poe logo should be visible on the homepage

  @smoke
  Scenario: Login page heading is visible after redirect
    Then the login page heading should be visible after redirect

  # ─── Post-Redirect Email Form ─────────────────────────────────────────────────

  @smoke
  Scenario: Email input field is available and ready for use after redirect
    Then the email input should be visible on the homepage

  @smoke
  Scenario: Email submission button is visible after redirect
    Then the email submission button should be visible after redirect

  # ─── Post-Redirect Authentication Options ────────────────────────────────────

  @smoke
  Scenario: Google authentication option is available after redirect
    Then the Google login button should be visible on the homepage

  @smoke
  Scenario: Apple authentication option is available after redirect
    Then the Apple login button should be visible after redirect

  @smoke
  Scenario: Phone authentication option is available after redirect
    Then the phone authentication option should be visible after redirect

  # ─── Post-Redirect Legal Links ────────────────────────────────────────────────

  @smoke
  Scenario: Terms of Service link is accessible after redirect
    Then the Terms of Service link should be visible after redirect

  @smoke
  Scenario: Privacy Policy link is accessible after redirect
    Then the Privacy Policy link should be visible after redirect

  # ─── Post-Redirect Page State ────────────────────────────────────────────────

  @smoke
  Scenario: No error messages are displayed after redirect
    Then no error messages should be displayed after redirect
