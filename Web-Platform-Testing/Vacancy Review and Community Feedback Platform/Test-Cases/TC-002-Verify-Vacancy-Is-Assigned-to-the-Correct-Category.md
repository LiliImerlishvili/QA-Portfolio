# TC-002 — Verify Vacancy Is Assigned to the Correct Category

## Related Defect

- BR-002

## Objective

Imported vacancies must be assigned to the correct category.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- The user has access to the vacancy import or review flow.
- A finance-related vacancy is available for import.

## Test Steps

1. Open the vacancy import or review flow.
2. Select a finance-related vacancy.
3. Check the automatically assigned category.

## Expected Result

- The vacancy is assigned to the finance category.
- When confidence is low, a safe default category is used instead of an unrelated one.

## Status

Not Executed
