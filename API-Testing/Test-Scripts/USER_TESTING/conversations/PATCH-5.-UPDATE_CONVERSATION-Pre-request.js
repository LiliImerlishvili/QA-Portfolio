/**
 * Postman Pre-request Script
 * Request: 5. UPDATE_CONVERSATION
 * Method: PATCH
 * Endpoint: {{domain}}/v1/conversations/{{conversationId}}
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// List of possible titles
const titles = [
    "Pancake Recipe",
    "Weekend Breakfast Ideas",
    "Quick Dessert Notes",
    "AI Cooking Chat",
    "Test Conversation Title"
];

// Pick random title
const randomIndex = Math.floor(Math.random() * titles.length);
const randomTitle = titles[randomIndex];

// Save for request body and tests
pm.environment.set("updatedTitle", randomTitle);

// Get conversationId ONLY ONCE
const conversationId = pm.environment.get("conversationId");

// Optional guard (if you want)
if (!conversationId) {
    pm.test("FAILED: conversationId is empty", function () {
        pm.expect.fail("conversationId is empty. Request was blocked.");
    });

    throw new Error("conversationId is empty");
}
