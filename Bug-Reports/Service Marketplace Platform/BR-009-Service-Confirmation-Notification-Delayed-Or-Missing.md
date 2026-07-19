# BR-009 — Service Confirmation Notifications Are Delayed or Missing

## Summary

The gardener does not receive timely in-app and SMS confirmation after the client confirms completed work.

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

1. Complete a gardener service.
2. Have the client confirm the work.
3. Check in-app notifications.
4. Check SMS delivery time.

## Actual Result

The in-app notification is missing and SMS arrives with a delay.

## Expected Result

Both in-app and SMS confirmations should be delivered promptly.

## User or Business Impact

The gardener cannot reliably track order completion.

## Attachment

Evidence available in the original defect management system.
