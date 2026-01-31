![Playwright CI](https://github.com/kononets22820/playwright-automation-portfolio/actions/workflows/ci.yml/badge.svg)

# playwright-automation-portfolio

## Architecture

This project follows a clean and maintainable automation architecture:

- **Page Object Model (POM):** UI interactions are encapsulated in page classes under `src/pages`
- **Test Layer Separation:** UI and API tests are separated into `tests/ui` and `tests/api`
- **Reusability:** Page objects and helpers reduce duplication and improve readability
- **CI/CD:** Tests run automatically in GitHub Actions with HTML reports uploaded as artifacts

This structure mirrors real-world automation frameworks used in production QA teams.