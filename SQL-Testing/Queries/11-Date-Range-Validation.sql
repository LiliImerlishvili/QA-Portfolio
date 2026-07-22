-- QA goal:
-- Verify records created within a defined date range.

SELECT
    id,
    email,
    created_at
FROM users
WHERE created_at >= '2026-01-01 00:00:00'
  AND created_at <  '2027-01-01 00:00:00'
ORDER BY created_at ASC;
