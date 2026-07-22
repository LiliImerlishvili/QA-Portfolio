/**
 * Postman Test Script
 * Request: GOOGLE_AUTH_USER
 * Method: POST
 * Endpoint: {{domain}}/v1/users/google_authenticate
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// GOOGLE_AUTH_USER - Happy path (204 No Content)
// Successful authentication without response body

pm.test("Status code is 204", () => {
  pm.response.to.have.status(204);
});

pm.test("Response body is empty", () => {
  const body = pm.response.text();
  pm.expect(body === "" || body === "\n").to.eql(true);
});

// Optional debug
console.log("GOOGLE_AUTH_USER completed successfully (204 No Content)");
