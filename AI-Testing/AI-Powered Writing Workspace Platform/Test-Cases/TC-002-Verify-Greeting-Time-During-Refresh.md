# TC-002 — Verify Greeting Time During Refresh

## Related Defect

- BR-002

## Objective

Verify that the correct greeting is shown immediately during refresh.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Test Steps

1. Open the application.
2. Navigate to the browser address bar.
3. Refresh the page.
4. Observe the greeting during loading.

## Expected Result

The correct greeting should render immediately without flashing an incorrect state.

## Status

Not Executed
