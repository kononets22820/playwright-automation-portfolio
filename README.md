![Playwright CI](https://github.com/kononets22820/playwright-automation-portfolio/actions/workflows/ci.yml/badge.svg)

# Playwright Automation Portfolio (UI + API)

This repository showcases a **QA Automation framework** built with **Playwright** to demonstrate real-world UI and API test automation practices, CI/CD integration, and maintainable test architecture.

- **UI automation:** SauceDemo (login, cart, checkout E2E)
- **API automation:** Public REST API smoke tests
- **CI/CD:** GitHub Actions with HTML report artifacts

---

## Tech Stack
- Playwright Test (TypeScript)
- Page Object Model (POM)
- GitHub Actions CI
- Playwright HTML Reports

---

## Architecture

This project follows a clean and maintainable automation architecture:

- **Page Object Model (POM):** UI interactions are encapsulated in page classes under `src/pages`
- **Test Layer Separation:** UI and API tests are separated into `tests/ui` and `tests/api`
- **Reusability:** Shared fixtures and utilities reduce duplication and improve readability
- **CI/CD:** Tests run automatically in GitHub Actions with HTML reports uploaded as artifacts

This structure mirrors automation frameworks commonly used in production QA teams.

---

## Project Structure

```
src/
  pages/        # Page Objects
  api/          # API client layer
  fixtures/     # Test data
  utils/        # Helpers (auth, env)

tests/
  ui/           # UI tests (SauceDemo)
  api/          # API smoke tests

.github/
  workflows/    # CI pipeline
```

---

## Run Tests Locally

```bash
npm ci
npx playwright install --with-deps
npm test
```

---

## Run Only UI or API Tests

```bash
npm run test:ui
npm run test:api
```

---

## Test Reports

### Local run
```bash
npm run report
```

### CI run
After each GitHub Actions run, the Playwright HTML report is uploaded as a workflow artifact.
