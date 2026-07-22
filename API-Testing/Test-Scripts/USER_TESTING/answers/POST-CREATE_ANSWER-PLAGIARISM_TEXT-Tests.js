/**
 * Postman Test Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// =======================================
// BASIC RESPONSE VALIDATION
// =======================================

// Verify that the API returns successful HTTP status
// This confirms that the request was processed correctly
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Ensure that response is in valid JSON format
// Important because frontend and other services depend on structured JSON
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response body once and reuse it across all tests
// This improves performance and keeps code clean
const json = pm.response.json();


// =======================================
// TOP-LEVEL CONTRACT VALIDATION
// =======================================

// Validate that all required top-level fields exist in the response
// This ensures API contract consistency
pm.test("Top-level required fields exist", function () {
    pm.expect(json).to.have.property("id");
    pm.expect(json).to.have.property("user_id");
    pm.expect(json).to.have.property("type");
    pm.expect(json).to.have.property("model");
    pm.expect(json).to.have.property("prompt");
    pm.expect(json).to.have.property("answer");
    pm.expect(json).to.have.property("created_at");
    pm.expect(json).to.have.property("update_at");
    pm.expect(json).to.have.property("deleted_at");
    pm.expect(json).to.have.property("meta");
});

// Validate that response type matches request type
// Prevents mismatches between request and response logic
pm.test("Response type matches request type", function () {
    pm.expect(json.type).to.eql("plagiarism");
});

// Validate ID format to ensure backend generates correct identifiers
// Helps detect incorrect or broken ID generation logic
pm.test("ID format is valid", function () {
    pm.expect(json.id).to.match(/^answr_/);
});


// =======================================
// ANSWER OBJECT VALIDATION
// =======================================

// Ensure that "answer" field is returned as an object
// Required before validating nested fields
pm.test("Answer is an object", function () {
    pm.expect(json.answer).to.be.an("object");
});

// Validate that required fields exist inside the answer object
// Ensures response structure is complete
pm.test("Answer required fields exist", function () {
    pm.expect(json.answer).to.have.property("score");
    pm.expect(json.answer).to.have.property("results");
    pm.expect(json.answer).to.have.property("errors");
    pm.expect(json.answer).to.have.property("credits_used");
    pm.expect(json.answer).to.have.property("credits_remaining");
});

// Validate data types of answer fields
// Prevents issues caused by incorrect data types (e.g. string instead of number)
pm.test("Answer field types are correct", function () {
    pm.expect(json.answer.score).to.be.a("number");
    pm.expect(json.answer.results).to.be.an("array");
    pm.expect(json.answer.errors).to.be.an("array");
    pm.expect(json.answer.credits_used).to.be.a("number");
    pm.expect(json.answer.credits_remaining).to.be.a("number");
});


// =======================================
// OPTIONAL COUNT INTEGRITY CHECKS
// =======================================

// If results_count exists, validate it matches actual array length
// Ensures backend count fields are consistent with real data
if (json.answer.results_count !== undefined) {
    pm.test("results_count matches results array length", function () {
        pm.expect(json.answer.results_count)
            .to.eql(json.answer.results.length);
    });
}

// Same validation for errors_count
// Helps detect inconsistencies in error tracking
if (json.answer.errors_count !== undefined) {
    pm.test("errors_count matches errors array length", function () {
        pm.expect(json.answer.errors_count)
            .to.eql(json.answer.errors.length);
    });
}

// Validate internal answer status matches HTTP response code
// Ensures consistency between internal and external status handling
if (json.answer.status !== undefined) {
    pm.test("Internal answer status matches HTTP status", function () {
        pm.expect(json.answer.status)
            .to.eql(pm.response.code);
    });
}


// =======================================
// TIMESTAMP & OPTIONAL FIELD VALIDATION
// =======================================

// Validate created_at is a valid ISO date string
// Ensures correct date formatting from backend
pm.test("created_at is valid ISO date", function () {
    pm.expect(json.created_at).to.be.a("string");
    pm.expect(!isNaN(Date.parse(json.created_at))).to.be.true;
});

// Validate update_at is also a valid ISO date
pm.test("update_at is valid ISO date", function () {
    pm.expect(json.update_at).to.be.a("string");
    pm.expect(!isNaN(Date.parse(json.update_at))).to.be.true;
});

// deleted_at can be null or valid date
// If not null, validate its format
pm.test("deleted_at is null or valid ISO date", function () {
    if (json.deleted_at !== null) {
        pm.expect(json.deleted_at).to.be.a("string");
        pm.expect(!isNaN(Date.parse(json.deleted_at))).to.be.true;
    }
});

// meta field is optional
// If exists, it must be an object
pm.test("meta is null or object", function () {
    if (json.meta !== null) {
        pm.expect(json.meta).to.be.an("object");
    }
});


// =======================================
// SAVE CREATED ID FOR LIFECYCLE TESTING
// =======================================

// Save created answer ID into environment variable
// This allows reuse in next requests (GET, UPDATE, DELETE)
// Enables full lifecycle testing of the entity
pm.environment.set("created_answer_id", json.id);
