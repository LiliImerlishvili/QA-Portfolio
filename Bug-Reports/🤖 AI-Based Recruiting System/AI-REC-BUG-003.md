# AI-REC-BUG-003 — HR User Cannot Be Created (Duplicate Email Error)

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** High  
**Priority:** Urgent  
**Reproducibility:** 100%

---

## Test Environment
- **Device:** iMac  
- **Operating System:** macOS Tahoe 26.0.1  
- **Browser:** Google Chrome Version 141.0.7390.66 (Official Build) (arm64)

---

## Description
The system prevents creating a new HR user account even when all required fields are correctly completed. The system displays an error message indicating that the email is already registered, although it belongs to a newly added HR user and should be accepted.

---

## Preconditions
- Admin user is logged into the AI-based recruiting system.

---

## Steps to Reproduce
1. Log in to the admin dashboard  
2. Navigate to the “Employees” section  
3. Click “Add Employee”  
4. Fill out the HR user creation form:
   - Full name  
   - Email  
   - Phone number  
   - Position  
   - Department  
   - Status, start date, city  
5. Click the “Create HR User” button

---

## Actual Result
The system returns an error message:  
**"Failed to create user account: A user with this email address has already been registered"**  
The account is not created.

---

## Expected Result
A new HR user should be created successfully. The system should only block creation when the email truly exists in the database, not for new unique emails.

---

## Attachment  
Video Evidence: *(Loom link from original report)*
