import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2023');//using this useState inside year will be as default year

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter
        Selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense/*we can pass our own arguement*/) => (
        <ExpenseItems
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </Card>
  );
}
export default Expenses;
