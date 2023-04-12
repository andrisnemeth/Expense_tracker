import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props: any) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  console.log(props);

  function titleChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setEnteredTitle(target.value);
    // ---- second option ---- //
    // setUserInput({
    //   ...userInput, enteredTitle: target.value,
    // })
    // ---- should use this every time whenever the state update depends on the previous state ---- //
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle:target.value}
    // })
  }

  function amountChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setEnteredAmount(target.value);
  }

  function dateChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setEnteredDate(target.value);
  }

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
