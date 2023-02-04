import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItems(props) {

  const deleteButton = (event) => {

    let item = event.target.parentElement;
    item.remove()

  }

  return (
    
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.name}</h2>

          <ExpenseDetails
            amount={props.amount}
            LocationOfExpenditure={props.LocationOfExpenditure}
          ></ExpenseDetails>
        </div>
        <button onClick={deleteButton} >Delete Expense</button>

      </Card>
    
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
