import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";

export function ExpensesListPage() {
  const expenses = useAppSelector((state) => state.expenses.items);

  if (expenses.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
        <p className="text-slate-500 dark:text-slate-400">No expenses yet</p>
        <Link
          to="/expenses/new"
          className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Add your first expense
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">List of expenses</h1>
      <ul className="space-y-3">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <Link
              to={`/expenses/${expense.id}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 shadow-sm transition-colors hover:border-indigo-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-indigo-700 dark:hover:bg-slate-900"
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
          </li>
        ))}
      </ul>
    </div>
  );
}
