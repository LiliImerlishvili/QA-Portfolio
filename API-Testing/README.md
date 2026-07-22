# API Testing

This section presents practical REST API testing work completed with Postman and JavaScript.

## Included Artifacts

- Sanitized Postman collection
- Request-level JavaScript test scripts
- Authentication and environment-variable handling
- Positive and negative API scenarios
- Response body and business-rule validation
- Sample test data
- Newman execution notes

## Main Collection

`Postman-Collections/AI-Media-Platform-Sanitized.postman_collection.json`

The collection is sanitized for public portfolio use. Real credentials, tokens, production domains, personal information, and confidential identifiers are not included.

## Test Script Showcase

`Test-Scripts/` contains 7 selected scripts extracted from the real Postman collection. The examples are grouped by testing area so reviewers can inspect different validation techniques without reading the entire collection JSON.

## Security

The public portfolio uses placeholders such as:

```text
{domain}
{token}
{authToken}
test.user@example.com
https://files.example.test/sample-file
```

No real production secrets should be committed.
