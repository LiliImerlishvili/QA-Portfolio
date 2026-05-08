# Postman Test Scripts

This document contains example Postman test scripts used for API response validation.

The goal of these scripts is to validate API responses using basic JavaScript checks in Postman.

These scripts check:

- HTTP status codes
- JSON response format
- Response time
- Required fields
- Data types
- Email format
- List structure
- Negative scenarios
- Error handling behavior

---

## 1. Status Code Validation

This script verifies that the API returns the expected HTTP status code.

```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

### What This Test Checks

This test confirms that the request was successful and the API returned `200 OK`.

---

## 2. JSON Response Validation

This script verifies that the response is returned in JSON format.

```js
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});
```

### What This Test Checks

This test confirms that the API response format is JSON.

---

## 3. Response Time Validation

This script verifies that the API response time is acceptable.

```js
pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
```

### What This Test Checks

This test confirms that the API response time is below `1000ms`.

---

## 4. Required Fields Validation

This script verifies that the response contains required user fields.

```js
pm.test("Response contains required user fields", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("email");
});
```

### What This Test Checks

This test confirms that the response body contains the required fields:

- `id`
- `name`
- `email`

---

## 5. User ID Validation

This script verifies that the returned user ID matches the requested user ID.

```js
pm.test("User ID is correct", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.eql(1);
});
```

### What This Test Checks

This test confirms that the returned user ID is equal to `1`.

---

## 6. Email Format Validation

This script verifies that the email value has a valid email format.

```js
pm.test("Email has valid format", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
```

### What This Test Checks

This test confirms that the returned email has a valid email format.

Example valid email format:

```text
user@example.com
```

---

## 7. Data Type Validation

This script verifies that response fields have correct data types.

```js
pm.test("User fields have correct data types", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.be.a("number");
    pm.expect(jsonData.name).to.be.a("string");
    pm.expect(jsonData.email).to.be.a("string");
});
```

### What This Test Checks

This test confirms that response fields have correct data types:

| Field | Expected Type |
|---|---|
| `id` | Number |
| `name` | String |
| `email` | String |

---

## 8. Users List Validation

This script verifies that the response contains a list of users.

```js
pm.test("Response contains users list", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.be.an("array");
    pm.expect(jsonData.length).to.be.above(0);
});
```

### What This Test Checks

This test confirms that:

- Response is an array
- Users list is not empty

---

## 9. Each User Object Validation

This script verifies that each user object in the list contains required fields.

```js
pm.test("Each user has required fields", function () {
    const jsonData = pm.response.json();

    jsonData.forEach(function (user) {
        pm.expect(user).to.have.property("id");
        pm.expect(user).to.have.property("name");
        pm.expect(user).to.have.property("email");
    });
});
```

### What This Test Checks

This test confirms that every user object contains the required fields.

---

## 10. Negative Scenario - 404 Status Code

This script verifies that the API returns `404 Not Found` for a non-existing resource.

```js
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});
```

### What This Test Checks

This test confirms that the API handles non-existing resources correctly.

---

## 11. Negative Scenario - 400 or 404 Status Code

This script verifies that the API returns an appropriate error status code for invalid input.

```js
pm.test("Status code is 400 or 404", function () {
    pm.expect([400, 404]).to.include(pm.response.code);
});
```

### What This Test Checks

This test confirms that the API returns one of the expected error status codes:

- `400 Bad Request`
- `404 Not Found`

This is useful because different APIs may handle invalid ID formats differently.

---

## 12. Negative Scenario - User Data Should Not Be Returned

This script verifies that valid user data is not returned for invalid or non-existing user requests.

```js
pm.test("API does not return valid user data", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.be.undefined;
});
```

### What This Test Checks

This test confirms that invalid or non-existing user requests do not return valid user data.

---

# Full Script Examples

---

## 13. Full Example - Valid User Request

Endpoint:

```text
GET /users/1
```

This full script can be used for validating a valid user response.

```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Response contains required user fields", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("email");
});

pm.test("User fields have correct data types", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.be.a("number");
    pm.expect(jsonData.name).to.be.a("string");
    pm.expect(jsonData.email).to.be.a("string");
});

pm.test("User ID is correct", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.eql(1);
});

pm.test("Email has valid format", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
```

---

## 14. Full Example - Users List Request

Endpoint:

```text
GET /users
```

This full script can be used for validating a list of users.

```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Response contains users list", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData).to.be.an("array");
    pm.expect(jsonData.length).to.be.above(0);
});

pm.test("Each user has required fields", function () {
    const jsonData = pm.response.json();

    jsonData.forEach(function (user) {
        pm.expect(user).to.have.property("id");
        pm.expect(user).to.have.property("name");
        pm.expect(user).to.have.property("email");
    });
});

pm.test("Each user field has correct data type", function () {
    const jsonData = pm.response.json();

    jsonData.forEach(function (user) {
        pm.expect(user.id).to.be.a("number");
        pm.expect(user.name).to.be.a("string");
        pm.expect(user.email).to.be.a("string");
    });
});
```

---

## 15. Full Example - Non-existing User Request

Endpoint:

```text
GET /users/9999
```

This full script can be used for validating a non-existing user response.

```js
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("API does not return valid user data", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.be.undefined;
});
```

---

## 16. Full Example - Invalid User ID Format

Endpoint:

```text
GET /users/abc
```

This full script can be used for validating an invalid user ID format.

```js
pm.test("Status code is 400 or 404", function () {
    pm.expect([400, 404]).to.include(pm.response.code);
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("API does not return valid user data", function () {
    const jsonData = pm.response.json();

    pm.expect(jsonData.id).to.be.undefined;
});
```

---

## 17. Full Example - Invalid Endpoint

Endpoint:

```text
GET /invalid-endpoint
```

This full script can be used for validating an invalid endpoint.

```js
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
```

---

## Notes

These scripts are basic examples for portfolio demonstration.

They show how I validate API responses in Postman using JavaScript test scripts.

The scripts can be adjusted depending on the real API response structure and expected behavior.

For example:

- Some APIs may return `400 Bad Request` for invalid ID format
- Some APIs may return `404 Not Found` for invalid or non-existing resources
- Some APIs may return an empty object instead of a detailed error message

The main goal is to show that API responses are validated clearly and consistently.
