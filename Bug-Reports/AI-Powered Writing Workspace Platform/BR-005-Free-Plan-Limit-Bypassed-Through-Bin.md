# BR-005 — Free Plan Project Limit Can Be Bypassed Through the Bin

## Summary

Users can create additional projects beyond the free-plan limit by moving existing projects to the Bin.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Use an account on the free plan.
2. Create projects up to the configured limit.
3. Move one or more projects to the Bin.
4. Create another project.

## Actual Result

The system allows creation of additional projects without enforcing the configured limit.

## Expected Result

Projects in the Bin should still count toward the plan limit, or the system should clearly enforce the intended business rule.

## User or Business Impact

Subscription restrictions can be bypassed, causing revenue and entitlement risks.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
