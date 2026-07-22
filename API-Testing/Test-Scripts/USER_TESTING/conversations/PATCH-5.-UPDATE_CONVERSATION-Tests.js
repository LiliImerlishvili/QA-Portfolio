/**
 * Postman Test Script
 * Request: 5. UPDATE_CONVERSATION
 * Method: PATCH
 * Endpoint: {{domain}}/v1/conversations/{{conversationId}}
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const res = pm.response.json();
const conversationId = pm.environment.get("conversationId");
const expectedTitle = pm.environment.get("updatedTitle");
const expectedModel = pm.iterationData.get("AIModel");

/* --- ISO 8601 date format --- */
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

/* --- Core conversation --- */

pm.test("Conversation ID exists and matches", function () {
    pm.expect(res.id).to.equal(conversationId);
    pm.expect(res.id).to.match(/^con_/);
});

pm.test("User ID exists and has correct prefix", function () {
    pm.expect(res.user_id).to.match(/^usr_/);
});

/* --- PATCH-specific validation --- */

pm.test("Title is updated correctly", function () {
    pm.expect(res.title).to.equal(expectedTitle);
});

/* --- Date validations --- */

pm.test("created_at has valid ISO 8601 format", function () {
    pm.expect(res.created_at).to.match(isoDateRegex);
});

pm.test("update_at has valid ISO 8601 format", function () {
    pm.expect(res.update_at).to.match(isoDateRegex);
});

pm.test("deleted_at is null or valid ISO 8601 date", function () {
    if (res.deleted_at !== null) {
        pm.expect(res.deleted_at).to.match(isoDateRegex);
    }
});

/* --- Unchanged fields --- */

// ✅ AI model validation (dynamic)
pm.test(`AI model is not changed (${expectedModel})`, function () {
    pm.expect(res.model).to.equal(expectedModel);
});

/* --- Optional fields (safe checks) --- */

pm.test("Optional fields are null or valid", function () {
    if (res.doc_url !== null) pm.expect(res.doc_url).to.be.a("string");
    if (res.group_id !== null) pm.expect(res.group_id).to.be.a("string");
    if (res.changed_from !== null) pm.expect(res.changed_from).to.be.a("string");
    if (res.type_changed_at !== null) {
        pm.expect(res.type_changed_at).to.match(isoDateRegex);
    }
});
