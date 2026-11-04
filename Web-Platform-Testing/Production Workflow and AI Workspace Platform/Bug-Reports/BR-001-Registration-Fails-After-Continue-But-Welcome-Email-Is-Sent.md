# BR-001 — Registration Cannot Be Completed After Clicking Continue, but a Welcome Email Is Still Sent

## Type

Bug

## Summary

When a user tries to sign up with email and password using an email that is already linked to another sign-in method, registration fails with a generic error, yet a Welcome email is sent as if registration succeeded.

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Brave 1.93.136 (Official Build, arm64), Chromium 151.0.7922.137 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Status

Fixed — verified on the Test environment

## Preconditions

- The user has previously signed in with Google Authentication using the same email address.
- The user has submitted an Account Deactivation request.
- The user is not logged in.

## Steps to Reproduce

1. Open the application.
2. Click the **Open Portal** button.
3. Click **Sign Up**.
4. Enter an email and password.
5. Click the **Continue** button.
6. Check the email inbox.

## Actual Result

After clicking **Continue**, registration is not completed and the system displays the message:

```
We couldn't sign you in. Your account may not have access, or something went wrong on our side. Try again
```

At the same time, a **Welcome email** is delivered to the inbox, as if registration had been completed successfully.

In DevTools → Network, the API returns the following error:

```
Email is already linked to another sign-in identity
```

## Expected Result

If the same email is already linked to another sign-in identity and a new registration is not possible, the user should receive a clear and specific message about the existing account/sign-in conflict.

A Welcome email **should not be sent** if registration was not actually completed.

## User Impact

The user is stuck in a retry loop with a misleading error and receives a contradictory Welcome email.

## Business Impact

Misleading authentication messages and false-positive emails increase support load and reduce trust in the sign-up flow.

## Resolution Notes

The server's refusal (email already registered with a different sign-in method) was being replaced by a generic error and a retry loop. A clear message with a button back to sign-in is now displayed. Suppressing the Welcome/verification email sent by the identity provider at sign-up requires identity-provider configuration and was tracked separately. Retest: sign up with an email that already has a Google-linked account.

## Attachment

Screen recording, console logs and network requests are available in the original defect management system.
