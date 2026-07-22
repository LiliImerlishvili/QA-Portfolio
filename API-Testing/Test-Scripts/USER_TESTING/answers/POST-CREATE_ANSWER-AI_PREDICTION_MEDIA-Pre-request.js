/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// POSITIVE CASE: VALID TITLE AND VALID FILE URL
// ======================================

// Test data based on frontend File Upload form
const titles = [
    "AI Prediction File Upload Test"
];

const mediaUrls = [
    "https://files.example.test/sample-file"
];

// Save test data to environment variables
pm.environment.set("titleText", titles[0]);
pm.environment.set("mediaUrl", mediaUrls[0]);

// Debug logs
console.log("Generated titleText:", pm.environment.get("titleText"));
console.log("Generated mediaUrl:", pm.environment.get("mediaUrl"));
