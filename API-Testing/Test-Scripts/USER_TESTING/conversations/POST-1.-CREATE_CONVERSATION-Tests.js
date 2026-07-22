/**
 * Postman Test Script
 * Request: 1. CREATE_CONVERSATION
 * Method: POST
 * Endpoint: {{domain}}/v2/conversations
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const responseText = pm.response.text();

/*
 This endpoint returns streamed text, not valid JSON.
 We validate the API contract using text-based checks.
*/

// Conversation ID
const conversationIdMatch = responseText.match(/"id"\s*:\s*"(con_[^"]+)"/);
pm.test("Conversation ID exists", function () {
    pm.expect(conversationIdMatch).to.not.be.null;
});

// Save conversationId
pm.environment.set("conversationId", conversationIdMatch[1]);

// User ID
const userIdMatch = responseText.match(/"user_id"\s*:\s*"(usr_[^"]+)"/);
pm.test("User ID exists", function () {
    pm.expect(userIdMatch).to.not.be.null;
});

// Model validation (from iteration data)
const modelMatch = responseText.match(/"model"\s*:\s*"([^"]+)"/);
const expectedModel = pm.iterationData.get("AIModel");

pm.test(`Correct model is used (${expectedModel})`, function () {
    pm.expect(modelMatch).to.not.be.null;
    pm.expect(modelMatch[1]).to.equal(expectedModel);
});

// created_at validation
const createdAtMatch = responseText.match(/"created_at"\s*:\s*"([^"]+)"/);
pm.test("created_at is valid ISO date", function () {
    pm.expect(createdAtMatch).to.not.be.null;
    pm.expect(isNaN(Date.parse(createdAtMatch[1]))).to.be.false;
});

// Basic confirmation
pm.test("Response contains conversation data", function () {
    pm.expect(responseText).to.include("con_");
});

// AI response existence (not content)
pm.test("AI response is returned (not null or empty)", function () {
    pm.expect(pm.response.text()).to.include('"content"');
});
