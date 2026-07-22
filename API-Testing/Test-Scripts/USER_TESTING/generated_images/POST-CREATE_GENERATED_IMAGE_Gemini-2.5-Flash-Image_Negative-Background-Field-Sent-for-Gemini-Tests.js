/**
 * Postman Test Script
 * Request: CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative -Background Field Sent for Gemini
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
// This confirms that unsupported background field is rejected correctly
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
    pm.expect(requestBody).to.have.property("style");
    pm.expect(requestBody).to.have.property("aspectRatio");
    pm.expect(requestBody).to.have.property("background");
});

// Validate that request model is correct
// Prevents testing the wrong image model
pm.test("Request model is valid", function () {
    pm.expect(requestBody.model).to.eql("gemini-2.5-flash-image");
});

// Validate that prompt is provided as a non-empty string
// Ensures the failure is not caused by missing prompt
pm.test("Request prompt is valid", function () {
    pm.expect(requestBody.prompt).to.be.a("string");
    pm.expect(requestBody.prompt.trim().length).to.be.greaterThan(0);
});

// Validate that selected style is supported
// Ensures the failure is not caused by invalid style
pm.test("Request style is valid", function () {
    const allowedStyles = [
        "none",
        "3d_model",
        "3d_anime",
        "japanese_anime",
        "movie",
        "comic",
        "cyberpunk",
        "fantasy",
        "oil_painting",
        "colored_pencil",
        "pixel_art",
        "realistic",
        "watercolor"
    ];

    pm.expect(allowedStyles).to.include(requestBody.style);
});

// Validate that selected aspect ratio is supported
// Ensures the failure is not caused by invalid aspectRatio
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

// Validate that background field is sent for this negative test case
// Ensures this test case is testing unsupported background field validation
pm.test("Request contains unsupported background field", function () {
    pm.expect(requestBody).to.have.property("background");
    pm.expect(requestBody.background).to.eql("transparent");
});


// =======================================
// ERROR CONTRACT VALIDATION
// =======================================

// Validate that error response contains readable error information
// This ensures frontend can show a clear validation message to user
pm.test("Error response contains readable error message", function () {
    const errorMessage = getErrorMessage();

    pm.expect(errorMessage).to.be.a("string");
    pm.expect(errorMessage.trim().length).to.be.greaterThan(0);
});

// Validate that error response is related to unsupported background field
// This ensures backend returns correct validation reason
pm.test("Error message is related to unsupported background field", function () {
    const errorMessage = getErrorMessage().toLowerCase();

    pm.expect(
        errorMessage.includes("background") ||
        errorMessage.includes("unsupported") ||
        errorMessage.includes("invalid") ||
        errorMessage.includes("not allowed") ||
        errorMessage.includes("unknown") ||
        errorMessage.includes("unrecognized")
    ).to.be.true;
});


// =======================================
// NEGATIVE FLOW VALIDATION
// =======================================

// Validate that unsupported background field does not generate image
// This confirms unsupported background option is blocked by backend validation
pm.test("Unsupported background field does not generate image", function () {
    pm.expect(pm.response.code).to.eql(400);
    pm.expect(json).to.not.have.property("id");
    pm.expect(json).to.not.have.property("images");
    pm.expect(json).to.not.have.property("image_count");
});

// Validate that generated image id is not returned
// Unsupported background request should not create generated image entity
pm.test("Generated image id is not returned", function () {
    pm.expect(json).to.not.have.property("id");
});

// Validate that images array is not returned
// Unsupported background request should not return generated image data
pm.test("Images array is not returned", function () {
    pm.expect(json).to.not.have.property("images");
});

// Validate that image_count is not returned
// Unsupported background request should not return generated image count
pm.test("image_count is not returned", function () {
    pm.expect(json).to.not.have.property("image_count");
});
