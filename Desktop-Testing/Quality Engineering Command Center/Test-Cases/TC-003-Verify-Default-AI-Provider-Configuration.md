# TC-003 — Verify Default AI Provider Configuration

## Related Defect

- BR-003

## Objective

Verify that the configured default provider is used.

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

1. Ensure a default AI provider is configured.
2. Run a scan without changing the provider.
3. Review the analysis result and provider behavior.

## Expected Result

The configured default provider should be used unless the user explicitly changes it.

## Status

Not Executed
