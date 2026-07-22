/**
 * Extracted from the sanitized Postman collection.
 * Category: Email-Verification
 * Request: VERIFY EMAIL EXISTS
 * Method: POST
 * Endpoint: {{domain}}/v1/users/email/exists
 */
let response;
try {
    response = pm.response.json();
} catch (e) {
    response = pm.response.text();
}

// Normalize exists value
let exists;



// 1. Status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Exists flag is boolean
pm.test("Exists flag is boolean", function () {
    pm.expect(response).to.be.a("boolean");
});

// 3. Existing email returns true
pm.test("Existing email returns true", function () {
    pm.expect(response).to.eql(true);
});
