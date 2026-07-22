/**
 * Extracted from the sanitized Postman collection.
 * Category: Authentication
 * Request: VERIFY_USER
 * Method: POST
 * Endpoint: {{domain}}/v1/users/verify
 */
// This script checks that user verification was successful
// and saves data needed for next requests.

pm.test("Status code is 200", () => {
  // Verify request was successful
  pm.response.to.have.status(200);
});

pm.test("Response is JSON", () => {
  // Make sure response can be parsed
  pm.response.to.be.json;
});

const res = pm.response.json();

// --------------------
// Token validation
// --------------------
pm.test("Token is returned and not empty", () => {
  // Token is required for authorization in next requests
  pm.expect(res).to.have.property("token");
  pm.expect(res.token).to.be.a("string").and.not.empty;
});

// Save token to environment
// This allows other requests to use it automatically
pm.environment.set("authToken", res.token);

// --------------------
// Profile validation
// --------------------
pm.test("Profile object exists", () => {
  // On success response should contain profile data
  pm.expect(res).to.have.property("profile");
  pm.expect(res.profile).to.be.an("object");
});

// Stop script if profile is missing to avoid JS errors
if (!res.profile) {
  console.warn("Profile is missing in response:", res);
  return;
}

const p = res.profile;

// Required profile fields
pm.test("Profile required fields are valid", () => {
  // User ID
  pm.expect(p.id).to.be.a("string").and.not.empty;

  // First and last name
  pm.expect(p.first_name).to.be.a("string").and.not.empty;
  pm.expect(p.last_name).to.be.a("string").and.not.empty;

  // Email basic validation
  pm.expect(p.email).to.be.a("string").and.include("@");
});

// profile_image check
// If image is uploaded -> string (url)
// If not uploaded -> empty string or null
pm.test("Profile image field is valid", () => {
  if (!Object.prototype.hasOwnProperty.call(p, "profile_image")) {
    // Field may be missing if no image uploaded
    pm.expect(true).to.eql(true);
    return;
  }

  pm.expect(
    p.profile_image === null || typeof p.profile_image === "string"
  ).to.eql(true);
});

// Date fields should not be null (happy path expectation)
pm.test("Profile date fields are not null", () => {
  pm.expect(p.created_at).to.not.equal(null);
  pm.expect(p.trial_expires_at).to.not.equal(null);
  pm.expect(p.activated_at).to.not.equal(null);
  pm.expect(p.verified_at).to.not.equal(null);
});

// Organization id check
pm.test("Default organization id is not null", () => {
  pm.expect(p.default_organization_id).to.not.equal(null);
});

// Boolean fields
// Exact values may differ, so we only check type
pm.test("is_admin is boolean", () => {
  pm.expect(p.is_admin).to.be.a("boolean");
});

pm.test("is_complete is boolean", () => {
  pm.expect(p.is_complete).to.be.a("boolean");
});

// --------------------
// Save variables for next requests
// --------------------
// These values can be reused in other user-related requests
pm.environment.set("userId", p.id);
pm.environment.set("defaultOrgId", p.default_organization_id);
pm.collectionVariables.set("firstName", p.first_name);
pm.environment.set("lastName", p.last_name);

// Debug logs
console.log("Auth token saved:", pm.environment.get("authToken"));
console.log("User id saved:", pm.environment.get("userId"));

// Check if authToken was saved successfully in environment
pm.test("authToken is saved to environment", () => {
  const savedToken = pm.environment.get("authToken");

  if (savedToken && savedToken.length > 0) {
    // Token exists in current environment
    pm.expect(true).to.eql(true);
  } else {
    // Token was not saved
    pm.expect.fail("authToken was NOT saved to environment");
  }
});

if (pm.environment.get("authToken")) {
  console.log("authToken successfully saved");
} else {
  console.log("authToken NOT saved");
}
