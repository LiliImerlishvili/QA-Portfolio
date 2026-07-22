/**
 * Postman Test Script
 * Request: Upscale Missing image
 * Method: POST
 * Endpoint: {{domain}}/v2/edit-image/upscale
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
/* ==========================================
   UPSCALE
   Negative Path - Missing Image
   ========================================== */

// Parse response body as JSON
const response = pm.response.json();


/* ==========================================
   BASIC NEGATIVE RESPONSE VALIDATIONS
   ========================================== */

// Check that API rejects request when image field is missing
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
pm.test("Error type is RouteValidationError", function () {
    pm.expect(response).to.have.property("type");
    pm.expect(response.type).to.eql("RouteValidationError");
});

// Check that error code exists and is correct
pm.test("Error code is ImageRequired", function () {
    pm.expect(response).to.have.property("code");
    pm.expect(response.code).to.eql("ImageRequired");
});

// Check that error message exists and is correct
pm.test("Error message is Image is required", function () {
    pm.expect(response).to.have.property("message");
    pm.expect(response.message).to.eql("Image is required");
});


/* ==========================================
   IMAGE PROCESSING NEGATIVE VALIDATIONS
   ========================================== */

// Check that result image URL is not returned because request is invalid
pm.test("Result image URL is not returned", function () {
    pm.expect(response.result_image_url).to.be.undefined;
});

// Check that subject image URL is not returned because image was not uploaded
pm.test("Subject image URL is not returned", function () {
    pm.expect(response.subject_image_url).to.be.undefined;
});

// Check that operation type is not returned because upscale was not processed
pm.test("Operation type is not returned", function () {
    pm.expect(response.operation_type).to.be.undefined;
});

// Check that operation params are not returned because request failed validation
pm.test("Operation params are not returned", function () {
    pm.expect(response.operation_params).to.be.undefined;
});

// Check that image metadata is not returned because image was not uploaded
pm.test("Image metadata is not returned", function () {
    pm.expect(response.image_metadata).to.be.undefined;
});

// Check that model is not returned because request was not processed
pm.test("Model is not returned", function () {
    pm.expect(response.model).to.be.undefined;
});
