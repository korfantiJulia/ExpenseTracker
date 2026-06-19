import type { Expense } from "@/types/expense";

export function sumByCategory(expenses: Expense[]): Record<string, number> {
  const group: Record<string, number> = {};
  for (const expense of expenses) {
    if (!group[expense.category]) {
      group[expense.category] = 0;
    }
    group[expense.category] = group[expense.category] + expense.amount;
  }
  return group;
}
