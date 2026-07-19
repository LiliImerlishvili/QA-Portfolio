# AI-REC-BUG-006 – UI Misalignment in Test-Question Section

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Medium  
**Priority:** Normal  
**Reproducibility:** 100%  

---

## Test Environment

| Item | Value |
|------|--------|
| Device | iMac |
| Operating System | macOS Tahoe 26.0.1 |
| Browser | Google Chrome Version 141.0.7390.56 (Official Build) (arm64) |

---

## Precondition
None.

---

## Steps to Reproduce
1. Open the AI-based recruiting platform.  
2. Log in using an employer account.  
3. Navigate to the **“What Makes Us Different?”** section (Statistics / Info section).  
4. Scroll down to the **Test-Question** subsection.

---

## Actual Result
- The content inside the Test-Question container is visually misaligned.  
- The container expands beyond its intended layout, pushing other UI elements downward and breaking the page structure.

---

## Expected Result
- All elements within the Test-Question section should remain properly aligned.  
- The container should not expand unexpectedly or shift nearby elements.  
- The layout should remain clean, stable, and consistent.

---

## Additional Evidence
Reproduction video (Loom):  
*Loom – 8 October 2025*
