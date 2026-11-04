# TC-005 — Verify Full Offers Response

## Related Defect

- BR-005

## Objective

Verify a general promotions query returns or links to the full active offers list.

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
2. Ask for current offers or promotions without specifying a brand.
3. Ask whether the returned list is complete.
4. Compare the response with the full offers page.

## Expected Result

The assistant should return the full list or clearly provide direct access to the complete offers page.

## Status

Not Executed
