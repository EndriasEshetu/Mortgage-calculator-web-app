# Mortgage Calculator Web App

A responsive mortgage calculator built with React + Vite.

## Features

- Mortgage estimate based on purchase price, down payment, term, and interest rate
- Input validation with clear inline errors
- Results summary with formatted currency output
- Informational About section with formula explanation
- Sticky navbar and footer with external profile links
- Responsive layout for desktop and mobile

## Run locally

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts local development server.
- `npm run build` creates production build.
- `npm run preview` previews production build.
- `npm run lint` runs ESLint.

## Folder structure

```text
mortgage-calculator-web-app/
│
├── dist/
├── node_modules/
├── public/
│   ├── elogo.png
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── InputField.jsx
│   │   ├── MortgageForm.jsx
│   │   ├── Navbar.jsx
│   │   └── Results.jsx
│   │
│   ├── constants/
│   │   └── default.js
│   │
│   ├── utils/
│   │   ├── calculateMortgage.js
│   │   └── formatCurrency.js
│   │
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Notes

- Naming typos were normalized (`MortgageForm`, `calculateMortgage`).
- Form validation prevents invalid inputs before calculation.
- Current calculation flow is standard repayment estimate.
