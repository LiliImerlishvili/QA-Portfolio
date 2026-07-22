/**
 * Postman Test Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT C   Empty field
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// NEGATIVE CASE: EMPTY PROMPT FIELD
// ======================================

// Validate HTTP status code
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

// Validate JSON response
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response body
const json = pm.response.json();

// Validate error message exists
pm.test("Error message exists", function () {
    pm.expect(json).to.have.property("message");
});

// Validate error message for empty prompt field
pm.test("Error message is correct for empty prompt field", function () {
    pm.expect(json.message).to.include("The text must be at least 16 words");
});
