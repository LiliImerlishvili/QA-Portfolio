# BR-005 — [Web] User Is Logged Out After Leaving the Live Debate for the First Time and Refreshing the Page

## Summary

On the web version, when a moderator leaves the live debate for the first time and refreshes the page, the system logs the user out and redirects to the login page.

## Environment

| Field | Value |
|---|---|
| Environment | Development |
| Platform | Web |
| Device | Lenovo laptop (Windows, Build 26200) |
| Web Version | 1.21.0 |
| Browser Version | 154.0.8037.98 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user participates in the live debate as the moderator.
- No participant has left the live debate yet.

## Steps to Reproduce

1. Leave the live debate using the **Back** button or the **Leave** button.
2. Refresh the page.

## Actual Result

When the participant leaves the live debate for the first time and refreshes the page, the system logs the user out and redirects them to the login page.

## Expected Result

After refreshing, the **Join pre-room** button should disappear, the user should remain logged in, and the active live debate should be displayed in the **For You** feed.

## User Impact

The moderator loses their session and must log in again, delaying or blocking their return to the live debate they host.

## Business Impact

Unexpected logouts during live sessions disrupt moderated debates and signal unstable session handling.

## Attachment

Evidence (screen recording, console logs and network requests) available in the original defect management system.
