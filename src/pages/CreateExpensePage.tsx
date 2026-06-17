import {
  expenseSchema,
  type ExpenseFormValues,
} from "@/features/expenses/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function CreateExpensePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = (data: ExpenseFormValues) => {
    console.log(data);
    reset();
  };

  const fieldClass =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500";
  const labelClass = "text-sm font-medium text-slate-700 dark:text-slate-300";
  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-lg space-y-5 rounded-xl border border-slate-200 bg-white/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
    >
      <h1 className="text-2xl font-bold tracking-tight">Create expense</h1>

      <label className="block space-y-1.5">
        <span className={labelClass}>Title</span>
        <input
          type="text"
          {...register("title")}
          placeholder="Enter title of your expense"
          className={fieldClass}
        />
        {errors.title && <p className={errorClass}>{errors.title.message}</p>}
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Amount</span>
        <input
          type="number"
          step="0.01"
          {...register("amount", { valueAsNumber: true })}
          placeholder="Enter the cost"
          className={fieldClass}
        />
        {errors.amount && <p className={errorClass}>{errors.amount.message}</p>}
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Category of expense</span>
        <select id="category" {...register("category")} className={fieldClass}>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="groceries">Groceries</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>
        {errors.category && (
          <p className={errorClass}>{errors.category.message}</p>
        )}
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Date</span>
        <input type="date" {...register("date")} className={fieldClass} />
        {errors.date && <p className={errorClass}>{errors.date.message}</p>}
      </label>

      <label className="block space-y-1.5">
        <span className={labelClass}>Description</span>
        <input
          type="text"
          {...register("description")}
          placeholder="Enter description"
          className={fieldClass}
        />
        {errors.description && (
          <p className={errorClass}>{errors.description.message}</p>
        )}
      </label>

      <button
        type="submit"
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Add expense
      </button>
    </form>
  );
}
