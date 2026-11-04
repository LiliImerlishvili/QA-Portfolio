# Bug Report Standards

This document defines the structure and writing rules I use for bug reports and improvement suggestions.

## Bug Report Structure

| Section | Content |
|---|---|
| Title | Short, specific description of the problem: `[Platform][Area] What happens + condition` |
| Environment | Environment (Dev / Test / Staging / Production), device, OS, browser or app version |
| Priority | Urgency of the fix |
| Reproducibility | How often the issue occurs (e.g., 100%) |
| Preconditions | State required before the steps: authorization, role, existing data, settings |
| Steps to Reproduce | Numbered, minimal steps starting from opening the application or website |
| Actual Result | What actually happens, including exact error messages |
| Expected Result | What should happen, phrased as required behavior ("should ...") |
| Evidence | Screen recording, screenshots, console logs, network requests |

Optional sections when relevant: **Additional Note** (e.g., the same input works in another flow), **User Impact**, **Business Impact**.

## Writing Rules

- **Title** — describes the problem, not the steps. Avoid vague words such as "doesn't work" or "broken".
- **Preconditions** — include authorization state and user role. Do not repeat precondition information inside the steps.
- **Steps** — one action per step, written as an instruction ("Open", "Tap", "Enter"). Use exact button and field labels in bold.
- **Test data** — give exact values (address, character count, amount) so anyone can reproduce the issue.
- **Actual result** — copy error messages exactly, in a code block. Add API responses from DevTools when they show the real cause.
- **Expected result** — describe the correct behavior, not a technical fix.
- **Environment** — always list exact versions; when the issue reproduces on several devices, list each one.
- **One defect per report** — if a second problem is found, report it separately and link it.

## Bug vs Improvement

| Bug | Improvement / Recommendation |
|---|---|
| The system behaves differently from requirements, design or common expected behavior | The system works as designed, but behavior could be safer, clearer or more usable |
| Uses Actual Result / Expected Result | Uses Current Behavior / Recommended Behavior / Expected Benefit |
| Example: valid address is rejected | Example: limit OTP attempts and introduce a temporary lockout |

When there are no design specifications, issues that depend on product decisions are reported as recommendations, not bugs.

## Example Title Patterns

- `[Android] Keyboard Does Not Dismiss After Text Input and Blocks Navigation`
- `[iOS][Live] Battery Percentage Continues to Decrease While the Device Is Charging`
- `[Web] User Is Logged Out After Leaving the Live Debate and Refreshing the Page`
- `[Improvement] Restrict OTP Input to Numeric Characters Only`
