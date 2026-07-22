/**
 * Postman Test Script
 * Request: CREATE_ANSWER - AI_PREDICTION_WEBSITE- Valid Website Link
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_WEBSITE
// POSITIVE CASE: VALID TITLE AND VALID WEBSITE LINK
// ======================================

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

const json = pm.response.json();

console.log("Response status:", pm.response.code);
console.log("Response body:", json);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

if (pm.response.code === 200) {
    pm.test("Success response has required fields", function () {
        pm.expect(json).to.have.property("id");
        pm.expect(json).to.have.property("type");
        pm.expect(json).to.have.property("answer");
        pm.expect(json).to.have.property("created_at");
    });

    pm.test("Type is ai-prediction", function () {
        pm.expect(json.type).to.eql("ai-prediction");
    });

    pm.test("ID format is valid", function () {
        pm.expect(json.id).to.be.a("string");
        pm.expect(json.id).to.match(/^answr_/);
    });

    if (json.id) {
        pm.environment.set("ai_prediction_website_answer_id", json.id);
    }
}

if (pm.response.code !== 200) {
    pm.test("Error response contains useful debug information", function () {
        pm.expect(json).to.be.an("object");
        pm.expect(JSON.stringify(json).length).to.be.greaterThan(2);
    });
}
