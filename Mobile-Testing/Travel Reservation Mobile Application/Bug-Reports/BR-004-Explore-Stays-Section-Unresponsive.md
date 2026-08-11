# BR-004 — Explore Stays Section Is Unresponsive

## Summary

The **Explore Stays** section does not respond when the user taps it, preventing access to hotel search and reservation functionality.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| OS Version | iOS 26.4.2 |
| Application Version | 1.0 (4) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is logged in.
- The application home screen is displayed.
- The **Explore Stays** section is visible.

## Steps to Reproduce

1. Launch the application.
2. Log in with a valid account.
3. Navigate to the home screen.
4. Tap **Explore Stays**.

## Actual Result

Nothing happens after tapping **Explore Stays**.

The application does not open the hotel search or reservation screen, and no loading indicator or error message is displayed.

## Expected Result

Tapping **Explore Stays** should open the hotel discovery and reservation flow.

If the destination screen cannot be loaded, the application should display a clear error message and provide a retry option.

## User Impact

Users cannot search for or book hotels, which blocks one of the application's core reservation functions.

## Business Impact

This defect directly affects booking conversion and may cause users to abandon the application and use a competing service.

## Attachment

Evidence available in the original defect management system.