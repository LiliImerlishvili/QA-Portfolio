# TC-008 — Verify Minimum Comment Length Validation

## Related Defect

- BR-008

## Objective

Comments shorter than the minimum length must be rejected.

## Test Type

Negative

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

- The user is logged in.
- A vacancy page is open.

## Test Steps

1. Enter a comment shorter than the minimum required length.
2. Submit the comment.
3. Enter a comment with exactly the minimum length and submit it.

## Expected Result

- The short comment is blocked with a clear validation message.
- The comment with the minimum length is published.

## Status

Not Executed
