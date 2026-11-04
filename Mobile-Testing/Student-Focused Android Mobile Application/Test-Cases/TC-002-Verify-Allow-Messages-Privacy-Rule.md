# TC-002 — Verify Allow Messages Privacy Rule

## Related Defect

- BR-002

## Objective

Verify that messaging is blocked when Allow Messages is disabled.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Preconditions

- Two registered user accounts (User A and User B) exist.

## Test Steps

1. Log in as User A.
2. Disable Allow Messages in Privacy Settings.
3. Log in as User B.
4. Open User A's profile.
5. Attempt to send a message.

## Expected Result

Messaging controls should be disabled when Allow Messages is turned off.

## Status

Not Executed
