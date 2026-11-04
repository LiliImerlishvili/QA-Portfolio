# TC-010 — Verify Backend Service Errors Are Shown as User-Friendly Messages

## Related Defect

- BR-002, BR-003

## Objective

Verify error handling when a backend service is unavailable.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- A backend service is unavailable (simulated or real).

## Test Steps

1. Attempt registration.
2. Attempt Google sign-in.

## Expected Result

- A user-friendly message is displayed (e.g., "Service is temporarily unavailable, please try again later").
- Raw infrastructure messages or JSON are not shown to the user.

## Status

Not Executed
