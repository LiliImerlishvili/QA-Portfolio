# BR-007 — Deleted Document Remains Visible to Another User

## Summary

A document deleted by one user remains visible to another user.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Log in as User A.
2. Delete a shared document.
3. Log in as User B.
4. Open the document list.

## Actual Result

User B can still see the deleted document.

## Expected Result

Document visibility should update consistently for all authorized users after deletion.

## User or Business Impact

This creates cross-user consistency and privacy risks.

## Attachment

Evidence available in the original defect management system.
