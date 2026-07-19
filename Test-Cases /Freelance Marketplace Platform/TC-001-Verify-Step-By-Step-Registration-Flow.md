# TC-001 — Verify Step-by-Step Registration Flow

## Related Defect

- BR-001 — Registration Requests Email and Password in the Same Step

## Objective

Verify that the registration flow guides the user through clear sequential steps.

## Preconditions

- The user is logged out.
- The registration page is available.

## Test Steps

1. Open the registration page.
2. Enter a valid email address.
3. Continue to the next step.
4. Verify that password creation appears only after email validation.
5. Complete registration.

## Expected Result

- Email is validated before password creation.
- The registration flow clearly indicates the current step.
- Validation feedback is shown for invalid data.
- Registration completes successfully with valid data.

## Priority

Medium

## Test Type

Functional / Usability / Registration

## Status

Not Executed
