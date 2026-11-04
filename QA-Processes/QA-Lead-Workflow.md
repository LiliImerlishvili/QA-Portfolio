# QA Lead Workflow

This document describes the responsibilities and workflow I follow when coordinating QA activities on a project.

## Responsibilities

- Define test scope and risk-based priorities
- Coordinate testing activities and split areas between testers
- Assign and review QA tasks
- Review bug quality and reproducibility before submission
- Maintain test cases, checklists, scenarios and the RTM
- Coordinate retesting and regression after fixes
- Communicate quality status, blockers and release risks
- Support testers with standards and feedback

## Workflow

1. **Kick-off** — study the product, user roles and critical flows; agree on environments and access.
2. **Planning** — define scope, risks, test types and entry/exit criteria (see `Test-Plans/`).
3. **Task distribution** — assign modules or flows to testers, with checklists for each area.
4. **Execution** — testers execute scenarios and test cases and report defects.
5. **Bug review** — reports are reviewed using the [Bug Report Review Process](Bug-Report-Review-Process.md) before reaching developers.
6. **Defect tracking** — follow the [Defect Life Cycle](Defect-Life-Cycle.md); clarify questions with developers and the Product Owner.
7. **Retest and regression** — coordinate according to the [Regression Testing Process](Regression-Testing-Process.md).
8. **Reporting** — prepare test summary reports with results, open defects and a release recommendation (see `Test-Reports/`).

## Communication

- Daily status: tested areas, new critical defects, blockers.
- Blocked defects are escalated with the root cause and the person responsible.
- Product questions are separated from defects and raised as recommendations.
