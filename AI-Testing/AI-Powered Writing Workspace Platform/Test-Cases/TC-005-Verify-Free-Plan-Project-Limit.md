# TC-005 — Verify Free Plan Project Limit

## Related Defect

- BR-005

## Objective

Verify that project limits cannot be bypassed through the Bin.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Test Steps

1. Use an account on the free plan.
2. Create projects up to the configured limit.
3. Move one or more projects to the Bin.
4. Create another project.

## Expected Result

Projects in the Bin should still count toward the plan limit, or the system should clearly enforce the intended business rule.

## Status

Not Executed
