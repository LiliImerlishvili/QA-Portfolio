# BR-003 — Facebook Registration/Login Fails With "Incorrect Password" Error Despite Entering the Correct Password

## Summary

When registering or logging in with Facebook, an "Incorrect password" validation message is displayed even though the correct Facebook account password is entered, and the user cannot complete authentication.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.6.1 |
| Application Version | 1.17 |

## Severity

High

## Priority

High

## Preconditions

- The user has an active Facebook account.
- The user is logged in to Facebook.

## Steps to Reproduce

1. Open the application.
2. Tap the **Continue with Facebook** (registration/login) button.
3. Tap the **Continue** button.
4. Enter the correct Facebook account password.
5. Try to continue the process.

## Actual Result

Despite entering the correct password, the validation message "Incorrect password" is displayed and the user cannot complete registration/login with Facebook.

## Expected Result

When the correct Facebook account password is entered, no validation error should be displayed and the user should be able to complete registration/login successfully.

## User Impact

Users who rely on Facebook sign-in cannot access the application or create an account.

## Business Impact

A broken social login in Production directly reduces sign-ups and blocks returning users.

## Attachment

Evidence (screen recording, console logs and network requests) available in the original defect management system.
