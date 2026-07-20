# TC-010 — 010 Verify Customer Passport Generation

## Related Defect

- BR-010

## Objective

Verify that Customer Passport is generated successfully.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Open Insights.
2. Open Customer Passport.
3. Start generation.
4. Wait for the result.

## Expected Result

- A loading state is shown.
- The passport is generated and displayed.
- Failures show clear retry feedback.

## Status

Not Executed
