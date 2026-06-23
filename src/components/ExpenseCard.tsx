import { Link } from "react-router-dom";
import type { Expense } from "@/types/expense";

interface ExpenseCardProps {
  expense: Expense;
}

export function ExpenseCard({ expense }: ExpenseCardProps) {
  return (
    <Link
      to={`/expenses/${expense.id}`}
      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm transition-colors hover:border-slate-400 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-600 dark:hover:bg-slate-900"
    >
      <div className="min-w-0">
        <p className="truncate font-medium">{expense.title}</p>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          <span className="capitalize">{expense.category}</span>
          <span className="mx-1.5">·</span>
          <span>{expense.date}</span>
        </p>
      </div>
      <span className="shrink-0 font-semibold tabular-nums">
        {expense.amount}$
      </span>
    </Link>
  );
}
