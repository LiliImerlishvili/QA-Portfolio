
```gherkin
Feature: Stripe Link Checkout Flow

  Scenario: Link checkout proceeds after a single attempt
    Given the user is authenticated
    And the user is on the Pricing and Plan page
    When the user enters a valid email in Link checkout
    Then the checkout proceeds normally
    And the payment flow is accessible
