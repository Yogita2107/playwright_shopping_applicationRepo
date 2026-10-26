# Online Shopping Application – Playwright Automation

## Project Overview
This project automates an online shopping application using Playwright with JavaScript. It covers functional and end-to-end testing scenarios for shopping workflows.

## Technologies Used
- Playwright
- JavaScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Framework Design
The framework follows the Page Object Model (POM) design pattern, making page classes reusable and test scripts easier to maintain.

## Key Features
- User registration and login
- Books, Electronics, and Fashion product testing
- Add-to-cart and remove-from-cart
- Wishlist functionality
- Product review testing
- Shipping and billing address updates
- Payment workflow testing
- Order tracking
- Custom fixtures
- Environment configuration using `.env`
- Authentication reuse using Playwright `storageState`
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

1. Install Node.js.
2. Clone this repository.
3. Open the project folder in VS Code.
4. Install dependencies:

   `npm install`

5. Install Playwright browsers:

   `npx playwright install`

6. Configure your local `.env` file with the environment variables required by your project. Do not upload real credentials or authentication state files.

## Running Tests

Run all tests:

`npx playwright test`

Open Playwright UI mode:

`npx playwright test --ui`

View the HTML report:

`npx playwright show-report`

## Security
Keep `.env`, authentication state files, and real account credentials private.

## Author
Yogita Pawar
