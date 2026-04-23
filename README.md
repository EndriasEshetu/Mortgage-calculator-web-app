# Mortgage Calculator Web App

A responsive mortgage calculator built with React + Vite.

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

## Organized folder structure

```text
src/
  components/
    InputField.jsx
    MortgageForm.jsx
    Results.jsx
  constants/
    default.js
  styles/
    global.css
  utils/
    calculateMortgage.js
    formatCurrency.js
  App.jsx
  main.jsx
```

## Notes

- Naming typos were normalized (`MortgageForm`, `calculateMortgage`).
- Form validation prevents invalid inputs before calculation.
- Supports both repayment and interest-only mortgage types.
