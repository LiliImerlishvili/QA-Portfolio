# ID: AI-REC-BUG-006 - UI Misalignment in Test-Question Section

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Medium  
**Priority:** Normal  
**Reproducibility:** 100%  

---

## Test Environment

| Item                | Value                                              |
|---------------------|----------------------------------------------------|
| Device              | iMac                                               |
| Operating System    | macOS Tahoe 26.0.1                                 |
| Browser             | Google Chrome Version 141.0.7390.56 (Official Build) (arm64) |

---

## Precondition
None.

---

## Steps to Reproduce

1. Open the web application and log in using an employer account.  
2. Navigate to the section named “What Makes Us Different?” (Statistics / Info section).  
3. Scroll down to the Test-Question section in the interface.

---

## Actual Result

The content inside the Test-Question container is visually misaligned.  
The container expands beyond its intended design and pushes elements downward, breaking the layout.

---

## Expected Result

All elements inside the Test-Question block should remain properly aligned and contained within the designed layout structure without overlapping or shifting elements.

---

## Additional Evidence

Reproduction video (Loom):  
Loom Hr Thoth – 8 October 2025
