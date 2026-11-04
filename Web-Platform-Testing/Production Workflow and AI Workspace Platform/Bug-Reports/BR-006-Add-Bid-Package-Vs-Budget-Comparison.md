# BR-006 — [Recommendation] Bid Package vs Budget Comparison

## Type

Improvement

## Summary

A Budget workbook is available in the project and its data is reflected in **Financial Overview**, but a separate **Bid Package** UI or an independent Bid total is not visible. Because of this, it is impossible to directly compare the final Bid Package total with the final Budget total.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | Web |

## Severity

High

## Priority

Normal

## Status

Parked — product decision, planned with upcoming bid-templates work

## Recommended Behavior

- Clarify whether the system should have a separate **Bid Package** section or equivalent functionality where the user can:
  - view the final Bid total;
  - view the final Budget total;
  - compare both values with each other.
- If Bid and Budget intentionally represent the same financial data, this relationship should be clearly shown in the UI so that it is clear to the user where and how the comparison should be performed.

## Expected Benefit

This will simplify checking financial data, reduce ambiguity and make full Bid vs Budget validation possible.

## Retest History

Product decision: Bid vs Budget comparison is treated as a new feature and planned together with the upcoming bid-templates work. Currently, "Budget" in Financial Overview is the attached bid package total, and "Bid Total" on the Bidding card is the approved budget version — they are not yet shown side by side.
