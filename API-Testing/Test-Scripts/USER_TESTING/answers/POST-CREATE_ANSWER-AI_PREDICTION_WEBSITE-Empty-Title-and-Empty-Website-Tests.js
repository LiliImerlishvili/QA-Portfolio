/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title and Empty Website
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// AI_PREDICTION_WEBSITE
// NEGATIVE CASE: EMPTY TITLE AND EMPTY WEBSITE
// ======================================

pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

const json = pm.response.json();

pm.test("Error message exists", function () {
    pm.expect(json).to.have.property("message");
});

pm.test("Validation error is returned for missing required fields", function () {
    const message = json.message
        ? JSON.stringify(json.message).toLowerCase()
        : "";

    pm.expect(message).to.not.eql("");

    pm.expect(
        message.includes("required") ||
        message.includes("missing") ||
        message.includes("validation") ||
        message.includes("title") ||
        message.includes("website") ||
        message.includes("prompt")
    ).to.eql(true);
});

pm.test("Title variable is empty", function () {
    const titleText = pm.environment.get("titleText") || "";
    pm.expect(titleText.trim()).to.eql("");
});

pm.test("Website variable is empty", function () {
    const websiteLink = pm.environment.get("websiteLink") || "";
    pm.expect(websiteLink.trim()).to.eql("");
});
