import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
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

export const fetchExpenses = createAsyncThunk("expenses/fetch", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return loadExpenses();
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load expenses";
      });
  },
});

export const { addExpense, deleteExpense, editExpense } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
