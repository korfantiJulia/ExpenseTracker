import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";
import { CategoryPieChart } from "@/components/CategoryPieChart";
import { useState } from "react";

export function HomePage() {
  const expenses = useAppSelector((state) => state.expenses.items);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const byPeriodExpenses = expenses.filter((expense) => {
    const afterFrom = from === "" || expense.date >= from;
    const beforeTo = to === "" || expense.date <= to;
    return afterFrom && beforeTo;
  });

  const totalSpent = byPeriodExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const count = byPeriodExpenses.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            An overview of your spending.
          </p>
        </div>
        <Link
          to="/expenses/new"
          className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Add expense
        </Link>
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            From
          </span>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded-md border border-slate-400 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-slate-500 focus:ring-2 focus:ring-slate-500/30 dark:border-slate-600 dark:bg-slate-900"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            To
          </span>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded-md border border-slate-400 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-slate-500 focus:ring-2 focus:ring-slate-500/30 dark:border-slate-600 dark:bg-slate-900"
          />
        </label>

        {(from || to) && (
          <button
            onClick={() => {
              setFrom("");
              setTo("");
            }}
            className="rounded-md border border-slate-400 px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
          >
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total spent
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums">{totalSpent}$</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          <p className="text-sm text-slate-500 dark:text-slate-400">Expenses</p>
          <p className="mt-1 text-2xl font-bold tabular-nums">{count}</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          By category
        </h2>
        <CategoryPieChart expenses={byPeriodExpenses} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          to="/expenses"
          className="group rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm transition-colors hover:border-slate-400 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-600 dark:hover:bg-slate-900"
        >
          <h3 className="font-semibold">
            All expenses{" "}
            <span className="transition-transform group-hover:translate-x-0.5 inline-block">
              →
            </span>
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Search, filter, sort, edit and delete your expenses.
          </p>
        </Link>
        <Link
          to="/months"
          className="group rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm transition-colors hover:border-slate-400 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-600 dark:hover:bg-slate-900"
        >
          <h3 className="font-semibold">
            By month{" "}
            <span className="transition-transform group-hover:translate-x-0.5 inline-block">
              →
            </span>
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Monthly totals and a category breakdown.
          </p>
        </Link>
      </div>
    </div>
  );
}
