# API Testing - User Endpoint

This section demonstrates my approach to API testing using Postman, including validation of status codes, response structure and handling of both positive and negative scenarios.

---

## 📌 Objective

Validate API responses, ensure correct status codes and verify response structure and data consistency.

---

## 🔗 Endpoints Tested

- **GET /users/1** - Valid User  
- **GET /users/9999** - Invalid User (404)  
- **GET /users** - Retrieve All Users  

---

## ✅ Test Scenarios

### 1. Positive Scenario - Valid User
- Send request with a valid user ID  
- Verify response status is **200 OK**  
- Validate response contains required fields:
  - id  
  - name  
  - username  
  - email  
- Verify correct data types  

---

### 2. Negative Scenario - Invalid User
- Send request with a non-existing user ID  
- Verify response status is **404 Not Found**  
- Confirm API handles invalid input correctly  

---

### 3. List Validation - All Users
- Send request to retrieve all users  
- Verify response returns a list  
- Validate consistent data structure for each object  

---

## 🧪 Tools Used

- Postman  
- JSON validation  

---

## 📂 Files Included

- `user-api-testing.postman_collection.json` - Postman collection with requests and tests  

---

## 💡 Notes

This example demonstrates:

- Understanding of API testing fundamentals  
- Ability to validate both positive and negative scenarios  
- Clear and structured testing approach  
- Basic API response validation and data verification  

This is a sample project created for demonstration purposes using a public API.
