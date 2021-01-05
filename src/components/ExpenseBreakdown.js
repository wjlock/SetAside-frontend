import React, { useState } from "react";
import axios from "axios";

const ExpenseBreakdown = () => {
  const [expenseYear, setExpenseYear] = useState("");
  const [expenseMonth, setExpenseMonth] = useState("");
  const [results, setResults] = useState([]);
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
      `http://localhost:8000/api/expenses/${id}/myExpenses`
    );
    const budget = await axios.get(
      `http://localhost:8000/api/users/user/${id}`
    );
    const filteredResults = data.filter((obj) => {
      return obj.year == expenseYear && obj.month === expenseMonth;
    });
    setResults(filteredResults);
    console.log(budget);
    console.log(expenseYear);
    console.log(expenseMonth);
    console.log(filteredResults);
  };
  const renderUtilities = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Utilities</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Utilities")
        .map(({ name, amount }) => (
          <tr>
            <th>Utilities</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderPhone = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Phone</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Phone")
        .map(({ name, amount }) => (
          <tr>
            <th>Phone</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderInternet = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Internet</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Internet")
        .map(({ name, amount }) => (
          <tr>
            <th>Internet</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderInsurance = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Insurance</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Insurance")
        .map(({ name, amount }) => (
          <tr>
            <th>Insurance</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderGroceries = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Groceries</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Groceries")
        .map(({ name, amount }) => (
          <tr>
            <th>Groceries</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderChildCare = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Child Care</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Child Care")
        .map(({ name, amount }) => (
          <tr>
            <th>Child Care</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderDryCleaning = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Dry Cleaning</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Dry Cleaning")
        .map(({ name, amount }) => (
          <tr>
            <th>Dry Cleaning</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderHouseCleaning = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>House Cleaning</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "House Cleaning")
        .map(({ name, amount }) => (
          <tr>
            <th>House Cleaning</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderPetCare = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Pet Care</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Pet Care")
        .map(({ name, amount }) => (
          <tr>
            <th>Pet Care</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderGas = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Gas</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Gas")
        .map(({ name, amount }) => (
          <tr>
            <th>Gas</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderCarInsurance = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Car Insurance</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Car Insurance")
        .map(({ name, amount }) => (
          <tr>
            <th>Car Insurance</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderRepairs = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Repairs</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Repairs")
        .map(({ name, amount }) => (
          <tr>
            <th>Repairs</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderCarWash = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Car Wash</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Car Wash")
        .map(({ name, amount }) => (
          <tr>
            <th>Car Wash</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderParking = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Parking</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Parking")
        .map(({ name, amount }) => (
          <tr>
            <th>Parking</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderPublicTransportation = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Public Transportation</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Public Transportation")
        .map(({ name, amount }) => (
          <tr>
            <th>Public Transportation</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderTaxiUber = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Taxi/Uber</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Taxi/Uber")
        .map(({ name, amount }) => (
          <tr>
            <th>Taxi/Uber</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderTelevision = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Television</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Television")
        .map(({ name, amount }) => (
          <tr>
            <th>Television</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderMovies = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Movies</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Movies")
        .map(({ name, amount }) => (
          <tr>
            <th>Movies</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderConcerts = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Concerts</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Concerts")
        .map(({ name, amount }) => (
          <tr>
            <th>Concerts</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  const renderMisc = () => {
    if (results.length === 0) {
      return (
        <tr>
          <th>Misc</th>
          <td>0</td>
        </tr>
      );
    } else {
      return results
        .filter((obj) => obj.name === "Misc")
        .map(({ name, amount }) => (
          <tr>
            <th>Misc</th>
            <td>{amount}</td>
          </tr>
        ));
    }
  };
  return (
    <div>
      <div>
        <h1>Expense Breakdown</h1>
      </div>
      <form on onSubmit={handleSubmit}>
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
        {renderPhone()}
        {renderInternet()}
        {renderInsurance()}
        {renderGroceries()}
        {renderChildCare()}
        {renderDryCleaning()}
        {renderHouseCleaning()}
        {renderPetCare()}
        {renderGas()}
        {renderCarInsurance()}
        {renderRepairs()}
        {renderCarWash()}
        {renderParking()}
        {renderPublicTransportation()}
        {renderTaxiUber()}
        {renderTelevision()}
        {renderMovies()}
        {renderConcerts()}
        {renderMisc()}
      </table>
    </div>
  );
};

export default ExpenseBreakdown;
