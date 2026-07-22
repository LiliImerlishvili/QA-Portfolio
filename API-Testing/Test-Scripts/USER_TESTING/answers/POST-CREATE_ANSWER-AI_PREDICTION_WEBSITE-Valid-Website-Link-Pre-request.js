/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - AI_PREDICTION_WEBSITE- Valid Website Link
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_WEBSITE
// POSITIVE CASE: VALID TITLE AND VALID WEBSITE LINK
// ======================================

const titles = [
    "AI Prediction Website Link Test"
];

const websiteLinks = [
    "https://en.wikipedia.org/wiki/Artificial_intelligence"
];

pm.environment.set("titleText", titles[0]);
pm.environment.set("websiteLink", websiteLinks[0]);

console.log("Generated titleText:", pm.environment.get("titleText"));
console.log("Generated websiteLink:", pm.environment.get("websiteLink"));
