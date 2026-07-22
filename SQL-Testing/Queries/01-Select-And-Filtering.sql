-- QA goal:
-- Retrieve active users and validate filtering behavior.

SELECT
    id,
    first_name,
    last_name,
    email,
    status
FROM users
WHERE status = 'ACTIVE';
