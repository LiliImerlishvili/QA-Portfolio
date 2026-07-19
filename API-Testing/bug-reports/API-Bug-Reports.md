# Sanitized API Bug Reports

## API-BUG-001 — Standard user can access an admin endpoint

**Severity:** Critical  
**Priority:** High  
**Area:** Authorization

### Preconditions

A valid standard-user token exists.

### Steps

1. Send `GET /v1/admin/users`.
2. Add the standard-user token.
3. Send the request.

### Actual Result

The API returns `200 OK`.

### Expected Result

The API should return `403 Forbidden`.

### Risk

Unauthorized access to restricted data.

---

## API-BUG-002 — Empty required field is accepted

**Severity:** High  
**Priority:** High  
**Area:** Validation

### Steps

1. Send a valid generation request.
2. Set `prompt` to an empty string.
3. Send the request.

### Actual Result

The request is processed.

### Expected Result

The API should return `400 Bad Request` with a clear validation message.

---

## API-BUG-003 — Error response exposes internal details

**Severity:** High  
**Priority:** High  
**Area:** Security / Error Handling

### Steps

1. Send malformed JSON.
2. Review the response.

### Actual Result

The response exposes internal implementation details.

### Expected Result

The API should return a controlled error object without stack traces or infrastructure details.

---

## API-BUG-004 — Incorrect response data type

**Severity:** Medium  
**Priority:** Medium  
**Area:** Contract Validation

### Actual Result

`image_count` is returned as a string.

### Expected Result

`image_count` should be numeric and equal to the `images` array length.

---

## NDA Notice

All project identifiers, production URLs, client information, and confidential values were removed.
