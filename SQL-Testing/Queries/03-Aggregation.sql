-- QA goal:
-- Validate the total number of users by status.

SELECT
    status,
    COUNT(*) AS user_count
FROM users
GROUP BY status
ORDER BY user_count DESC;
