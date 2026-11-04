# TC-001 — Verify Selected AI Provider Is Used

## Related Defect

- BR-001

## Objective

Verify that scan analysis uses the provider selected by the user.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Preconditions

- The user is authenticated.

## Test Steps

1. Open the scan flow.
2. Enter a valid target URL.
3. Select a non-default AI provider.
4. Run the scan.
5. Review the AI analysis result.

## Expected Result

The analysis should use the provider selected by the user.

## Status

Not Executed
