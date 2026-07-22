/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT C Negative
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// Prompts safely above 16-word minimum (20+ words)

const prompts = [
    "Thi.",
    "Theo.",

];

// Random selection
const randomIndex = Math.floor(Math.random() * prompts.length);
pm.environment.set("promptText", prompts[randomIndex]);
