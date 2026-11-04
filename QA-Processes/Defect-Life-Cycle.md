# Defect Life Cycle

This document describes the stages a defect passes through from identification to closure.

## Defect Statuses

| Status | Meaning | Owner |
|---|---|---|
| New | Defect is reported and waiting for review | QA |
| Assigned | Defect is reviewed and assigned to a developer | QA Lead / PM |
| In Progress | Developer is investigating or fixing the issue | Developer |
| Dev Review | Fix is under code review | Developer |
| Fixed | Fix is merged into the target environment | Developer |
| Ready for Retest | Fix is deployed to the QA environment | Developer / DevOps |
| Reopened | Retest failed — the issue still exists | QA |
| Closed / Done | Retest passed — the issue is resolved | QA |
| Blocked | Fix depends on something outside application code (configuration, third-party service) | Developer / DevOps |
| Deferred / Parked | Valid issue, postponed by a product decision | Product Owner |
| Rejected | Not a defect (expected behavior or works as designed) | Product Owner / Developer |
| Duplicate | The same issue is already reported | QA |

## Defect Flow

```
New → Assigned → In Progress → Dev Review → Fixed → Ready for Retest
                                                         │
                                         ┌───────────────┴───────────────┐
                                    Retest passed                   Retest failed
                                         │                               │
                                   Closed / Done                    Reopened → In Progress
```

1. QA identifies and reports the defect with evidence.
2. The defect is reviewed for reproducibility, duplicates and completeness.
3. The defect is assigned and prioritized.
4. The developer investigates, documents the root cause and fixes the issue.
5. QA retests the fix on the QA environment using the developer's retest notes.
6. The defect is closed if the fix is successful, or reopened with new evidence if not.
7. Related areas are added to the next regression cycle.

## Severity and Priority

**Severity** describes how seriously the defect affects the system.
**Priority** describes how urgently the defect should be fixed.

| Severity | Description | Example |
|---|---|---|
| Critical | Core functionality is blocked, data is wrong or security is affected; no workaround | Registration cannot be completed; financial status shows Unpaid for a paid invoice |
| High | Major feature does not work as expected; a workaround may exist | Keyboard does not dismiss and blocks navigation |
| Medium | Feature works partially or the UX is noticeably degraded | Loading skeleton does not fully cover content |
| Low | Cosmetic or minor issue with little user impact | Generic validation message instead of a specific one |

| Priority | Description |
|---|---|
| Urgent | Must be fixed immediately or before the next release |
| High | Should be fixed in the current sprint |
| Normal / Medium | Can be planned for an upcoming sprint |
| Low | Fix when capacity allows |

Severity and priority are independent: a low-severity typo on the home page can have high priority, while a high-severity issue in a rarely used admin flow can have normal priority. When the team defines severity on the developer or Product Owner side, QA proposes priority and leaves severity to them.

## Retest Rules

- Retest only on the environment named in the fix notes.
- Repeat the original steps and the developer's retest instructions.
- Check closely related flows for side effects.
- Attach new evidence when reopening a defect.
- If the fix reveals a new, different issue, report it as a new defect and link it.
