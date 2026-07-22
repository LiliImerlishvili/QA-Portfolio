/**
 * Postman Test Script
 * Request: UPDATE_USER_PROFILE
 * Method: PATCH
 * Endpoint: {{domain}}/v1/users
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
let body = response.body
let updatedFirstName = {{}};

pm.test("Body matches string", function () {
    pm.expect(body.firs_name).to.eql({{updatedFirstName}});
});
