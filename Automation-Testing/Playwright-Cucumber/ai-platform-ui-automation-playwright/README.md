# GetBotAI Playwright Automation Framework

End-to-end test automation for **GetBotAI** using **TypeScript**, **Playwright**, and **Cucumber (BDD)**.

---

## Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev) | Browser automation + API request context |
| [Cucumber.js](https://cucumber.io) | BDD feature files & step definitions |
| TypeScript | Type safety across the entire framework |
| Chai | Assertions |
| Winston | Structured logging |
| multiple-cucumber-html-reporter | HTML test reports |

---

## Project Structure

```
getbotai-playwright-automation/
├── src/
│   ├── api/
│   │   ├── base/BaseApiClient.ts      # Shared HTTP helpers (auth headers, logging)
│   │   └── clients/                   # One typed client per API domain
│   ├── ui/
│   │   ├── pages/                     # Page Object Models
│   │   └── components/                # Reusable UI components
│   ├── support/
│   │   ├── world.ts                   # Cucumber World (shared scenario state)
│   │   └── hooks.ts                   # Before/After lifecycle hooks
│   ├── types/api.types.ts             # Full TypeScript type definitions
│   ├── utils/
│   │   ├── tokenManager.ts            # Access/refresh token management
│   │   ├── logger.ts                  # Winston logger
│   │   └── assertions.ts             # Fluent assertion helpers
│   ├── fixtures/testData.ts           # Centralised test data
│   └── config/config.ts              # Environment-aware configuration
├── features/
│   ├── api/                           # API BDD scenarios
│   └── ui/                            # UI BDD scenarios
├── step-definitions/
│   ├── api/                           # API step implementations
│   └── ui/                            # UI step implementations
├── scripts/generateReport.ts          # HTML report generator
├── cucumber.js                        # Cucumber profiles
├── tsconfig.json
└── .env.example
```

---

## Setup

```bash
# 1. Copy environment file
cp .env.example .env

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install chromium
```

Configure `.env` to point at your running backend:
```
BASE_URL=http://localhost:5001
TEST_EMAIL=afgan.shahguliyev.test@gmail.com
OTP_CODE=123456
```

---

## Running Tests

```bash
# All tests
npm test

# API tests only
npm run test:api

# UI tests only
npm run test:ui

# Smoke tests
npm run test:smoke

# Specific tag
npm run test:tag -- '@auth'

# Rerun only failed scenarios
npm run test -- --profile rerun
```

---

## Generating the HTML Report

```bash
npm run test:api          # produces reports/cucumber-report.json
npm run report            # generates reports/html-report/index.html
```

---

## Auth Flow

The backend uses email-based OTP authentication. In **dev mode** with `OTP_PIN_STATIC=123456`, tests use the static code `123456`.

The `I am authenticated as "email"` step handles the full sign-in → verify OTP → save tokens flow automatically.

---

## Adding New Tests

1. **Feature file** — add a `.feature` file under `features/api/` or `features/ui/`
2. **API Client** — if it's a new domain, create a client in `src/api/clients/` extending `BaseApiClient`
3. **Step definitions** — add steps to the relevant file under `step-definitions/`
4. **Types** — add request/response interfaces to `src/types/api.types.ts`
