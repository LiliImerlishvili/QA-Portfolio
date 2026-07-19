# BR-006 — Registration Cannot Be Resumed After Reopening the Flow

## Summary

Closing the browser during registration prevents the user from completing the flow after reopening it.

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

1. Begin registration.
2. Close the browser on an intermediate registration step.
3. Reopen the site.
4. Return to the same registration step.
5. Fill the required fields and click Continue.

## Actual Result

The application shows a generic Something went wrong message.

## Expected Result

The user should be able to resume or restart registration cleanly.

## User or Business Impact

Interrupted users may become blocked from registration.

## Attachment

Evidence available in the original defect management system.
