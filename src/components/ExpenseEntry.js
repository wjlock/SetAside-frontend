import React, { useState } from "react";
import axios from "axios";

// const months = [
//   "january",
//   "february",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];
// const fields = {
//   utilities: "",
//   rent: "",
//   cable: "",
//   phone: "",
//   insurance: "",
//   groceries: "",
//   diningOut: "",
//   gas: "",
//   carInsurance: "",
//   subscriptions: "",
// };

// // Use for loops, make an array of 12 months, loop thru, nested loop inside that loops thru all expenses

// const Expense = () => {
//   const [janRent, setJanRent] = useState(0);
//   const [febRent, setFebRent] = useState(0);
//   const [marRent, setMarRent] = useState(0);
//   return (
//     <div>
//       <h2>Expenses</h2>
//       <form></form>
//       <table>
//         <tr>
//           <th></th>
//           <th>Jan</th>
//           <th>Feb</th>
//           <th>Mar</th>
//           <th>Apr</th>
//           <th>May</th>
//           <th>Jun</th>
//           <th>Jul</th>
//           <th>Aug</th>
//           <th>Sept</th>
//           <th>Oct</th>
//           <th>Nov</th>
//           <th>Dec</th>
//         </tr>
//         <tr>
//           <th>Home Expenses</th>
//         </tr>
//         <tr>
//           <th>Rent/Mortgage</th>
//           <td>
//             <label htmlFor="janRent"></label>
//             <input
//               type="number"
//               className="expense-input"
//               name="janRent"
//               id="janRent"
//               value={(janRent, console.log(janRent))}
//               onChange={(e) => setJanRent(e.target.value)}
//             />
//           </td>
//           <td>
//             <label htmlFor="febRent"></label>
//             <input
//               type="number"
//               className="expense-input"
//               name="febRent"
//               id="febRent"
//               value={(febRent, console.log(febRent))}
//               onChange={(e) => setFebRent(e.target.value)}
//             />
//           </td>
//           <td>
//             <label htmlFor="marRent"></label>
//             <input
//               type="number"
//               className="expense-input"
//               name="marRent"
//               id="marRent"
//               value={(marRent, console.log(marRent))}
//               onChange={(e) => setMarRent(e.target.value)}
//             />
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//         </tr>
//         <tr>
//           <th>Utilities</th>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//         </tr>
//         <tr>
//           <th>Cable/Internet</th>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//           <td>
//             <input type="number" class="expense-input"></input>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default Expense;

// EXPENSE ENTRY

// Expense Name
// Expense Category - housing, vehicle, entertainment
// Expense Amount
// Expense Year
// Expense Month

// I want to add a/an [expense category] expense to the month of [month], [year]

// Expense Name (Choose from the dropdown, if a custom name is preferred, click here)
// Expense Amount

// Submit

const ExpenseEntry = () => {
  // const [category, setCategory] = useState("");
  // const [expenseName, setExpenseName] = useState("");
  // const [expenseMonth, setExpenseMonth] = useState("");
  const [expenseYear, setExpenseYear] = useState("");

  // const handleCategory = (e) => {
  //   setCategory(e.target.value);
  // };

  // const handleExpenseName = (e) => {
  //   setExpenseName(e.target.value);
  // };

  // const handleExpenseMonth = (e) => {
  //   setExpenseMonth(e.target.value);
  // };

  const handleExpenseYear = (e) => {
    setExpenseYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NEED POST ROUTE
  };

  return (
    <div>
      <div>
        <h1>Enter an expense</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label for="expenseCategory">Choose a category</label>
        <select name="expenseCategory" id="expenseCategory" form="categoryForm">
          <option value="home">Home</option>
          <option value="dailyLiving">Daily Living</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <label for="expenseName">Choose a name</label>
        <select name="expenseName" id="expenseName" form="nameForm">
          <option value="rent">Rent/Mortgage</option>
          <option value="groceries">Groceries</option>
          <option value="gas">Gas</option>
          <option value="cable">Cable/Internet</option>
        </select>
        <label for="expenseMonth">Choose a month</label>
        <select name="expenseMonth" id="expenseMonth" form="monthForm">
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
          <option value="apr">April</option>
          <option value="may">May</option>
          <option value="jun">June</option>
          <option value="jul">July</option>
          <option value="aug">August</option>
          <option value="sep">September</option>
          <option value="oct">October</option>
          <option value="nov">November</option>
          <option value="dec">December</option>
        </select>
        <label for="expenseYear">Choose a year</label>
        <input
          type="number"
          name="expenseYear"
          value={expenseYear}
          onChange={handleExpenseYear}
        ></input>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseEntry;
