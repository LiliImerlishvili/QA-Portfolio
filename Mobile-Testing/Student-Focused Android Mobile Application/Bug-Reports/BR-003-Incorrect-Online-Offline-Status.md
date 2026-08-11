# BR — Chat Displays Incorrect Online or Offline Status

## Summary

The chat status does not update correctly when the other user changes online state.

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

1. Log in with two accounts.
2. Open a chat between them.
3. Take one account offline.
4. Observe the other user's status.

## Actual Result

The status remains incorrect or stale.

## Expected Result

The status should update promptly and reflect the real online state.

## User Impact

Users receive misleading presence information.

## Attachment

Evidence available in the original defect management system.
