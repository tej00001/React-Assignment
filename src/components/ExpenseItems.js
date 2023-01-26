import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <ExpenseDetails
          amount={props.amount}
          LocationOfExpenditure={props.LocationOfExpenditure}
        ></ExpenseDetails>
      </div>
    </Card>
  );
}

// function ExpenseItems(props) {  for iterating Each element by mp method we can follow this rule
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.data.date}></ExpenseDate>
//       <ExpenseDetails
//         amount={props.data.amount}
//         LocationOfExpenditure={props.data.LocationOfExpenditure}
//       ></ExpenseDetails>
//       <div className="expense-item__description">
//         <h2>{props.data.name}</h2>
//       </div>
//     </div>
//   );
// }

export default ExpenseItems;
