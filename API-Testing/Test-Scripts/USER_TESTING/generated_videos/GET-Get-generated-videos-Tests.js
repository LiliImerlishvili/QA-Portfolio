/**
 * Postman Test Script
 * Request: Get generated videos
 * Method: GET
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

// Validate URL format
// This helps confirm that generated video links are returned correctly
function isValidUrl(value) {
    return typeof value === "string" && value.startsWith("http");
}


// ========================================
// BASIC RESPONSE VALIDATION
// ========================================

// Verify that API returns successful HTTP status
// This confirms generated videos list request was processed successfully
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


// ========================================
// RESPONSE STRUCTURE VALIDATION
// ========================================

// Validate that response body is not empty
// This confirms API returns a valid response body
pm.test("Response body is not empty", function () {
    pm.expect(json).to.not.be.undefined;
    pm.expect(json).to.not.be.null;
});

// Validate response structure
// This supports both direct array response and wrapped object response
pm.test("Response has valid structure", function () {
    const isArrayResponse = Array.isArray(json);
    const isObjectResponse = typeof json === "object" && json !== null;

    pm.expect(isArrayResponse || isObjectResponse).to.eql(true);
});


// ========================================
// GENERATED VIDEOS LIST VALIDATION
// ========================================

// Get videos list from possible response formats
// This makes the script flexible if API returns array directly or inside data/items/videos
const videosList = Array.isArray(json)
    ? json
    : json.data || json.items || json.videos || [];

// Validate that generated videos list is an array
// This confirms API returns list structure
pm.test("Generated videos list is an array", function () {
    pm.expect(videosList).to.be.an("array");
});

// Validate that generated videos list is not empty
// This confirms at least one generated video exists for the user
pm.test("Generated videos list is not empty", function () {
    pm.expect(videosList.length).to.be.greaterThan(0);
});


// ========================================
// GENERATED VIDEO ITEM VALIDATION
// ========================================

// Validate required fields for each generated video item
// This ensures each generated video has the expected response contract
pm.test("Each generated video item has required fields", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem).to.have.property("id");
        pm.expect(videoItem).to.have.property("prompt");
        pm.expect(videoItem).to.have.property("user_id");
        pm.expect(videoItem).to.have.property("model");
        pm.expect(videoItem).to.have.property("videos");
        pm.expect(videoItem).to.have.property("video_count");
        pm.expect(videoItem).to.have.property("created_at");
        pm.expect(videoItem).to.have.property("deleted_at");
    });
});

// Validate field types for each generated video item
// This prevents issues caused by unexpected response data types
pm.test("Each generated video item field types are correct", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.id).to.be.a("string");
        pm.expect(videoItem.prompt).to.be.a("string");
        pm.expect(videoItem.user_id).to.be.a("string");
        pm.expect(videoItem.model).to.be.a("string");
        pm.expect(videoItem.videos).to.be.an("array");
        pm.expect(videoItem.video_count).to.be.a("number");
    });
});

// Validate that each generated video id is not empty
// This confirms each generated video record has valid identifier
pm.test("Each generated video id is not empty", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.id.trim().length).to.be.greaterThan(0);
    });
});

// Validate that each generated video prompt is not empty
// This confirms prompt data is returned correctly
pm.test("Each generated video prompt is not empty", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.prompt.trim().length).to.be.greaterThan(0);
    });
});

// Validate that each generated video model is not empty
// This confirms model data is returned correctly
pm.test("Each generated video model is not empty", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.model.trim().length).to.be.greaterThan(0);
    });
});


// ========================================
// VIDEO URL VALIDATION
// ========================================

// Validate that each item contains videos array
// This confirms generated video URLs are returned in list response
pm.test("Each item videos array is valid", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.videos).to.be.an("array");
    });
});

// Validate each video URL
// This confirms generated video file links are valid
pm.test("Each video URL is valid", function () {
    videosList.forEach(function (videoItem) {
        videoItem.videos.forEach(function (videoUrl) {
            pm.expect(videoUrl).to.be.a("string");
            pm.expect(isValidUrl(videoUrl)).to.eql(true);
        });
    });
});

// Validate that each video URL is MP4 file
// This confirms generated output format is video file
pm.test("Each video URL is mp4 file", function () {
    videosList.forEach(function (videoItem) {
        videoItem.videos.forEach(function (videoUrl) {
            pm.expect(videoUrl).to.include(".mp4");
        });
    });
});

// Validate that video_count matches videos array length
// This confirms returned count is consistent with actual videos array
pm.test("video_count matches videos array length for each item", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.video_count).to.eql(videoItem.videos.length);
    });
});


// ========================================
// DATE FIELD VALIDATION
// ========================================

// Validate that created_at exists for each generated video
// This confirms creation date is returned for generated videos
pm.test("Each generated video has created_at value", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem.created_at).to.be.a("string");
        pm.expect(videoItem.created_at.trim().length).to.be.greaterThan(0);
    });
});

// Validate deleted_at field exists for each generated video
// This confirms deletion status field is included in response contract
pm.test("Each generated video has deleted_at field", function () {
    videosList.forEach(function (videoItem) {
        pm.expect(videoItem).to.have.property("deleted_at");
    });
});


// ========================================
// OPTIONAL FILES FIELD VALIDATION
// ========================================

// Validate files field only if it exists
// GET list response may not include files field for each item
pm.test("Files field is valid if returned", function () {
    videosList.forEach(function (videoItem) {
        if (videoItem.hasOwnProperty("files")) {
            pm.expect(videoItem.files).to.be.an("array");
        }
    });
});


// ========================================
// ERROR PROTECTION VALIDATION
// ========================================

// Validate that successful list response does not return validation error
// This confirms GET request is not treated as failed validation
pm.test("Response does not contain validation error fields", function () {
    pm.expect(json.type).to.be.undefined;
    pm.expect(json.code).to.be.undefined;
    pm.expect(json.message).to.be.undefined;
});
