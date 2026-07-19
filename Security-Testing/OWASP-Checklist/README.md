# OWASP Security Testing Checklist

This checklist covers basic security validation areas inspired by common OWASP risks for web applications and APIs.

## Authentication

- Verify login with valid credentials
- Verify login with invalid credentials
- Verify account lockout after repeated failed attempts
- Verify password policy requirements
- Verify password reset flow
- Verify session invalidation after logout

## Authorization

- Verify users can access only permitted resources
- Verify restricted pages cannot be opened without authorization
- Verify role-based access control
- Verify direct URL access is blocked for unauthorized users
- Verify users cannot access another user's data
- Verify API endpoints reject unauthorized requests

## Input Validation

- Verify required fields reject empty values
- Verify invalid data types are rejected
- Verify excessively long input is handled safely
- Verify special characters are handled correctly
- Verify SQL injection attempts are rejected
- Verify script injection attempts are sanitized or blocked

## Sensitive Data Exposure

- Verify passwords are never returned in API responses
- Verify sensitive data is not exposed in URLs
- Verify error messages do not reveal internal system details
- Verify personal data is visible only to authorized users
- Verify secure communication is used for sensitive data
- Verify logs do not contain confidential information

## Error Handling

- Verify error messages are clear but do not expose sensitive details
- Verify stack traces are not displayed to users
- Verify invalid requests return appropriate HTTP status codes
- Verify unauthorized requests return 401 or 403 responses
- Verify server errors are handled gracefully
- Verify API errors use a consistent response structure
