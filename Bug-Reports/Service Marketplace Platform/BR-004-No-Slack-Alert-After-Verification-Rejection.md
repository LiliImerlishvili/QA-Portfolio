# BR-004 — Slack Alert Is Not Triggered After Verification Rejection

## Summary

Rejecting gardener verification sends SMS but does not trigger the required Slack alert.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The relevant user role is authenticated unless otherwise stated.
- The required workflow is available.

## Steps to Reproduce

1. Register a gardener account.
2. Upload both sides of the identity document.
3. Open the admin verification panel.
4. Reject the verification.

## Actual Result

Rejection SMS is sent, but no Slack alert is generated.

## Expected Result

The system should send both the rejection SMS and Slack alert.

## User or Business Impact

Verification rejections may not be visible to operations teams.

## Attachment

Evidence available in the original defect management system.
