/**
 * Postman Test Script
 * Request: GET_USER_PROFILE
 * Method: GET
 * Endpoint: {{domain}}/v1/users/me/v3
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// GET_USER_PROFILE - Happy path tests (final)
// This endpoint returns credits + subscription + profile.
// Here we validate structure, types, ids format, and date fields (ISO + parseable).

pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});

pm.test("Response is JSON", () => {
  pm.response.to.be.json;
});

const res = pm.response.json();

// --------------------
// Helpers
// --------------------

// Validate ID (non-empty string + optional prefix regex)
function expectId(value, regex, label) {
  pm.expect(value, `${label} should be a string`).to.be.a("string").and.not.empty;
  if (regex) pm.expect(value, `${label} format`).to.match(regex);
}

// Validate ISO date string (not null + parseable)
function expectIsoDate(value, label) {
  pm.expect(value, `${label} should not be null`).to.not.equal(null);
  pm.expect(value, `${label} should be a string`).to.be.a("string").and.not.empty;

  // Basic ISO-like check (works for Z and +00:00 timestamps)
  pm.expect(
    value,
    `${label} should look like an ISO timestamp`
  ).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+\-]\d{2}:\d{2})$/);

  // Parse check
  const d = new Date(value);
  pm.expect(d.toString(), `${label} should be parseable`).to.not.equal("Invalid Date");
}

// Validate optional ISO date (if present and not null)
function expectOptionalIsoDate(value, label) {
  if (value === null || value === undefined) return;
  expectIsoDate(value, label);
}

// --------------------
// Top-level validations
// --------------------
pm.test("Top level fields exist", () => {
  pm.expect(res).to.have.property("credits");
  pm.expect(res).to.have.property("subscription");
  pm.expect(res).to.have.property("is_subscription_active");
  pm.expect(res).to.have.property("profile");
});

pm.test('"is_subscription_active" is boolean', () => {
  pm.expect(res.is_subscription_active).to.be.a("boolean");
});

// --------------------
// Credits validations
// --------------------
pm.test('"credits" is an array', () => {
  pm.expect(res.credits).to.be.an("array");
});

if (!res.credits) {
  console.warn("credits is missing in response:", res);
  return;
}

pm.test("Credits items have correct fields, types, and ids", () => {
  res.credits.forEach((c, i) => {
    pm.expect(c, `credits[${i}] should be an object`).to.be.an("object");

    expectId(c.id, /^usr_crt_/, `credits[${i}].id`);
    pm.expect(c.name, `credits[${i}].name`).to.be.a("string").and.not.empty;

    pm.expect(c.current, `credits[${i}].current`).to.be.a("number");
    pm.expect(c.max, `credits[${i}].max`).to.be.a("number");
    pm.expect(c.remaining, `credits[${i}].remaining`).to.be.a("number");
    pm.expect(c.is_extra, `credits[${i}].is_extra`).to.be.a("boolean");

    // logical checks
    pm.expect(c.remaining, `credits[${i}].remaining <= max`).to.be.at.most(c.max);
    pm.expect(c.current, `credits[${i}].current >= 0`).to.be.at.least(0);
    pm.expect(c.max, `credits[${i}].max > 0`).to.be.greaterThan(0);

    // children optional
    if (Object.prototype.hasOwnProperty.call(c, "children") && c.children !== null) {
      pm.expect(c.children, `credits[${i}].children`).to.be.an("array");
      c.children.forEach((child, j) => {
        pm.expect(child, `credits[${i}].children[${j}]`).to.be.an("object");
        if (Object.prototype.hasOwnProperty.call(child, "name")) {
          pm.expect(child.name, `credits[${i}].children[${j}].name`).to.be.a("string").and.not.empty;
        }
      });
    }
  });
});

// --------------------
// Subscription validations
// --------------------
pm.test('"subscription" is an object', () => {
  pm.expect(res.subscription).to.be.an("object");
});

if (res.subscription) {
  const s = res.subscription;

  pm.test("Subscription ids and fields are valid", () => {
    expectId(s.id, /^org_sub_/, "subscription.id");
    expectId(s.organization_id, /^org_/, "subscription.organization_id");

    // External ids (3rd party format can vary) - just ensure they exist
    pm.expect(s.customer_id, "subscription.customer_id").to.be.a("string").and.not.empty;
    pm.expect(s.subscription_id, "subscription.subscription_id").to.be.a("string").and.not.empty;
    pm.expect(s.price_example_001, "subscription.price_example_001").to.be.a("string").and.not.empty;

    pm.expect(s.status, "subscription.status").to.be.a("string").and.not.empty;
    pm.expect(s.tier, "subscription.tier").to.be.a("string").and.not.empty;

    pm.expect(s.price, "subscription.price").to.be.a("number");

    // Dates
    expectIsoDate(s.current_period_start, "subscription.current_period_start");
    expectIsoDate(s.current_period_end, "subscription.current_period_end");
    expectIsoDate(s.created_at, "subscription.created_at");

    // canceled_at can be null or date
    pm.expect(s).to.have.property("canceled_at");
    expectOptionalIsoDate(s.canceled_at, "subscription.canceled_at");

    // Logical: period end should be after start
    const start = new Date(s.current_period_start).getTime();
    const end = new Date(s.current_period_end).getTime();
    pm.expect(end, "subscription.current_period_end should be after start").to.be.greaterThan(start);
  });
}

// --------------------
// Profile validations
// --------------------
pm.test('"profile" is an object', () => {
  pm.expect(res.profile).to.be.an("object");
});

if (!res.profile) {
  console.warn("profile is missing in response:", res);
  return;
}

const p = res.profile;

// Save current profile_image so update can toggle between urls
pm.environment.set("profileImage", p.profile_image || "");

pm.test("Profile ids and required fields are valid", () => {
  expectId(p.id, /^usr_/, "profile.id");

  pm.expect(p.first_name, "profile.first_name").to.be.a("string").and.not.empty;
  pm.expect(p.last_name, "profile.last_name").to.be.a("string").and.not.empty;

  pm.expect(p.email, "profile.email").to.be.a("string").and.include("@");

  // default_organization_id must exist + match expected prefix
  expectId(p.default_organization_id, /^org_/, "profile.default_organization_id");

  // Flags
  pm.expect(p.is_admin, "profile.is_admin").to.be.a("boolean");
  pm.expect(p.is_complete, "profile.is_complete").to.be.a("boolean");
});

pm.test("Profile dates are valid", () => {
  expectIsoDate(p.created_at, "profile.created_at");

  // These exist in your current response; validate strictly as ISO dates
  expectIsoDate(p.trial_expires_at, "profile.trial_expires_at");
  expectIsoDate(p.activated_at, "profile.activated_at");
  expectIsoDate(p.verified_at, "profile.verified_at");

  // Logical: created_at should not be after activated_at (if both exist)
  const created = new Date(p.created_at).getTime();
  const activated = new Date(p.activated_at).getTime();
  pm.expect(activated, "profile.activated_at should be >= created_at").to.be.at.least(created);
});

pm.test("profile_image is valid", () => {
  // Accept string or null (some users may not have an image)
  if (Object.prototype.hasOwnProperty.call(p, "profile_image")) {
    pm.expect(
      p.profile_image === null || typeof p.profile_image === "string",
      "profile.profile_image must be string or null"
    ).to.eql(true);

    // If string exists, it should not be empty and should look like a url
    if (typeof p.profile_image === "string" && p.profile_image.length > 0) {
      pm.expect(p.profile_image).to.match(/^https?:\/\//);
    }
  }
});

// user_preferences validations (if exists)
pm.test("User preferences are valid (if exists)", () => {
  if (p.user_preferences) {
    pm.expect(p.user_preferences).to.be.an("object");

    expectId(p.user_preferences.id, /^usr_pref_/, "profile.user_preferences.id");
    expectId(p.user_preferences.user_id, /^usr_/, "profile.user_preferences.user_id");

    // Should match current user id
    pm.expect(p.user_preferences.user_id).to.eql(p.id);

    // Dates
    expectIsoDate(p.user_preferences.created_at, "profile.user_preferences.created_at");
    expectIsoDate(p.user_preferences.updated_at, "profile.user_preferences.updated_at");
  } else {
    pm.expect(true).to.eql(true);
  }
});

// Cross-object consistency checks (important)
pm.test("Organization id matches between profile and subscription", () => {
  if (res.subscription && p.default_organization_id) {
    pm.expect(res.subscription.organization_id).to.eql(p.default_organization_id);
  } else {
    pm.expect(true).to.eql(true);
  }
});

// --------------------
// Save variables (useful for next requests)
// --------------------
pm.environment.set("userId", p.id);
pm.environment.set("defaultOrgId", p.default_organization_id);
pm.environment.set("userEmailVerified", p.email);

// Optional debug
console.log("GET_USER_PROFILE userId:", p.id);
console.log("GET_USER_PROFILE defaultOrgId:", p.default_organization_id);
console.log("GET_USER_PROFILE credits count:", res.credits.length);
