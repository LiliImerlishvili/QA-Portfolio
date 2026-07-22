/**
 * Postman Test Script
 * Request: CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview
 * Method: POST
 * Endpoint: {{domain}}/v2/generated_images
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
let json = {};


// Test 1: Validate successful status code.
// Expected: API should return 200 OK for valid 21:9 aspect ratio and 4K resolution.
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


// Test 2: Validate response time.
// Expected: 4K image generation can take time, but should complete under 180 seconds.
pm.test("Response time is less than 180000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(180000);
});


// Test 3: Validate Content-Type header.
// Expected: API should return Content-Type header.
pm.test("Content-Type header exists", function () {
    pm.response.to.have.header("Content-Type");
});


// Test 4: Validate JSON response format.
// Expected: Successful response should be returned as JSON.
pm.test("Response is JSON", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


// Test 5: Validate response body can be parsed.
// Expected: Response body should be valid JSON object.
pm.test("Response body can be parsed as JSON", function () {
    json = pm.response.json();
    pm.expect(json).to.be.an("object");
});


// Test 6: Validate response body is not empty.
// Expected: Successful image generation response should contain generated image data.
pm.test("Response body is not empty", function () {
    pm.expect(Object.keys(json).length).to.be.greaterThan(0);
});


// Test 7: Validate generated image ID.
// Expected: Response should contain generated image ID.
pm.test("Generated image ID exists", function () {
    pm.expect(json.id).to.exist;
    pm.expect(json.id).to.be.a("string");
    pm.expect(json.id).to.include("genimg_");
});


// Test 8: Validate response prompt.
// Expected: Response prompt should match request prompt.
pm.test("Response prompt matches request prompt", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(json.prompt).to.exist;
    pm.expect(json.prompt).to.be.a("string");
    pm.expect(json.prompt).to.eql(requestBody.prompt);
});


// Test 9: Validate user ID.
// Expected: Successful response should contain user_id.
pm.test("User ID exists", function () {
    pm.expect(json.user_id).to.exist;
    pm.expect(json.user_id).to.be.a("string");
    pm.expect(json.user_id).to.include("usr_");
});


// Test 10: Validate images array.
// Expected: Response should contain images array.
pm.test("Images array exists", function () {
    pm.expect(json.images).to.exist;
    pm.expect(json.images).to.be.an("array");
});


// Test 11: Validate at least one image is generated.
// Expected: images array should contain at least one generated image.
pm.test("At least one image is generated", function () {
    pm.expect(json.images.length).to.be.greaterThan(0);
});


// Test 12: Validate image_count field.
// Expected: image_count should exist and should be a number.
pm.test("Image count exists", function () {
    pm.expect(json.image_count).to.exist;
    pm.expect(json.image_count).to.be.a("number");
});


// Test 13: Validate image_count value.
// Expected: image_count should match images array length.
pm.test("Image count matches images array length", function () {
    pm.expect(json.image_count).to.eql(json.images.length);
});


// Test 14: Validate first image value.
// Expected: First generated image should be returned as a base64 string.
pm.test("First image is base64 string", function () {
    pm.expect(json.images[0]).to.exist;
    pm.expect(json.images[0]).to.be.a("string");
    pm.expect(json.images[0].length).to.be.greaterThan(100);
});


// Test 15: Validate base64 image format.
// Expected: Generated image should have valid base64 image prefix.
pm.test("Image has valid base64 prefix", function () {
    pm.expect(json.images[0]).to.include("data:image/");
    pm.expect(json.images[0]).to.include("base64,");
});


// Test 16: Validate created_at field.
// Expected: Response should contain created_at timestamp.
pm.test("Created at exists", function () {
    pm.expect(json.created_at).to.exist;
    pm.expect(json.created_at).to.be.a("string");
});


// Test 17: Validate created_at format.
// Expected: created_at should use ISO 8601 UTC format.
pm.test("Created at has valid ISO 8601 format", function () {
    pm.expect(json.created_at).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
});


// Test 18: Validate deleted_at value.
// Expected: Newly generated image should not be deleted.
pm.test("Deleted at is null", function () {
    pm.expect(json.deleted_at).to.eql(null);
});


// Test 19: Validate response model.
// Expected: Response model should match request model.
pm.test("Response model matches request model", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(json.model).to.exist;
    pm.expect(json.model).to.eql(requestBody.model);
});


// Test 20: Validate request model.
// Expected: Request body should contain model = gemini-3-pro-image-preview.
pm.test("Request body contains correct Gemini 3 Pro Image Preview model", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody.model).to.exist;
    pm.expect(requestBody.model).to.eql("gemini-3-pro-image-preview");
});


// Test 21: Validate request prompt.
// Expected: Request body should contain a non-empty prompt.
pm.test("Request body contains valid prompt", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody.prompt).to.exist;
    pm.expect(requestBody.prompt).to.be.a("string");
    pm.expect(requestBody.prompt.trim().length).to.be.greaterThan(0);
});


// Test 22: Validate request aspectRatio field.
// Expected: Request body should contain aspectRatio field.
pm.test("Request body contains aspectRatio field", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody).to.have.property("aspectRatio");
});


// Test 23: Validate request aspectRatio value.
// Expected: Request body should contain aspectRatio = 21:9.
pm.test("Request body contains 21:9 aspectRatio", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody.aspectRatio).to.eql("21:9");
});


// Test 24: Validate request resolution field.
// Expected: Request body should contain resolution field.
pm.test("Request body contains resolution field", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody).to.have.property("resolution");
});


// Test 25: Validate request resolution value.
// Expected: Request body should contain resolution = 4K.
pm.test("Request body contains 4K resolution", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody.resolution).to.eql("4K");
});


// Test 26: Validate request does not contain style field.
// Expected: Style is not selected for this case, so request body should not contain style field.
pm.test("Request body does not contain style field", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody.style).to.be.undefined;
});


// Test 27: Validate request does not contain background field.
// Expected: Gemini 3 Pro Image Preview UI does not show background option, so request body should not contain background field.
pm.test("Request body does not contain background field", function () {
    const requestBody = JSON.parse(pm.request.body.raw);

    pm.expect(requestBody.background).to.be.undefined;
});


// Test 28: Validate response does not contain error fields.
// Expected: Successful response should not contain error or errors fields.
pm.test("Response does not contain error fields", function () {
    pm.expect(json.error).to.be.undefined;
    pm.expect(json.errors).to.be.undefined;
});


// Test 29: Save generated image ID.
// Expected: Generated image ID should be saved for follow-up requests.
pm.test("Save generated image ID to environment", function () {
    pm.environment.set("generated_image_id", json.id);
});


// Test 30: Save generated base64 image.
// Expected: First generated image should be saved for follow-up validation if needed.
pm.test("Save generated base64 image to environment", function () {
    pm.environment.set("generated_image_base64", json.images[0]);
});
