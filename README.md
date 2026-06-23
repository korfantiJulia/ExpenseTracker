# Expense Tracker

A front-end expense tracker built as a graduation project. Add expenses, organize them by category, browse them by month, and get a visual overview of your spending.

**Live demo:** https://expense-tracker-seven-dusky-31.vercel.app/
**Repository:** https://github.com/korfantiJulia/ExpenseTracker

## Features

- **Full CRUD** — create, view, edit and delete expenses (delete asks for confirmation).
- **Validated form** — title, amount, category, date and description, with inline error messages (react-hook-form + zod).
- **List page** — search by title, filter by category, sort by date or amount, and "Load more" pagination.
- **By month** — expenses grouped by month with totals and a per-category breakdown; open a month to see its expenses.
- **Dashboard** — pick a date range to see total spent, number of expenses and a category pie chart for that period.
- **Charts** — category breakdown as a pie chart (Recharts).
- **Persistence** — data is saved to `localStorage`, so it survives page reloads.
- **Loading & error states** — a mock API (async thunk) drives loading and error UI with a retry action.
- **Dark mode** and a responsive layout.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Redux Toolkit** + **react-redux** — state management and an async thunk
- **React Router 7** — client-side routing
- **react-hook-form** + **zod** — forms and validation
- **Tailwind CSS v4** — styling
- **Recharts** — charts
- **Vite 6** — build tooling

## Getting started

Requires Node.js 18+.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# create a production build
npm run build

# preview the production build locally
npm run preview
```

## Project structure

```
src/
  components/      reusable UI (ExpenseCard, ExpenseForm, CategoryPieChart)
  features/
    expenses/      Redux slice, async thunk, zod schema, storage & helpers
  pages/           route pages (Home, list, details, create, edit, months, 404)
  store/           Redux store and typed hooks
  types/           shared TypeScript types
  utils/           generic helpers (date formatting)
```

## Notes

This is a front-end-only project. There is no real backend — expenses are stored in the browser's `localStorage`, and the "API" loading state is simulated with an async thunk.
