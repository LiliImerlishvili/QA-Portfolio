/**
 * Postman Test Script
 * Request: VERIFY_USER
 * Method: POST
 * Endpoint: {{domain}}/v1/users/verify
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("token", jsonData.token);
