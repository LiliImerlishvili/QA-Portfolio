-- QA goal:
-- Verify sorting and pagination-related database results.

SELECT
    id,
    email,
    created_at
FROM users
ORDER BY created_at DESC
LIMIT 10;
