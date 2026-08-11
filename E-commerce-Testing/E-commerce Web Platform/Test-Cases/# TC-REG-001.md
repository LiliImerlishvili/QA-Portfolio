# TC-REG-001 – Successful Registration with Valid Email

**Purpose:**  
To verify that registration succeeds with valid email and data.

**Related Bug:** FORM-VAL-063  
**Module / Feature:** Registration  
**Priority:** High  

**Preconditions:**  
- Registration page is available.  
- Email is not yet used.

**Test Data:**  
- Email: `valid.user@example.com`  
- Password: strong valid password

---

### Steps:
1. Open Registration page.  
2. Fill all fields with valid data.  
3. Click **Register**.  

---

### Expected Result:
- User is registered successfully.  
- Confirmation is shown, or user is redirected to dashboard.

---

### Status:
✅ Passed
