import { groupExpensesByMonth } from "@/features/expenses/groupExpensesByMonth";
import { sumByCategory } from "@/features/expenses/sumByCategory";
import { useAppSelector } from "@/store/hooks";
import { formatMonth } from "@/utils/formatMonth";
import { Link } from "react-router-dom";

export function MonthsPage() {
  const expenses = useAppSelector((state) => state.expenses.items);
  const monthGroups = groupExpensesByMonth(expenses);

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
      <h1 className="text-2xl font-bold tracking-tight">By month</h1>
      {monthGroups.map((group) => {
        const byCategory = sumByCategory(group.expenses);

        return (
          <div
            key={group.month}
            className="space-y-4 rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3 dark:border-slate-800">
              <h2 className="text-lg font-semibold">{formatMonth(group.month)}</h2>
              <span className="text-lg font-bold tabular-nums text-indigo-600 dark:text-indigo-400">
                {group.total}$
              </span>
            </div>

            <ul className="space-y-2">
              {Object.entries(byCategory).map(([category, sum]) => (
                <li
                  key={category}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="capitalize text-slate-600 dark:text-slate-300">
                    {category}
                  </span>
                  <span className="tabular-nums text-slate-500 dark:text-slate-400">
                    {sum}$
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
