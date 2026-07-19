# TS-RE-010 - Analytics Tracking for Key Actions

## Goal
Verify that key user actions trigger expected analytics events without duplication.

## Preconditions
- GA4/GTM enabled
- Events observable in test environment

## Flow (High-level)
1. Browse listings and open a property
2. Submit inquiry
3. Verify expected events are recorded once
