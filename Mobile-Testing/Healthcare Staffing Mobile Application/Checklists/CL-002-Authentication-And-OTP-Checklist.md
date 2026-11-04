# CL-002 — Authentication and OTP Checklist

## OTP Input

- [ ] Numeric keyboard opens automatically
- [ ] Only digits 0–9 are accepted
- [ ] Maximum length equals the OTP length
- [ ] Pasted values are sanitized or rejected

## OTP Security

- [ ] Lockout after 3 consecutive incorrect attempts
- [ ] Lockout message is clear
- [ ] Correct OTP is not accepted during lockout
- [ ] **Resend Code** is enabled after the lockout
- [ ] Previous OTP is invalid after a new code is issued
- [ ] Failed-attempt counter resets after a new OTP

## Session

- [ ] Login and logout work correctly
- [ ] Session persists after app relaunch

## Status

Not Executed
