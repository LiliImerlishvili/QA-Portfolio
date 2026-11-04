# TC-010 — Verify Deactivation Request Sends a Confirmation Email

## Related Defect

- BR-005

## Objective

Verify the deactivation request and confirmation email.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- The user is logged in and is not a sole workspace owner or staff account.

## Test Steps

1. Open security settings.
2. Submit a profile deactivation request.
3. Check the inbox.

## Expected Result

- The request is submitted without an error.
- A confirmation email is received with request time, deactivation date, cancellation option and support contact.
- Security settings show the scheduled deactivation date with **Cancel**.

## Status

Not Executed
