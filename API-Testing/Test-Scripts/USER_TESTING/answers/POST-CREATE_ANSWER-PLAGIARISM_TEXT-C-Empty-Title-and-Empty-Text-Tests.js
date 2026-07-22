/**
 * Postman Test Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT C   Empty Title and Empty Text
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// NEGATIVE CASE: EMPTY TITLE AND EMPTY TEXT
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

// Validate message field exists
pm.test("Error message exists", function () {
    pm.expect(json).to.have.property("message");
});

// Validate error message for empty fields
pm.test("Validation message is returned for empty title and empty text", function () {
    const message = (json.message || "").toLowerCase();

    pm.expect(message).to.not.be.empty;

    pm.expect(
        message.includes("missing") ||
        message.includes("required") ||
        message.includes("empty") ||
        message.includes("text") ||
        message.includes("title") ||
        message.includes("prompt")
    ).to.eql(true);
});
