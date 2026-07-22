-- QA goal:
-- Example query for verifying a user record created through an API request.
-- Replace the placeholder email with sanitized test data only.

SELECT
    id,
    first_name,
    last_name,
    email,
    status,
    created_at
FROM users
WHERE email = 'test.user@example.com';
