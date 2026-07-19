# SQL Testing

This section contains SQL queries and database validation examples used for QA testing.

## Covered Areas

- Data validation
- CRUD operation testing
- Filtering and sorting
- JOIN queries
- NULL value checks
- Duplicate record checks
- Database consistency validation

## Example Queries

```sql
SELECT *
FROM users;
```

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

```sql
SELECT email, COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```
