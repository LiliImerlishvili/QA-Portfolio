/**
 * Postman Test Script
 * Request: GET_GENERATED_IMAGES_with_ID
 * Method: GET
 * Endpoint: {{domain}}/v1/generated_images/{{img_id}}
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// =======================================
// BASIC RESPONSE VALIDATION
// =======================================

// Verify that the API returns successful HTTP status
// This confirms that the GET by ID request was processed correctly
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
const json = pm.response.json();


// =======================================
// RESPONSE BODY VALIDATION
// =======================================

// Validate that all required top-level fields exist in the response
// This ensures generated image item structure is complete
pm.test("Generated image required fields exist", function () {
    pm.expect(json).to.have.property("id");
    pm.expect(json).to.have.property("prompt");
    pm.expect(json).to.have.property("user_id");
    pm.expect(json).to.have.property("images");
    pm.expect(json).to.have.property("created_at");
    pm.expect(json).to.have.property("deleted_at");
    pm.expect(json).to.have.property("model");
    pm.expect(json).to.have.property("image_count");
});

// Validate generated image ID format
// Helps detect incorrect or broken ID format
pm.test("Generated image ID format is valid", function () {
    pm.expect(json.id).to.be.a("string");
    pm.expect(json.id).to.match(/^genimg_[0-9a-fA-F-]+$/);
});

// Validate user_id format
// Helps confirm image belongs to a valid user entity
pm.test("user_id format is valid", function () {
    pm.expect(json.user_id).to.be.a("string");
    pm.expect(json.user_id).to.match(/^usr_[0-9a-fA-F-]+$/);
});

// Validate prompt is returned
// Ensures generated image record contains prompt data
pm.test("Prompt is valid", function () {
    pm.expect(json.prompt).to.be.a("string");
    pm.expect(json.prompt.trim().length).to.be.greaterThan(0);
});

// Validate model is returned
// Ensures generated image record contains model data
pm.test("Model is valid", function () {
    pm.expect(json.model).to.be.a("string");
    pm.expect(json.model.trim().length).to.be.greaterThan(0);
});


// =======================================
// IMAGES VALIDATION
// =======================================

// Ensure that images field is returned as an array
// Required before validating generated image URLs
pm.test("Images is an array", function () {
    pm.expect(json.images).to.be.an("array");
});

// Validate that images array is not empty
// Ensures generated image record contains at least one image
pm.test("Images array is not empty", function () {
    pm.expect(json.images.length).to.be.greaterThan(0);
});

// Validate that every image is a valid URL
// Ensures generated images can be opened from returned links
pm.test("Image URLs are valid", function () {
    json.images.forEach(function (image, index) {
        pm.expect(image, "Image at index " + index).to.be.a("string");
        pm.expect(image, "Image at index " + index + " is not a valid URL")
            .to.match(/^https?:\/\/.+/);
    });
});

// Validate image_count field type
// Prevents issues caused by incorrect data types
pm.test("image_count type is correct", function () {
    pm.expect(json.image_count).to.be.a("number");
});

// Validate image_count matches images array length
// Ensures backend count field is consistent with real data
pm.test("image_count matches images array length", function () {
    pm.expect(json.image_count).to.eql(json.images.length);
});


// =======================================
// TIMESTAMP & OPTIONAL FIELD VALIDATION
// =======================================

// Validate created_at is a valid ISO date string
// Ensures correct date formatting from backend
pm.test("created_at is valid ISO date", function () {
    pm.expect(json.created_at).to.be.a("string");
    pm.expect(!isNaN(Date.parse(json.created_at))).to.be.true;
});

// deleted_at can be null or valid date
// If not null, validate its format
pm.test("deleted_at is null or valid ISO date", function () {
    if (json.deleted_at !== null) {
        pm.expect(json.deleted_at).to.be.a("string");
        pm.expect(!isNaN(Date.parse(json.deleted_at))).to.be.true;
    }
});


// =======================================
// ENVIRONMENT VARIABLE VALIDATION
// =======================================

// Validate that returned ID matches requested ID
// This confirms GET by ID returned the expected generated image record
pm.test("Returned generated image ID matches requested ID", function () {
    const requestedId =
        pm.environment.get("img_id") ||
        pm.environment.get("created_generated_image_id");

    pm.expect(requestedId, "img_id or created_generated_image_id is missing").to.exist;
    pm.expect(json.id).to.eql(requestedId);
});
