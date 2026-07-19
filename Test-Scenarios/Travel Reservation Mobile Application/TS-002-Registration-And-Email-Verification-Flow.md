# TS-002 — Registration and Email Verification Flow

## Objective

Verify that a new user can register successfully and complete email verification using a single valid verification code.

## Preconditions

- The application is installed.
- The user is logged out.
- A valid and unused email address is available.
- Access to the email inbox is available.
- The device has an active internet connection.

## Scenario

1. Launch the application.
2. Open the registration screen.
3. Enter valid user details.
4. Enter a valid and unused email address.
5. Submit the registration form once.
6. Open the email inbox.
7. Verify that only one verification email is received.
8. Copy the verification code.
9. Return to the application.
10. Enter the verification code.
11. Submit the code.
12. Verify that registration completes successfully.

## Expected Result

- The registration form accepts valid data.
- Only one verification email is sent for a single registration request.
- The verification email contains one valid code.
- The submitted code is accepted.
- The user account is created successfully.
- The user is redirected to the expected post-registration screen.
- The new account can be used for login.
- No duplicate account is created.

## Related Artifacts

- BR-002 — Multiple Verification Codes Are Sent During a Single Registration Attempt
- TC-002 — Verify a Single Verification Code Is Sent per Registration Request
- CL-001 — Core Flows Checklist

## Priority

High

## Test Type

End-to-End / Functional / Registration

## Status

Not Executed