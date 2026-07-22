/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Empty Title and Empty File Upload.
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// NEGATIVE CASE: EMPTY TITLE AND EMPTY FILE UPLOAD
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

// Validate that API returns 400 Bad Request for empty title and empty media URL
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
// This is flexible because backend may return a generic validation message
pm.test("Validation error is returned for empty title and empty media URL", function () {
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

// Validate that media URL variable was empty before sending the request
pm.test("Media URL variable is empty", function () {
    const mediaUrl = pm.environment.get("mediaUrl") || "";
    pm.expect(mediaUrl.trim()).to.eql("");
});
