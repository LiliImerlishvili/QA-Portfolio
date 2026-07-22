/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Image/File Upload
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// NEGATIVE CASE: EMPTY FILE UPLOAD ONLY
// ======================================

// Test data based on File Upload flow.
// Title is valid, but media_url is empty.

const titles = [
    "AI Prediction File Upload Test"
];

const mediaUrls = [
    ""
];

pm.environment.set("titleText", titles[0]);
pm.environment.set("mediaUrl", mediaUrls[0]);

console.log("Generated titleText:", pm.environment.get("titleText"));
console.log("Generated mediaUrl:", pm.environment.get("mediaUrl"));
