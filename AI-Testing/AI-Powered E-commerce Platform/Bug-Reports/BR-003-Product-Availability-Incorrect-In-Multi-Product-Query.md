# BR-003 — Product Availability Is Reported Incorrectly in a Multi-Product Query

## Summary

When the user asks about multiple related products in one message, the assistant incorrectly reports the availability of one item.

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
2. Ask for two related products in a single query.
3. Ensure one product is available and the other is unavailable in the catalog.
4. Compare the chatbot response with the actual catalog.

## Actual Result

The assistant identifies the products but reports the available product as unavailable.

## Expected Result

The assistant should report the correct availability status for each product separately.

## User or Business Impact

Incorrect availability information can cause lost sales and reduce trust.

## Attachment

Evidence is available in the original defect management system. Sensitive links, names, and identifiers are intentionally omitted.
