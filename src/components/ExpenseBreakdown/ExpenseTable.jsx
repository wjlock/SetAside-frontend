import React, { useState, useEffect } from "react";
import { startCase } from 'lodash';

const ExpenseTable = ({results = undefined, expenseData = [{}]}) => {
  console.log("Table Results => ", results)
  console.log("Table Expenses => ", expenseData);

  return (
    <table className="expensetable">
      <tr>
        <th></th>
        <th>Month to Date</th>
        <th>Budgeted</th>
        <th>Surplus/(Overage)</th>
      </tr>
      <tr>
        <th>Rent</th>
        <td>{results?.rent || 0}</td>
        <td>{expenseData?.rent || 0}</td>
        <td>{expenseData.utilties - results?.rent || expenseData.rent - 0}</td>
      </tr>
      <tr>
        <th>Utilities</th>
        <td>{results?.utilities || 0}</td>
        <td>{expenseData?.utilities || 0}</td>
        <td>{expenseData.utilties - results?.utilities || expenseData.utilities - 0}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>{results?.phone || 0}</td>
        <td>{expenseData?.phone || 0}</td>
        <td>{expenseData.phone - results?.phone || expenseData.phone - 0}</td>
      </tr>
      <tr>
        <th>Internet</th>
        <td>{results?.internet || 0}</td>
        <td>{expenseData?.internet || 0}</td>
        <td>{expenseData.internet - results?.internet || expenseData.internet - 0}</td>
      </tr>
      <tr>
        <th>Insurance</th>
        <td>{results?.insurance || 0}</td>
        <td>{expenseData?.insurance || 0}</td>
        <td>{expenseData.insurance - results?.insurance || expenseData.insurance - 0}</td>
      </tr>
      <tr>
        <th>Groceries</th>
        <td>{results?.groceries || 0}</td>
        <td>{expenseData?.groceries || 0}</td>
        <td>{expenseData.groceries - results?.groceries || expenseData.groceries - 0}</td>
      </tr>
      <tr>
        <th>Child Care</th>
        <td>{results?.childCare || 0}</td>
        <td>{expenseData?.childCare || 0}</td>
        <td>{expenseData.childCare - results?.childCare || expenseData.childCare - 0}</td>
      </tr>
      <tr>
        <th>Dry Cleaning</th>
        <td>{results?.dryCleaning || 0}</td>
        <td>{expenseData?.dryCleaning || 0}</td>
        <td>{expenseData.dryCleaning - results?.dryCleaning || expenseData.dryCleaning - 0}</td>
      </tr>
      <tr>
        <th>House Cleaning</th>
        <td>{results?.houseCleaning || 0}</td>
        <td>{expenseData?.houseCleaning || 0}</td>
        <td>{expenseData.houseCleaning - results?.houseCleaning || expenseData.houseCleaning - 0}</td>
      </tr>
      <tr>
        <th>Pet Care</th>
        <td>{results?.petCare || 0}</td>
        <td>{expenseData?.petCare || 0}</td>
        <td>{expenseData.petCare - results?.petCare || expenseData.petCare - 0}</td>
      </tr>
      <tr>
        <th>Gas</th>
        <td>{results?.gas || 0}</td>
        <td>{expenseData?.gas || 0}</td>
        <td>{expenseData.gas - results?.gas || expenseData.gas - 0}</td>
      </tr>
      <tr>
        <th>Car Insurance</th>
        <td>{results?.carInsurance || 0}</td>
        <td>{expenseData?.carInsurance || 0}</td>
        <td>{expenseData.carInsurance - results?.carInsurance || expenseData.carInsurance - 0}</td>
      </tr>
      <tr>
        <th>Repairs</th>
        <td>{results?.repairs || 0}</td>
        <td>{expenseData?.carRepairs || 0}</td>
        <td>{expenseData.carRepairs - results?.repairs || expenseData.carRepairs - 0}</td>
      </tr>
      <tr>
        <th>Car Wash</th>
        <td>{results?.carWash || 0}</td>
        <td>{expenseData?.carWash || 0}</td>
        <td>{expenseData.carWash - results?.carWash || expenseData.carWash - 0}</td>
      </tr>
      <tr>
        <th>Parking</th>
        <td>{results?.parking || 0}</td>
        <td>{expenseData?.parking || 0}</td>
        <td>{expenseData.parking - results?.parking || expenseData.parking - 0}</td>
      </tr>
      <tr>
        <th>Public Transportation</th>
        <td>{results?.publicTransportation || 0}</td>
        <td>{expenseData?.publicTransportation || 0}</td>
        <td>{expenseData.publicTransportation - results?.publicTransportation || expenseData.publicTransportation - 0}</td>
      </tr>
      <tr>
        <th>Taxi Uber</th>
        <td>{results?.taxiUber || 0}</td>
        <td>{expenseData?.rideShare || 0}</td>
        <td>{expenseData.rideShare - results?.taxiUber || expenseData.rideShare - 0}</td>
      </tr>
      <tr>
        <th>Television</th>
        <td>{results?.television || 0}</td>
        <td>{expenseData?.television || 0}</td>
        <td>{expenseData.television - results?.television || expenseData.television - 0}</td>
      </tr>
      <tr>
        <th>Movies</th>
        <td>{results?.movies || 0}</td>
        <td>{expenseData?.movies || 0}</td>
        <td>{expenseData.movies - results?.movies || expenseData.movies - 0}</td>
      </tr>
      <tr>
        <th>Concerts</th>
        <td>{results?.concerts || 0}</td>
        <td>{expenseData?.concerts || 0}</td>
        <td>{expenseData.concerts - results?.concerts || expenseData.concerts - 0}</td>
      </tr>
      <tr>
        <th>Misc</th>
        <td>{results?.misc || 0}</td>
        <td>{expenseData?.miscellaneous || 0}</td>
        <td>{expenseData.miscellaneous - results?.misc || expenseData.miscellaneous - 0}</td>
      </tr>
    </table>
  )
}

export default ExpenseTable;