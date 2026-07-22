-- QA goal:
-- Preview the exact records before running an UPDATE.
-- Always run the SELECT first.

SELECT
    id,
    email,
    status
FROM users
WHERE email = 'test.user@example.com';

-- Example only. Run in a controlled test environment.
-- UPDATE users
-- SET status = 'INACTIVE'
-- WHERE email = 'test.user@example.com';
