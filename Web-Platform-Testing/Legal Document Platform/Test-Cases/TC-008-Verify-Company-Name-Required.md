# TC-008 — Verify Company Name Required

## Related Defect

- BR-008

## Objective

Verify Company Name is required for Legal Entity partners.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open Add Partner.
2. Select Legal Entity.
3. Complete all other required fields.
4. Leave Company Name empty.
5. Save.

## Expected Result

Company Name should be mandatory when Legal Entity is selected.

## Status

Not Executed
