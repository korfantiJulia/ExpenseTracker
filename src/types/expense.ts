export interface Expense {
  id: string;
  title: string;
  amount: number;
  description?: string;
  category: ExpenseCategory;
  date: string;
}

export type ExpenseCategory =
  | "transport"
  | "entertainment"
  | "health"
  | "groceries"
  | "shopping"
  | "bills"
  | "travel"
  | "other";
