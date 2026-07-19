# BR-002 — Full Store List Is Incomplete and Contradicts Earlier Responses

## Summary

When asked for a complete store list, the AI assistant returns only part of the available data and contradicts information from earlier messages in the same session.

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
2. Ask about stores in a selected branch or location.
3. Ask follow-up questions about additional stores.
4. Request the full store list.
5. Compare the answer with earlier responses and the website data.

## Actual Result

The assistant omits entire sections or floors, gives inconsistent totals, and contradicts earlier responses.

## Expected Result

The full list should include all available stores and remain consistent with earlier answers and website data.

## User or Business Impact

Users may receive incomplete or misleading discovery information.

## Attachment

Evidence is available in the original defect management system. Sensitive links, names, and identifiers are intentionally omitted.
