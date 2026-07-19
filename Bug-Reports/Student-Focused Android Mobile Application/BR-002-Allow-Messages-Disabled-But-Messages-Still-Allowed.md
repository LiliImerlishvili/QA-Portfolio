# BR — Users Can Send Messages While Allow Messages Is Disabled

## Summary

Disabling Allow Messages does not prevent other users from sending messages.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Log in as User A.
2. Disable Allow Messages in Privacy Settings.
3. Log in as User B.
4. Open User A's profile.
5. Attempt to send a message.

## Actual Result

User B can still send messages to User A.

## Expected Result

Messaging controls should be disabled when Allow Messages is turned off.

## User Impact

Privacy preferences are not respected.

## Attachment

Evidence available in the original defect management system.
