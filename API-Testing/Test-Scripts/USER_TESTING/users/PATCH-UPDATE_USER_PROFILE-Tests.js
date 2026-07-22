/**
 * Postman Test Script
 * Request: UPDATE_USER_PROFILE
 * Method: PATCH
 * Endpoint: {{domain}}/v1/users
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// This checks the update succeeded and returned updated fields (if 200).

pm.test("Status code is 200 or 204", () => {
  pm.expect(pm.response.code).to.be.oneOf([200, 204]);
});

// If 204, no body to validate
if (pm.response.code === 204) {
  pm.test("Response body is empty (204)", () => {
    pm.expect((pm.response.text() || "").trim()).to.eql("");
  });
  console.log("UPDATE_USER_PROFILE returned 204 (no body)");
  return;
}

pm.test("Response is JSON (200)", () => {
  pm.response.to.be.json;
});

const response = pm.response.json();

const updatedFirstName = pm.environment.get("updatedFirstName");
const updatedLastName = pm.environment.get("updatedLastName");
const updatedProfileImage = pm.environment.get("updatedProfileImage");

pm.test("First name is updated", () => {
  pm.expect(response.first_name).to.eql(updatedFirstName);
});

pm.test("Last name is updated", () => {
  pm.expect(response.last_name).to.eql(updatedLastName);
});

pm.test("Profile image is updated", () => {
  // profile_image should match what we sent
  pm.expect(response.profile_image).to.eql(updatedProfileImage);
});

pm.test("created_at is valid ISO date", () => {
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  pm.expect(response.created_at).to.be.a("string").and.not.empty;
  pm.expect(response.created_at).to.match(isoRegex);

  const d = new Date(response.created_at);
  pm.expect(d.toString()).to.not.equal("Invalid Date");
});


// Save current image for future toggles
pm.environment.set("profileImage", response.profile_image);

console.log("Updated profile_image saved:", pm.environment.get("profileImage"));
