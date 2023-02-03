import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItems(props) {
  const [amount, setAmount] = useState(props.amount);

  const changeHandler = () => {
    setAmount("$100");
    console.log(amount);
  };
  const [name, setName] = useState(props.name);

  const expenseHandler = () => {
    setName("updated!");
    console.log(name);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{name}</h2>
          <button onClick={changeHandler}>Add Expenses</button>

          <ExpenseDetails
            amount={amount}
            LocationOfExpenditure={props.LocationOfExpenditure}
          ></ExpenseDetails>
        </div>
        <button onClick={expenseHandler}>Change Title</button>
      </Card>
    </li>
  );
}

//  function ExpenseItems(props) {
// return (
// <div className="expense-item">
//        <ExpenseDate date={props.data.date}></ExpenseDate>
//        <div className="expense-item__description">
//          <h2>{props.data.name}</h2>
//        <ExpenseDetails
//            amount={props.data.amount}
//          LocationOfExpenditure={props.data.LocationOfExpenditure}
//        ></ExpenseDetails>

//      </div>
//      </div>
//    );
//  }

export default ExpenseItems;
