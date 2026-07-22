/**
 * Extracted from the sanitized Postman collection.
 * Category: Image-Editing
 * Request: Get Edited images
 * Method: GET
 * Endpoint: {{domain}}/v2/edit-image
 */
/* ==========================================
   GET EDIT IMAGE LIST
   Happy Path
   ========================================== */

// Parse response body as JSON
const response = pm.response.json();


/* ==========================================
   BASIC RESPONSE VALIDATIONS
   ========================================== */

// Check that request was successful and API returned 200 OK
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Check that response body is returned in JSON format
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

// Check that response time is acceptable for GET list request
pm.test("Response time is below 5 seconds", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});


/* ==========================================
   ROOT STRUCTURE VALIDATIONS
   ========================================== */

// Check that response contains data array
pm.test("Data array exists", function () {
    pm.expect(response).to.have.property("data");
    pm.expect(response.data).to.be.an("array");
});

// Check that response contains pagination object
pm.test("Pagination object exists", function () {
    pm.expect(response).to.have.property("pagination");
    pm.expect(response.pagination).to.be.an("object");
});

// Check that data array is not empty
pm.test("Data array is not empty", function () {
    pm.expect(response.data.length).to.be.above(0);
});


/* ==========================================
   PAGINATION VALIDATIONS
   ========================================== */

// Check that pagination contains total, offset and limit
pm.test("Pagination required fields exist", function () {
    pm.expect(response.pagination).to.have.property("total");
    pm.expect(response.pagination).to.have.property("offset");
    pm.expect(response.pagination).to.have.property("limit");
});

// Check that pagination total is a valid number
pm.test("Pagination total is valid", function () {
    pm.expect(response.pagination.total).to.be.a("number");
    pm.expect(response.pagination.total).to.be.at.least(0);
});

// Check that pagination offset is a valid number
pm.test("Pagination offset is valid", function () {
    pm.expect(response.pagination.offset).to.be.a("number");
    pm.expect(response.pagination.offset).to.be.at.least(0);
});

// Check that pagination limit is a valid number
pm.test("Pagination limit is valid", function () {
    pm.expect(response.pagination.limit).to.be.a("number");
    pm.expect(response.pagination.limit).to.be.above(0);
});

// Check that returned data count does not exceed pagination limit
pm.test("Data count does not exceed pagination limit", function () {
    pm.expect(response.data.length).to.be.at.most(response.pagination.limit);
});

// Check that pagination total is not less than returned data count
pm.test("Pagination total is not less than returned data count", function () {
    pm.expect(response.pagination.total).to.be.at.least(response.data.length);
});


/* ==========================================
   EDIT IMAGE ITEM STRUCTURE VALIDATIONS
   ========================================== */

// Check that every edit image item contains all required fields
pm.test("Each edit image item has required fields", function () {
    response.data.forEach(function (item) {
        pm.expect(item).to.have.property("id");
        pm.expect(item).to.have.property("user_id");
        pm.expect(item).to.have.property("operation_type");
        pm.expect(item).to.have.property("subject_image_url");
        pm.expect(item).to.have.property("result_image_url");
        pm.expect(item).to.have.property("model");
        pm.expect(item).to.have.property("operation_params");
        pm.expect(item).to.have.property("image_metadata");
        pm.expect(item).to.have.property("created_at");
        pm.expect(item).to.have.property("updated_at");
        pm.expect(item).to.have.property("deleted_at");
    });
});


/* ==========================================
   ID FIELD VALIDATIONS
   ========================================== */

// Check that every edit image id is valid and not empty
pm.test("Each edit image id is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.id).to.be.a("string").and.not.empty;
        pm.expect(item.id).to.include("edimg_");
    });
});

// Check that every user id is valid and not empty
pm.test("Each user id is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.user_id).to.be.a("string").and.not.empty;
        pm.expect(item.user_id).to.include("usr_");
    });
});


/* ==========================================
   OPERATION TYPE VALIDATIONS
   ========================================== */

// Check that every operation type is valid
pm.test("Each operation type is valid", function () {
    const validOperationTypes = [
        "UPSCALE",
        "REMOVE_BACKGROUND",
        "REPLACE_BACKGROUND",
        "SEARCH_REPLACE",
        "SEARCH_RECOLOR"
    ];

    response.data.forEach(function (item) {
        pm.expect(validOperationTypes).to.include(item.operation_type);
    });
});

// Check that model is returned for every edit image item
pm.test("Each model is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.model).to.be.a("string").and.not.empty;
    });
});


/* ==========================================
   IMAGE URL VALIDATIONS
   ========================================== */

// Check that every subject image URL is valid
pm.test("Each subject image URL is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.subject_image_url).to.be.a("string").and.not.empty;
        pm.expect(item.subject_image_url).to.match(/^https?:\/\/.+/);
        pm.expect(item.subject_image_url).to.include("subject_image");
    });
});

// Check that every result image URL is valid
pm.test("Each result image URL is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.result_image_url).to.be.a("string").and.not.empty;
        pm.expect(item.result_image_url).to.match(/^https?:\/\/.+/);
    });
});

// Check that every result image is WEBP
pm.test("Each result image format is WEBP", function () {
    response.data.forEach(function (item) {
        pm.expect(item.result_image_url).to.match(/\.webp$/);
    });
});

// Check that subject image URL and result image URL are different
pm.test("Each result image URL is different from subject image URL", function () {
    response.data.forEach(function (item) {
        pm.expect(item.result_image_url).to.not.eql(item.subject_image_url);
    });
});


