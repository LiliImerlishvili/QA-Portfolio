/**
 * Postman Test Script
 * Request: Generate Video_veo-3.0- Empty Prompt
 * Method: POST
 * Endpoint: {{domain}}/v1/generated_videos
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ========================================
// HELPER FUNCTIONS
// ========================================

// Safely parse response JSON
// This helps avoid script crash if response is not valid JSON
function getResponseJson() {
    try {
        return pm.response.json();
    } catch (error) {
        return {};
    }
}

// Safely parse request body JSON
// This helps validate the exact data that was sent in request body
function getRequestBody() {
    try {
        return JSON.parse(pm.request.body.raw);
    } catch (error) {
        return {};
    }
}

// Extract readable error message from failed response
// This helps identify the exact validation reason
function getErrorMessage() {
    try {
        const errorJson = pm.response.json();

        if (Array.isArray(errorJson.message)) {
            return errorJson.message
                .map(error => error.message || JSON.stringify(error))
                .join(" | ");
        }

        if (errorJson.message && typeof errorJson.message === "string") {
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

        return JSON.stringify(errorJson);
    } catch (error) {
        return pm.response.text();
    }
}


// ========================================
// BASIC RESPONSE VALIDATION
// ========================================

// Verify that API returns validation error HTTP status
// This confirms empty prompt is rejected correctly
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
const json = getResponseJson();

// Parse request body once and reuse it across request validation tests
// This helps validate that empty prompt was actually sent
const requestBody = getRequestBody();


// ========================================
// REQUEST BODY VALIDATION
// ========================================

// Validate that request body required fields exist
// This ensures test request contract is correct
pm.test("Request body required fields exist", function () {
    pm.expect(requestBody).to.have.property("prompt");
    pm.expect(requestBody).to.have.property("model");
    pm.expect(requestBody).to.have.property("aspectRatio");
    pm.expect(requestBody).to.have.property("durationSeconds");
});

// Validate that prompt is empty for this negative test
// This confirms the exact negative scenario being tested
pm.test("Request prompt is empty", function () {
    pm.expect(requestBody.prompt).to.be.a("string");
    pm.expect(requestBody.prompt).to.eql("");
});

// Validate that selected model is veo-3.0-fast
// This confirms negative test is executed only for expected video model
pm.test("Request model is veo-3.0-fast", function () {
    pm.expect(requestBody.model).to.be.a("string");
    pm.expect(requestBody.model).to.eql("veo-3.0");
});

// Validate that aspectRatio is valid
// This confirms failure is caused by empty prompt, not aspectRatio
pm.test("Request aspectRatio is valid", function () {
    const allowedAspectRatios = [
        "16:9",
        "9:16"
    ];

    pm.expect(allowedAspectRatios).to.include(requestBody.aspectRatio);
});

// Validate that durationSeconds is valid
// This confirms failure is caused by empty prompt, not duration
pm.test("Request durationSeconds is valid", function () {
    pm.expect(requestBody.durationSeconds).to.be.a("number");
    pm.expect(requestBody.durationSeconds).to.eql(5);
});


// ========================================
// OPTIONAL IMAGE OBJECT VALIDATION
// ========================================

// Validate image object only if it is provided
// This confirms failure is caused by empty prompt, not reference image
pm.test("Request image object is valid if provided", function () {
    if (requestBody.image) {
        pm.expect(requestBody.image).to.be.an("object");
        pm.expect(requestBody.image).to.have.property("mimeType");
        pm.expect(requestBody.image).to.have.property("url");
    }
});

// Validate image mimeType if image object exists
// This confirms image format is supported
pm.test("Request image mimeType is valid if image is provided", function () {
    if (requestBody.image) {
        const allowedMimeTypes = [
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/webp"
        ];

        pm.expect(allowedMimeTypes).to.include(requestBody.image.mimeType);
    }
});

// Validate image URL if image object exists
// This confirms image URL is correct
pm.test("Request image URL is valid if image is provided", function () {
    if (requestBody.image) {
        pm.expect(requestBody.image.url).to.be.a("string");
        pm.expect(requestBody.image.url).to.include("http");
    }
});


// ========================================
// ERROR CONTRACT VALIDATION
// ========================================

// Validate that all required error response fields exist
// This ensures API error response contract consistency
pm.test("Error response required fields exist", function () {
    pm.expect(json).to.have.property("type");
    pm.expect(json).to.have.property("code");
    pm.expect(json).to.have.property("message");
});

// Validate error response field types
// This prevents issues caused by unexpected error response structure
pm.test("Error response field types are correct", function () {
    pm.expect(json.type).to.be.a("string");
    pm.expect(json.code).to.be.a("string");
    pm.expect(json.message).to.be.an("array");
});

// Validate response type
// This confirms backend returns route validation error type
pm.test("Response type is RouteValidationError", function () {
    pm.expect(json.type).to.eql("RouteValidationError");
});

// Validate response code
// This confirms backend returns validation error code
pm.test("Response code is ValidationError", function () {
    pm.expect(json.code).to.eql("ValidationError");
});

// Validate that message array is not empty
// This confirms validation error details are returned
pm.test("Message array is not empty", function () {
    pm.expect(json.message.length).to.be.greaterThan(0);
});


// ========================================
// MESSAGE OBJECT VALIDATION
// ========================================

// Validate that required fields exist inside message object
// This ensures response structure is complete
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
// This prevents issues caused by incorrect data types
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

// Validate exact validation error code
// This confirms empty prompt is rejected because string is too small
pm.test("Validation code is too_small", function () {
    pm.expect(json.message[0].code).to.eql("too_small");
});

// Validate minimum prompt length
// This confirms prompt must contain at least one character
pm.test("Prompt minimum length is 1", function () {
    pm.expect(json.message[0].minimum).to.eql(1);
});

// Validate validation type
// This confirms prompt is validated as string
pm.test("Validation type is string", function () {
    pm.expect(json.message[0].type).to.eql("string");
});

// Validate exact prompt validation message
// This confirms backend returns expected user-facing validation message
pm.test("Prompt validation message is correct", function () {
    pm.expect(json.message[0].message).to.eql("Prompt is required");
});

// Validate prompt validation path
// This confirms validation error points to the correct request field
pm.test("Validation path is prompt", function () {
    pm.expect(json.message[0].path).to.include("prompt");
});


// ========================================
// NEGATIVE FLOW VALIDATION
// ========================================

// Validate that empty prompt does not generate video
// This confirms invalid request does not create generated video entity
pm.test("Generated video id is not returned", function () {
    pm.expect(json).to.not.have.property("id");
});

// Validate that videos array is not returned
// Empty prompt request should not return generated video data
pm.test("Videos array is not returned", function () {
    pm.expect(json).to.not.have.property("videos");
});

// Validate that video_count is not returned
// Empty prompt request should not return generated video count
pm.test("video_count is not returned", function () {
    pm.expect(json).to.not.have.property("video_count");
});

// Validate that user_id is not returned
// Empty prompt request should not create user-related generation result
pm.test("user_id is not returned", function () {
    pm.expect(json).to.not.have.property("user_id");
});

// Validate that created_at is not returned
// Empty prompt request should not create generation timestamp
pm.test("created_at is not returned", function () {
    pm.expect(json).to.not.have.property("created_at");
});

// Validate that generated files are not returned
// Empty prompt request should not return generated output files
pm.test("Generated files are not returned", function () {
    pm.expect(json).to.not.have.property("files");
});


// ========================================
// RESPONSE SAFETY VALIDATION
// ========================================

// Validate that empty prompt does not return MP4 URL
// This confirms no video file is generated for invalid data
pm.test("MP4 video URL is not returned", function () {
    const responseText = JSON.stringify(json).toLowerCase();

    pm.expect(responseText).to.not.include(".mp4");
});

// Validate that empty prompt does not return S3 video link
// This confirms no uploaded video asset is created
pm.test("S3 video URL is not returned", function () {
    const responseText = JSON.stringify(json).toLowerCase();

    pm.expect(responseText).to.not.include("amazonaws.com");
});

// Validate readable error message
// This helps confirm exact validation feedback is available
pm.test("Readable error message contains prompt required text", function () {
    const errorMessage = getErrorMessage().toLowerCase();

    pm.expect(errorMessage).to.include("prompt is required");
});
