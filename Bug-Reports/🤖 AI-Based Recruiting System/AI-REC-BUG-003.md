# ID:  AI-REC-BUG-003 - HR Registration Cannot Be Completed (User Already Registered Error)

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
| Browser             | Google Chrome Version 141.0.7390.66 (Official Build) (arm64) |

---

## Precondition
Employer account exists and user can access company project dashboard.  
User is attempting to register a new HR team member inside the project.

---

## Steps to Reproduce

1. Open the web application using an employer account.  
2. Navigate to the company dashboard and open the project where HR members can be added.  
3. Click on “My Team”.  
4. Select the option to add a new HR member.  
5. Fill in the required HR information:  
   - First name: "Lili Imerlishvili"  
   - Email: "lilimerlishvili@shoply.ge"  
   - Phone: "+995333333398"  
6. Provide additional HR profile information:  
   - Position: "HR Assistant"  
   - Department: "HR"  
   - Start Date: "9 Oct, 2025"  
   - Location: "Rustavi"  
7. Click the button “Add HR Member”.

---

## Actual Result

The system does not create the HR account.  
Instead, an error message appears:  
**"Failed to create user account: A user with this email address has already been registered"**

This occurs even though the HR email does **not** exist in the company’s HR user list.

---

## Expected Result

The system should successfully create a new HR member profile under the company’s project unless the email truly exists in the database.  
If the email is not registered, the HR member should be added without errors.

---

## Additional Evidence

Screen recording / reproduction video:  
Jam jam.dev/c/694b01eb-6b37-4688-b589-2f7c4c171a5e
