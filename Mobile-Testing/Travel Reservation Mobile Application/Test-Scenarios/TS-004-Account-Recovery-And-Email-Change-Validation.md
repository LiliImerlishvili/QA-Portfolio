# TS-004 — Account Recovery and Email Change Validation

## Objective

Verify that account recovery handles invalid input correctly and that the email change flow prevents the use of an email address already registered to another account.

## Preconditions

- The application is installed.
- At least two registered accounts exist.
- The user is logged out for the password recovery flow.
- The user can log in to one valid account for the email change flow.
- The email address of the second account is known.

## Scenario

### Part A — Forgot Password Validation

1. Launch the application.
2. Open the Login screen.
3. Tap **Forgot Password**.
4. Enter an invalid email address or phone number.
5. Tap **Continue**.
6. Verify the displayed validation feedback.

### Part B — Duplicate Email Validation

1. Log in with a valid account.
2. Open profile or account settings.
3. Select the option to change the email address.
4. Enter an email address already registered to another account.
5. Submit the change.
6. Verify the displayed response.
7. Reopen account settings and verify the current email address.

## Expected Result

### Forgot Password

- The invalid recovery request should not be submitted.
- A clear validation message should be displayed.
- The invalid field should be visually highlighted.
- The user should remain on the Forgot Password screen.

### Email Change

- The duplicate email change request should be rejected.
- A clear duplicate-email validation message should be displayed.
- The original account email should remain unchanged.
- No verification code should be sent to the duplicate email.
- The second account should remain unaffected.

## Related Artifacts

- BR-001 — No Validation Feedback for Invalid Email or Phone Number on Forgot Password
- BR-007 — Existing Email Address Is Accepted During Email Change
- TC-001 — Validate Invalid Input in Forgot Password Flow
- TC-007 — Verify Existing Email Is Rejected During Email Change
- CL-001 — Core Flows Checklist

## Priority

Critical

## Test Type

End-to-End / Negative / Validation / Security

## Status

Not Executed