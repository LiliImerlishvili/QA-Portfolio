# BR-008 — WIP Reminder SMS and Slack Alerts Are Not Sent

## Summary

Ongoing work does not generate the scheduled SMS reminders or Slack alert.

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

Normal

## Preconditions

- The relevant user role is authenticated unless otherwise stated.
- The required workflow is available.

## Steps to Reproduce

1. Log in as a gardener.
2. Start accepted work.
3. Wait for the configured reminder intervals.
4. Check SMS and Slack.

## Actual Result

No reminder notifications are sent.

## Expected Result

SMS reminders should be sent every two hours up to the configured limit, and Slack should receive the scheduled WIP alert.

## User or Business Impact

Ongoing work may remain unattended or unmonitored.

## Attachment

Evidence available in the original defect management system.
