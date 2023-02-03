import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        Selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expensesData) => (
        <ExpenseItems
          key={expensesData.id}
          name={expensesData.name}
          amount={expensesData.amount}
          date={expensesData.date}
          LocationOfExpenditure={expensesData.LocationOfExpenditure}
        />
      ))}
    </Card>
  );
}
export default Expenses;
