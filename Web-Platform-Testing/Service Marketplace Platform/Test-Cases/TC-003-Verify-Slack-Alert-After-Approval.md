# TC-003 — Verify Slack Alert After Approval

## Related Defect

- BR-003

## Objective

Verify approval triggers both SMS and Slack.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user has access to the admin verification panel.

## Test Steps

1. Register a gardener account.
2. Upload the required identity document.
3. Open the admin verification panel.
4. Approve the gardener.

## Expected Result

The system should send both the approval SMS and Slack alert.

## Status

Not Executed
