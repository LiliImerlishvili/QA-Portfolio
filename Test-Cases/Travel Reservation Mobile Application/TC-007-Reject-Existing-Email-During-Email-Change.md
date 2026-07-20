# TC-007 — Verify Existing Email Is Rejected During Email Change

## Related Defect

- BR-007 — Existing Email Address Is Accepted During Email Change

## Objective

Verify that the application prevents a user from changing their email address to one that is already registered to another account.

## Preconditions

- The user is logged in.
- At least two registered accounts exist.
- The email address of the second account is known.

## Test Data

- Current account email: valid unique email
- Existing email: email already registered to another account

## Test Steps

1. Launch the application.
2. Log in with a valid account.
3. Open profile or account settings.
4. Select the option to change the email address.
5. Enter an email address already associated with another account.
6. Submit the change.
7. Verify the displayed response.
8. Reopen the account settings and verify the current email.

## Expected Result

- The email change request should be rejected.
- A clear validation message should be displayed, such as:
  > This email address is already associated with another account.
- The original account email should remain unchanged.
- No verification code should be sent to the duplicate email.
- The second account should remain unaffected.

## Priority

Critical

## Test Type

Negative / Functional / Data Integrity / Security

## Status

Not Executed