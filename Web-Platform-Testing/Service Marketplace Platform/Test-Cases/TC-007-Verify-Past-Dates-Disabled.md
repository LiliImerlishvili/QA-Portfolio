# TC-007 — Verify Past Dates Disabled

## Related Defect

- BR-007

## Objective

Verify the service calendar prevents past-date selection.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user has a client account.

## Test Steps

1. Log in as a client.
2. Start Request a Service.
3. Choose a location.
4. Open the date picker.
5. Select a past date.

## Expected Result

Past dates should be disabled and unavailable for selection.

## Status

Not Executed
