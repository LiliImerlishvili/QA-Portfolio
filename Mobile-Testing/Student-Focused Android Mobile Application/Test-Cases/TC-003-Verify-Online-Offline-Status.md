# TC-003 — Verify Online Offline Status

## Related Defect

- BR-003

## Objective

Verify that chat presence reflects the real user state.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Preconditions

- Two registered user accounts exist.

## Test Steps

1. Log in with two accounts.
2. Open a chat between them.
3. Take one account offline.
4. Observe the other user's status.

## Expected Result

The status should update promptly and reflect the real online state.

## Status

Not Executed
