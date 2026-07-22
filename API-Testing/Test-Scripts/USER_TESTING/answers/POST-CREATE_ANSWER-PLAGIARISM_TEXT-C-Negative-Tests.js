/**
 * Postman Test Script
 * Request: CREATE_ANSWER - PLAGIARISM_TEXT C Negative
 * Method: POST
 * Endpoint: {{domain}}/v1/answers
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// =======================================
// BASIC RESPONSE VALIDATION
// =======================================

// Validate HTTP status
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

// Validate JSON response
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

//Parse response body once
const json = pm.response.json();


// // =======================================
// // TOP-LEVEL CONTRACT VALIDATION
// // =======================================

// pm.test("Top-level required fields exist", function () {
//     pm.expect(json).to.have.property("id");
//     pm.expect(json).to.have.property("user_id");
//     pm.expect(json).to.have.property("type");
//     pm.expect(json).to.have.property("model");
//     pm.expect(json).to.have.property("prompt");
//     pm.expect(json).to.have.property("answer");
//     pm.expect(json).to.have.property("created_at");
//     pm.expect(json).to.have.property("update_at");
//     pm.expect(json).to.have.property("deleted_at");
//     pm.expect(json).to.have.property("meta");
// });

// Validate type matches request
pm.test("Response type matches request type", function () {
    pm.expect(json.message).to.eql("The text must be at least 16 words, (Your current number of words : 1)");
});

// // Validate ID format
// pm.test("ID format is valid", function () {
//     pm.expect(json.id).to.match(/^answr_/);
// });


// // =======================================
// // ANSWER OBJECT VALIDATION
// // =======================================

// pm.test("Answer is an object", function () {
//     pm.expect(json.answer).to.be.an("object");
// });

// pm.test("Answer required fields exist", function () {
//     pm.expect(json.answer).to.have.property("score");
//     pm.expect(json.answer).to.have.property("results");
//     pm.expect(json.answer).to.have.property("errors");
//     pm.expect(json.answer).to.have.property("credits_used");
//     pm.expect(json.answer).to.have.property("credits_remaining");
// });

// pm.test("Answer field types are correct", function () {
//     pm.expect(json.answer.score).to.be.a("number");
//     pm.expect(json.answer.results).to.be.an("array");
//     pm.expect(json.answer.errors).to.be.an("array");
//     pm.expect(json.answer.credits_used).to.be.a("number");
//     pm.expect(json.answer.credits_remaining).to.be.a("number");
// });


// // =======================================
// // OPTIONAL COUNT INTEGRITY CHECKS
// // =======================================

// if (json.answer.results_count !== undefined) {
//     pm.test("results_count matches results array length", function () {
//         pm.expect(json.answer.results_count)
//             .to.eql(json.answer.results.length);
//     });
// }

// if (json.answer.errors_count !== undefined) {
//     pm.test("errors_count matches errors array length", function () {
//         pm.expect(json.answer.errors_count)
//             .to.eql(json.answer.errors.length);
//     });
// }

// if (json.answer.status !== undefined) {
//     pm.test("Internal answer status matches HTTP status", function () {
//         pm.expect(json.answer.status)
//             .to.eql(pm.response.code);
//     });
// }


// // =======================================
// // TIMESTAMP & OPTIONAL FIELD VALIDATION
// // =======================================

// pm.test("created_at is valid ISO date", function () {
//     pm.expect(json.created_at).to.be.a("string");
//     pm.expect(!isNaN(Date.parse(json.created_at))).to.be.true;
// });

// pm.test("update_at is valid ISO date", function () {
//     pm.expect(json.update_at).to.be.a("string");
//     pm.expect(!isNaN(Date.parse(json.update_at))).to.be.true;
// });

// pm.test("deleted_at is null or valid ISO date", function () {
//     if (json.deleted_at !== null) {
//         pm.expect(json.deleted_at).to.be.a("string");
//         pm.expect(!isNaN(Date.parse(json.deleted_at))).to.be.true;
//     }
// });

// pm.test("meta is null or object", function () {
//     if (json.meta !== null) {
//         pm.expect(json.meta).to.be.an("object");
//     }
// });


// // =======================================
// // SAVE CREATED ID FOR LIFECYCLE TESTING
// // =======================================

// pm.environment.set("created_answer_id", json.id);
