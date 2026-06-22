import type { Expense } from "@/types/expense";

const STORAGE_KEY = "expenses";

export function loadExpenses(): Expense[] {
  const loadData = localStorage.getItem(STORAGE_KEY);

  if (!loadData) {
    return [];
  }

  try {
    return JSON.parse(loadData);
  } catch {
    return [];
  }
}

export function saveExpenses(expenses: Expense[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}
