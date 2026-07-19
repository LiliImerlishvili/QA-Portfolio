# BR-002 — Deposit Limit Validation Message Is Unclear

## Summary

When the entered deposit amount exceeds the allowed limit, the validation message does not clearly explain the permitted minimum and maximum values.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platforms | Web and Android |
| Devices | Windows laptop and Google Pixel 7 Pro |
| Browsers | Google Chrome |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated.
- The user is on the balance or deposit screen.

## Steps to Reproduce

1. Open the balance management section.
2. Select a deposit method.
3. Enter an amount above the maximum allowed limit, for example 99 when the maximum is lower.
4. Tap or click **Next**.
5. Review the displayed validation message.
6. Enter another amount and repeat.

## Actual Result

The system displays a confusing message that does not clearly communicate the valid deposit range.

## Expected Result

The system should display a clear and actionable message, such as:

> Minimum deposit amount is 10.00. Maximum deposit amount is 100.00.

The message should use the correct currency and reflect the actual configured limits.

## User Impact

Users may not understand why the transaction is blocked or what amount they are allowed to enter.

## Business Impact

Unclear validation may increase payment abandonment and customer support requests.

## Attachment

Evidence available in the original defect management system.
