/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Website Only
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

const json = pm.response.json();

console.log("Response body:", json);

pm.test("Error message exists", function () {
    pm.expect(json).to.have.property("message");
});

pm.test("Validation error is returned", function () {
    const message = json.message
        ? JSON.stringify(json.message).toLowerCase()
        : "";

    pm.expect(message).to.not.eql("");
});
