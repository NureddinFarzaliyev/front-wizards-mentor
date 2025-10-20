"use client";
import { ChevronLeftIcon } from "@/app/icons/ChevronLeftIcon";
import { DeleteIcon } from "@/app/icons/DeleteIcon";
import { useExpenseStore } from "@/stores/expenseStore";
import { Expense } from "@/types/expense.types";
import Link from "next/link";

const TableRow = ({
  expense,
  onRemove,
}: {
  expense: Expense;
  onRemove: (id: string) => void;
}) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b border-white/30 text-center">
        {expense.description}
      </td>
      <td className="py-2 px-4 border-b border-white/30 text-center">
        {expense.amount}
      </td>
      <td className="py-2 px-4 border-b border-white/30 text-center">
        {expense.date}
      </td>
      <td className="py-2 px-4 border-b border-white/30 text-center">
        <button
          onClick={() => onRemove(expense.id)}
          className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
        >
          <DeleteIcon className="h-6 text-red-900" />
        </button>
      </td>
    </tr>
  );
};

const page = () => {
  const { expenses, getTotalBalance, removeExpense } = useExpenseStore();

  return (
    <div className="px-4 md:px-10 lg:px-20 pt-20">
      <div className="flex items-center">
        <Link href="/">
          <ChevronLeftIcon className="opacity-70 h-8" />
        </Link>
        <h1 className="text-2xl opacity-70 uppercase">Dashboard</h1>
      </div>
      <div>
        {expenses.length > 0 ? (
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-white/50">
                  Description
                </th>
                <th className="py-2 px-4 border-b text-white/50">Amount</th>
                <th className="py-2 px-4 border-b text-white/50">Date</th>
                <th className="py-2 px-4 border-b text-white/50">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <TableRow
                  key={index}
                  expense={expense}
                  onRemove={() => removeExpense(expense.id)}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-2 px-4 border-t"></td>
                <td className="py-2 px-4 border-t font-bold text-center">
                  Total: {getTotalBalance()}
                </td>
                <td className="py-2 px-4 border-t"></td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p className="mt-4">No expenses recorded.</p>
        )}
      </div>
    </div>
  );
};

export default page;
