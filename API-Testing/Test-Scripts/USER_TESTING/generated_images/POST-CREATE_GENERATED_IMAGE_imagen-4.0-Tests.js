/**
 * Postman Test Script
 * Request: CREATE_GENERATED_IMAGE_imagen-4.0
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

        return JSON.stringify(errorJson);
    } catch (e) {
        return pm.response.text() || "Request failed with non-JSON response";
    }
}

// Normalize credit related errors
// This ensures credit failures are shown with a clear and short reason
function normalizeErrorMessage(errorMessage) {
    const message = String(errorMessage).toLowerCase();

    if (
        message.includes("credit") ||
        message.includes("insufficient")
    ) {
        return "Insufficient credits";
    }

    return errorMessage;
}


// =======================================
// BASIC RESPONSE VALIDATION
// =======================================

// Verify that the API returns successful HTTP status
// This confirms that the request was processed correctly
pm.test("Status code is 200", function () {
    if (pm.response.code !== 200) {
        throw new Error(normalizeErrorMessage(getErrorMessage()));
    }

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

// Parse request body once and reuse it across request validation tests
// This helps validate that sent data is correct
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
});

// Validate that request model is correct
// Prevents sending request with unsupported or incorrect image model
pm.test("Request model is valid", function () {
    pm.expect(requestBody.model).to.eql("imagen-4.0-generate");
});

// Validate that prompt is provided as a non-empty string
// Image generation requires a valid prompt to create output
pm.test("Request prompt is valid", function () {
    pm.expect(requestBody.prompt).to.be.a("string");
    pm.expect(requestBody.prompt.trim().length).to.be.greaterThan(0);
});

// Validate that selected style is supported
// Prevents incorrect style values from being sent to the backend
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
// Ensures image size option matches available UI values
pm.test("Request aspectRatio is valid", function () {
    const allowedAspectRatios = [
        "1:1",
        "16:9",
        "4:3",
        "3:4",
        "9:16"
    ];

    pm.expect(allowedAspectRatios).to.include(requestBody.aspectRatio);
});


// =======================================
// TOP-LEVEL CONTRACT VALIDATION
// =======================================

// Validate that all required top-level fields exist in the response
// This ensures API contract consistency
pm.test("Top-level required fields exist", function () {
    pm.expect(json).to.have.property("id");
    pm.expect(json).to.have.property("prompt");
    pm.expect(json).to.have.property("user_id");
    pm.expect(json).to.have.property("images");
    pm.expect(json).to.have.property("created_at");
    pm.expect(json).to.have.property("deleted_at");
    pm.expect(json).to.have.property("model");
    pm.expect(json).to.have.property("image_count");
});

// Validate that response model matches request model
// Prevents mismatches between request and response logic
pm.test("Response model matches request model", function () {
    pm.expect(json.model).to.eql(requestBody.model);
});

// Validate that response prompt matches request prompt
// Prevents mismatches between request and generated image data
pm.test("Response prompt matches request prompt", function () {
    pm.expect(json.prompt).to.eql(requestBody.prompt);
});

// Validate ID format to ensure backend generates correct identifiers
// Helps detect incorrect or broken ID generation logic
pm.test("ID format is valid", function () {
    pm.expect(json.id).to.be.a("string");
    pm.expect(json.id).to.match(/^genimg_[0-9a-fA-F-]+$/);
});

// Validate user_id format to ensure backend returns correct user identifier
// Helps detect missing or incorrect user ownership data
pm.test("user_id format is valid", function () {
    pm.expect(json.user_id).to.be.a("string");
    pm.expect(json.user_id).to.match(/^usr_[0-9a-fA-F-]+$/);
});


// =======================================
// IMAGES OBJECT VALIDATION
// =======================================

// Ensure that images field is returned as an array
// Required before validating generated image data
pm.test("Images is an array", function () {
    pm.expect(json.images).to.be.an("array");
});

// Validate that images array is not empty
// Ensures response contains generated image result
pm.test("Images array is not empty", function () {
    pm.expect(json.images.length).to.be.greaterThan(0);
});

// Validate that required generated image data exists inside images array
// Ensures response structure is complete
pm.test("Generated image data exists", function () {
    json.images.forEach(function (image, index) {
        pm.expect(image, "Image at index " + index).to.exist;
        pm.expect(image, "Image at index " + index).to.be.a("string");
    });
});

// Validate that every generated image contains PNG base64 data
// Ensures generated image can be displayed or downloaded by frontend
pm.test("Generated image contains PNG base64 data", function () {
    json.images.forEach(function (image, index) {
        pm.expect(
            image,
            "Image at index " + index + " is not valid PNG base64 data"
        ).to.match(/^data:image\/png;base64,/);
    });
});

// Validate image_count field type
// Prevents issues caused by incorrect data types
pm.test("image_count type is correct", function () {
    pm.expect(json.image_count).to.be.a("number");
});

// Validate image_count matches actual images array length
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

// Validate update_at if it exists in response
// If returned by backend, it must be a valid ISO date
if (json.update_at !== undefined) {
    pm.test("update_at is valid ISO date", function () {
        pm.expect(json.update_at).to.be.a("string");
        pm.expect(!isNaN(Date.parse(json.update_at))).to.be.true;
    });
}

// deleted_at can be null or valid date
// If not null, validate its format
pm.test("deleted_at is null or valid ISO date", function () {
    if (json.deleted_at !== null) {
        pm.expect(json.deleted_at).to.be.a("string");
        pm.expect(!isNaN(Date.parse(json.deleted_at))).to.be.true;
    }
});

// meta field is optional
// If exists, it must be an object
if (json.meta !== undefined) {
    pm.test("meta is null or object", function () {
        if (json.meta !== null) {
            pm.expect(json.meta).to.be.an("object");
        }
    });
}


// =======================================
// SAVE CREATED ID FOR LIFECYCLE TESTING
// =======================================

// Save created generated image ID into environment variable
// This allows reuse in next requests (GET, UPDATE, DELETE)
// Enables full lifecycle testing of the entity
pm.environment.set("created_generated_image_id", json.id);
