# API Test Cases - User Endpoint

This document contains API test cases for user-related endpoints.  
The test cases include positive, negative and basic validation scenarios.

---

## Test Case Summary

| ID | Title | Method | Endpoint | Scenario Type | Priority |
|---|---|---|---|---|---|
| API-001 | Verify valid user can be retrieved by ID | GET | `/users/1` | Positive | High |
| API-002 | Verify non-existing user returns proper error | GET | `/users/9999` | Negative | High |
| API-003 | Verify all users can be retrieved | GET | `/users` | Positive | Medium |
| API-004 | Verify invalid user ID format is handled correctly | GET | `/users/abc` | Negative | Medium |
| API-005 | Verify invalid endpoint returns 404 | GET | `/invalid-endpoint` | Negative | Medium |

---

## API-001 - Verify Valid User Can Be Retrieved by ID

**Priority:** High  
**Scenario Type:** Positive  
**Method:** GET  
**Endpoint:** `/users/1`

### Preconditions

- API service is available
- Postman is installed
- Base URL is configured
- Valid user ID exists in the system

### Steps

1. Open Postman
2. Select the request `GET /users/1`
3. Send the request
4. Check the response status code
5. Check the response body
6. Validate the returned user data

### Test Data

| Field | Value |
|---|---|
| User ID | `1` |

### Expected Result

- API returns status code `200 OK`
- Response is returned in JSON format
- Response contains valid user data
- Response contains user ID
- Returned user ID matches the requested user ID
- Required fields are present in the response body

---

## API-002 - Verify Non-existing User Returns Proper Error

**Priority:** High  
**Scenario Type:** Negative  
**Method:** GET  
**Endpoint:** `/users/9999`

### Preconditions

- API service is available
- Postman is installed
- Base URL is configured
- User ID does not exist in the system

### Steps

1. Open Postman
2. Select the request `GET /users/9999`
3. Send the request
4. Check the response status code
5. Check the response body
6. Validate that valid user data is not returned

### Test Data

| Field | Value |
|---|---|
| User ID | `9999` |

### Expected Result

- API returns status code `404 Not Found`
- Response contains an error message or empty response depending on API behavior
- API does not return valid user data
- System handles non-existing user request correctly

---

## API-003 - Verify All Users Can Be Retrieved

**Priority:** Medium  
**Scenario Type:** Positive  
**Method:** GET  
**Endpoint:** `/users`

### Preconditions

- API service is available
- Postman is installed
- Base URL is configured
- Users exist in the system

### Steps

1. Open Postman
2. Select the request `GET /users`
3. Send the request
4. Check the response status code
5. Check the response body
6. Validate that the response contains a list of users
7. Validate the structure of user objects

### Test Data

| Field | Value |
|---|---|
| Endpoint | `/users` |

### Expected Result

- API returns status code `200 OK`
- Response is returned in JSON format
- Response contains a list of users
- Users list is not empty
- Each user object contains required fields such as `id`, `name` and `email`

---

## API-004 - Verify Invalid User ID Format Is Handled Correctly

**Priority:** Medium  
**Scenario Type:** Negative  
**Method:** GET  
**Endpoint:** `/users/abc`

### Preconditions

- API service is available
- Postman is installed
- Base URL is configured

### Steps

1. Open Postman
2. Select the request `GET /users/abc`
3. Send the request
4. Check the response status code
5. Check the response body
6. Validate that valid user data is not returned

### Test Data

| Field | Value |
|---|---|
| User ID | `abc` |

### Expected Result

- API returns an appropriate error status code, such as `400 Bad Request` or `404 Not Found`
- Response contains a validation or error message depending on API behavior
- API does not return valid user data
- System handles invalid ID format correctly

---

## API-005 - Verify Invalid Endpoint Returns 404

**Priority:** Medium  
**Scenario Type:** Negative  
**Method:** GET  
**Endpoint:** `/invalid-endpoint`

### Preconditions

- API service is available
- Postman is installed
- Base URL is configured

### Steps

1. Open Postman
2. Send request to `/invalid-endpoint`
3. Check the response status code
4. Check the response body
5. Validate API behavior for invalid URL

### Test Data

| Field | Value |
|---|---|
| Endpoint | `/invalid-endpoint` |

### Expected Result

- API returns status code `404 Not Found`
- API does not return valid user data
- System handles invalid endpoint correctly
- Response time remains acceptable

---

## General Validation Checklist

For each API request, the following checks were performed:

- Status code validation
- Response format validation
- Response body validation
- Required fields validation
- Data type validation
- Error handling validation
- Response time validation

---

## Notes

Some API responses may vary depending on the backend implementation.  
For example, invalid user ID format may return either `400 Bad Request` or `404 Not Found`.

The main goal is to verify that the API handles both valid and invalid requests correctly.
