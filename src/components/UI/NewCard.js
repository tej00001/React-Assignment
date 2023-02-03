//import NewExpenseForm from "../ExpenseFormData/NewExpenseForm";

// const Newone = (props) => {
//   const addExpenseHandler = (expense) => {
//     console.log("in UI card.js");
//     console.log(expense);
//   };
//   return <NewExpenseForm onAddExpense={addExpenseHandler} />;
// };

// export default Newone;
//using ternary operation:
// {filteredExpenses.length === 0 ? (
//     <p className="color">No expenses found !</p>
//   ) : (
//     filteredExpenses.map((expense /*we can pass our own arguement*/) => (
//       <ExpenseItems
//         key={expense.id}
//         name={expense.name}
//         amount={expense.amount}
//         date={expense.date}
//         LocationOfExpenditure={expense.LocationOfExpenditure}
//       />
//     ))
//   )}
// using AND operation:
// {filteredExpenses.length === 0 && <p className="color">No expenses found !</p>}
// {filteredExpenses.length > 0 && (filteredExpenses.map((expense /*we can pass our own arguement*/) => (
//      <ExpenseItems
//        key={expense.id}
//        name={expense.name}
//        amount={expense.amount}
//        date={expense.date}
//        LocationOfExpenditure={expense.LocationOfExpenditure}
//      />
//    ))
//  )} 
// Most Commonly Used Method:
// let expenseTracker = <p>No Expenses Found !</p>
// if(filteredExpenses.length >0){
// expenseTracker= filteredExpenses.map((expense/*we can pass our own arguement*/) => (
//  <ExpenseItems
//    key={expense.id}
//    name={expense.name}
//    amount={expense.amount}
//    date={expense.date}
//    LocationOfExpenditure={expense.LocationOfExpenditure}

//  />
// ))
// }

