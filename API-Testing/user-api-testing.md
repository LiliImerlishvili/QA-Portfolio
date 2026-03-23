# API Testing Example - User Endpoint

## 📌 Objective
Validate user API response, status codes and data structure.

---

## 🔗 Endpoint
GET https://jsonplaceholder.typicode.com/users/1

---

## ✅ Test Scenarios

### 1. Validate Status Code
- Expected: 200 OK  
- Actual: 200 OK  

---

### 2. Validate Response Structure
Check that response contains:
- id
- name
- username
- email

Result: All fields present ✔️

---

### 3. Validate Data Types
- id → number  
- name → string  
- email → string  

Result: Valid ✔️

---

### 4. Negative Scenario
Request invalid user:
GET /users/9999

- Expected: 404 or empty response  
- Actual: Empty object  

---

## 🧪 Tools Used
- Postman  
- JSON validation  

---

## 💡 Notes
This example demonstrates basic API validation including:
- Status code verification  
- Response structure validation  
- Data type validation  
- Negative scenario testing  
