/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Title
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// NEGATIVE CASE: EMPTY TITLE ONLY
// ======================================

// Test data based on File Upload flow.
// Title is empty, but media_url is valid.

const titles = [
    " "
];

const mediaUrls = [
    "https://files.example.test/sample-file"
];

pm.environment.set("titleText", titles[0]);
pm.environment.set("mediaUrl", mediaUrls[0]);

console.log("Generated titleText:", pm.environment.get("titleText"));
console.log("Generated mediaUrl:", pm.environment.get("mediaUrl"));
