# Newman Commands

## Run collection

```bash
newman run ../collections/AI-Media-Platform-Sanitized.postman_collection.json
```

## Run with reporters

```bash
newman run ../collections/AI-Media-Platform-Sanitized.postman_collection.json \
  -r cli,json
```

## Security

- Do not commit private environment files.
- Do not pass secrets directly through shell history.
- Use CI secret storage for real credentials.
