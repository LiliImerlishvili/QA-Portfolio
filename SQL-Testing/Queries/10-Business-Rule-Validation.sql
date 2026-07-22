-- QA goal:
-- Detect completed orders with invalid zero or negative totals.

SELECT
    id,
    user_id,
    status,
    total_amount
FROM orders
WHERE status = 'COMPLETED'
  AND total_amount <= 0;
