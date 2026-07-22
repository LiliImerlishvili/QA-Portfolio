/**
 * Postman Test Script
 * Request: Generate Video_veo-2.0
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

// Validate URL format
// This helps confirm that generated video link is returned correctly
function isValidUrl(value) {
    return typeof value === "string" && value.startsWith("http");
}

// ========================================
// BASIC RESPONSE VALIDATION
// ========================================

// Verify that API returns successful HTTP status
// This confirms video generation request was accepted and processed
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
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
// This helps compare sent request data with returned response data
const requestBody = getRequestBody();


// ========================================
// REQUEST BODY VALIDATION
// ========================================

// Validate that all required request fields exist
// This ensures request contract consistency before checking response data
pm.test("Request body required fields exist", function () {
    pm.expect(requestBody).to.have.property("prompt");
    pm.expect(requestBody).to.have.property("model");
    pm.expect(requestBody).to.have.property("aspectRatio");
    pm.expect(requestBody).to.have.property("durationSeconds");
});

// Validate that prompt is sent as a non-empty string
// This confirms video description was provided
pm.test("Request prompt is valid", function () {
    pm.expect(requestBody.prompt).to.be.a("string");
    pm.expect(requestBody.prompt.trim().length).to.be.greaterThan(0);
});

// Validate that selected model is veo-2.0
// This confirms request is sent only with the expected video generation model
pm.test("Request model is veo-2.0", function () {
    pm.expect(requestBody.model).to.be.a("string");
    pm.expect(requestBody.model).to.eql("veo-2.0");
});

// Validate that selected aspect ratio is supported
// This confirms only supported video layout values are sent
pm.test("Request aspectRatio is valid", function () {
    const allowedAspectRatios = [
        "16:9",
        "9:16"
    ];

    pm.expect(allowedAspectRatios).to.include(requestBody.aspectRatio);
});

// Validate that durationSeconds is valid
// This confirms video duration is sent as a positive number
pm.test("Request durationSeconds is valid", function () {
    pm.expect(requestBody.durationSeconds).to.be.a("number");
    pm.expect(requestBody.durationSeconds).to.be.greaterThan(0);
});

// Validate that durationSeconds has expected value
// This confirms request is sent with expected video duration
pm.test("Request durationSeconds is 5", function () {
    pm.expect(requestBody.durationSeconds).to.eql(5);
});


// ========================================
// OPTIONAL IMAGE OBJECT VALIDATION
// ========================================

// Validate image object only if it is provided
// Reference image is optional, so test should not fail when image is missing
pm.test("Request image object is valid if provided", function () {
    if (requestBody.image) {
        pm.expect(requestBody.image).to.be.an("object");
        pm.expect(requestBody.image).to.have.property("mimeType");
        pm.expect(requestBody.image).to.have.property("url");

        const allowedMimeTypes = [
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/webp"
        ];

        pm.expect(allowedMimeTypes).to.include(requestBody.image.mimeType);
        pm.expect(isValidUrl(requestBody.image.url)).to.eql(true);
    }
});

// Validate image mimeType if image object exists
// This confirms uploaded reference image format is supported
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
// This confirms reference image URL is sent correctly
pm.test("Request image URL is valid if image is provided", function () {
    if (requestBody.image) {
        pm.expect(requestBody.image.url).to.be.a("string");
        pm.expect(isValidUrl(requestBody.image.url)).to.eql(true);
    }
});


// ========================================
// RESPONSE CONTRACT VALIDATION
// ========================================

// Validate that all required response fields exist
// This ensures API response contract consistency
pm.test("Response required fields exist", function () {
    pm.expect(json).to.have.property("id");
    pm.expect(json).to.have.property("prompt");
    pm.expect(json).to.have.property("user_id");
    pm.expect(json).to.have.property("model");
    pm.expect(json).to.have.property("videos");
    pm.expect(json).to.have.property("video_count");
    pm.expect(json).to.have.property("created_at");
    pm.expect(json).to.have.property("deleted_at");
    pm.expect(json).to.have.property("files");
});

// Validate response field data types
// This prevents issues caused by unexpected response structure
pm.test("Response field types are correct", function () {
    pm.expect(json.id).to.be.a("string");
    pm.expect(json.prompt).to.be.a("string");
    pm.expect(json.user_id).to.be.a("string");
    pm.expect(json.model).to.be.a("string");
    pm.expect(json.videos).to.be.an("array");
    pm.expect(json.video_count).to.be.a("number");
    pm.expect(json.files).to.be.an("array");
});

// Validate that generated video id is returned
// This confirms generated video entity was created
pm.test("Generated video id is returned", function () {
    pm.expect(json.id.trim().length).to.be.greaterThan(0);
});

// Validate that user_id is returned
// This confirms generated video is connected to a user
pm.test("User id is returned", function () {
    pm.expect(json.user_id.trim().length).to.be.greaterThan(0);
});

// Validate that prompt is returned
// This confirms response contains generated video prompt
pm.test("Prompt is returned", function () {
    pm.expect(json.prompt.trim().length).to.be.greaterThan(0);
});

// Validate that model is returned
// This confirms response contains used video generation model
pm.test("Model is returned", function () {
    pm.expect(json.model.trim().length).to.be.greaterThan(0);
});

// Validate that created_at is returned
// This confirms generated video creation date is stored
pm.test("created_at is returned", function () {
    pm.expect(json.created_at).to.be.a("string");
    pm.expect(json.created_at.trim().length).to.be.greaterThan(0);
});

// Validate deleted_at field exists
// This confirms response contract includes deletion status field
pm.test("deleted_at field exists", function () {
    pm.expect(json).to.have.property("deleted_at");
});


// ========================================
// REQUEST AND RESPONSE MATCH VALIDATION
// ========================================

// Validate that response prompt matches request prompt
// This confirms backend returns the same prompt that was sent
pm.test("Response prompt matches request prompt", function () {
    pm.expect(json.prompt).to.eql(requestBody.prompt);
});

// Validate that response model matches request model
// This confirms backend returns the same model that was sent
pm.test("Response model matches request model", function () {
    pm.expect(json.model).to.eql(requestBody.model);
});

// Validate that response model is veo-2.0
// This confirms backend processed the request with the expected model
pm.test("Response model is veo-2.0", function () {
    pm.expect(json.model).to.be.a("string");
    pm.expect(json.model).to.eql("veo-2.0");
});


// ========================================
// VIDEO ARRAY VALIDATION
// ========================================

// Validate that videos field is returned as an array
// This confirms response contains video list structure
pm.test("Videos field is an array", function () {
    pm.expect(json.videos).to.be.an("array");
});

// Validate that videos array is not empty
// This confirms video generation returned at least one video
pm.test("Videos array is not empty", function () {
    pm.expect(json.videos.length).to.be.greaterThan(0);
});

// Validate each video URL
// This confirms generated video file links are returned correctly
pm.test("Each video URL is valid", function () {
    json.videos.forEach(function (videoUrl) {
        pm.expect(videoUrl).to.be.a("string");
        pm.expect(isValidUrl(videoUrl)).to.eql(true);
    });
});

// Validate that each video URL is MP4 file
// This confirms generated output format is video file
pm.test("Each video URL is mp4 file", function () {
    json.videos.forEach(function (videoUrl) {
        pm.expect(videoUrl).to.include(".mp4");
    });
});

// Validate that video_count matches videos array length
// This confirms count value is consistent with returned videos
pm.test("video_count matches videos array length", function () {
    pm.expect(json.video_count).to.eql(json.videos.length);
});

// Validate that video_count is greater than zero
// This confirms generated video count is positive
pm.test("video_count is greater than zero", function () {
    pm.expect(json.video_count).to.be.greaterThan(0);
});


// ========================================
// FILES FIELD VALIDATION
// ========================================

// Validate that files field is returned as array
// This confirms response structure remains stable even when files are empty
pm.test("Files field is an array", function () {
    pm.expect(json.files).to.be.an("array");
});


// ========================================
// NEGATIVE FLOW PROTECTION
// ========================================

// Validate that success response does not return validation error type
// This confirms successful request is not treated as validation failure
pm.test("Success response does not contain validation error type", function () {
    pm.expect(json.type).to.be.undefined;
    pm.expect(json.code).to.be.undefined;
    pm.expect(json.message).to.be.undefined;
});

// Validate that generated video response does not return image-specific fields
// This confirms video generation endpoint returns video-related data
pm.test("Image-specific fields are not returned", function () {
    pm.expect(json).to.not.have.property("images");
    pm.expect(json).to.not.have.property("image_count");
});
