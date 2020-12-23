import React, { useState } from "react";

const ExpenseBreakdown = () => {
  const [expenseYear, setExpenseYear] = useState("");
  const handleExpenseYear = (e) => {
    setExpenseYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <tr>
          <th>Rent/Mortgage</th>
          <td>MTD</td>
          <td>BUDGETED</td>
          <td>SURPLUS/OVERAGES</td>
        </tr>
        <tr>
          <th>Utilities</th>
        </tr>
        <tr>
          <th>Insurance</th>
        </tr>
      </table>
    </div>
  );
};

export default ExpenseBreakdown;
