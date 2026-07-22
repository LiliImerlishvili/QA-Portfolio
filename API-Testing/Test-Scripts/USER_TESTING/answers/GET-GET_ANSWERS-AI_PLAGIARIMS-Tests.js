/**
 * Postman Test Script
 * Request: GET_ANSWERS - AI_PLAGIARIMS
 * Method: GET
 * Endpoint: {{domain}}/v1/answers?type=plagiarism
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// Validate HTTP status
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Ensure response is valid JSON
pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

// Parse response
const json = pm.response.json();


// =======================================
// ROOT STRUCTURE VALIDATION
// =======================================

// Response must be an array
pm.test("Response is an array", function () {
    pm.expect(json).to.be.an("array");
});

// Response should not be empty
pm.test("Response is not empty", function () {
    pm.expect(json.length).to.be.above(0);
});

// Stop safely if response is not array or empty
if (!Array.isArray(json) || json.length === 0) {
    return;
}

// Strict ISO 8601 UTC format: YYYY-MM-DDTHH:mm:ss.SSSZ
const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;


// =======================================
// ARRAY ITEMS VALIDATION
// =======================================

json.forEach((item, index) => {

    // Top-level required fields
    pm.test(`Item ${index} has required top-level fields`, function () {
        pm.expect(item).to.have.property("id");
        pm.expect(item).to.have.property("type");
        pm.expect(item).to.have.property("answer");
        pm.expect(item).to.have.property("created_at");

        // Support both update_at and updated_at
        const hasUpdateField = item.hasOwnProperty("update_at") || item.hasOwnProperty("updated_at");
        pm.expect(hasUpdateField).to.be.true;
    });

    // Type filter validation
    pm.test(`Item ${index} type is plagiarism`, function () {
        pm.expect(item.type).to.eql("plagiarism");
    });

    // ID format validation
    pm.test(`Item ${index} ID format is valid`, function () {
        pm.expect(item.id).to.be.a("string");
        pm.expect(item.id).to.match(/^answr_/);
    });

    // Answer object validation
    pm.test(`Item ${index} answer is an object`, function () {
        pm.expect(item.answer).to.be.an("object");
    });

    // Answer required fields
    pm.test(`Item ${index} answer has required fields`, function () {
        pm.expect(item.answer).to.have.property("score");
        pm.expect(item.answer).to.have.property("results");
        pm.expect(item.answer).to.have.property("errors");
        pm.expect(item.answer).to.have.property("status");
        pm.expect(item.answer).to.have.property("results_count");
        pm.expect(item.answer).to.have.property("errors_count");
    });

    // Answer field type validation
    pm.test(`Item ${index} answer field types are valid`, function () {
        pm.expect(item.answer.score).to.be.a("number");
        pm.expect(item.answer.results).to.be.an("array");
        pm.expect(item.answer.errors).to.be.an("array");
        pm.expect(item.answer.status).to.be.a("number");
        pm.expect(item.answer.results_count).to.be.a("number");
        pm.expect(item.answer.errors_count).to.be.a("number");
    });

    // Count integrity validation
    pm.test(`Item ${index} results_count matches results length`, function () {
        pm.expect(item.answer.results_count).to.eql(item.answer.results.length);
    });

    pm.test(`Item ${index} errors_count matches errors length`, function () {
        pm.expect(item.answer.errors_count).to.eql(item.answer.errors.length);
    });

    // Results structure validation if results exist
    if (Array.isArray(item.answer.results) && item.answer.results.length > 0) {

        item.answer.results.forEach((result, resultIndex) => {

            pm.test(`Item ${index} result ${resultIndex} structure is valid`, function () {
                pm.expect(result).to.have.property("url");
                pm.expect(result).to.have.property("title");
                pm.expect(result).to.have.property("excerpts");

                pm.expect(result.url).to.be.a("string");
                pm.expect(result.title).to.be.a("string");
                pm.expect(result.excerpts).to.be.an("array");
            });

        });
    }

    // created_at validation
    pm.test(`Item ${index} created_at has strict ISO format`, function () {
        pm.expect(item.created_at).to.match(isoRegex);
        pm.expect(!isNaN(Date.parse(item.created_at))).to.be.true;
    });

    // update_at / updated_at validation
    const updatedValue = item.update_at || item.updated_at;

    pm.test(`Item ${index} update date has strict ISO format`, function () {
        pm.expect(updatedValue).to.match(isoRegex);
        pm.expect(!isNaN(Date.parse(updatedValue))).to.be.true;
    });

    // deleted_at may be null or valid ISO date
    if (item.deleted_at !== null && item.deleted_at !== undefined) {
        pm.test(`Item ${index} deleted_at has strict ISO format`, function () {
            pm.expect(item.deleted_at).to.match(isoRegex);
            pm.expect(!isNaN(Date.parse(item.deleted_at))).to.be.true;
        });
    }

});
