# TC-007 — Verify Deleted Document Visibility Across Users

## Related Defect

- BR-007

## Objective

Verify document deletion is synchronized for all users.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- Two registered users (User A and User B) have access to the same shared document.

## Test Steps

1. Log in as User A.
2. Delete a shared document.
3. Log in as User B.
4. Open the document list.

## Expected Result

Document visibility should update consistently for all authorized users after deletion.

## Status

Not Executed
