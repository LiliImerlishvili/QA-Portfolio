# BR-004 — Premium Brand List Is Incomplete

## Summary

The AI assistant presents a small subset of premium brands as if it were the full list.

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

1. Open the premium shopping section on the website.
2. Review the full brand list.
3. Open the AI chat.
4. Ask for the brands available in the premium section.
5. Compare the response with the webpage.

## Actual Result

The chatbot returns only a limited subset and does not indicate that the answer is abbreviated.

## Expected Result

The assistant should provide the complete list or clearly state that the response is partial and provide a link or navigation path to the full list.

## User or Business Impact

Users may overlook available brands and make incomplete purchase decisions.

## Attachment

Evidence is available in the original defect management system. Sensitive links, names, and identifiers are intentionally omitted.
