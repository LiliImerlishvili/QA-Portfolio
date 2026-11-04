# CL-001 — Authentication and Account Checklist

## Sign-Up and Sign-In

- [ ] Email/password sign-up works
- [ ] Google sign-in works
- [ ] Identity conflict shows a specific message
- [ ] Welcome email is sent only after successful registration
- [ ] Generic errors do not hide the real reason

## Environments

- [ ] Portal opens the authorization page on every environment
- [ ] User returns to the same environment after login
- [ ] No cross-environment session leakage

## Account Deactivation

- [ ] Deactivation request is submitted without errors
- [ ] Confirmation email contains request time, deactivation date, cancel option and support contact
- [ ] Scheduled deactivation is visible in security settings
- [ ] Deactivation can be cancelled
- [ ] Second email is sent after final deactivation
- [ ] Staff accounts and sole workspace owners cannot self-deactivate

## Status

Not Executed
