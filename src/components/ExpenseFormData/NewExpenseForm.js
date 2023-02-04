import ExpenseForm from "./ExpenseForm";
import "./NewExpenseForm.css";
import React, { useState } from "react";

const NewExpenseForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expensesData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensesData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDatahandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenseForm;
