# Bug Report Review Process

This document describes how I review bug reports written by QA interns and students before they are submitted to the development team.

## Goals

- Every submitted report is reproducible by someone who has not seen the issue.
- Reports follow the team's [Bug Report Standards](Bug-Report-Standards.md).
- Invalid issues, duplicates and recommendations are separated from real bugs before reaching developers.
- Interns and students get specific, actionable feedback that improves their next reports.

## Review Checklist

### Validity
- [ ] The issue is reproducible on the stated environment
- [ ] It is not expected behavior or a duplicate of an existing report
- [ ] It is classified correctly as a bug or a recommendation

### Title
- [ ] Specific and describes the problem, not the steps
- [ ] Contains platform/area tags when the team uses them

### Environment and Preconditions
- [ ] Environment, device, OS and version are complete and exact
- [ ] Authorization state and user role are stated
- [ ] Precondition information is not repeated in the steps

### Steps
- [ ] Start from opening the application or website
- [ ] One action per step, minimal and in the correct order
- [ ] Exact labels and test data are given

### Results
- [ ] Actual result describes only what happened, with exact error text
- [ ] Expected result describes correct behavior ("should ...")
- [ ] Actual and expected results do not contradict the title

### Evidence and Classification
- [ ] Recording or screenshot clearly shows the issue
- [ ] Console or network evidence is attached when relevant
- [ ] Priority is reasonable for the impact

## Feedback Rules

- Comment only on the sections that need improvement — sections that are correct are not commented on.
- Explain why a change is needed, not only what to change.
- Suggest the corrected wording when a section is unclear.
- Point out repeated mistakes as a pattern so they are not repeated in the next report.
- Return the report for a second review if the steps or results had to be rewritten.

## Review Flow

1. The intern or student submits the report with the "Ready for Review" status.
2. The reviewer reproduces the issue using only the report.
3. The reviewer leaves comments on sections that need changes.
4. The author updates the report.
5. The reviewer approves it, and the report moves to the development team.
