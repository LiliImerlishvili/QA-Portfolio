/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// POSITIVE CASE: VALID TITLE AND VALID FILE URL
// ======================================

// This test checks the File Upload flow based on the frontend form.
// Frontend provides only Title and File Upload fields.
// Prompt field is not available on the frontend.


// --------------------------------------
// BASIC RESPONSE VALIDATION
// --------------------------------------

// Validate that the response format is JSON
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response body once and reuse it in all tests
const json = pm.response.json();

// Debug logs for easier investigation
console.log("Response status:", pm.response.code);
console.log("Response body:", json);


// --------------------------------------
// STATUS CODE VALIDATION
// --------------------------------------

// Expected result for a valid File Upload request
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


// --------------------------------------
// SUCCESS RESPONSE VALIDATION
// Run only when API returns 200 OK
// --------------------------------------

if (pm.response.code === 200) {

    // Validate required top-level fields in success response
    pm.test("Success response has required fields", function () {
        pm.expect(json).to.have.property("id");
        pm.expect(json).to.have.property("type");
        pm.expect(json).to.have.property("answer");
        pm.expect(json).to.have.property("created_at");
    });

    // Validate response type
    pm.test("Type is ai-prediction", function () {
        pm.expect(json.type).to.eql("ai-prediction");
    });

    // Validate answer ID format
    pm.test("ID format is valid", function () {
        pm.expect(json.id).to.be.a("string");
        pm.expect(json.id).to.match(/^answr_/);
    });

    // Validate answer object exists
    pm.test("Answer is an object", function () {
        pm.expect(json.answer).to.be.an("object");
    });

    // Save created answer ID for GET by ID or next lifecycle requests
    if (json.id) {
        pm.environment.set("ai_prediction_media_answer_id", json.id);
    }
}


// --------------------------------------
// ERROR RESPONSE DEBUG VALIDATION
// Run only when API does not return 200
// --------------------------------------

if (pm.response.code !== 200) {

    // Keep this test to show that API returned an error object
    // This helps confirm whether the issue is backend validation or request contract mismatch
    pm.test("Error response contains useful debug information", function () {
        pm.expect(json).to.be.an("object");
        pm.expect(JSON.stringify(json).length).to.be.greaterThan(2);
    });
}
