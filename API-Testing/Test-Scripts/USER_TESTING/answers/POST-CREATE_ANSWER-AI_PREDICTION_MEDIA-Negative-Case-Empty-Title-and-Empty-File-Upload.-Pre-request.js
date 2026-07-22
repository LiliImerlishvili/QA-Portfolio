/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Empty Title and Empty File Upload.
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_MEDIA
// NEGATIVE CASE: EMPTY TITLE AND EMPTY FILE UPLOAD
// ======================================


// --------------------------------------
// TEST DATA PREPARATION
// --------------------------------------

// Prepare an empty title for validation testing
const titles = [
    ""
];

// Prepare an empty media URL for validation testing
const mediaUrls = [
    ""
];


// --------------------------------------
// ENVIRONMENT VARIABLES
// --------------------------------------

// Save empty title into environment variable
pm.environment.set("titleText", titles[0]);

// Save empty media URL into environment variable
pm.environment.set("mediaUrl", mediaUrls[0]);


// --------------------------------------
// DEBUG LOGS
// --------------------------------------

// Print generated title value in Postman Console
console.log("Generated titleText:", pm.environment.get("titleText"));

// Print generated media URL value in Postman Console
console.log("Generated mediaUrl:", pm.environment.get("mediaUrl"));
