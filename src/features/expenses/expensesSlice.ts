import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Expense } from "@/types/expense";
import { loadExpenses } from "./expensesStorage";

interface ExpensesState {
  items: Expense[];
  error: string | null;
  loading: boolean;
}

const initialState: ExpensesState = {
  items: loadExpenses(),
  error: null,
  loading: false,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.items.push(action.payload);
    },

    deleteExpense: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (expense) => expense.id !== action.payload,
      );
    },

    editExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.items.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
