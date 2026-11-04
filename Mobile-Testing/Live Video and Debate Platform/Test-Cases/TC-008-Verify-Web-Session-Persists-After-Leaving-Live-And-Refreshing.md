# TC-008 — Verify Web Session Persists After Leaving Live and Refreshing

## Related Defect

- BR-005

## Objective

Verify that the user stays logged in after leaving a live debate and refreshing the page.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Development |
| Platform | Web |
| Device | Lenovo laptop (Windows, Build 26200) |
| Browser Version | 154.0.8037.98 |
| Web Version | 1.21.0 |

## Preconditions

- The user participates in the live debate as the moderator.
- No participant has left the live debate yet.

## Test Steps

1. Leave the live debate using the **Back** or **Leave** button.
2. Refresh the page.

## Expected Result

- The user remains logged in.
- The user is not redirected to the login page.

## Status

Not Executed
