/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT C   Empty Title and Empty Text
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// ======================================
// NEGATIVE CASE: EMPTY TITLE AND EMPTY TEXT
// ======================================

// Empty text field
const prompts = [
    "  "
];

// Empty title field
const titles = [
    "  "
];

// Random selection
const randomPromptIndex = Math.floor(Math.random() * prompts.length);
const randomTitleIndex = Math.floor(Math.random() * titles.length);

// Save values to environment variables
pm.environment.set("promptText", prompts[randomPromptIndex]);
pm.environment.set("titleText", titles[randomTitleIndex]);
