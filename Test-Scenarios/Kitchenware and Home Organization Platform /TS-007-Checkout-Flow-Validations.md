# TS-007 - Checkout Flow and Form Validations

## Goal
Verify that user can proceed through checkout steps and required validations work correctly.

## Preconditions
- At least one product is added to cart.
- Checkout is enabled.
- Shipping and payment options are configured (NDA-safe flow).

## Flow (High-level)
1. User proceeds from cart to checkout.
2. User attempts to continue with missing required fields.
3. User enters valid customer details.
4. User selects shipping method.
5. User selects payment method.
6. User verifies user can proceed through checkout steps without errors or infinite loading.
