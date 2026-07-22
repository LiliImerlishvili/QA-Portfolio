/**
 * Postman Test Script
 * Request: GET_ANSWERS - AI_PREDICTION_WEBSITE
 * Method: GET
 * Endpoint: {{domain}}/v1/answers?type=ai-prediction
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

// Stop script safely if response is not array or empty
if (!Array.isArray(json) || json.length === 0) {
    return;
}

// ISO 8601 UTC strict regex: YYYY-MM-DDTHH:mm:ss.SSSZ
const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;  //  Validate UTC date format


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

    // Type validation
    pm.test(`Item ${index} type is ai-prediction`, function () {
        pm.expect(item.type).to.eql("ai-prediction");
    });

    // ID format validation
    pm.test(`Item ${index} ID format is valid`, function () {
        pm.expect(item.id).to.be.a("string");
        pm.expect(item.id).to.match(/^answr_/);
    });

    // Answer must be object
    pm.test(`Item ${index} answer is an object`, function () {
        pm.expect(item.answer).to.be.an("object");
    });

    // Answer required fields
    pm.test(`Item ${index} answer has required fields`, function () {
        pm.expect(item.answer).to.have.property("score");
        pm.expect(item.answer).to.have.property("status");
        pm.expect(item.answer).to.have.property("sentences");
    });

    // Answer field types
    pm.test(`Item ${index} answer field types are valid`, function () {
        pm.expect(item.answer.score).to.be.a("number");
        pm.expect(item.answer.status).to.be.a("number");
        pm.expect(item.answer.sentences).to.be.an("array");
    });

    // Answer status validation
    pm.test(`Item ${index} answer status is 200`, function () {
        pm.expect(item.answer.status).to.eql(200);
    });

    // Validate sentences if available
    if (Array.isArray(item.answer.sentences) && item.answer.sentences.length > 0) {

        item.answer.sentences.forEach((sentence, sentenceIndex) => {

            pm.test(`Item ${index} sentence ${sentenceIndex} structure is valid`, function () {
                pm.expect(sentence).to.have.property("text");
                pm.expect(sentence).to.have.property("score");
                pm.expect(sentence).to.have.property("length");

                pm.expect(sentence.text).to.be.a("string");
                pm.expect(sentence.score).to.be.a("number");
                pm.expect(sentence.length).to.be.a("number");
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
