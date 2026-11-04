# TC-006 — Verify Registration Resume

## Related Defect

- BR-006

## Objective

Verify interrupted registration can resume or restart cleanly.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user is not registered.

## Test Steps

1. Begin registration.
2. Close the browser on an intermediate registration step.
3. Reopen the site.
4. Return to the same registration step.
5. Fill the required fields and click Continue.

## Expected Result

The user should be able to resume or restart registration cleanly.

## Status

Not Executed
