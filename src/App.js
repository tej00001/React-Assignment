// import ExpenseItems from "./components/ExpenseList/ExpenseItems";//when we use maps
// import React from 'react'; if we write code in react object
import Expenses from "./components/ExpenseList/Expenses";
const expensesData = [
  {
    id: "el",
    name: "Food",
    amount: 500,
    date: new Date(2022, 7, 15),
    LocationOfExpenditure: "Restaurent Hyd",
  },
  {
    id: "bl",
    name: "Shopping",
    amount: 5000,
    date: new Date(2022, 10, 12),
    LocationOfExpenditure: "Trends",
  },
  {
    id: "ml",
    name: "Movie",
    amount: 1000,
    date: new Date(2022, 6, 13),
    LocationOfExpenditure: "Imax Hyd",
  },
  {
    id: "cl",
    name: "Tour",
    amount: 20000,
    date: new Date(2022, 4, 12),
    LocationOfExpenditure: "goa trip",
  },
  {
    id: "dl",
    name: "voccation",
    amount: 30000,
    date: new Date(2022, 6, 12),
    LocationOfExpenditure: "bangkok",
  },
];

function App() {
  return (
    <div>
      <h1>let's start</h1>
      <h2>ExpenseItems Details</h2>
      {/* {expensesData.map((any) => (
        <ExpenseItems data={any}></ExpenseItems>
      
      ))} */}

      <Expenses expenses={expensesData} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;
