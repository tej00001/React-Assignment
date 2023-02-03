import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023"); //using this useState inside year will be as default year

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseTracker = filteredExpenses.map(
    (expense /*we can pass our own arguement*/) => (
      <ExpenseItems
        key={expense.id}
        name={expense.name}
        amount={expense.amount}
        date={expense.date}
        LocationOfExpenditure={expense.LocationOfExpenditure}
      />
    )
  );
  let matter = <p></p>;

  if (filteredExpenses.length == 1) {
    matter = (
      <h2 className="color">Only single Expense here. Please add more..."</h2>
    );
    expenseTracker = filteredExpenses.map(
      (expense /*we can pass our own arguement*/) => (
        <ExpenseItems
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      )
    );
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        Selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseTracker}
      {matter}
    </Card>
  );
}
export default Expenses;
