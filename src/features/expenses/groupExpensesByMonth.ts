import type { Expense } from "@/types/expense";

export interface MonthGroup {
  month: string;
  total: number;
  expenses: Expense[];
}

export function groupExpensesByMonth(expenses: Expense[]): MonthGroup[] {
  const group: Record<string, MonthGroup> = {};
  for (const expense of expenses) {
    const monthKey = expense.date.slice(0, 7);
    if (!group[monthKey]) {
      group[monthKey] = { month: monthKey, total: 0, expenses: [] };
    }
    group[monthKey].total += expense.amount;
    group[monthKey].expenses.push(expense);
  }
  return Object.values(group);
}
