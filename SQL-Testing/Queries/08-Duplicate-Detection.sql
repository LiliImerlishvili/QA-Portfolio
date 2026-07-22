-- QA goal:
-- Detect duplicate email addresses.

SELECT
    LOWER(TRIM(email)) AS normalized_email,
    COUNT(*) AS duplicate_count
FROM users
WHERE email IS NOT NULL
  AND TRIM(email) <> ''
GROUP BY LOWER(TRIM(email))
HAVING COUNT(*) > 1;
