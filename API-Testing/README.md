# API Testing - User Endpoint

This section demonstrates my approach to API testing using Postman.

The goal of this project is to validate API behavior, response structure, status codes and error handling for user-related endpoints.

---

## Project Overview

This API testing project focuses on testing user endpoints with both positive and negative scenarios.

The collection includes:

- Status code validation
- Response body structure validation
- Data type checks
- Error handling checks
- Positive test scenarios
- Negative test scenarios
- Basic API response validation using Postman test scripts

---

## Objective

The main objective of this API testing project is to verify that the API returns correct responses for valid and invalid requests.

I checked:

- Correct HTTP status codes
- Valid JSON response format
- Required fields in the response body
- Correct data types
- Error handling for invalid requests
- API behavior with valid and invalid user IDs

---

## Testing Approach

I tested the API using a manual API testing approach in Postman.

For each endpoint, I checked the request, response status code, response body, response time and returned data structure.

I also included negative scenarios to verify how the API handles invalid or unexpected input.

---

## Tools Used

- Postman
- GitHub
- JSON
- Manual API Testing
- Basic JavaScript for Postman test scripts

---

## Endpoints Tested

| Method | Endpoint | Description | Scenario Type |
|---|---|---|---|
| GET | `/users/1` | Retrieve valid user by ID | Positive |
| GET | `/users/9999` | Retrieve non-existing user | Negative |
| GET | `/users` | Retrieve all users | Positive |
| GET | `/users/abc` | Retrieve user with invalid ID format | Negative |

---

## Test Coverage

| ID | Endpoint | Scenario | Expected Status | Type |
|---|---|---|---|---|
| API-001 | GET `/users/1` | Valid user ID | 200 OK | Positive |
| API-002 | GET `/users/9999` | Non-existing user ID | 404 Not Found | Negative |
| API-003 | GET `/users` | Retrieve all users | 200 OK | Positive |
| API-004 | GET `/users/abc` | Invalid user ID format | 400 Bad Request or 404 Not Found | Negative |

---

## Test Scenarios

### 1. Positive Scenario - Valid User

**Request:**  
`GET /users/1`

**Expected Result:**

- API should return status code `200 OK`
- Response should be in JSON format
- Response should contain valid user data
- User ID should match the requested ID
- Required fields should be present in the response body

---

### 2. Negative Scenario - Non-existing User

**Request:**  
`GET /users/9999`

**Expected Result:**

- API should return status code `404 Not Found`
- Response should contain a clear error message
- API should not return valid user data for a non-existing user

---

### 3. Positive Scenario - Retrieve All Users

**Request:**  
`GET /users`

**Expected Result:**

- API should return status code `200 OK`
- Response should contain a list of users
- Response should be in JSON format
- Each user object should contain required fields
- Response data should have a valid structure

---

### 4. Negative Scenario - Invalid User ID Format

**Request:**  
`GET /users/abc`

**Expected Result:**

- API should return an appropriate error status code, such as `400 Bad Request` or `404 Not Found`
- Response should contain a validation or error message
- API should handle invalid data type properly
- API should not return valid user data for an invalid ID format

---

## What Was Validated

During API testing, I validated the following points:

- HTTP status codes
- Response time
- JSON response format
- Required fields in response body
- Data types of response fields
- Error messages
- Negative scenarios
- API behavior with invalid input data
- API behavior with non-existing user data

---

## Response Validation Examples

The following examples show what I validated in the API response:

| Validation Area | What Was Checked |
|---|---|
| Status Code | API returns the expected HTTP status code |
| Response Format | Response is returned in JSON format |
| Required Fields | Required fields exist in the response body |
| Data Types | Field values have correct data types |
| Error Handling | API returns proper error response for invalid requests |
| Response Time | API responds within an acceptable time |

---

## Negative Test Scenarios

The following negative scenarios were tested:

- Non-existing user ID
- Invalid user ID format
- Invalid endpoint URL
- Empty request parameter
- Invalid data type
- Missing or incorrect request data

---

## Example Postman Tests

```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Response contains user ID", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.id).to.exist;
});

pm.test("User ID is correct", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(1);
});

pm.test("Email has valid format", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
