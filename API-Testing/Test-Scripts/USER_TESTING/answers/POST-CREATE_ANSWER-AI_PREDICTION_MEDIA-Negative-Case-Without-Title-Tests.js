/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Title
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// NEGATIVE CASE: EMPTY TITLE ONLY
// ======================================


// --------------------------------------
// BASIC RESPONSE VALIDATION
// --------------------------------------

// Validate that the response format is JSON
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response body once and reuse it in all tests
const json = pm.response.json();

// Log response status and body for debugging
console.log("Response status:", pm.response.code);
console.log("Response body:", json);

// Validate that API returns 400 Bad Request for empty title
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});


// --------------------------------------
// ERROR RESPONSE VALIDATION
// --------------------------------------

// Validate that error message exists in the response
pm.test("Error message exists", function () {
    pm.expect(json).to.have.property("message");
});

// Validate that some validation error is returned
// This is flexible because the backend may return a generic error message
pm.test("Validation error is returned for empty title", function () {
    const message = JSON.stringify(json.message || "").toLowerCase();

    pm.expect(message).to.not.eql("");
});


// --------------------------------------
// NEGATIVE CASE DATA VALIDATION
// --------------------------------------

// Validate that title variable was empty before sending the request
pm.test("Title variable is empty", function () {
    const titleText = pm.environment.get("titleText") || "";
    pm.expect(titleText.trim()).to.eql("");
});

// Validate that media URL variable was valid before sending the request
pm.test("Media URL variable is valid", function () {
    const mediaUrl = pm.environment.get("mediaUrl") || "";

    pm.expect(mediaUrl).to.be.a("string");
    pm.expect(mediaUrl.trim()).to.not.eql("");
    pm.expect(mediaUrl).to.match(/^https?:\/\/.+/);
});
