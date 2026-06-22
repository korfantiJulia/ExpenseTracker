import { addExpense } from "@/features/expenses/expensesSlice";
import { ExpenseForm } from "@/components/ExpenseForm";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import type { ExpenseFormValues } from "@/features/expenses/expenseSchema";

export function CreateExpensePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreate = (data: ExpenseFormValues) => {
    dispatch(addExpense({ id: crypto.randomUUID(), ...data }));
    navigate("/expenses");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Create expense</h1>
      <ExpenseForm onSubmit={handleCreate} submitLabel="Add expense" />
    </div>
  );
}
