/**
 * Postman Test Script
 * Request: Remove Background Unsupported File Type
 * Method: POST
 * Endpoint: {{domain}}/v2/edit-image/remove-background
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
/* ==========================================
   REMOVE BACKGROUND
   Negative Path - Unsupported File Type
   ========================================== */

// Parse response body as JSON
const response = pm.response.json();


/* ==========================================
   BASIC NEGATIVE RESPONSE VALIDATIONS
   ========================================== */

// Check that API rejects unsupported file type
pm.test("Status code is 400 Bad Request", function () {
    pm.response.to.have.status(400);
});

// Check that response body is returned in JSON format
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

// Check that response time is acceptable for validation error
pm.test("Response time is below 5 seconds", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});


/* ==========================================
   ERROR STRUCTURE VALIDATIONS
   ========================================== */

// Check that error type exists and is correct
pm.test("Error type is InternalError", function () {
    pm.expect(response).to.have.property("type");
    pm.expect(response.type).to.eql("InternalError");
});

// Check that error code exists and is correct
pm.test("Error code is StabilityAIError", function () {
    pm.expect(response).to.have.property("code");
    pm.expect(response.code).to.eql("StabilityAIError");
});

// Check that error message exists
pm.test("Error message exists", function () {
    pm.expect(response).to.have.property("message");
    pm.expect(response.message).to.be.a("string").and.not.empty;
});

// Check that error message indicates unsupported file type
pm.test("Error message indicates unsupported file type", function () {
    pm.expect(response.message).to.include("invalid or unsupported file type");
});


/* ==========================================
   IMAGE PROCESSING NEGATIVE VALIDATIONS
   ========================================== */

// Check that result image URL is not returned because file type is invalid
pm.test("Result image URL is not returned", function () {
    pm.expect(response.result_image_url).to.be.undefined;
});

// Check that subject image URL is not returned because image was not processed
pm.test("Subject image URL is not returned", function () {
    pm.expect(response.subject_image_url).to.be.undefined;
});

// Check that operation type is not returned because background removal was not processed
pm.test("Operation type is not returned", function () {
    pm.expect(response.operation_type).to.be.undefined;
});

// Check that image metadata is not returned because uploaded file type is unsupported
pm.test("Image metadata is not returned", function () {
    pm.expect(response.image_metadata).to.be.undefined;
});

// Check that model is not returned because request was not processed
pm.test("Model is not returned", function () {
    pm.expect(response.model).to.be.undefined;
});


/* ==========================================
   ENVIRONMENT SAFETY VALIDATIONS
   ========================================== */

// Make sure invalid response does not overwrite remove background result image URL
pm.test("Do not save remove background result image URL for invalid file type", function () {
    pm.expect(response.result_image_url).to.be.undefined;
});

// Make sure invalid response does not overwrite edit image ID
pm.test("Do not save edit image id for invalid file type", function () {
    pm.expect(response.id).to.be.undefined;
});
