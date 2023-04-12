import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import { ExpensesInterface } from "../../interfaces/Item";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }: ExpensesInterface) {
  const [filteredYear, setFilteredYear] = useState("Show All");
  const filteredExpenses = expenses.filter((expense) => {
    if (filteredYear === "Show All") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  function filterChangeHandler(selectedYear: string) {
    setFilteredYear(selectedYear.toString());
  }

  return (
    <>
      <div className="card expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </div>
    </>
  );
}

export default Expenses;
