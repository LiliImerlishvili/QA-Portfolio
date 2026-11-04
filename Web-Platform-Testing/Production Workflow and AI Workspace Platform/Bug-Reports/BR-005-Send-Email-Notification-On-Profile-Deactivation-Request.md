# BR-005 — [Recommendation] Send an Email Notification When a Profile Deactivation Is Requested

## Type

Improvement

## Summary

When a user submits a profile deactivation request, no confirmation or security notification is sent to the user's email address. As a result, the user has no additional confirmation that the request was received, what state the account is in, and what happens next. Also, if a deactivation request is sent without the user's permission, the user will not find out about it by email.

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |

## Severity

Critical

## Priority

High

## Status

Implemented — retest blocked by a new defect (see Retest History)

## Recommended Behavior

- After a profile deactivation request is submitted, automatically send a notification to the registered email address.
- The email should include:
  - confirmation that the profile deactivation request has been received;
  - the date and time of the request;
  - the current account status;
  - whether deactivation happens immediately or requires a certain period;
  - whether the request can be cancelled or the account restored;
  - what the user should do if they did not send the request;
  - a way to contact Support if needed.
- If deactivation is not completed immediately upon request, send a second confirmation email after the final deactivation is completed.

## Expected Benefit

After submitting the deactivation request, the user receives a clear email confirmation and knows the current status of the request and the next steps. This improves user awareness, account-state transparency, security in case of unauthorized deactivation, the ability to contact Support when suspicious activity is detected, and user trust in the deactivation process.

## Retest History

Implemented as delayed deactivation: requesting it schedules the account for deactivation in 14 days and sends a confirmation email (request time, deactivation date, cancellation option, what to do if it was not you, support address). Security settings show "Deactivation scheduled for <date> — Cancel"; on that date the account is deactivated automatically and a second email confirms it. Staff accounts and sole workspace owners cannot self-deactivate.

During retests on the Test environment, the deactivation request could not be submitted — the UI displayed **"Could not send the request. Try again."** This was reported back with evidence and the recommendation remains open for retest.
