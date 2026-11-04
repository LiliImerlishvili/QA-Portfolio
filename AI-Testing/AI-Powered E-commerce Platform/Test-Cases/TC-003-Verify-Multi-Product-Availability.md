# TC-003 — Verify Multi Product Availability

## Related Defect

- BR-003

## Objective

Verify availability status for multiple products requested in one message.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS 26.5.1 |
| Browser | Google Chrome 150 |
| Reproducibility | 100% |

## Preconditions

- The AI chat is available.
- Relevant website or catalog data exists.
- The user has access to the customer-facing platform.

## Test Steps

1. Open the AI chat.
2. Ask for two related products in a single query.
3. Ensure one product is available and the other is unavailable in the catalog.
4. Compare the chatbot response with the actual catalog.

## Expected Result

The assistant should report the correct availability status for each product separately.

## Status

Not Executed
