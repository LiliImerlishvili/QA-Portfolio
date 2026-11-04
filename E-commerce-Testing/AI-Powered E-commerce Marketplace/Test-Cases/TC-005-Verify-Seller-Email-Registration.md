# TC-005 — Verify Seller Registration With Email and Password

## Related Defect

- BR-002

## Objective

Verify the seller email registration flow.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- The user is not registered.

## Test Steps

1. Open the website and click **Generate Store**.
2. Click **Sell on Marketplace**.
3. Enter a valid email and click **Continue with email**.
4. Enter and confirm a valid password.
5. Click **Create Account ID**.

## Expected Result

- No backend error is displayed.
- The account is created.
- The user continues to store onboarding.

## Status

Not Executed
