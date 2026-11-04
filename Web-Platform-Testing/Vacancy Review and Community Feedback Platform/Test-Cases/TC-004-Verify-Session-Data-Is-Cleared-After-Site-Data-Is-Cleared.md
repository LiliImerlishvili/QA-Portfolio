# TC-004 — Verify Session Data Is Cleared After Site Data Is Cleared

## Related Defect

- BR-004

## Objective

Local session data must be cleared together with site data.

## Test Type

Security

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- The user is logged in and has viewed or created anonymous content.

## Test Steps

1. Clear site data.
2. Return to the application.
3. Open the profile and related comments.

## Expected Result

- Previous profile data is not displayed.
- Anonymous content is not linked to the previous session.
- A new login is required.

## Status

Not Executed
