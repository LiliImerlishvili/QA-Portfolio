/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title Only
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_WEBSITE
// NEGATIVE CASE: EMPTY TITLE ONLY
// ======================================


// ---------------------------------------
// BASIC RESPONSE VALIDATION
// ---------------------------------------

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

const json = pm.response.json();

console.log("Response status:", pm.response.code);
console.log("Response body:", json);


// ---------------------------------------
// STATUS CODE VALIDATION
// ---------------------------------------

pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});


// ---------------------------------------
// ERROR RESPONSE VALIDATION
// Run only when API returns 400
// ---------------------------------------

if (pm.response.code === 400) {

    pm.test("Error message exists", function () {
        pm.expect(json).to.have.property("message");
    });

    pm.test("Title validation message is returned", function () {
        const message = json.message
            ? JSON.stringify(json.message).toLowerCase()
            : "";

        pm.expect(message).to.include("title");
    });

    pm.test("Title validation message is correct", function () {
        const message = json.message
            ? JSON.stringify(json.message).toLowerCase()
            : "";

        pm.expect(
            message.includes("title is required") ||
            message.includes("title") ||
            message.includes("required")
        ).to.eql(true);
    });

} else {

    pm.test("API returned success response instead of validation error", function () {
        pm.expect(pm.response.code).to.eql(400);
    });
}


// ---------------------------------------
// NEGATIVE CASE DATA VALIDATION
// ---------------------------------------

pm.test("Title variable is empty", function () {
    const titleText = pm.environment.get("titleText") || "";
    pm.expect(titleText.trim()).to.eql("");
});

pm.test("Website variable is valid", function () {
    const websiteLink = pm.environment.get("websiteLink");

    pm.expect(websiteLink).to.be.a("string");
    pm.expect(websiteLink.trim()).to.not.eql("");
    pm.expect(websiteLink).to.match(/^https?:\/\/.+/);
});
