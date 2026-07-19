# BR-005 — Discounted Price Is Calculated Incorrectly

## Summary

The system displays an incorrect discounted price after the original price and discount percentage are entered.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- Price and discount fields are available.
- A cube with a discount offer exists.

## Steps to Reproduce

1. Open the discount configuration.
2. Enter an original price.
3. Enter a discount percentage.
4. Save the cube.
5. Review the calculated discounted price.

## Actual Result

The displayed discounted price does not match the mathematical result.

## Expected Result

The system should calculate the discounted price using the configured original price and percentage accurately.

## User Impact

Users may see misleading offer information.

## Business Impact

Incorrect pricing can cause financial disputes, campaign rejection, and loss of trust.

## Attachment

Evidence available in the original QA materials.
