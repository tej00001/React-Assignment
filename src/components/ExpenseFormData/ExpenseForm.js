//import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./ExpenseForm.css";

// const ExpenseForm = () => {
// document.addEventListener("onChange", ChangeTitleHandler);using vanila js for appearing on console whatever we type that's gonna appear
// function ChangeTitleHandler(event) {
//   // document.getElementById("tej").innerHTML = "";
//   console.log(event.target.value);
// }

//   const ChangeTitleHandler =(event)=>{ using react to appear in console
//  console.log(event.target.value)
//     }
// const [UserInput, setUserInput] = useState({ to write all states at a place
//   enteredTitle: "",
//   enteredDate: "",
//   enteredAmount: "",
// });
// const handleTitleChange = (event) => {
//   setUserInput({
//     ...UserInput,
//     enteredTitle: event.target.value,
//   });
// };
// const ChangeAmountHandler = (event) => {
//   setUserInput({
//     ...UserInput,
//     enteredDate: event.target.value,
//   });
// };
// const ChangeDateHandler = (event) => {
//   setUserInput({
//     ...UserInput,
//     enteredAmount: event.target.value,
//   });
// };
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const ChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("enteredTitle");
  };
  const ChangeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log("enteredAmount");
  };

  const ChangeDateHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log("enteredDate");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");

    const expenseData = {
      name: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={ChangeTitleHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            value={enteredAmount}
            onChange={ChangeAmountHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input
            type="date"
            min="2010-12-10"
            value={enteredDate}
            onChange={ChangeDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">AddExpenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
