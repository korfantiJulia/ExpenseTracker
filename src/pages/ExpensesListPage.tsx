import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";
import { ExpenseCard } from "@/components/ExpenseCard";

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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">List of expenses</h1>
        <Link
          to="/expenses/new"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Add expense
        </Link>
      </div>
      <ul className="space-y-3">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseCard expense={expense} />
          </li>
        ))}
      </ul>
    </div>
  );
}
