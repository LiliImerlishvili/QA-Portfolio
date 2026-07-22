-- QA goal:
-- Find users with missing or empty email values.

SELECT
    id,
    first_name,
    last_name,
    email
FROM users
WHERE email IS NULL
   OR TRIM(email) = '';
