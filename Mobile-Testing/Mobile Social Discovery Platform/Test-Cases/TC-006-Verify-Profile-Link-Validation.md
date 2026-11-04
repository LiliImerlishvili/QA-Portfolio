# TC-006 — Verify Profile Link Validation

## Related Defect

- BR-006

## Objective

Verify that the Links field accepts only supported URL formats.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |

## Preconditions

- The user is logged in.

## Test Steps

1. Open profile editing and navigate to **Links**.
2. Enter malformed values (e.g., `abc`, `http//site`, `www .site.com`) and save.
3. Enter a valid URL (e.g., `https://example.com`) and save.

## Expected Result

- Invalid values are rejected with a clear error message.
- The valid URL is saved and displayed as a link on the profile.

## Status

Not Executed
