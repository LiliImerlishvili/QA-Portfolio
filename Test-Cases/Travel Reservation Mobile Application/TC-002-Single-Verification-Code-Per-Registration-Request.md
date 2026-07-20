# TC-002 — Verify a Single Verification Code Is Sent per Registration Request

## Related Defect

- BR-002 — Multiple Verification Codes Are Sent During a Single Registration Attempt

## Objective

Verify that the application sends only one verification code for each registration submission.

## Preconditions

- The application is installed.
- The user is on the registration screen.
- A valid and unused email address is available.
- Access to the email inbox is available.

## Test Data

- Valid email address
- Valid registration details

## Test Steps

1. Open the registration screen.
2. Enter valid user information.
3. Enter a valid email address.
4. Submit the registration form once.
5. Wait for the verification email.
6. Check the inbox and spam folder.
7. Count the verification emails received for this request.

## Expected Result

- Only one verification email should be received.
- The email should contain one valid verification code.
- No duplicate verification emails should be generated for a single submission.
- If the user requests a new code, only the latest code should remain valid.

## Priority

High

## Test Type

Functional / Integration / Email Verification

## Status

Not Executed