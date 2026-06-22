import { useAppSelector } from "@/store/hooks";
import { Link, useParams } from "react-router-dom";
import { ExpenseCard } from "@/components/ExpenseCard";
import { formatMonth } from "@/utils/formatMonth";

export function MonthExpensesPage() {
  const { month } = useParams();
  const expenses = useAppSelector((state) => state.expenses.items);

  if (!month) {
    return <p>Month not found</p>;
  }

  const monthExpenses = expenses.filter((e) => e.date.slice(0, 7) === month);

  if (monthExpenses.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
        <p className="text-slate-500 dark:text-slate-400">
          No expenses this month
        </p>
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
      <Link
        to="/months"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        ← Back to month list
      </Link>

      <h1 className="text-2xl font-bold tracking-tight">
        {formatMonth(month)}
      </h1>
      <ul className="space-y-3">
        {monthExpenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseCard expense={expense} />
          </li>
        ))}
      </ul>
    </div>
  );
}
