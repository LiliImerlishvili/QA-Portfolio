# BR-001 — Already Added Categories Can Be Selected and Added Again From "Add from Template"

## Summary

In the seller's store, categories that were already added from a template can be selected again in **Add from Template** and added a second time, with a success message shown.

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 140.0.7339.208 (Official Build, 64-bit) |
| Reproducibility | 100% |

## Severity

Medium

## Priority

High

## Status

In Dev Review

## Preconditions

- The user is logged in.
- The user has created a store.
- The user is on the category creation page.
- 7 categories have already been successfully added to the store from a template.

## Steps to Reproduce

1. Click the **Add from Template** button.
2. Select the same 7 categories that have already been added.
3. Click the **Add 7 Categories** button.

## Actual Result

The 7 already added categories can be selected and added again. After adding, the system again displays the success message: **"Added 7 categories successfully"**.

## Expected Result

Adding already added categories again should not be possible. Already added categories should not be available for re-selection, or when attempting to add them again, the user should see a message that the categories have already been added.

## User Impact

The seller's store may get duplicate categories, which confuses product assignment and storefront navigation.

## Business Impact

Duplicate categories degrade catalog quality and the customer browsing experience across the marketplace.

## Attachment

Session recording with console logs and network requests (BetterBugs) is available in the original defect management system.
