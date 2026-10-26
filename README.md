# Online Shopping Application – Playwright Automation

## Project Overview
This project automates functional and end-to-end test scenarios for an Online Shopping Application using Playwright with JavaScript.

## Technologies Used
- Playwright
- JavaScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Framework Design
The framework follows the **Page Object Model (POM)** design pattern to maintain reusable page classes and improve test maintainability.

## Key Features
- User registration and login testing
- Product browsing across Books, Electronics, and Fashion
- Add-to-cart and remove-from-cart testing
- Wishlist functionality
- Product review testing
- Shipping and billing address updates
- Payment workflow testing
- Order tracking
- Reusable custom fixtures
- Environment configuration using `.env`
- Authentication state reuse using Playwright `storageState`
- GitHub Actions workflow configuration

## Project Structure
```text
ShoppingPortal/
├── .github/workflows/
├── PageObjectModel/
├── fixture/
├── screenshots/
├── testData/
├── tests/
├── .gitignore
├── config.js
├── package.json
└── playwright.config.js
```

## Setup Instructions

1. Install [Node.js](https://nodejs.org/).
2. Clone this repository.
3. Open the project folder in VS Code.
4. Install dependencies:

   `npm install`

5. Install the required Playwright browsers:

   `npx playwright install`

6. Configure the required environment variables in a local `.env` file. Do not upload secrets or real account credentials.

## Running Tests

Run all configured tests:

`npx playwright test`

Run tests with the Playwright UI:

`npx playwright test --ui`

View the HTML report:

`npx playwright show-report`

## Security Notes
The `.env` file, authentication state files, and real credentials should remain private and must not be committed to GitHub.

## Author
Yogita Pawar
