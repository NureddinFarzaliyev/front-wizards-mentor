import { BigButton } from "@/app/components/BigButton";
import { Popup } from "@/app/components/Popup";
import { SmallButton } from "@/app/components/SmallButton";
import { PlusIcon } from "@/app/icons/PlusIcon";
import { useExpenseStore } from "@/stores/expenseStore";
import { Expense } from "@/types/expense.types";
import { useState } from "react";

const Input = ({
  placeholder,
  onChange,
  type = "text",
}: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mb-4 p-2 border-b-2 border-white/30 outline-none focus:border-white/80 transition-colors"
      onChange={onChange}
    />
  );
};

export const CreateTransactionPopup = () => {
  const { addExpense } = useExpenseStore();

  const [data, setData] = useState<Expense>({
    id: "",
    description: "",
    amount: 0,
    date: "",
  });

  const onSubmit = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const newExpense = { ...data, id: randomId };

    if (!newExpense.description || !newExpense.amount || !newExpense.date) {
      alert("Please fill in all fields.");
      return;
    }

    addExpense(newExpense);
  };

  return (
    <Popup
      button={<BigButton text="Add Transaction" icon={<PlusIcon />} />}
      content={
        <div>
          <h2 className="text-lg text-medium text-white/80 mb-3">
            Add New Transaction
          </h2>
          <Input
            placeholder="Description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <Input
            placeholder="Amount"
            onChange={(e) =>
              setData({ ...data, amount: parseFloat(e.target.value) || 0 })
            }
          />
          <Input
            type="date"
            placeholder="Date"
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
      }
      closeButton={
        <div className="flex gap-2">
          <SmallButton text="Add" onClick={onSubmit} />
          <SmallButton text="Cancel" />
        </div>
      }
    />
  );
};
