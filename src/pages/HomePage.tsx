import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section className="flex flex-col items-center gap-6 py-12 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Expense Tracker</h1>
        <p className="mx-auto max-w-md text-slate-500 dark:text-slate-400">
          Track where your money goes. Add expenses, organize them by category
          and keep an eye on your spending.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          to="/expenses/new"
          className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Add expense
        </Link>
        <Link
          to="/expenses"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          View list
        </Link>
      </div>
    </section>
  );
}
