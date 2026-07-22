/**
 * Postman Test Script
 * Request: AUTH_USER
 * Method: POST
 * Endpoint: {{domain}}/v1/users/authenticate/v2
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
pm.test("AUTH_USER: status is 204", () => {
  pm.response.to.have.status(204);
});

// 204 = No Content
pm.test("AUTH_USER: response body is empty", () => {
  pm.expect(pm.response.text()).to.be.oneOf(["", null]);
});
