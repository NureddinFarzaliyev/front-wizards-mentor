import { Expense } from "@/types/expense.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ExpenseState {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  putExpense: (expense: Expense) => void;
  getTotalBalance: () => number;
}

export const useExpenseStore = create(
  persist<ExpenseState>(
    (set, get) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({ expenses: [...state.expenses, expense] })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((e) => e.id !== id),
        })),
      putExpense: (expense) =>
        set((state) => ({
          expenses: state.expenses.map((e) =>
            e.id === expense.id ? expense : e,
          ),
        })),
      getTotalBalance: () =>
        get().expenses.reduce((total, e) => total + e.amount, 0),
    }),
    {
      name: "expense-storage",
    },
  ),
);
