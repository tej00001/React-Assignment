//import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  document.addEventListener("onChange", ChangeTitleHandler);
  function ChangeTitleHandler(event) {
    // document.getElementById("tej").innerHTML = "";
    console.log(event.target.value);
  }

  //     const ChangeTitleHandler =(event)=>{
  //    console.log(event.target.value)
  //       }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label id="tej">Title</label>
          <input type="text" onChange={ChangeTitleHandler} />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input type="number" min="0" />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input type="date" min="2010-12-10" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">AddExpenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
