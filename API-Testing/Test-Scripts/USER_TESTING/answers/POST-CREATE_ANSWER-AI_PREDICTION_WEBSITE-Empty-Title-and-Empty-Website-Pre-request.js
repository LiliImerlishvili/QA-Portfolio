/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title and Empty Website
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// CREATE_ANSWER - AI_PREDICTION_WEBSITE
// NEGATIVE CASE: EMPTY TITLE AND EMPTY WEBSITE
// ======================================


// ---------------------------------------
// TEST DATA PREPARATION
// ---------------------------------------

// Prepare an empty title for validation testing
const titles = [
    ""
];

// Prepare an empty website link for validation testing
const websiteLinks = [
    ""
];


// ---------------------------------------
// RANDOM DATA SELECTION
// ---------------------------------------

// Select one title from the titles list
const randomTitleIndex = Math.floor(Math.random() * titles.length);

// Select one website link from the websiteLinks list
const randomWebsiteLinkIndex = Math.floor(Math.random() * websiteLinks.length);


// ---------------------------------------
// ENVIRONMENT VARIABLES
// ---------------------------------------

// Save the selected empty title into a Postman environment variable
pm.environment.set("titleText", titles[randomTitleIndex]);

// Save the selected empty website link into a Postman environment variable
pm.environment.set("websiteLink", websiteLinks[randomWebsiteLinkIndex]);


// ---------------------------------------
// DEBUG LOGS
// ---------------------------------------

// Print the selected title in the Postman Console
console.log("Generated titleText:", pm.environment.get("titleText"));

// Print the selected website link in the Postman Console
console.log("Generated websiteLink:", pm.environment.get("websiteLink"));
