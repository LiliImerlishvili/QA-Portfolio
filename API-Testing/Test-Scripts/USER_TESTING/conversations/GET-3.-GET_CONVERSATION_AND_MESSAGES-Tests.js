/**
 * Postman Test Script
 * Request: 3. GET_CONVERSATION_AND_MESSAGES
 * Method: GET
 * Endpoint: {{domain}}/v1/conversations/{{conversationId}}
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
/* ======================================
   GET_CONVERSATION_AND_MESSAGES
   Happy Path
   ====================================== */

// --- Precondition guard ---
const conversationId = pm.environment.get("conversationId");

if (!conversationId) {
    pm.test("FAILED: conversationId is missing", function () {
        pm.expect.fail("conversationId is empty. GET_CONVERSATION_AND_MESSAGES cannot be executed.");
    });
    throw new Error("conversationId is missing");
}

// --- Status ---
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const res = pm.response.json();

// --- ISO 8601 regex ---
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

// --- Conversation ---
pm.test("Conversation ID is correct", function () {
    pm.expect(res.id).to.equal(conversationId);
    pm.expect(res.id).to.match(/^con_/);
});

pm.test("User ID has correct prefix", function () {
    pm.expect(res.user_id).to.match(/^usr_/);
});

// ✅ AI model validation (from iteration data)
const expectedModel = pm.iterationData.get("AIModel");

pm.test(`AI model is correct (${expectedModel})`, function () {
    pm.expect(res.model).to.equal(expectedModel);
});

pm.test("Conversation is not deleted", function () {
    pm.expect(res.deleted_at).to.be.null;
});

// --- Dates ---
pm.test("Conversation dates are valid ISO", function () {
    pm.expect(res.created_at).to.match(isoDateRegex);
    pm.expect(res.update_at).to.match(isoDateRegex);
});

// --- Messages ---
pm.test("Messages array exists and is not empty", function () {
    pm.expect(res.messages).to.be.an("array");
    pm.expect(res.messages.length).to.be.above(0);
});

pm.test("USER and BOT messages exist", function () {
    const hasUser = res.messages.some(m => m.role_type === "USER");
    const hasBot = res.messages.some(m => m.role_type === "BOT");
    pm.expect(hasUser).to.be.true;
    pm.expect(hasBot).to.be.true;
});

pm.test("Messages have valid IDs and dates", function () {
    res.messages.forEach(m => {
        pm.expect(m.id).to.match(/^msg_/);
        pm.expect(m.created_at).to.match(isoDateRegex);
    });
});
