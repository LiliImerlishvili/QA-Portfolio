# AI-REC-TC-005 – Verify HR User Creation With New Email

**Related Bug:** AI-REC-BUG-003  
**Module:** User Management  
**Type:** Functional  
**Priority:** High  
**Precondition:**  
- Admin is logged in  
- Test email address is not used in the system  

---

## Steps
1. Navigate to **Employees → Add Employee**.  
2. Fill out all HR fields with valid data.  
3. Click **Create HR User**.

---

## Expected Result
- HR user is created successfully.  
- No duplicate-email error appears when email is unique.
