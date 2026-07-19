# TC-001 — Validate Invalid Input in Forgot Password Flow

## Related Defect

- BR-001 — No Validation Feedback for Invalid Email or Phone Number on Forgot Password

## Objective

Verify that the application rejects an invalid email address or phone number and displays a clear validation message.

## Preconditions

- The application is installed.
- The user is on the Login screen.

## Test Data

- Invalid input: `martivi:D`

## Test Steps

1. Tap **Already have an account? Login**.
2. Tap **Forgot Password**.
3. Enter `martivi:D` in the **Email or phone number** field.
4. Tap **Continue**.

## Expected Result

- The application should not submit the recovery request.
- A clear validation message should be displayed.
- The invalid field should be visually highlighted.
- The user should remain on the Forgot Password screen.

## Priority

High

## Test Type

Negative / Functional / Validation

## Status

Not Executed