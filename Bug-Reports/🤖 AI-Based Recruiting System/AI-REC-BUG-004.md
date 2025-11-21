# ID:  AI-REC-BUG-004 - CV Analysis Fails With Internet Connection Error

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Major  
**Priority:** Urgent  
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
Employer account exists.  
A candidate with an uploaded CV is available inside the selected project.

---

## Steps to Reproduce

1. Open the web platform (AI recruiting system).  
2. Log in as an employer user.  
3. Navigate to the project through the company dashboard.  
4. Select the candidate from the list.  
5. Click the “Analyze CV” button.

---

## Actual Result

The system displays an error and fails to analyze the CV:  
**"Failed to analyze CV. Please check your internet connection and try again."**

This error occurs even though the internet connection is stable and all other system features work normally.

---

## Expected Result

The system should successfully analyze the uploaded CV and return AI-generated insights without showing a false connection error.

---

## Additional Evidence

Screen recording (Loom):
Loom Hr Thoth – 8 October 2025
