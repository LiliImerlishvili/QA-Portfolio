# BR-002 — Greeting Message Briefly Displays the Wrong Time During Refresh

## Summary

During page refresh, the greeting briefly shows the wrong time-of-day message before updating.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

Low

## Priority

Low

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Open the application.
2. Navigate to the browser address bar.
3. Refresh the page.
4. Observe the greeting during loading.

## Actual Result

An incorrect greeting is shown momentarily before the correct one appears.

## Expected Result

The correct greeting should render immediately without flashing an incorrect state.

## User or Business Impact

The interface appears unstable or poorly synchronized.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
