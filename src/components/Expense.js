import React, { useState } from "react";

const Expense = () => {
  const [janRent, setJanRent] = useState(0);
  const [febRent, setFebRent] = useState(0);
  const [marRent, setMarRent] = useState(0);
  return (
    <div>
      <h2>Expenses</h2>
      <form></form>
      <table>
        <tr>
          <th></th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sept</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
        </tr>
        <tr>
          <th>Home Expenses</th>
        </tr>
        <tr>
          <th>Rent/Mortgage</th>
          <td>
            <label htmlFor="janRent"></label>
            <input
              type="number"
              className="expense-input"
              name="janRent"
              id="janRent"
              value={(janRent, console.log(janRent))}
              onChange={(e) => setJanRent(e.target.value)}
            />
          </td>
          <td>
            <label htmlFor="febRent"></label>
            <input
              type="number"
              className="expense-input"
              name="febRent"
              id="febRent"
              value={(febRent, console.log(febRent))}
              onChange={(e) => setFebRent(e.target.value)}
            />
          </td>
          <td>
            <label htmlFor="marRent"></label>
            <input
              type="number"
              className="expense-input"
              name="marRent"
              id="marRent"
              value={(marRent, console.log(marRent))}
              onChange={(e) => setMarRent(e.target.value)}
            />
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
        </tr>
        <tr>
          <th>Utilities</th>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
        </tr>
        <tr>
          <th>Cable/Internet</th>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
          <td>
            <input type="number" class="expense-input"></input>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Expense;
