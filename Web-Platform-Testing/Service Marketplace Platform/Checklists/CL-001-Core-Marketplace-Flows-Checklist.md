# CL-001 — Core Marketplace Flows Checklist

## Registration and OTP

- [ ] Phone number validates before submission
- [ ] Invalid formats are rejected or normalized
- [ ] OTP is not sent for invalid input
- [ ] Failed OTP attempts are limited
- [ ] Registration can resume or restart safely

## Verification

- [ ] Approval sends SMS
- [ ] Approval triggers Slack alert
- [ ] Rejection sends SMS
- [ ] Rejection triggers Slack alert

## Service Requests

- [ ] Past dates are disabled
- [ ] Valid future dates can be selected
- [ ] Request flow continues without system errors

## Notifications

- [ ] WIP SMS reminders are sent
- [ ] WIP Slack alert is sent
- [ ] Service confirmation appears in-app
- [ ] Service confirmation SMS arrives promptly

## Offer Modal

- [ ] Price field accepts valid input
- [ ] Send Offer remains visible
- [ ] Close button remains visible
- [ ] Layout works at supported viewport sizes

## Status

Not Executed
