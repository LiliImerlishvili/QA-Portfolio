# TC-008 — Verify WIP Reminders

## Related Defect

- BR-008

## Objective

Verify ongoing work generates scheduled reminders.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user has a gardener account with accepted work.

## Test Steps

1. Log in as a gardener.
2. Start accepted work.
3. Wait for the configured reminder intervals.
4. Check SMS and Slack.

## Expected Result

SMS reminders should be sent every two hours up to the configured limit, and Slack should receive the scheduled WIP alert.

## Status

Not Executed
