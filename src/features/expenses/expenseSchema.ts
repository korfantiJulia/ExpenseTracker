import { z } from "zod";

export const expenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  amount: z.number().min(0.01, "Price must be greater than 0"),
  category: z.enum([
    "transport",
    "entertainment",
    "health",
    "groceries",
    "shopping",
    "bills",
    "travel",
    "other",
  ]),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date",
  }),
  description: z.string().optional(),
});

export type ExpenseFormValues = z.infer<typeof expenseSchema>;
