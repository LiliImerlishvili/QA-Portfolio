# AI-REC-BUG-008 – Profile Page Does Not Load

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Medium  
**Priority:** Urgent  
**Reproducibility:** 80%  

---

## Test Environment

| Item | Value |
|------|--------|
| Device | iMac |
| Operating System | macOS Tahoe 26.0.1 |
| Browser | Google Chrome Version 141.0.7390.66 (Official Build) (arm64) |

---

## Description
The system fails to load the user profile page. After navigating to the profile section, the platform returns an error instead of displaying account information.

---

## Preconditions
- User is logged into the AI-based recruiting system.

---

## Steps to Reproduce
1. Open the recruiting system.  
2. Navigate to the top-right menu.  
3. Click **“My Account.”**  
4. Select **“Profile.”**

---

## Actual Result
The system displays an error message:  
**"User not found"**  
The profile details are not loaded.

---

## Expected Result
The Profile page should load successfully and display the user's account information and settings.

---

## Attachment
Video evidence (Loom link provided in the original bug report).
