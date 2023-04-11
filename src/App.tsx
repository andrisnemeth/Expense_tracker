import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./assets/expenses";
import { Item } from "./interfaces/Item";

function App() {
  const [expenses, setExpenses] = useState<Item[]>(DUMMY_EXPENSES);

  function addExpenseHandler(expense: Item) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
