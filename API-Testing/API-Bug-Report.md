# API Bug Report Example

This document contains a sample API bug report created during user endpoint testing.

---

## Bug ID

API-BUG-001

---

## Title

Incorrect status code is returned for a non-existing user ID

---

## Environment

| Field | Value |
|---|---|
| Tool | Postman |
| API Type | REST API |
| Method | GET |
| Base URL | `https://jsonplaceholder.typicode.com` |
| Endpoint | `/users/9999` |

---

## Severity

Medium

---

## Priority

High

---

## Preconditions

- API service is available
- Postman is installed
- Base URL is configured
- User ID `9999` does not exist in the system

---

## Steps to Reproduce

1. Open Postman
2. Select the request `GET /users/9999`
3. Send the request
4. Check the response status code
5. Check the response body

---

## Actual Result

API returns an unexpected response for a non-existing user ID.

Example:

- Response status code may not clearly indicate that the user does not exist
- Response body may be empty or may not contain a clear error message
- API does not provide enough information about the failed request

---

## Expected Result

API should handle a non-existing user ID properly.

Expected behavior:

- API should return `404 Not Found`
- Response should contain a clear error message
- API should not return valid user data
- Error response should be easy to understand

Example expected response:

```json
{
  "error": "User not found",
  "status": 404
}
