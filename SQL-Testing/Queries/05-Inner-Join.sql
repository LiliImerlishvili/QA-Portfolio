-- QA goal:
-- Verify that order data is correctly linked to user data.

SELECT
    o.id AS order_id,
    o.status AS order_status,
    o.total_amount,
    u.id AS user_id,
    u.email
FROM orders AS o
INNER JOIN users AS u
    ON u.id = o.user_id;
