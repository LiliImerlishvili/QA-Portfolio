# API Testing

## Overview

This section demonstrates API testing work completed for an NDA-protected AI media platform.

The portfolio version is fully sanitized. It contains anonymized test data, placeholder URLs, generalized resource names, and a cleaned Postman collection. No production credentials, private endpoints, customer information, or confidential client data are included.

## Coverage

- OTP-based authentication
- Authorization and role validation
- User profile retrieval and update
- Conversation lifecycle testing
- AI answer validation
- Image generation
- Video generation
- Image editing
- Subscription flows
- Organization and invitation workflows
- Media upload validation
- Admin CRUD operations
- Positive and negative testing
- Request chaining
- Response contract validation
- Basic response-time checks
- Security-oriented API checks

## Tools

- Postman
- JavaScript
- Newman
- JSON
- CSV
- Git and GitHub

## Structure

```text
API-Testing/
├── collections/
├── test-cases/
├── test-scenarios/
├── bug-reports/
├── examples/
├── test-data/
├── screenshots/
└── README.md
```

## Main Testing Techniques

### Functional Testing

Validated request behavior against expected business rules and API contracts.

### Negative Testing

Validated missing fields, empty values, invalid data types, unsupported enum values, invalid identifiers, unauthorized requests, and insufficient-permission scenarios.

### Response Validation

Validated:

- HTTP status codes
- Content type
- JSON structure
- Required fields
- Data types
- ID formats
- Date formats
- Error objects
- Array/count consistency
- Response-time thresholds

### Request Chaining

Response data is stored and reused in subsequent requests.

```text
Authenticate
→ Verify OTP
→ Store access token
→ Create resource
→ Store resource ID
→ Retrieve resource
→ Update resource
→ Delete resource
```

### Security Checks

Validated authentication enforcement, role restrictions, sensitive-data exposure, safe error handling, and cross-user resource access.

## Postman Collection

Import:

```text
collections/AI-Media-Platform-Sanitized.postman_collection.json
```

The public collection contains placeholder variables only.

## Newman

```bash
newman run collections/AI-Media-Platform-Sanitized.postman_collection.json
```

## NDA and Security Notice

Examples of sanitization:

```text
Production URL      → https://api.example.test
Bearer token        → {{authToken}}
User email          → test.user@example.com
Internal ID         → resource_example_001
Client name         → Example Platform
```

This repository demonstrates testing methodology and technical QA skills without revealing the original application, client, infrastructure, or production data.
