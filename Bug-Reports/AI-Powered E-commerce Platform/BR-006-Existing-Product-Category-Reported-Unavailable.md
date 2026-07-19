# BR-006 — Existing Product Category Is Reported as Unavailable

## Summary

The AI assistant reports that a requested product category is unavailable even though matching items exist in the catalog.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS 26.5.1 |
| Browser | Google Chrome 150 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The AI chat is available.
- Relevant website or catalog data exists.
- The user has access to the customer-facing platform.

## Steps to Reproduce

1. Confirm that products from the target category exist in the online catalog.
2. Open the AI chat.
3. Ask for products from that category.
4. Observe the response.

## Actual Result

The assistant states that the category or products are unavailable and redirects the user elsewhere.

## Expected Result

The assistant should return matching products from the catalog.

## User or Business Impact

Available inventory is hidden from users, which can reduce conversion.

## Attachment

Evidence is available in the original defect management system. Sensitive links, names, and identifiers are intentionally omitted.
