# AI-REC-BUG-004 – CV Analysis Fails With Internet Connection Error

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Major  
**Priority:** Urgent  
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
- Employer account exists.  
- At least one candidate with an uploaded CV is available in the selected project.

---

## Steps to Reproduce
1. Open the AI-based recruiting platform.  
2. Log in as an employer user.  
3. Navigate to the project dashboard.  
4. Select a candidate from the list.  
5. Click the **“Analyze CV”** button.

---

## Actual Result
The system displays an error message and fails to analyze the CV:

**"Failed to analyze CV. Please check your internet connection and try again."**

This error appears even though the internet connection is stable and all other system features work without issues.

---

## Expected Result
- The system should successfully analyze the uploaded CV.  
- AI-generated insights should be displayed without errors.  
- Connection-related errors should be shown only if the user's network is actually offline.

---

## Additional Evidence
Screen recording (Loom): *Loom – 8 October 2025*
