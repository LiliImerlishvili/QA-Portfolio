/**
 * Postman Test Script
 * Request: GET_ANSWER_BY_ID - PLAGIARISM
 * Method: GET
 * Endpoint: {{domain}}/v1/answers/{{created_answer_id}}
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// Check that API responded successfully (HTTP 200 OK)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Ensure response is valid JSON format
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response body into JavaScript object
const json = pm.response.json();


// =======================================
// ROOT STRUCTURE VALIDATION
// =======================================

// Verify response is an object
pm.test("Response is an object", function () {
    pm.expect(json).to.be.an("object");
});

// Check that all required top-level fields exist
pm.test("Top-level required fields exist", function () {
    pm.expect(json).to.have.property("id");
    pm.expect(json).to.have.property("user_id");
    pm.expect(json).to.have.property("type");
    pm.expect(json).to.have.property("model");
    pm.expect(json).to.have.property("prompt");
    pm.expect(json).to.have.property("title");
    pm.expect(json).to.have.property("answer");
    pm.expect(json).to.have.property("created_at");
    pm.expect(json).to.have.property("deleted_at");
    pm.expect(json).to.have.property("meta");

    // Support both update_at and updated_at
    const hasUpdateField = json.hasOwnProperty("update_at") || json.hasOwnProperty("updated_at");
    pm.expect(hasUpdateField).to.be.true;
});


// =======================================
// VALUE VALIDATION
// =======================================

// Validate type value
pm.test("Type is plagiarism", function () {
    pm.expect(json.type).to.eql("plagiarism");
});

// Validate ID format
pm.test("ID format is valid", function () {
    pm.expect(json.id).to.be.a("string");
    pm.expect(json.id).to.match(/^answr_/);
});

// Validate user_id format
pm.test("User ID format is valid", function () {
    pm.expect(json.user_id).to.be.a("string");
    pm.expect(json.user_id).to.match(/^usr_/);
});

// Validate text fields
pm.test("Text fields are valid strings", function () {
    pm.expect(json.model).to.be.a("string");
    pm.expect(json.prompt).to.be.a("string");
    pm.expect(json.title).to.be.a("string");
});


// =======================================
// ANSWER OBJECT VALIDATION
// =======================================

// Ensure answer is an object
pm.test("Answer is object", function () {
    pm.expect(json.answer).to.be.an("object");
});

// Validate required answer fields
pm.test("Answer required fields exist", function () {
    pm.expect(json.answer).to.have.property("score");
    pm.expect(json.answer).to.have.property("errors");
    pm.expect(json.answer).to.have.property("status");
    pm.expect(json.answer).to.have.property("results");
    pm.expect(json.answer).to.have.property("credits_used");
    pm.expect(json.answer).to.have.property("errors_count");
    pm.expect(json.answer).to.have.property("results_count");
    pm.expect(json.answer).to.have.property("credits_remaining");
});

// Validate answer field types
pm.test("Answer field types are correct", function () {
    pm.expect(json.answer.score).to.be.a("number");
    pm.expect(json.answer.errors).to.be.an("array");
    pm.expect(json.answer.results).to.be.an("array");
    pm.expect(json.answer.status).to.be.a("number");
    pm.expect(json.answer.credits_used).to.be.a("number");
    pm.expect(json.answer.errors_count).to.be.a("number");
    pm.expect(json.answer.results_count).to.be.a("number");
    pm.expect(json.answer.credits_remaining).to.be.a("number");
});


// =======================================
// COUNT INTEGRITY CHECKS
// =======================================

// Validate results_count matches results length
pm.test("results_count matches results length", function () {
    pm.expect(json.answer.results_count).to.eql(json.answer.results.length);
});

// Validate errors_count matches errors length
pm.test("errors_count matches errors length", function () {
    pm.expect(json.answer.errors_count).to.eql(json.answer.errors.length);
});

// Validate internal status matches HTTP response
pm.test("Internal answer status matches HTTP status", function () {
    pm.expect(json.answer.status).to.eql(pm.response.code);
});


// =======================================
// RESULTS STRUCTURE VALIDATION
// =======================================

// Validate each result object if results exist
if (json.answer.results.length > 0) {
    json.answer.results.forEach((result, index) => {
        pm.test(`Result ${index} structure is valid`, function () {
            pm.expect(result).to.have.property("url");
            pm.expect(result).to.have.property("title");
            pm.expect(result).to.have.property("excerpts");

            pm.expect(result.url).to.be.a("string");
            pm.expect(result.title).to.be.a("string");
            pm.expect(result.excerpts).to.be.an("array");
        });
    });
}


// =======================================
// DATE VALIDATION
// =======================================

// Strict ISO 8601 UTC date format
const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

// Validate created_at format
pm.test("created_at strict ISO 8601 UTC", function () {
    pm.expect(json.created_at).to.match(isoRegex);
    pm.expect(!isNaN(Date.parse(json.created_at))).to.be.true;
});

// Support both update_at and updated_at
const updatedValue = json.update_at || json.updated_at;

// Validate update date exists
pm.test("Update date exists", function () {
    pm.expect(updatedValue).to.exist;
});

// Validate update date format
pm.test("update_at / updated_at strict ISO 8601 UTC", function () {
    pm.expect(updatedValue).to.match(isoRegex);
    pm.expect(!isNaN(Date.parse(updatedValue))).to.be.true;
});

// deleted_at can be null or ISO date
pm.test("deleted_at is null or strict ISO", function () {
    if (json.deleted_at !== null) {
        pm.expect(json.deleted_at).to.match(isoRegex);
        pm.expect(!isNaN(Date.parse(json.deleted_at))).to.be.true;
    }
});

// meta can be null or object
pm.test("meta is null or object", function () {
    if (json.meta !== null) {
        pm.expect(json.meta).to.be.an("object");
    }
});
