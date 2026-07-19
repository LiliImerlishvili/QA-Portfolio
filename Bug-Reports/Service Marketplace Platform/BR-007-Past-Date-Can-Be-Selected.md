# BR-007 — Past Dates Can Be Selected in Service Request Calendar

## Summary

The client can select a past date when creating a service request.

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

1. Log in as a client.
2. Start Request a Service.
3. Choose a location.
4. Open the date picker.
5. Select a past date.

## Actual Result

The past date can be selected and the flow continues until a later system error.

## Expected Result

Past dates should be disabled and unavailable for selection.

## User or Business Impact

Users can create invalid requests and encounter avoidable system errors.

## Attachment

Evidence available in the original defect management system.
