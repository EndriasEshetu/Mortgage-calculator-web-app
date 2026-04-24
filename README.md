# Mortgage Calculator Web App

A responsive mortgage calculator built with React and Vite that estimates monthly mortgage payments from four core inputs:

- Purchase price
- Down payment
- Repayment time (years)
- Interest rate (annual)

## What It Does

- Calculates loan amount from purchase price and down payment
- Computes estimated monthly payment using the standard amortization formula
- Handles 0% interest as a special case
- Validates user inputs and shows inline error messages
- Presents a clean loan snapshot with formatted USD currency values
- Works on mobile and desktop layouts

## Tech Stack

- React 19
- Vite 8
- ESLint

## Getting Started

### Prerequisites

- Node.js (modern LTS recommended)
- npm

### Install and Run

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal (usually http://localhost:5173).

## Available Scripts

- npm run dev: Starts the Vite development server
- npm run build: Creates a production build
- npm run preview: Serves the production build locally
- npm run lint: Runs ESLint checks

## Mortgage Formula Used

The app uses the standard fixed-rate mortgage payment formula:

M = P x [ r(1 + r)^n ] / [ (1 + r)^n - 1 ]

Where:

- M = monthly payment
- P = loan amount
- r = monthly interest rate (annual rate / 12)
- n = total number of monthly payments (years x 12)

If the interest rate is 0, monthly payment is calculated as:

monthly payment = loan amount / total payments

## Validation Rules

- Purchase price must be greater than 0
- Down payment must be 0 or greater
- Down payment cannot exceed purchase price
- Repayment time must be greater than 0
- Interest rate must be 0 or greater

## Project Structure

```text
.
├── public/
│   ├── elogo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── InputField.jsx
│   │   ├── MortgageForm.jsx
│   │   ├── Navbar.jsx
│   │   └── Results.jsx
│   ├── constants/
│   │   └── default.js
│   ├── utils/
│   │   ├── calculateMortgage.js
│   │   └── formatCurrency.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Notes

- Currency formatting currently uses USD locale and currency settings
- This tool provides an estimate and does not include taxes, insurance, HOA fees, or lender-specific charges
