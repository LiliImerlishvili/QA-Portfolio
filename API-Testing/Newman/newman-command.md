# Newman Commands

## Install Newman

```bash
npm install -g newman
```

## Run a Collection

```bash
newman run ../Postman-Collections/AI-Media-Platform-API-Tests-Sanitized.postman_collection.json
```

## Generate a CLI and JSON Report

```bash
newman run ../Postman-Collections/AI-Media-Platform-API-Tests-Sanitized.postman_collection.json   --reporters cli,json   --reporter-json-export newman-report.json
```

## Run with an Environment

```bash
newman run ../Postman-Collections/AI-Media-Platform-API-Tests-Sanitized.postman_collection.json   -e ../Environments/Sanitized-Environment.postman_environment.json
```
