/**
 * Postman Test Script
 * Request: GET_GENERATED_IMAGES_List
 * Method: GET
 * Endpoint: {{domain}}/v1/generated_images
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// =======================================
// BASIC RESPONSE VALIDATION
// =======================================

// Verify that the API returns successful HTTP status
// This confirms that the GET list request was processed correctly
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

// Validate that response is an array
// This ensures generated images are returned in list format
pm.test("Response is an array", function () {
    pm.expect(json).to.be.an("array");
});

// Validate that response array is not empty
// Ensures at least one generated image record is returned
pm.test("Response array is not empty", function () {
    pm.expect(json.length).to.be.greaterThan(0);
});

// Get first generated image item from response array
// This allows validating returned generated image record
const item = json[0];


// =======================================
// ITEM CONTRACT VALIDATION
// =======================================

// Validate that required item fields exist
// This ensures generated image item structure is complete
pm.test("Generated image item required fields exist", function () {
    pm.expect(item).to.have.property("id");
    pm.expect(item).to.have.property("prompt");
    pm.expect(item).to.have.property("user_id");
    pm.expect(item).to.have.property("images");
    pm.expect(item).to.have.property("created_at");
    pm.expect(item).to.have.property("deleted_at");
    pm.expect(item).to.have.property("model");
    pm.expect(item).to.have.property("image_count");
});

// Validate generated image ID format
// Helps detect incorrect or broken ID format
pm.test("Generated image ID format is valid", function () {
    pm.expect(item.id).to.be.a("string");
    pm.expect(item.id).to.match(/^genimg_[0-9a-fA-F-]+$/);
});

// Validate user_id format
// Helps confirm image belongs to a valid user entity
pm.test("user_id format is valid", function () {
    pm.expect(item.user_id).to.be.a("string");
    pm.expect(item.user_id).to.match(/^usr_[0-9a-fA-F-]+$/);
});

// Validate prompt is returned
// Ensures generated image record contains prompt data
pm.test("Prompt is valid", function () {
    pm.expect(item.prompt).to.be.a("string");
    pm.expect(item.prompt.trim().length).to.be.greaterThan(0);
});

// Validate model is returned
// Ensures generated image record contains model data
pm.test("Model is valid", function () {
    pm.expect(item.model).to.be.a("string");
    pm.expect(item.model.trim().length).to.be.greaterThan(0);
});


// =======================================
// IMAGES VALIDATION
// =======================================

// Ensure that images field is returned as an array
// Required before validating generated image URLs
pm.test("Images is an array", function () {
    pm.expect(item.images).to.be.an("array");
});

// Validate that images array is not empty
// Ensures generated image record contains at least one image
pm.test("Images array is not empty", function () {
    pm.expect(item.images.length).to.be.greaterThan(0);
});

// Validate that every image is a valid URL
// Ensures generated images can be opened from returned links
pm.test("Image URLs are valid", function () {
    item.images.forEach(function (image, index) {
        pm.expect(image, "Image at index " + index).to.be.a("string");
        pm.expect(image, "Image at index " + index + " is not a valid URL")
            .to.match(/^https?:\/\/.+/);
    });
});

// Validate image_count field type
// Prevents issues caused by incorrect data types
pm.test("image_count type is correct", function () {
    pm.expect(item.image_count).to.be.a("number");
});

// Validate image_count matches images array length
// Ensures backend count field is consistent with real data
pm.test("image_count matches images array length", function () {
    pm.expect(item.image_count).to.eql(item.images.length);
});


// =======================================
// TIMESTAMP & OPTIONAL FIELD VALIDATION
// =======================================

// Validate created_at is a valid ISO date string
// Ensures correct date formatting from backend
pm.test("created_at is valid ISO date", function () {
    pm.expect(item.created_at).to.be.a("string");
    pm.expect(!isNaN(Date.parse(item.created_at))).to.be.true;
});

// deleted_at can be null or valid date
// If not null, validate its format
pm.test("deleted_at is null or valid ISO date", function () {
    if (item.deleted_at !== null) {
        pm.expect(item.deleted_at).to.be.a("string");
        pm.expect(!isNaN(Date.parse(item.deleted_at))).to.be.true;
    }
});
