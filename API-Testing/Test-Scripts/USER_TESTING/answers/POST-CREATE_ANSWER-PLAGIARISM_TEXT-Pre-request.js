/**
 * Postman Pre-request Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// Prompts safely above 16-word minimum (20+ words)

const prompts = [
    "This is a controlled sample paragraph created specifically for automated API testing and validation purposes to ensure stability.",
    "The plagiarism endpoint should correctly process this sufficiently long example text and return a structured and consistent response.",
    "We are validating the API contract by sending this longer text input that clearly exceeds the minimum word requirement.",
    "Automation testing requires predictable and properly sized content so that the backend validation rules are satisfied every time.",
    "This example text is intentionally written with more than sixteen words to avoid validation errors during repeated executions."
];

// Random selection
const randomIndex = Math.floor(Math.random() * prompts.length);
pm.environment.set("promptText", prompts[randomIndex]);
