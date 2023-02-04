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
  const startEditing = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add Expenses</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDatahandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpenseForm;
