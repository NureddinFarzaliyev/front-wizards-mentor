import { useState } from "react";
import BudgetHistoryGraph from "./components/BudgetHistoryGraph";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [history, setHistory] = useState([]);
  const [budgetHistory, setBudgetHistory] = useState([]);

  return (
    <div>
      <h1>Budget Tracker</h1>
      <div>
        <h2>Add Income/Expense</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const amount = parseFloat(e.target.amount.value);
            const type = e.target.type.value;
            setHistory([...history, { amount, type }]);
            setBudget(budget + (type === "income" ? amount : -amount));
            setBudgetHistory([
              ...budgetHistory,
              budget + (type === "income" ? amount : -amount),
            ]);
            e.target.reset();
          }}
        >
          <input type="number" name="amount" placeholder="Amount" required />
          <select name="type" required>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button type="submit">Add</button>
        </form>
        <h2>Current Budget: ${budget.toFixed(2)}</h2>
        <h2>History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}: $
              {entry.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <BudgetHistoryGraph budgetHistory={budgetHistory} />
    </div>
  );
};

export default App;
