@ui @auth @smoke @login
Feature: UI — Login via Email OTP

  Background:
    Given the browser is open

  # ─── Page Load & Navigation ───────────────────────────────────────────────

  # This scenario checks that the Login page opens successfully.
  # We keep this as a basic smoke test before checking form fields or OTP flow.
  Scenario: Login page loads successfully
    When I open the login page
    Then the login page should be loaded successfully

  # Checks that the login page URL is correct after navigation.
  # This scenario verifies that the user lands on the expected login route.
  Scenario: Login page URL is correct
    When I open the login page
    Then the URL should contain "/login"

  # Checks that the browser tab shows the correct page title.
  # This scenario verifies that the page title includes the product name.
  Scenario: Login page has correct page title
    When I open the login page
    Then the page title should contain "GetBot"

  # ─── Page Elements ────────────────────────────────────────────────────────

  # Checks the main visible elements of the Login page.
  # This scenario verifies that the user can see the email input and Sign In button.
  Scenario: Login page main elements are visible
    When I open the login page
    Then the email input should be visible
    And the sign in button should be visible

  # Checks that the GetBot logo is visible on the login page.
  # This scenario verifies that branding is present for user orientation.
  Scenario: GetBot logo is visible on login page
    When I open the login page
    Then the logo should be visible

  # Checks that the Sign In button displays the correct label.
  # This scenario verifies that the button text matches the expected value.
  Scenario: Sign in button has correct label
    When I open the login page
    Then the sign in button should have text "Sign In"

  # Checks that the email input field shows the correct placeholder text.
  # This scenario verifies that the user gets proper guidance on what to enter.
  Scenario: Email field placeholder text is correct
    When I open the login page
    Then the email field placeholder should contain "Email"

  # ─── Email Validation ─────────────────────────────────────────────────────

  # Negative validation check for an empty email field.
  # This scenario verifies that the user cannot continue without entering an email.
  Scenario: Empty email field prevents login
    When I open the login page
    And I click sign in
    Then an email validation message should be displayed

  # Negative validation check for the email field.
  # This scenario verifies that an invalid email format does not continue the login flow.
  Scenario: Invalid email format shows validation error
    When I open the login page
    And I enter email "invalid-email"
    And I click sign in
    Then an email validation message should be displayed

  # Checks that special characters in the email field trigger a validation error.
  # This scenario verifies that an email with double @ symbol is not accepted.
  Scenario: Special characters in email show validation error
    When I open the login page
    And I enter email "test@@test.com"
    And I click sign in
    Then an email validation message should be displayed

  # Checks that whitespace-only input in the email field triggers a validation error.
  # This scenario verifies that spaces alone are not accepted as a valid email address.
  Scenario: Whitespace only email shows validation error
    When I open the login page
    And I enter email "   "
    And I click sign in
    Then an email validation message should be displayed

  # Checks that an excessively long email address triggers a validation error.
  # This scenario verifies that the email field has a reasonable length restriction.
  Scenario: Very long email shows validation error
    When I open the login page
    And I enter email "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com"
    And I click sign in
    Then an email validation message should be displayed

  # ─── OTP Screen Elements ──────────────────────────────────────────────────

  # Checks that OTP input appears after submitting a valid email.
  # This scenario verifies the transition from email step to OTP step.
  Scenario: OTP input is displayed after entering valid email
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    Then the OTP input should be visible

  # Checks that the OTP screen heading is visible after submitting a valid email.
  # This scenario verifies that the user sees the correct heading on the OTP verification screen.
  Scenario: OTP screen heading is visible
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    Then the OTP screen heading should be visible

  # Checks that the email used for OTP delivery is shown on the OTP screen.
  # This scenario verifies that the user can confirm which email address received the OTP.
  Scenario: Entered email is displayed on the OTP screen
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    Then the entered email should be displayed on the OTP screen

  # Checks that the re-send code option is available on the OTP screen.
  # This scenario verifies that the user can request a new OTP if the original one was not received.
  Scenario: Re-send code option is visible on OTP screen
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    Then the re-send code option should be visible

  # Checks that the verify button is visible on the OTP screen.
  # This scenario verifies that the user can see the confirmation button after entering their email.
  Scenario: Verify button is visible on OTP screen
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    Then the verify button should be visible

  # Checks that the user can return to the email step.
  # This scenario verifies that the email address can be changed before verification.
  Scenario: User can return to the email step
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I click the change email option
    Then the email input should be visible

  # Checks that the OTP screen shows exactly six input boxes.
  # This scenario verifies that the correct number of digit fields is rendered.
  Scenario: OTP screen has six input boxes
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    Then the OTP screen should have 6 input boxes

  # ─── OTP Validation ───────────────────────────────────────────────────────

  # Checks that the OTP input accepts numeric characters correctly.
  # This scenario verifies that valid digits can be entered into the OTP field.
  Scenario: OTP input accepts numeric characters
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I enter OTP "123456"
    Then the OTP field should contain "123456"

  # Checks that non-numeric values are rejected by the OTP input.
  # This scenario verifies that letters cannot be entered as an OTP.
  Scenario: OTP input rejects alphabetic characters
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I enter OTP "abcdef"
    Then the OTP field should be empty

  # Checks the OTP length restriction.
  # This scenario verifies that the OTP input does not accept more than six digits.
  Scenario: OTP input does not accept more than six digits
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I enter OTP "1234567"
    Then the OTP field should contain "123456"

  # Checks OTP validation before submitting the verification form.
  # This scenario verifies that an incomplete OTP cannot be submitted.
  Scenario: Verify button is disabled when OTP is incomplete
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I enter OTP "123"
    Then the verify button should be disabled

  # Negative OTP validation check.
  # This scenario verifies that the user cannot log in with an invalid OTP.
  Scenario: Login with invalid OTP shows error
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I enter OTP "000000"
    And I click verify
    Then an error message should be displayed


  # Checks that a valid OTP code successfully logs the user in.
  # This scenario verifies the full happy path from email to dashboard.
  # NOTE: Requires a valid registered email and real OTP to run locally.
  @e2e
  Scenario: Successful login with valid OTP redirects to dashboard
    When I open the login page
    And I enter email "testuser@example.com"
    And I click sign in
    And I enter OTP "<VALID_OTP>"
    And I click verify
    Then the user should be redirected away from the login page


  # Checks that the user can log out successfully.
  # This scenario verifies that the session ends and the login page is shown.
  # NOTE: Requires a valid registered email and real OTP to run locally.
  @e2e
  Scenario: Logout from the application
    Given I am logged in as "testuser@example.com" with OTP "<VALID_OTP>"
    When I logout from the application
    Then I should be redirected to the login page
