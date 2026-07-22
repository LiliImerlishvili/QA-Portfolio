-- QA goal:
-- Compare the stored order total with the calculated sum of order items.

SELECT
    o.id AS order_id,
    o.total_amount AS stored_total,
    SUM(oi.quantity * oi.unit_price) AS calculated_total
FROM orders AS o
INNER JOIN order_items AS oi
    ON oi.order_id = o.id
GROUP BY
    o.id,
    o.total_amount
HAVING o.total_amount <> SUM(oi.quantity * oi.unit_price);
