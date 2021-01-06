import React, { useState } from "react";
import axios from "axios";
import _ from 'lodash';
import ExpenseTable from './ExpenseTable';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ExpenseBreakdown = () => {
  const [expenseYear, setExpenseYear] = useState("");
  const [expenseMonth, setExpenseMonth] = useState("");
  const [results, setResults] = useState(undefined);
  const [expenseData, setExpenseData] = useState(undefined);

  console.log("Expense Data => ", expenseData);

  const handleExpenseMonth = (e) => {
    setExpenseMonth(e.target.value);
  };
  const handleExpenseYear = (e) => {
    setExpenseYear(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("jwtToken");
    const { data } = await axios.get(
      `${REACT_APP_SERVER_URL}/api/expenses/${id}/myExpenses`
    );
    const budgetData = await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/users/current`)
      .then(({ data }) => {
        setExpenseData({ ...data });
        console.log(data);
      });
      
    const filteredResults = data
    .filter(obj => { // filter each result for month year 
      return obj.year == expenseYear && obj.month === expenseMonth;
    })
    
    const reducedData = _.reduce(filteredResults, (acc, currVal) => {
      // convert "Child Care" to "childCare" so we can store it as a key(keys cant contain spaces)
      const key = _.camelCase(currVal.name)

      // We are iterating over each array
      
      // If key "childCare" exists in the object, add the next values amount to it
      if (acc.hasOwnProperty(key)) {
        acc[key] = acc[key] + currVal.amount;
        return acc;
      }

      // if it does not exist, create it and assign the amount to its value
      acc[key] = currVal.amount;
      return acc;
    }, {}) // Make the initial value an object

    setResults(reducedData);
  };

  return (
    <div>
      <div>
        <h1 className='breakdowntitle'>Expense Breakdown</h1>
      </div>
      <form className="monthselector" on onSubmit={handleSubmit}>
        <label for="expenseMonth">Choose a month</label>
        <select
          name="expenseMonth"
          id="expenseMonth"
          form="monthForm"
          onChange={handleExpenseMonth}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <label for="expenseYear">Enter a year</label>
        <input
          type="number"
          name="expenseYear"
          value={expenseYear}
          onChange={handleExpenseYear}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <ExpenseTable results={results} expenseData={expenseData}/>
    </div>
  );
};

export default ExpenseBreakdown;
