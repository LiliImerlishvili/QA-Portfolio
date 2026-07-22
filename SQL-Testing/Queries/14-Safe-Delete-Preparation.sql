-- QA goal:
-- Preview the exact records before running a DELETE.
-- Never run destructive queries against production data.

SELECT
    id,
    email,
    status
FROM users
WHERE email = 'temporary.test.user@example.com';

-- Example only. Run in a controlled test environment.
-- DELETE FROM users
-- WHERE email = 'temporary.test.user@example.com';
