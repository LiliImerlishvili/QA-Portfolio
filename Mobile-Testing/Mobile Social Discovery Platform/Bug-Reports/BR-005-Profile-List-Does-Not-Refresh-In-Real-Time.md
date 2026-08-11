# BR-005 — Profile List Does Not Refresh in Real Time

## Summary

The displayed profile list or profile count does not update immediately after profile availability changes.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |
| Reproducibility | 100% |

## Severity

High

## Priority

Normal

## Preconditions

- The user has access to the relevant flow.
- The required feature is available.

## Steps to Reproduce

1. Open the discovery or saved-profiles section.
2. Trigger a profile-state change.
3. Return to the profile list.
4. Observe the displayed profiles and count.

## Actual Result

The list and count remain outdated until the application is refreshed or reopened.

## Expected Result

The list and count should update automatically when the underlying profile state changes.

## User or Business Impact

Users may see stale discovery data and incorrect profile counts.

## Attachment

Evidence is available in the original defect management system. Sensitive links, user data, media, internal identifiers, and employee details are intentionally omitted.
