import React, { useState } from "react";
import axios from "axios";
import _ from 'lodash';
import ExpenseTable from './ExpenseTable';

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
      `http://localhost:8000/api/expenses/${id}/myExpenses`
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

  // const renderUtilities = () => {
  //   const utilities = results.filter((obj) => obj.name === "Utilities");
  //   if (utilities.length) {
  //     return utilities.map(({ name, amount }) => (
  //       <tr>
  //         <th>Utilities</th>
  //         <td>{amount ? amount : 0}</td>
  //         <td>{expenseData?.utilities}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Utilities</th>
  //         <td>0</td>
  //         <td>{expenseData?.internet}</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderPhone = () => {
  //   const phone = results.filter((obj) => obj.name === "Phone");
  //   if (phone.length) {
  //     return phone.map(({ name, amount }) => (
  //       <tr>
  //         <th>Phone</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Phone</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderInternet = () => {
  //   const internet = results.filter((obj) => obj.name === "Internet");
  //   if (internet.length) {
  //     return internet.map(({ name, amount }) => (
  //       <tr>
  //         <th>Internet</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Internet</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderInsurance = () => {
  //   const insurance = results.filter((obj) => obj.name === "Insurance");
  //   if (insurance.length) {
  //     return insurance.map(({ name, amount }) => (
  //       <tr>
  //         <th>Insurance</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Insurance</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderGroceries = () => {
  //   const groceries = results.filter((obj) => obj.name === "Groceries");
  //   if (groceries.length) {
  //     return groceries.map(({ name, amount }) => (
  //       <tr>
  //         <th>Groceries</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Groceries</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderChildCare = () => {
  //   const childCare = results.filter((obj) => obj.name === "Child Care");
  //   if (childCare.length) {
  //     return childCare.map(({ name, amount }) => (
  //       <tr>
  //         <th>Child Care</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Child Care</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderDryCleaning = () => {
  //   const dryCleaning = results.filter((obj) => obj.name === "Dry Cleaning");
  //   if (dryCleaning.length) {
  //     return dryCleaning.map(({ name, amount }) => (
  //       <tr>
  //         <th>Dry Cleaning</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Dry Cleaning</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderHouseCleaning = () => {
  //   const houseCleaning = results.filter(
  //     (obj) => obj.name === "House Cleaning"
  //   );
  //   if (houseCleaning.length) {
  //     return houseCleaning.map(({ name, amount }) => (
  //       <tr>
  //         <th>House Cleaning</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>House Cleaning</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderPetCare = () => {
  //   const petCare = results.filter((obj) => obj.name === "Pet Care");
  //   if (petCare.length) {
  //     return petCare.map(({ name, amount }) => (
  //       <tr>
  //         <th>Pet Care</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Pet Care</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderGas = () => {
  //   const gas = results.filter((obj) => obj.name === "Gas");
  //   if (gas.length) {
  //     return gas.map(({ name, amount }) => (
  //       <tr>
  //         <th>Gas</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Gas</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderCarInsurance = () => {
  //   const carInsurance = results.filter((obj) => obj.name === "Car Insurance");
  //   if (carInsurance.length) {
  //     return carInsurance.map(({ name, amount }) => (
  //       <tr>
  //         <th>Car Insurance</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Car Insurance</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderRepairs = () => {
  //   const repairs = results.filter((obj) => obj.name === "Repairs");
  //   if (repairs.length) {
  //     return repairs.map(({ name, amount }) => (
  //       <tr>
  //         <th>Repairs</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Repairs</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderCarWash = () => {
  //   const carWash = results.filter((obj) => obj.name === "Car Wash");
  //   if (carWash.length) {
  //     return carWash.map(({ name, amount }) => (
  //       <tr>
  //         <th>Car Wash</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Car Wash</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderParking = () => {
  //   const car = results.filter((obj) => obj.name === "Car");
  //   if (car.length) {
  //     return car.map(({ name, amount }) => (
  //       <tr>
  //         <th>Car</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Car</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderPublicTransportation = () => {
  //   const publicTransportation = results.filter(
  //     (obj) => obj.name === "Public Transportation"
  //   );
  //   if (publicTransportation.length) {
  //     return publicTransportation.map(({ name, amount }) => (
  //       <tr>
  //         <th>Public Transportation</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Public Transportation</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderTaxiUber = () => {
  //   const taxiUber = results.filter((obj) => obj.name === "Taxi Uber");
  //   if (taxiUber.length) {
  //     return taxiUber.map(({ name, amount }) => (
  //       <tr>
  //         <th>Taxi/Uber</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Taxi/Uber</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderTelevision = () => {
  //   const television = results.filter((obj) => obj.name === "Television");
  //   if (television.length) {
  //     return television.map(({ name, amount }) => (
  //       <tr>
  //         <th>Television</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Television</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };

  // const renderMovies = () => {
  //   const movies = results.filter((obj) => obj.name === "Movies");
  //   if (movies.length) {
  //     return movies.map(({ name, amount }) => (
  //       <tr>
  //         <th>Movies</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Movies</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };

  // const renderConcerts = () => {
  //   const concerts = results.filter((obj) => obj.name === "Concerts");
  //   if (concerts.length) {
  //     return concerts.map(({ name, amount }) => (
  //       <tr>
  //         <th>Concerts</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Concerts</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };
  // const renderMisc = () => {
  //   const misc = results.filter((obj) => obj.name === "Misc");
  //   if (misc.length) {
  //     return misc.map(({ name, amount }) => (
  //       <tr>
  //         <th>Misc</th>
  //         <td>{amount}</td>
  //       </tr>
  //     ));
  //   } else {
  //     return (
  //       <tr>
  //         <th>Misc</th>
  //         <td>0</td>
  //       </tr>
  //     );
  //   }
  // };

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
      <ExpenseTable results={results} expenseData={expenseData}/>
      {/* <table>
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
      </table> */}
    </div>
  );
};

export default ExpenseBreakdown;
