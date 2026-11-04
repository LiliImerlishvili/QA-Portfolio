# BR-002 — Authorization Error When Clicking the Open Portal Button

## Type

Bug

## Summary

On the Test environment, clicking **Open Portal** redirects the user to an identity-provider error page instead of the authorization page.

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 152.0.7977.65 (Official Build, arm64) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

High

## Status

Blocked — identity provider configuration

## Preconditions

- None.

## Steps to Reproduce

1. Open the Test environment of the application.
2. Click the **Open Portal** button.

## Actual Result

The user is redirected to the identity provider's error page with the message: **"Oops!, something went wrong"**.

## Expected Result

After clicking **Open Portal**, the authorization page should open without an error.

## User Impact

Users of the Test environment cannot reach the login page, which blocks all authenticated testing.

## Business Impact

A shared authentication configuration across environments blocks QA and creates a risk of cross-environment authorization issues.

## Resolution Notes

Root cause is identity-provider tenant configuration, not application code: the QA, Staging and Production environments share a single identity-provider application (one client ID and one callback / login-URI list), so a portal link opened from QA authorizes against the wrong environment. The fix is separate applications (or at minimum per-environment client IDs and callback URLs) per environment. To be retested after the configuration split.

## Attachment

Screen recording, console logs and network requests are available in the original defect management system.
