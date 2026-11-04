# TC-001 — Verify Sign-Up With an Email Already Linked to Another Sign-In Identity

## Related Defect

- BR-001

## Objective

Verify that the user receives a clear account-conflict message and no Welcome email.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- An account exists that was created with Google Authentication using the same email.
- The user is not logged in.

## Test Steps

1. Open the application and click **Open Portal**.
2. Click **Sign Up**.
3. Enter the same email and a password.
4. Click **Continue**.
5. Check the inbox.

## Expected Result

- A specific message explains that the email is already linked to another sign-in method.
- A button/link back to sign-in is displayed.
- No Welcome email is sent.

## Status

Not Executed
