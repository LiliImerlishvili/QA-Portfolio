/**
 * Postman Test Script
 * Request: 2. CONTINUE_CONVERSATION
 * Method: POST
 * Endpoint: {{domain}}/v2/conversations/{{conversationId}}/message
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const responseText = pm.response.text();
const conversationId = pm.environment.get("conversationId");

/* --- Conversation core --- */

// Conversation ID exists
const conversationIdMatch = responseText.match(/"id"\s*:\s*"(con_[^"]+)"/);
pm.test("Conversation ID exists", function () {
    pm.expect(conversationIdMatch).to.not.be.null;
});

// Conversation ID matches environment (only if env value exists)
pm.test("Conversation ID matches environment", function () {
    if (conversationId) {
        pm.expect(conversationIdMatch[1]).to.equal(conversationId);
    } else {
        pm.expect(true).to.be.true; // skip safely
    }
});

// User ID exists
const userIdMatch = responseText.match(/"user_id"\s*:\s*"(usr_[^"]+)"/);
pm.test("User ID exists", function () {
    pm.expect(userIdMatch).to.not.be.null;
});

// ✅ Model validation (from iteration data)
const modelMatch = responseText.match(/"model"\s*:\s*"([^"]+)"/);
const expectedModel = pm.iterationData.get("AIModel");

pm.test(`Model matches conversation model (${expectedModel})`, function () {
    pm.expect(modelMatch).to.not.be.null;
    pm.expect(modelMatch[1]).to.equal(expectedModel);
});

/* --- update_at validation --- */

const updateAtMatch = responseText.match(/"update_at"\s*:\s*"([^"]+)"/);
pm.test("update_at exists and is valid ISO date", function () {
    pm.expect(updateAtMatch).to.not.be.null;
    pm.expect(isNaN(Date.parse(updateAtMatch[1]))).to.be.false;
});

/* --- Messages validation --- */

pm.test("USER message exists", function () {
    pm.expect(responseText).to.include('"role_type":"USER"');
});

pm.test("BOT message exists", function () {
    pm.expect(responseText).to.include('"role_type":"BOT"');
});

pm.test("Message IDs exist", function () {
    pm.expect(responseText).to.include('"id":"msg_');
});

// Messages belong to same conversation (safe check)
pm.test("Messages reference conversation ID", function () {
    if (conversationId) {
        pm.expect(responseText).to.include(conversationId);
    } else {
        pm.expect(true).to.be.true;
    }
});

/* --- AI response existence --- */

pm.test("AI response content exists", function () {
    pm.expect(responseText).to.include('"content"');
});

/* --- Message date validations --- */

pm.test("USER message has valid created_at", function () {
    const userDateMatch = responseText.match(
        /"role_type":"USER"[\s\S]*?"created_at"\s*:\s*"([^"]+)"/
    );
    pm.expect(userDateMatch).to.not.be.null;
    pm.expect(isNaN(Date.parse(userDateMatch[1]))).to.be.false;
});

pm.test("BOT message has valid created_at", function () {
    const botDateMatch = responseText.match(
        /"role_type":"BOT"[\s\S]*?"created_at"\s*:\s*"([^"]+)"/
    );
    pm.expect(botDateMatch).to.not.be.null;
    pm.expect(isNaN(Date.parse(botDateMatch[1]))).to.be.false;
});
