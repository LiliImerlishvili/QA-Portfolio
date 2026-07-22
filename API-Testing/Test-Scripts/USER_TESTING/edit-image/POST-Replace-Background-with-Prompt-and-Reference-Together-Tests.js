/**
 * Postman Test Script
 * Request: Replace Background with Prompt and Reference Together
 * Method: POST
 * Endpoint: {{domain}}/v2/edit-image/replace-background
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
/* ==========================================
   REPLACE BACKGROUND
   Negative Path - Prompt and Reference Used Together
   ========================================== */

// Parse response body as JSON
const response = pm.response.json();


/* ==========================================
   BASIC NEGATIVE RESPONSE VALIDATIONS
   ========================================== */

// Check that API rejects request when background_prompt and background_reference are used together
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
pm.test("Error type is RouteError", function () {
    pm.expect(response).to.have.property("type");
    pm.expect(response.type).to.eql("RouteError");
});

// Check that error code exists and is correct
pm.test("Error code is ValidationError", function () {
    pm.expect(response).to.have.property("code");
    pm.expect(response.code).to.eql("ValidationError");
});

// Check that error message exists and is not empty
pm.test("Error message exists", function () {
    pm.expect(response).to.have.property("message");
    pm.expect(response.message).to.be.a("string").and.not.empty;
});

// Check that error message explains prompt and reference conflict
pm.test("Error message explains prompt and reference cannot be used together", function () {
    pm.expect(response.message).to.eql("Background prompt and background reference image cannot be used together");
});


/* ==========================================
   BACKGROUND INPUT CONFLICT VALIDATIONS
   ========================================== */

// Check that validation error is related to background_prompt
pm.test("Error message mentions background prompt", function () {
    pm.expect(response.message).to.include("Background prompt");
});

// Check that validation error is related to background_reference image
pm.test("Error message mentions background reference image", function () {
    pm.expect(response.message).to.include("background reference image");
});

// Check that API does not allow both background inputs together
pm.test("Prompt and reference conflict is rejected", function () {
    pm.expect(response.message).to.include("cannot be used together");
});


/* ==========================================
   IMAGE PROCESSING NEGATIVE VALIDATIONS
   ========================================== */

// Check that result image URL is not returned because request is invalid
pm.test("Result image URL is not returned", function () {
    pm.expect(response.result_image_url).to.be.undefined;
});

// Check that subject image URL is not returned because request was not processed
pm.test("Subject image URL is not returned", function () {
    pm.expect(response.subject_image_url).to.be.undefined;
});

// Check that operation type is not returned because replace background was not processed
pm.test("Operation type is not returned", function () {
    pm.expect(response.operation_type).to.be.undefined;
});

// Check that image metadata is not returned because request failed validation
pm.test("Image metadata is not returned", function () {
    pm.expect(response.image_metadata).to.be.undefined;
});

// Check that model is not returned because image generation was not processed
pm.test("Model is not returned", function () {
    pm.expect(response.model).to.be.undefined;
});


/* ==========================================
   ENVIRONMENT SAFETY VALIDATIONS
   ========================================== */

// Make sure invalid response does not overwrite replace background result image URL
pm.test("Do not save replace background result image URL for invalid request", function () {
    pm.expect(response.result_image_url).to.be.undefined;
});

// Make sure invalid response does not overwrite replace background edit image ID
pm.test("Do not save replace background edit image id for invalid request", function () {
    pm.expect(response.id).to.be.undefined;
});
