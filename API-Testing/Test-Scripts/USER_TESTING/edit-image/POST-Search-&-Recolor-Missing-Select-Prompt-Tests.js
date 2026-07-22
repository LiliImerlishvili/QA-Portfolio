/**
 * Postman Test Script
 * Request: Search & Recolor   Missing Select Prompt
 * Method: POST
 * Endpoint: {{domain}}/v2/edit-image/search-recolor
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
/* ==========================================
   SEARCH RECOLOR
   Negative Path - Missing Select Prompt
   ========================================== */

// Parse response body as JSON
const response = pm.response.json();


/* ==========================================
   BASIC NEGATIVE RESPONSE VALIDATIONS
   ========================================== */

// Check that API rejects request when select_prompt field is missing
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
pm.test("Error code is ValidationError", function () {
    pm.expect(response).to.have.property("code");
    pm.expect(response.code).to.eql("ValidationError");
});

// Check that message field exists and is returned as an array
pm.test("Error message array exists", function () {
    pm.expect(response).to.have.property("message");
    pm.expect(response.message).to.be.an("array").and.not.empty;
});


/* ==========================================
   SELECT PROMPT VALIDATION ERROR VALIDATIONS
   ========================================== */

// Get select_prompt validation error from response message array
const selectPromptError = response.message.find(function (error) {
    return Array.isArray(error.path) && error.path.includes("select_prompt");
});

// Check that validation error is returned specifically for select_prompt field
pm.test("Select prompt validation error exists", function () {
    pm.expect(selectPromptError).to.exist;
});

// Check that select_prompt field is required
pm.test("Select prompt field is required", function () {
    pm.expect(selectPromptError.message).to.eql("Required");
});

// Check that API expected select_prompt as string
pm.test("Select prompt expected type is string", function () {
    pm.expect(selectPromptError.expected).to.eql("string");
});

// Check that select_prompt was not sent in the request
pm.test("Select prompt received value is undefined", function () {
    pm.expect(selectPromptError.received).to.eql("undefined");
});

// Check that validation error code is invalid_type
pm.test("Select prompt error code is invalid_type", function () {
    pm.expect(selectPromptError.code).to.eql("invalid_type");
});

// Check that error path points to select_prompt field
pm.test("Error path is select_prompt", function () {
    pm.expect(selectPromptError.path).to.include("select_prompt");
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

// Check that operation type is not returned because search recolor was not processed
pm.test("Operation type is not returned", function () {
    pm.expect(response.operation_type).to.be.undefined;
});

// Check that operation params are not returned because request failed validation
pm.test("Operation params are not returned", function () {
    pm.expect(response.operation_params).to.be.undefined;
});

// Check that image metadata is not returned because request was not processed
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

// Make sure invalid response does not overwrite search recolor result image URL
pm.test("Do not save search recolor result image URL for invalid request", function () {
    pm.expect(response.result_image_url).to.be.undefined;
});

// Make sure invalid response does not overwrite search recolor edit image ID
pm.test("Do not save search recolor edit image id for invalid request", function () {
    pm.expect(response.id).to.be.undefined;
});
