# BR-005 — Chatbot Returns a Partial Offers List Instead of the Full Promotions Page

## Summary

For a general offers query, the chatbot returns only a curated subset instead of the full active promotions list.

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

Medium

## Preconditions

- The AI chat is available.
- Relevant website or catalog data exists.
- The user has access to the customer-facing platform.

## Steps to Reproduce

1. Open the AI chat.
2. Ask for current offers or promotions without specifying a brand.
3. Ask whether the returned list is complete.
4. Compare the response with the full offers page.

## Actual Result

The assistant returns only a few offers and does not direct the user to the complete offers page.

## Expected Result

The assistant should return the full list or clearly provide direct access to the complete offers page.

## User or Business Impact

Users may miss active discounts and promotional opportunities.

## Attachment

Evidence is available in the original defect management system. Sensitive links, names, and identifiers are intentionally omitted.
