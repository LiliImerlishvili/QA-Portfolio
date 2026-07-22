/**
 * Postman Test Script
 * Request: CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative - Empty Prompt
 * Method: POST
 * Endpoint: {{domain}}/v2/generated_images
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// =======================================
// HELPER FUNCTIONS
// =======================================

// Extract readable error message from failed response
// This helps identify the exact reason of failed image generation
function getErrorMessage() {
    try {
        const errorJson = pm.response.json();

        if (Array.isArray(errorJson.message)) {
            return errorJson.message
                .map(error => error.message || JSON.stringify(error))
                .join(" | ");
        }

        if (errorJson.message) {
            return errorJson.message;
        }

        if (errorJson.error && typeof errorJson.error === "string") {
            return errorJson.error;
        }

        if (errorJson.error && errorJson.error.message) {
            return errorJson.error.message;
        }

        if (errorJson.detail) {
            return errorJson.detail;
        }

        if (
            errorJson.errors &&
            Array.isArray(errorJson.errors) &&
            errorJson.errors.length > 0
        ) {
            return errorJson.errors
                .map(error => error.message || JSON.stringify(error))
                .join(" | ");
        }

        return JSON.stringify(errorJson);
    } catch (e) {
        return pm.response.text() || "Request failed with non-JSON response";
    }
}


// =======================================
// BASIC RESPONSE VALIDATION
// =======================================

// Verify that the API returns validation error HTTP status
// This confirms that empty prompt is rejected correctly
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

// Ensure that response is in valid JSON format
// Important because frontend and other services depend on structured JSON
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response body once and reuse it across all tests
// This improves performance and keeps code clean
const json = pm.response.json();

// Parse request body once and reuse it across request validation tests
// This helps validate that sent invalid data was actually sent
const requestBody = JSON.parse(pm.request.body.raw);


// =======================================
// REQUEST BODY VALIDATION
// =======================================

// Validate that all required request fields exist
// This ensures request contract consistency before checking response data
pm.test("Request body required fields exist", function () {
    pm.expect(requestBody).to.have.property("model");
    pm.expect(requestBody).to.have.property("prompt");
    pm.expect(requestBody).to.have.property("aspectRatio");
    pm.expect(requestBody).to.have.property("resolution");
});

// Validate that request model is correct
// Prevents testing the wrong image model
pm.test("Request model is valid", function () {
    pm.expect(requestBody.model).to.eql("gemini-3-pro-image-preview");
});

// Validate that prompt is empty for this negative test case
// Ensures this test case is testing empty prompt validation
pm.test("Request prompt is empty", function () {
    pm.expect(requestBody.prompt).to.be.a("string");
    pm.expect(requestBody.prompt).to.eql("");
});

// Validate that selected aspect ratio is supported
// Ensures the failure is caused by empty prompt, not aspectRatio
pm.test("Request aspectRatio is valid", function () {
    const allowedAspectRatios = [
        "auto",
        "1:1",
        "9:16",
        "16:9",
        "3:4",
        "4:3",
        "3:2",
        "2:3",
        "5:4",
        "4:5",
        "21:9"
    ];

    pm.expect(allowedAspectRatios).to.include(requestBody.aspectRatio);
});

// Validate that selected resolution is supported
// Ensures the failure is caused by empty prompt, not resolution
pm.test("Request resolution is valid", function () {
    const allowedResolutions = [
        "1K",
        "2K",
        "4K"
    ];

    pm.expect(allowedResolutions).to.include(requestBody.resolution);
});


// =======================================
// ERROR CONTRACT VALIDATION
// =======================================

// Validate that all required error response fields exist
// This ensures API error contract consistency
pm.test("Error response required fields exist", function () {
    pm.expect(json).to.have.property("type");
    pm.expect(json).to.have.property("code");
    pm.expect(json).to.have.property("message");
});

// Validate that response type matches validation error type
// Prevents mismatches between validation failure and response type
pm.test("Response type is RouteValidationError", function () {
    pm.expect(json.type).to.eql("RouteValidationError");
});

// Validate that response code matches validation error code
// Ensures backend returns correct validation error code
pm.test("Response code is ValidationError", function () {
    pm.expect(json.code).to.eql("ValidationError");
});

// Ensure that message field is returned as an array
// Required before validating nested validation error fields
pm.test("Message is an array", function () {
    pm.expect(json.message).to.be.an("array");
});

// Validate that message array is not empty
// Ensures validation error details are returned
pm.test("Message array is not empty", function () {
    pm.expect(json.message.length).to.be.greaterThan(0);
});


// =======================================
// MESSAGE OBJECT VALIDATION
// =======================================

// Validate that required fields exist inside message object
// Ensures response structure is complete
pm.test("Message object required fields exist", function () {
    const error = json.message[0];

    pm.expect(error).to.have.property("code");
    pm.expect(error).to.have.property("minimum");
    pm.expect(error).to.have.property("type");
    pm.expect(error).to.have.property("inclusive");
    pm.expect(error).to.have.property("exact");
    pm.expect(error).to.have.property("message");
    pm.expect(error).to.have.property("path");
});

// Validate data types of message object fields
// Prevents issues caused by incorrect data types
pm.test("Message object field types are correct", function () {
    const error = json.message[0];

    pm.expect(error.code).to.be.a("string");
    pm.expect(error.minimum).to.be.a("number");
    pm.expect(error.type).to.be.a("string");
    pm.expect(error.inclusive).to.be.a("boolean");
    pm.expect(error.exact).to.be.a("boolean");
    pm.expect(error.message).to.be.a("string");
    pm.expect(error.path).to.be.an("array");
});

// Validate that validation error is related to prompt
// Ensures backend returns correct validation reason
pm.test("Error message is related to empty prompt", function () {
    const errorMessage = getErrorMessage().toLowerCase();

    pm.expect(
        errorMessage.includes("prompt") ||
        errorMessage.includes("required")
    ).to.be.true;
});

// Validate exact prompt validation message
// Ensures backend returns expected user-facing validation message
pm.test("Prompt validation message is correct", function () {
    pm.expect(json.message[0].message).to.eql("Prompt is required");
});

// Validate prompt validation path
// Ensures validation error points to the correct request field
pm.test("Validation path is prompt", function () {
    pm.expect(json.message[0].path).to.include("prompt");
});


// =======================================
// NEGATIVE FLOW VALIDATION
// =======================================

// Validate that empty prompt does not generate image
// This confirms missing prompt is blocked by backend validation
pm.test("Empty prompt does not generate image", function () {
    pm.expect(json).to.not.have.property("id");
    pm.expect(json).to.not.have.property("images");
    pm.expect(json).to.not.have.property("image_count");
});

// Validate that generated image id is not returned
// Empty prompt request should not create generated image entity
pm.test("Generated image id is not returned", function () {
    pm.expect(json).to.not.have.property("id");
});

// Validate that images array is not returned
// Empty prompt request should not return generated image data
pm.test("Images array is not returned", function () {
    pm.expect(json).to.not.have.property("images");
});

// Validate that image_count is not returned
// Empty prompt request should not return generated image count
pm.test("image_count is not returned", function () {
    pm.expect(json).to.not.have.property("image_count");
});
