import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteExpense } from "@/features/expenses/expensesSlice";

export function ExpenseDetailsPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const expense = useAppSelector((state) =>
    state.expenses.items.find((e) => e.id === id),
  );

  if (!expense) {
    return <p>Expense not found</p>;
  }

  const handleDelete = () => {
    if (window.confirm(`Delete "${expense.title}"?`)) {
      dispatch(deleteExpense(expense.id));
      navigate("/expenses");
    }
  };

  return (
    <div className="space-y-6">
      <Link
        to="/expenses"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
      >
        ← Back to list
      </Link>

      <div className="space-y-5 rounded-xl border border-slate-200 bg-white/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">{expense.title}</h1>
          <span className="shrink-0 text-2xl font-bold tabular-nums text-indigo-600 dark:text-indigo-400">
            {expense.amount}$
          </span>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
          <dt className="text-slate-500 dark:text-slate-400">Category</dt>
          <dd className="capitalize">{expense.category}</dd>

          <dt className="text-slate-500 dark:text-slate-400">Date</dt>
          <dd>{expense.date}</dd>

          {expense.description && (
            <>
              <dt className="text-slate-500 dark:text-slate-400">
                Description
              </dt>
              <dd className="whitespace-pre-line">{expense.description}</dd>
            </>
          )}
        </dl>
      </div>

      <div className="flex gap-3">
        <Link
          to={`/expenses/${expense.id}/edit`}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/40"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
