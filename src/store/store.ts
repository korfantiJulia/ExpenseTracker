import { configureStore } from "@reduxjs/toolkit";
import { expensesReducer } from "@/features/expenses/expensesSlice";
import { saveExpenses } from "@/features/expenses/expensesStorage";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

store.subscribe(() => {
  saveExpenses(store.getState().expenses.items);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
