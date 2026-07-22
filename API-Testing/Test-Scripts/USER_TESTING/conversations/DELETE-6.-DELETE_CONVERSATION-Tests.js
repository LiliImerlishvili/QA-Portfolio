/**
 * Postman Test Script
 * Request: 6. DELETE_CONVERSATION
 * Method: DELETE
 * Endpoint: {{domain}}/v1/conversations/{{conversationId}}
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
const conversationId = pm.environment.get("conversationId");
const currentModel = pm.iterationData.get("AIModel");

/* --- Precondition guard --- */
if (!conversationId) {
    pm.test(`FAILED: conversationId missing for model ${currentModel}`, function () {
        pm.expect.fail("conversationId must exist before DELETE");
    });
    return;
}

/* --- Happy path tests --- */

pm.test(`Status code is 200 (model: ${currentModel})`, function () {
    pm.response.to.have.status(200);
});

pm.test(`Delete response is true (model: ${currentModel})`, function () {
    pm.expect(pm.response.json()).to.equal(true);
});

/* --- Environment cleanup --- */
pm.environment.unset("conversationId");

pm.test(`conversationId cleaned after delete (model: ${currentModel})`, function () {
    const conversationId = pm.environment.get("conversationId");
    pm.expect(conversationId).to.be.undefined;
});
