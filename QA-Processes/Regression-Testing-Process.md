# Regression Testing Process

This document describes when and how regression testing is planned and executed.

## When Regression Is Performed

- After a defect fix is deployed to the QA environment
- Before a release to Staging or Production
- After changes in shared modules (authentication, payments, financial calculations, roles)
- After infrastructure or configuration changes (identity provider, backend services)

## Process

1. **Review changes** — read release notes, fix notes and the developer's retest instructions.
2. **Identify impacted areas** — use the RTM to find requirements, test cases and checklists linked to the changed modules.
3. **Select tests** — combine:
   - retests of the fixed defects;
   - test cases linked in the RTM;
   - smoke checks of critical flows (login, registration, core business flow);
   - checklists for the affected modules.
4. **Execute** — run tests on the target environment and devices; repeat key flows across platforms when the product is cross-platform (for example, mobile ↔ web).
5. **Record results** — update test case status (Passed / Failed / Blocked) and defect status.
6. **Report new issues** — side effects found during regression are reported as new defects and linked to the original one.
7. **Communicate** — share blockers, open risks and a release recommendation.

## Regression Scope Levels

| Level | When | Scope |
|---|---|---|
| Retest | Single fix | The fixed defect plus directly related flow |
| Targeted regression | Fix or change in one module | Linked test cases and the module checklist |
| Full regression | Release candidate or shared-module change | All critical scenarios and all checklists |

## Critical Flows Always Included

- Registration and login (email and social)
- Session persistence after refresh and re-login
- Role-based access and data isolation
- Core business flow of the product (e.g., live session, checkout, invoice status)
- Error handling for backend failures
