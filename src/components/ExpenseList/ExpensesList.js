import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses !</h2>;
  }

  return (
    <ul className="expense-list">
      {props.expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        ></ExpenseItems>
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
