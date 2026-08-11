# TS-010 - Cookie Consent and Analytics Tracking

## Goal
Verify cookie consent behavior and ensure key user actions trigger expected tracking without duplication.

## Preconditions
- Cookie consent banner is enabled.
- Analytics tracking (GA4/GTM) is configured.
- Test environment allows observing tracking behavior (NDA-safe).

## Flow (High-level)
1. User opens the website as a first-time visitor.
2. User accepts or rejects cookie consent.
3. User browses listing and opens a product.
4. User adds product to cart and proceeds to checkout.
5. User refreshes the page.
6. User verifies consent choice persists and tracking does not duplicate key events.
