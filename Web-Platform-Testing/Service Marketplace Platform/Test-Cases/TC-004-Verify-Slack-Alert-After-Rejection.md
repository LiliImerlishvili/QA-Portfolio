# TC-004 — Verify Slack Alert After Rejection

## Related Defect

- BR-004

## Objective

Verify rejection triggers both SMS and Slack.

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
2. Upload both sides of the identity document.
3. Open the admin verification panel.
4. Reject the verification.

## Expected Result

The system should send both the rejection SMS and Slack alert.

## Status

Not Executed
