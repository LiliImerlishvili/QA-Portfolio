# TC-REG-002 – Registration with Invalid Email Format

**Purpose:**  
To ensure invalid email formats are rejected.

**Related Bug:** FORM-VAL-063  
**Module / Feature:** Registration  
**Priority:** High  

**Test Data:**  
- Invalid emails: `tdress44@gmail` / `test@` / `user@@test.com`  

---

### Steps:
1. Open Registration page.  
2. Enter invalid email from test data.  
3. Fill other fields with valid data.  
4. Click **Register**.  

---

### Expected Result:
- Registration is blocked.  
- Email validation error message is shown.  

---

### Status:
❌ Failed
