import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";

const ExpenseBreakdown = () => {
  const [expenseYear, setExpenseYear] = useState("");
  const [results, setResults] = useState([]);
  const handleExpenseYear = (e) => {
    setExpenseYear(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("jwtToken");
    const { data } = await axios.get(
      `http://localhost:8000/api/expenses/${id}/myExpenses`
    );
    const filteredResults = _.filter(data, {
      year: 2021,
      month: "February",
    });
    setResults(filteredResults);
    console.log(filteredResults);
  };
  const renderUtilities = () => {
    return results
      .filter((obj) => obj.name === "Utilities")
      .map(({ name, amount }) => (
        <tr>
          <th>Utilities</th>
          <td>{amount}</td>
        </tr>
      ));
  };
  return (
    <div>
      <div>
        <h1>Hello from breakdown</h1>
      </div>
      <form on onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
      <table>
        <tr>
          <th></th>
          <th>Month to Date</th>
          <th>Budgeted</th>
          <th>Surplus/(Overage)</th>
        </tr>
        {renderUtilities()}
      </table>
    </div>
  );
};

export default ExpenseBreakdown;
