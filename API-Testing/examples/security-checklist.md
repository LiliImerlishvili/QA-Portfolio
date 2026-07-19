# API Security Checklist

- Protected endpoints reject missing tokens
- Invalid tokens return `401 Unauthorized`
- Role restrictions return `403 Forbidden`
- User A cannot access User B resources
- Passwords are never returned
- Tokens are not exposed in unrelated responses
- Stack traces are not exposed
- Internal infrastructure URLs are not exposed
- Rate-limit behavior is validated
- Sensitive fields are masked
- Logs do not contain secrets
- Admin endpoints enforce role checks
