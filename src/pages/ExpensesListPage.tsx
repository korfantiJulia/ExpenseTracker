import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";
import { ExpenseCard } from "@/components/ExpenseCard";
import { useState } from "react";

export function ExpensesListPage() {
  const expenses = useAppSelector((state) => state.expenses.items);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  if (expenses.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
        <p className="text-slate-500 dark:text-slate-400">No expenses yet</p>
        <Link
          to="/expenses/new"
          className="mt-3 inline-block text-sm font-medium text-slate-800 hover:underline dark:text-slate-300"
        >
          Add your first expense
        </Link>
      </div>
    );
  }

  const visibleExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "" || expense.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortedExpenses = [...visibleExpenses].sort((a, b) => {
    if (sortBy === "date-desc") return b.date.localeCompare(a.date);
    if (sortBy === "date-asc") return a.date.localeCompare(b.date);
    if (sortBy === "amount-desc") return b.amount - a.amount;
    if (sortBy === "amount-asc") return a.amount - b.amount;
    return 0;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">List of expenses</h1>
        <Link
          to="/expenses/new"
          className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Add expense
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title..."
          className="min-w-0 flex-1 rounded-md border border-slate-400 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/30 dark:border-slate-600 dark:bg-slate-900 dark:placeholder:text-slate-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border border-slate-400 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-slate-500 focus:ring-2 focus:ring-slate-500/30 dark:border-slate-600 dark:bg-slate-900"
        >
          <option value="">All categories</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="groceries">Groceries</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-md border border-slate-400 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors focus:border-slate-500 focus:ring-2 focus:ring-slate-500/30 dark:border-slate-600 dark:bg-slate-900"
        >
          <option value="date-desc">Newest first</option>
          <option value="date-asc">Oldest first</option>
          <option value="amount-desc">Amount: high → low</option>
          <option value="amount-asc">Amount: low → high</option>
        </select>
      </div>

      <ul className="space-y-3">
        {sortedExpenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseCard expense={expense} />
          </li>
        ))}
      </ul>
    </div>
  );
}
