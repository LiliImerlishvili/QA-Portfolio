# BR-004 — HTML and JavaScript Code Can Be Stored in User Input

## Summary

User input containing HTML and JavaScript is stored and later rendered in the page source.

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

1. Open a user or partner form.
2. Enter script markup in a text field.
3. Save the form.
4. Open the saved record.
5. Inspect the page source or DOM.

## Actual Result

The script markup remains stored and appears in rendered HTML.

## Expected Result

Input should be sanitized and encoded so executable markup cannot be stored or rendered.

## User or Business Impact

This creates a serious stored-XSS and data-integrity risk.

## Attachment

Evidence available in the original defect management system.
