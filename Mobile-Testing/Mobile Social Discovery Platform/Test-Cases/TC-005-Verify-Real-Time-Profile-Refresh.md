# TC-005 — Verify Real-Time Profile List Refresh

## Related Defect

- BR-005

## Objective

Verify that profile lists and counts update automatically after a profile-state change.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |

## Preconditions

- The user is logged in.
- Profiles are available in the discovery or saved-profiles section.

## Test Steps

1. Open the discovery or saved-profiles section.
2. Change the state of a profile (e.g., save or remove it).
3. Return to the profile list.

## Expected Result

- The list updates without refreshing or reopening the app.
- The profile count matches the displayed profiles.

## Status

Not Executed
