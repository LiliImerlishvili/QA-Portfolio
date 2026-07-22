/**
 * Postman Test Script
 * Request: 4. GET_CONVERSATIONS
 * Method: GET
 * Endpoint: {{domain}}/v1/conversations?type=chat&limit=20&offset=0
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const res = pm.response.json();

// --- Response type ---
pm.test("Response is an array", function () {
    pm.expect(res).to.be.an("array");
});

// --- ISO date regex ---
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;

// --- Core structure ---
pm.test("Each conversation has valid core structure", function () {
    res.forEach(conv => {
        pm.expect(conv.id).to.match(/^con_/);
        pm.expect(conv.user_id).to.match(/^usr_/);
        pm.expect(conv.type).to.equal("chat");
        pm.expect(conv.model).to.be.a("string");
        pm.expect(conv.deleted_at).to.be.null;
        pm.expect(conv.last_message).to.be.an("object");
        pm.expect(conv.last_message.id).to.match(/^msg_/);
        pm.expect(["USER", "BOT"]).to.include(conv.last_message.role_type);
    });
});

// --- created_at validation ---
pm.test("created_at fields have valid ISO format", function () {
    res.forEach(conv => {
        pm.expect(conv.created_at).to.match(isoDateRegex);
    });
});

// --- update_at validation ---
pm.test("update_at fields have valid ISO format", function () {
    res.forEach(conv => {
        pm.expect(conv.update_at).to.match(isoDateRegex);
    });
});

// --- last_message created_at validation ---
pm.test("last_message.created_at fields have valid ISO format", function () {
    res.forEach(conv => {
        pm.expect(conv.last_message.created_at).to.match(isoDateRegex);
    });
});

/* --- AI model presence (iteration-safe) --- */

const expectedModel = pm.iterationData.get("AIModel");

pm.test(`At least one conversation uses AI model (${expectedModel})`, function () {
    if (!expectedModel) {
        pm.expect(true).to.be.true; // safe skip
        return;
    }

    const hasModel = res.some(conv => conv.model === expectedModel);
    pm.expect(hasModel).to.be.true;
});
