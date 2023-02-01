import ExpenseForm from "./ExpenseForm";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expensesData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensesData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
    </div>
  );
};
export default NewExpenseForm;
