# BR-001 — Registration Requests Email and Password in the Same Step

## Summary

During registration, the application requests both the email address and password at the same time instead of using a guided step-by-step onboarding flow.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Browser | Google Chrome |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Low

## Preconditions

- The user is logged out.
- The registration page is available.

## Steps to Reproduce

1. Open the platform.
2. Navigate to the registration page.
3. Review the first registration step.

## Actual Result

The user is asked to enter both email and password in the same registration step.

## Expected Result

The registration flow should guide the user through a clear step-by-step process, for example:

1. Enter and validate the email address.
2. Continue to password creation after successful email validation.

## User Impact

The current flow may increase cognitive load, create confusion, and reduce registration completion rates.

## Business Impact

A less guided onboarding experience may increase abandonment and support requests.

## Attachment

Evidence available in the original defect management system.
