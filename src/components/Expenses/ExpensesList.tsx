import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { ExpensesInterface, Item } from "../../interfaces/Item";

function ExpensesList({ expenses }: ExpensesInterface) {
  if(expenses.length === 0 ){
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return(
    <ul className="expenses-list">
      {expenses.map((item: Item) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
    ))};
    </ul>
  )
}

export default ExpensesList;
