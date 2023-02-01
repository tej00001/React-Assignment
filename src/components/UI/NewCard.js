import NewExpenseForm from "../ExpenseFormData/NewExpenseForm";

const Newone = (props) => {
  const addExpenseHandler = (expense) => {
    console.log("in UI card.js");
    console.log(expense);
  };
  return <NewExpenseForm onAddExpense={addExpenseHandler} />;
};

export default Newone;
