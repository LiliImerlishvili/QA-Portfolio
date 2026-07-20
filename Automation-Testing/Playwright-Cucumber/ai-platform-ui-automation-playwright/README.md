# AI Platform UI Automation Framework

End-to-end UI test automation using **TypeScript**, **Playwright**, and **Cucumber (BDD)**.

---

## Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev) | Browser automation |
| [Cucumber.js](https://cucumber.io) | BDD feature files & step definitions |
| TypeScript | Type safety across the entire framework |
| Chai | Assertions |
| Winston | Structured logging |
| multiple-cucumber-html-reporter | HTML test reports |

---

## Project Structure

```
ai-platform-ui-automation-playwright/
├── src/
│   ├── ui/
│   │   ├── pages/                     # Page Object Models
│   │   └── components/                # Reusable UI components
│   ├── support/
│   │   ├── world.ts                   # Cucumber World (shared scenario state)
│   │   └── hooks.ts                   # Before/After lifecycle hooks
│   ├── utils/
│   │   ├── otpProvider.ts             # OTP retrieval helpers
│   │   ├── logger.ts                  # Winston logger
│   │   └── assertions.ts             # Fluent assertion helpers
│   ├── fixtures/testData.ts           # Centralised test data
│   └── config/config.ts              # Environment-aware configuration
├── features/
│   └── ui/                            # UI BDD scenarios
├── step-definitions/
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

Configure `.env` with your environment:
```
BASE_URL=https://your-app-url.com
TEST_EMAIL=testuser@example.com
OTP_CODE=123456
```

---

## Running Tests

```bash
# All tests
npm test

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
npm test                  # produces reports/cucumber-report.json
npm run report            # generates reports/html-report/index.html
```

---

## Auth Flow

The application uses email-based OTP authentication. Tests can run with a static OTP code (set via `OTP_CODE` in `.env`) or with Gmail integration for reading OTP emails automatically.

The `I am logged in as "email" with OTP "code"` step handles the full sign-in → enter OTP → verify flow automatically.

---

## Adding New Tests

1. **Feature file** — add a `.feature` file under `features/ui/`
2. **Page Object** — if it's a new page, create a class in `src/ui/pages/` extending `BasePage`
3. **Step definitions** — add steps to the relevant file under `step-definitions/ui/`
