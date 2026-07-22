/**
 * Postman Test Script
 * Request: Replace Background with image
 * Method: POST
 * Endpoint: {{domain}}/v2/edit-image/replace-background
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
/* ==========================================
   REPLACE BACKGROUND
   Happy Path - With Background Reference
   ========================================== */

// Parse response body as JSON
const response = pm.response.json();


/* ==========================================
   BASIC RESPONSE VALIDATIONS
   ========================================== */

// Check that request was successful and API returned 200 OK
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check that response body is returned in JSON format
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

// Check that API response time is acceptable for replace background operation
pm.test("Response time is below 60 seconds", function () {
    pm.expect(pm.response.responseTime).to.be.below(60000);
});


/* ==========================================
   REQUIRED ROOT FIELDS VALIDATIONS
   ========================================== */

// Check that all required root-level fields exist in the response
pm.test("Required root fields exist", function () {
    pm.expect(response).to.have.property("id");
    pm.expect(response).to.have.property("user_id");
    pm.expect(response).to.have.property("operation_type");
    pm.expect(response).to.have.property("subject_image_url");
    pm.expect(response).to.have.property("result_image_url");
    pm.expect(response).to.have.property("model");
    pm.expect(response).to.have.property("operation_params");
    pm.expect(response).to.have.property("image_metadata");
    pm.expect(response).to.have.property("created_at");
    pm.expect(response).to.have.property("updated_at");
});


/* ==========================================
   ID FIELDS VALIDATIONS
   ========================================== */

// Check that edit image ID is returned as a non-empty string
pm.test("Edit image id is valid", function () {
    pm.expect(response.id).to.be.a("string").and.not.empty;
});

// Check that user ID is returned as a non-empty string
pm.test("User id is valid", function () {
    pm.expect(response.user_id).to.be.a("string").and.not.empty;
});


/* ==========================================
   OPERATION VALIDATIONS
   ========================================== */

// Check that operation type is correct for replace background endpoint
pm.test("Operation type is REPLACE_BACKGROUND", function () {
    pm.expect(response.operation_type).to.eql("REPLACE_BACKGROUND");
});

// Check that model field exists and is not empty
pm.test("Model is valid", function () {
    pm.expect(response.model).to.be.a("string").and.not.empty;
});


/* ==========================================
   IMAGE URL VALIDATIONS
   ========================================== */

// Check that original subject image URL exists and is valid
pm.test("Subject image URL is valid", function () {
    pm.expect(response.subject_image_url).to.be.a("string").and.not.empty;
    pm.expect(response.subject_image_url).to.match(/^https?:\/\/.+/);
});

// Check that result image URL exists and is valid
pm.test("Result image URL is valid", function () {
    pm.expect(response.result_image_url).to.be.a("string").and.not.empty;
    pm.expect(response.result_image_url).to.match(/^https?:\/\/.+/);
});

// Check that subject image URL contains subject_image
pm.test("Subject image URL contains subject_image", function () {
    pm.expect(response.subject_image_url).to.include("subject_image");
});

// Check that result image URL contains replace_background_result
pm.test("Result image URL contains replace_background_result", function () {
    pm.expect(response.result_image_url).to.include("replace_background_result");
});

// Check that result image is returned in WEBP format
pm.test("Result image format is WEBP", function () {
    pm.expect(response.result_image_url).to.match(/\.webp$/);
});

// Check that result image URL is different from original subject image URL
pm.test("Result image URL is different from subject image URL", function () {
    pm.expect(response.result_image_url).to.not.eql(response.subject_image_url);
});


/* ==========================================
   OPERATION PARAMS VALIDATIONS
   ========================================== */

// Check that operation_params object exists in the response
pm.test("Operation params object exists", function () {
    pm.expect(response.operation_params).to.be.an("object");
});

// Check that background_reference exists inside operation_params
pm.test("Background reference exists in operation params", function () {
    pm.expect(response.operation_params).to.have.property("background_reference");
});

