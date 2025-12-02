Playwright BDD Automation Framework (JavaScript + Cucumber + Page Object Model)

This repository contains a scalable, maintainable UI automation framework built using:

Playwright (UI automation)

Cucumber BDD (Gherkin)

JavaScript

Page Object Model (POM)

Allure Reporting

VS Code as the recommended editor

The framework automates test scenarios on
https://www.saucedemo.com


Features Automated
✔ 1. Login

Valid login

Invalid login & error validation

✔ 2. Cart & Checkout

Add multiple items to cart

Verify cart count

Proceed to checkout

✔ 3. Sorting

Sort products by price (Low → High)

Validate sorted values

✔ 4. End-to-End Purchase Flow

Add items

Proceed to checkout

Complete order

Verify success confirmation

playwright-bdd-js-framework/
│
├── package.json
├── cucumber.js
├── README.md
├── .gitignore
│
├── features/
│   ├── login.feature
│   ├── cart.feature
│   ├── sort.feature
│   └── order.feature
│
├── steps/
│   ├── hooks.js
│   ├── loginSteps.js
│   ├── cartSteps.js
│   ├── sortSteps.js
│   └── orderSteps.js
│
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── HomePage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── OrderCompletePage.js
│
├── utils/
│   ├── testData.js
│   ├── envConfig.js
│   └── reporter.js
│
└── allure-results/  (auto-generated)


Installation
1️⃣ Clone the repository
git clone https://github.com/<your-repo>/playwright-bdd-js-framework.git
cd playwright-bdd-js-framework

2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

▶️ Run Tests

Run the entire test suite:

npm test


Run with detailed output:

npx cucumber-js --publish-quiet


Run a single feature:

npx cucumber-js features/login.feature


Run with tags:

npx cucumber-js --tags "@smoke"

📊 Generate Test Reports (Allure Report)
Generate report:
npm run report


This will:

Generate HTML report

Open the Allure dashboard in browser

🧱 Framework Architecture
1. Page Object Model

Each UI page has its own class inside /pages.
This makes locators reusable and tests easy to maintain.

2. Cucumber BDD

Readable and business-oriented test cases using Gherkin:

Scenario: Valid Login
  Given I navigate to saucedemo
  When I login with username "standard_user" and password "secret_sauce"
  Then I should be logged in successfully

3. Step Definitions

Each Gherkin step maps to JavaScript in /steps.

4. Reusable Hooks

hooks.js initializes and closes Playwright browser for each scenario.

5. Allure Reporting

Automatically generated JSON → HTML reports.

🛠 Commands Summary
Action	Command
Install dependencies	npm install
Install browsers	npx playwright install
Run tests	npm test
Run specific feature	npx cucumber-js features/login.feature
Generate report	npm run report
Clean node modules	rm -rf node_modules
🏗 Extending the Framework

You can easily add:

🔹 Parallel execution
🔹 Environment switching (Dev/QA/Prod)
🔹 API integrations
🔹 CI/CD (GitHub Actions, Jenkins, GitLab)
🔹 Test data injection

If you want, I can create all these enhancements for you.