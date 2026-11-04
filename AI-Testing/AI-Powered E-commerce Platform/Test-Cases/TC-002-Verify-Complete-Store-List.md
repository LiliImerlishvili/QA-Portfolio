# TC-002 — Verify Complete Store List

## Related Defect

- BR-002

## Objective

Verify that a full store-list request returns complete and internally consistent data.

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
2. Ask about stores in a selected branch or location.
3. Ask follow-up questions about additional stores.
4. Request the full store list.
5. Compare the answer with earlier responses and the website data.

## Expected Result

The full list should include all available stores and remain consistent with earlier answers and website data.

## Status

Not Executed
