/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT C   Empty field
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// Negative case: sending request with an empty prompt field

const prompts = [
    " "
];

// Random selection
const randomIndex = Math.floor(Math.random() * prompts.length);
pm.environment.set("promptText", prompts[randomIndex]);
