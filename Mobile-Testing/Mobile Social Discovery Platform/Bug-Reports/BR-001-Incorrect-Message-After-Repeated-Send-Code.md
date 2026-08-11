# BR-001 — Incorrect Message Is Displayed After Repeated Send Code Action

## Summary

After requesting a verification code more than once, the application displays an incorrect message referring to the wrong delivery channel.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Normal

## Preconditions

- The user has access to the relevant flow.
- The required feature is available.

## Steps to Reproduce

1. Open the application.
2. Start registration with email verification.
3. Enter a valid email address.
4. Tap Send Code.
5. Tap Send Code again.
6. Observe the displayed message.

## Actual Result

The message refers to an incorrect destination or delivery method.

## Expected Result

The message should accurately indicate where the verification code was sent.

## User or Business Impact

Users may become confused about where to retrieve the verification code.

## Attachment

Evidence is available in the original defect management system. Sensitive links, user data, media, internal identifiers, and employee details are intentionally omitted.
