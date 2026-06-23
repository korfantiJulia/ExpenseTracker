import { Routes, Route, NavLink } from "react-router-dom";
import { CreateExpensePage } from "@/pages/CreateExpensePage";
import { EditExpensePage } from "@/pages/EditExpensePage";
import { ExpenseDetailsPage } from "@/pages/ExpenseDetailsPage";
import { ExpensesListPage } from "@/pages/ExpensesListPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { MonthsPage } from "@/pages/MonthsPage";
import { MonthExpensesPage } from "./pages/MonthExpensesPage";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
    isActive
      ? "bg-slate-800 text-white"
      : "text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800",
  ].join(" ");

export function App() {
  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 text-lg font-bold">
            <span>Expense Tracker</span>
          </NavLink>
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/expenses" end className={navLinkClass}>
              Expenses
            </NavLink>
            <NavLink to="/expenses/new" className={navLinkClass}>
              Add new expense
            </NavLink>
            <NavLink to="/months" className={navLinkClass}>
              By month
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensesListPage />} />
          <Route path="/expenses/new" element={<CreateExpensePage />} />
          <Route path="/expenses/:id" element={<ExpenseDetailsPage />} />
          <Route path="/expenses/:id/edit" element={<EditExpensePage />} />
          <Route path="/months" element={<MonthsPage />} />
          <Route path="/months/:month" element={<MonthExpensesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
