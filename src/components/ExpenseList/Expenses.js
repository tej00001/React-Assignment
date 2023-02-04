import "./Expenses.css";
// import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023"); //using this useState inside year will be as default year

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          Selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expensesList={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
