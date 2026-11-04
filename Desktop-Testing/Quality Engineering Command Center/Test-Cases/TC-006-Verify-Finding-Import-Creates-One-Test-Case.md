# TC-006 — Verify Finding Import Creates One Test Case

## Related Defect

- BR-006

## Objective

Verify that importing a finding creates exactly one test case.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Preconditions

- The user is authenticated.

## Test Steps

1. Open the findings section.
2. Select an existing finding.
3. Choose Import as Test Case.
4. Observe the created records.

## Expected Result

Exactly one test case should be created without synchronization errors.

## Status

Not Executed