// Check that background_reference is returned as a valid URL
pm.test("Background reference is valid URL", function () {
    pm.expect(response.operation_params.background_reference).to.be.a("string").and.not.empty;
    pm.expect(response.operation_params.background_reference).to.match(/^https?:\/\/.+/);
});

// Check that background_reference contains background_reference in URL
pm.test("Background reference URL contains background_reference", function () {
    pm.expect(response.operation_params.background_reference).to.include("background_reference");
});

// Check that background_prompt is not returned when reference image is used
pm.test("Background prompt is not returned when background reference is used", function () {
    pm.expect(response.operation_params.background_prompt).to.be.undefined;
});


/* ==========================================
   IMAGE METADATA VALIDATIONS
   ========================================== */

// Check that image_metadata object exists in the response
pm.test("Image metadata object exists", function () {
    pm.expect(response.image_metadata).to.be.an("object");
});

// Check that uploaded subject image name exists in image_metadata
pm.test("Image metadata name exists", function () {
    pm.expect(response.image_metadata).to.have.property("name");
});

// Check that uploaded subject image name is valid
pm.test("Image metadata name is valid", function () {
    pm.expect(response.image_metadata.name).to.be.a("string").and.not.empty;
});

// Check that uploaded subject image size exists in image_metadata
pm.test("Image metadata size exists", function () {
    pm.expect(response.image_metadata).to.have.property("size");
});

// Check that uploaded subject image size is a positive number
pm.test("Image metadata size is valid", function () {
    pm.expect(response.image_metadata.size).to.be.a("number");
    pm.expect(response.image_metadata.size).to.be.above(0);
});

// Check that uploaded subject image MIME type exists in image_metadata
pm.test("Image metadata MIME type exists", function () {
    pm.expect(response.image_metadata).to.have.property("mime_type");
});

// Check that uploaded subject image MIME type is valid
pm.test("Image metadata MIME type is valid", function () {
    pm.expect(response.image_metadata.mime_type).to.be.a("string").and.not.empty;
    pm.expect(response.image_metadata.mime_type).to.match(/^image\/(png|jpg|jpeg|webp)$/);
});


/* ==========================================
   DATE VALIDATIONS
   ========================================== */

// Check that created_at date exists and is not empty
pm.test("Created date exists", function () {
    pm.expect(response.created_at).to.be.a("string").and.not.empty;
});

// Check that updated_at date exists and is not empty
pm.test("Updated date exists", function () {
    pm.expect(response.updated_at).to.be.a("string").and.not.empty;
});

// Check that created_at is a valid date
pm.test("Created date is valid", function () {
    pm.expect(new Date(response.created_at).toString()).to.not.eql("Invalid Date");
});

// Check that updated_at is a valid date
pm.test("Updated date is valid", function () {
    pm.expect(new Date(response.updated_at).toString()).to.not.eql("Invalid Date");
});

// Check that created_at date is not later than updated_at date
pm.test("Created date is not after updated date", function () {
    const createdAt = new Date(response.created_at).getTime();
    const updatedAt = new Date(response.updated_at).getTime();

    pm.expect(createdAt).to.be.at.most(updatedAt);
});


/* ==========================================
   ENVIRONMENT VARIABLE VALIDATIONS
   ========================================== */

// Save replace background result image URL to environment for next requests
pm.test("Save replace background result image URL to environment", function () {
    pm.environment.set("replaceBackgroundImageUrl", response.result_image_url);
    pm.expect(pm.environment.get("replaceBackgroundImageUrl")).to.eql(response.result_image_url);
});

// Save background reference URL to environment for future validation
pm.test("Save background reference URL to environment", function () {
    pm.environment.set("backgroundReferenceUrl", response.operation_params.background_reference);
    pm.expect(pm.environment.get("backgroundReferenceUrl")).to.eql(response.operation_params.background_reference);
});

// Save replace background edit image ID to environment for future validation
pm.test("Save replace background edit image id to environment", function () {
    pm.environment.set("replaceBackgroundEditImageId", response.id);
    pm.expect(pm.environment.get("replaceBackgroundEditImageId")).to.eql(response.id);
});
