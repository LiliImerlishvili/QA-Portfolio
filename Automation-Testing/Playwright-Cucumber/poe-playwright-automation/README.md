# Poe.com UI Automation Framework

End-to-end UI test automation for [Poe.com](https://poe.com) using **TypeScript**, **Playwright**, and **Cucumber (BDD)**.

---

## Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev) | Browser automation |
| [Cucumber.js](https://cucumber.io) | BDD feature files & step definitions |
| TypeScript | Type safety across the entire framework |
| Chai | Assertions |

---

## Project Structure

```
poe-playwright-automation/
├── src/
│   └── ui/
│       └── pages/
│           ├── BasePage.ts      # Shared navigation and utility methods
│           ├── LoginPage.ts     # Login page locators, actions, and checks
│           └── HomePage.ts      # Homepage redirect behaviour
├── features/
│   └── ui/
│       ├── login.feature        # Login page BDD scenarios
│       └── homepage.feature     # Homepage redirect BDD scenarios
├── step-definitions/
│   └── ui/
│       ├── auth.steps.ts        # Login step implementations
│       └── homepage.steps.ts    # Homepage step implementations
├── support/
│   ├── world.ts                 # Cucumber World (shared browser state)
│   └── hooks.ts                 # Before/After lifecycle hooks
├── reports/                     # Generated HTML test reports
├── cucumber.js                  # Cucumber runner configuration
└── tsconfig.json
```

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browser
npx playwright install chromium
```

---

## Running Tests

```bash
# All tests (headed by default)
npm test

# Smoke tests only
npm run test:smoke

# Negative / validation tests
npm run test:negative

# Run headless (CI mode)
HEADLESS=true npm test
```

---

## Test Coverage

### Login Page (`@login`)

| Tag | Scenario |
|-----|----------|
| `@smoke` | Page loads successfully |
| `@smoke` | Page title contains "Poe" |
| `@smoke` | URL contains "poe.com" |
| `@smoke` | Poe logo is visible |
| `@smoke` | Main heading is visible |
| `@smoke` | Continue with Google button is visible |
| `@smoke` | Continue with Apple button is visible |
| `@smoke` | Email input field is visible |
| `@smoke` | Go button is visible |
| `@smoke` | Use phone option is visible |
| `@smoke` | Terms of Service link is visible |
| `@smoke` | Privacy Policy link is visible |
| `@negative` | Invalid email does not proceed to OTP screen |

### Homepage (`@homepage`)

| Tag | Scenario |
|-----|----------|
| `@smoke` | Homepage redirects unauthenticated users to login |
| `@smoke` | Homepage URL contains "poe.com" |
| `@smoke` | Homepage title contains "Poe" |
| `@smoke` | Poe logo is visible after redirect |
| `@smoke` | Email input is visible after redirect |
| `@smoke` | Google login button is visible after redirect |

---

## Architecture

The framework uses the **Page Object Model (POM)** pattern:

- **Feature files** describe behaviour in plain English (Gherkin)
- **Step definitions** connect Gherkin steps to TypeScript code
- **Page Objects** encapsulate all locators and actions for each page
- **BasePage** provides shared utilities (navigation, URL/title getters)
- **Hooks** manage browser lifecycle (open before / close after each scenario)
