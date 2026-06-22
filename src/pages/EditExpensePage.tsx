import { ExpenseForm } from "@/components/ExpenseForm";
import type { ExpenseFormValues } from "@/features/expenses/expenseSchema";
import { editExpense } from "@/features/expenses/expensesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useNavigate, useParams } from "react-router-dom";

export function EditExpensePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const expense = useAppSelector((state) =>
    state.expenses.items.find((e) => e.id === id),
  );

  if (!expense) {
    return <p>Expense not found</p>;
  }

  const handleEdit = (data: ExpenseFormValues) => {
    dispatch(editExpense({ id: expense.id, ...data }));
    navigate(`/expenses/${expense.id}`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Edit expense</h1>
      <ExpenseForm
        onSubmit={handleEdit}
        defaultValues={expense}
        submitLabel="Save changes"
      />
    </div>
  );
}
