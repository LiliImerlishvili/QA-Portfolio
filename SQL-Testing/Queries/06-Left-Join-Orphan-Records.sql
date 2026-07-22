-- QA goal:
-- Detect orders that reference a user record that does not exist.

SELECT
    o.id AS order_id,
    o.user_id
FROM orders AS o
LEFT JOIN users AS u
    ON u.id = o.user_id
WHERE u.id IS NULL;
