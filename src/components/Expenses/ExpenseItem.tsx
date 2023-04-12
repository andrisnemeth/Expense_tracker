import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { Item } from "../../interfaces/Item";

function ExpenseItem(expense: Item) {
  return (
    <li>
      <Card className="card expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
