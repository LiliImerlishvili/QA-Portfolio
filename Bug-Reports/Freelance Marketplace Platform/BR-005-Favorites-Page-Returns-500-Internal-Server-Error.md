# BR-005 — Favorites Page Returns 500 Internal Server Error

## Summary

Opening the Favorites section results in a 500 Internal Server Error instead of displaying the user's saved items.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platforms | Web and Android |
| Devices | Windows laptop and Google Pixel 7 Pro |
| Browsers | Google Chrome |
| Reproducibility | 100% |

## Severity

Critical

## Priority

High

## Preconditions

- The user is authenticated.
- The user has an active profile.
- The Favorites section is available.

## Steps to Reproduce

1. Open the platform.
2. Log in with a valid account.
3. Open the account menu.
4. Select **Favorites**.

## Actual Result

A 500 Internal Server Error is displayed, and the Favorites list does not load.

## Expected Result

The Favorites page should load successfully and display the user's saved items.

If a recoverable error occurs, the application should display a user-friendly message and retry option instead of exposing a server error.

## User Impact

Users cannot access saved services or items.

## Business Impact

The issue blocks a core retention feature and may reduce engagement and conversion.

## Attachment

Evidence available in the original defect management system.
