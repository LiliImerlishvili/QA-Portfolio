# TC-001 — Verify Already Added Template Categories Cannot Be Added Again

## Related Defect

- BR-001

## Objective

Verify duplicate prevention in Add from Template.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- The user has a store.
- 7 categories have already been added from a template.

## Test Steps

1. Click **Add from Template**.
2. Try to select the same 7 categories.
3. Click **Add Categories**.

## Expected Result

- Already added categories are disabled or marked as added.
- If submitted, a message states that the categories already exist.
- No duplicate categories are created.

## Status

Not Executed