/* ==========================================
   OPERATION PARAMS VALIDATIONS
   ========================================== */

// Check that operation_params exists as object for every item
pm.test("Each operation params object is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.operation_params).to.be.an("object");
    });
});

// Check operation_params based on operation_type
pm.test("Operation params match operation type", function () {
    response.data.forEach(function (item) {
        if (item.operation_type === "UPSCALE") {
            pm.expect(item.operation_params).to.have.property("prompt");
            pm.expect(item.operation_params).to.have.property("output_format");
        }

        if (item.operation_type === "REMOVE_BACKGROUND") {
            pm.expect(item.operation_params).to.have.property("output_format");
        }

        if (item.operation_type === "REPLACE_BACKGROUND") {
            const hasBackgroundPrompt = item.operation_params.hasOwnProperty("background_prompt");
            const hasBackgroundReference = item.operation_params.hasOwnProperty("background_reference");

            pm.expect(hasBackgroundPrompt || hasBackgroundReference).to.eql(true);
            pm.expect(hasBackgroundPrompt && hasBackgroundReference).to.eql(false);
        }

        if (item.operation_type === "SEARCH_REPLACE") {
            pm.expect(item.operation_params).to.have.property("prompt");
            pm.expect(item.operation_params).to.have.property("search_prompt");
            pm.expect(item.operation_params).to.have.property("output_format");
        }

        if (item.operation_type === "SEARCH_RECOLOR") {
            pm.expect(item.operation_params).to.have.property("prompt");
            pm.expect(item.operation_params).to.have.property("select_prompt");
            pm.expect(item.operation_params).to.have.property("output_format");
        }
    });
});

// Check output format when it exists
pm.test("Output format is WEBP when returned", function () {
    response.data.forEach(function (item) {
        if (item.operation_params.output_format) {
            pm.expect(item.operation_params.output_format).to.eql("webp");
        }
    });
});


/* ==========================================
   IMAGE METADATA VALIDATIONS
   ========================================== */

// Check that image_metadata object exists for every item
pm.test("Each image metadata object is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.image_metadata).to.be.an("object");
    });
});

// Check that image metadata has required fields
pm.test("Each image metadata has required fields", function () {
    response.data.forEach(function (item) {
        pm.expect(item.image_metadata).to.have.property("name");
        pm.expect(item.image_metadata).to.have.property("size");
        pm.expect(item.image_metadata).to.have.property("mime_type");
    });
});

// Check that image metadata name is valid
pm.test("Each image metadata name is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.image_metadata.name).to.be.a("string").and.not.empty;
    });
});

// Check that image metadata size is valid
pm.test("Each image metadata size is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.image_metadata.size).to.be.a("number");
        pm.expect(item.image_metadata.size).to.be.above(0);
    });
});

// Check that image metadata MIME type is valid
pm.test("Each image metadata MIME type is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.image_metadata.mime_type).to.be.a("string").and.not.empty;
        pm.expect(item.image_metadata.mime_type).to.match(/^image\/(png|jpg|jpeg|webp)$/);
    });
});


/* ==========================================
   DATE VALIDATIONS
   ========================================== */

// Check that created_at and updated_at exist and are valid dates
pm.test("Each created_at and updated_at date is valid", function () {
    response.data.forEach(function (item) {
        pm.expect(item.created_at).to.be.a("string").and.not.empty;
        pm.expect(item.updated_at).to.be.a("string").and.not.empty;

        pm.expect(new Date(item.created_at).toString()).to.not.eql("Invalid Date");
        pm.expect(new Date(item.updated_at).toString()).to.not.eql("Invalid Date");
    });
});

// Check that created_at is not after updated_at
pm.test("Each created_at date is not after updated_at date", function () {
    response.data.forEach(function (item) {
        const createdAt = new Date(item.created_at).getTime();
        const updatedAt = new Date(item.updated_at).getTime();

        pm.expect(createdAt).to.be.at.most(updatedAt);
    });
});

// Check that deleted_at is null for active edit image records
pm.test("Each deleted_at is null", function () {
    response.data.forEach(function (item) {
        pm.expect(item.deleted_at).to.eql(null);
    });
});


/* ==========================================
   SORTING VALIDATIONS
   ========================================== */

// Check that items are sorted by created_at date in descending order
pm.test("Items are sorted by created_at in descending order", function () {
    for (let i = 0; i < response.data.length - 1; i++) {
        const currentDate = new Date(response.data[i].created_at).getTime();
        const nextDate = new Date(response.data[i + 1].created_at).getTime();

        pm.expect(currentDate).to.be.at.least(nextDate);
    }
});


/* ==========================================
   ENVIRONMENT VARIABLE VALIDATIONS
   ========================================== */

// Save first edit image id to environment for get-by-id or follow-up requests
pm.test("Save first edit image id to environment", function () {
    if (response.data.length > 0) {
        pm.environment.set("firstEditImageId", response.data[0].id);
        pm.expect(pm.environment.get("firstEditImageId")).to.eql(response.data[0].id);
    }
});

// Save first result image URL to environment for follow-up requests
pm.test("Save first result image URL to environment", function () {
    if (response.data.length > 0) {
        pm.environment.set("firstEditImageResultUrl", response.data[0].result_image_url);
        pm.expect(pm.environment.get("firstEditImageResultUrl")).to.eql(response.data[0].result_image_url);
    }
});
