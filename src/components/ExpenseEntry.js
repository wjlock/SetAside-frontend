import React, { useState } from "react";

const ExpenseEntry = (props) => {
  
  const [expenseYear, setExpenseYear] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDay, setExpenseDay] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseMonth, setExpenseMonth] = useState("");

  const handleExpenseYear = (e) => {
    setExpenseYear(e.target.value);
  };

  const handleExpenseAmount = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleExpenseDay = (e) => {
    setExpenseDay(e.target.value);
  };
  const handleExpenseCategory = (e) => {
    setExpenseCategory(e.target.value);
  };
  const handleExpenseName = (e) => {
    setExpenseName(e.target.value);
  };
  const handleExpenseMonth = (e) => {
    setExpenseMonth(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('test')
    const data = {
      year: expenseYear,
      amount: expenseAmount,
      day: expenseDay,
      category: expenseCategory,
      name: expenseName,
      month: expenseMonth
    }
    console.log(data)
    fetch('http://localhost:8000/api/expenses/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      res.json().then((json) => {
        this.props.reload()
        this.props.history.push(`/show/${json.expense._id}`)
      })
    })
  }

  return (
    <div>
      <div>
        <h1>Enter an expense</h1>
      </div>
      <form>
        <label htmlFor="expenseCategory">Choose a category</label>
        <select
          name="expenseCategory"
          id="expenseCategory"
          form="categoryForm"
          onChange={handleExpenseCategory}
        >
          <option value={expenseCategory}>Home</option>
          <option value={expenseCategory}>Daily Living</option>
          <option value={expenseCategory}>Transportation</option>
          <option value={expenseCategory}>Entertainment</option>
        </select>
        <label htmlFor="expenseName">Choose a name</label>
        <select
          name="expenseName"
          id="expenseName"
          form="nameForm"
          onChange={handleExpenseName}
        >
          <option value={expenseName}>Rent/Mortgage</option>
          <option value={expenseName}>Groceries</option>
          <option value={expenseName}>Gas</option>
          <option value={expenseName}>Cable/Internet</option>
        </select>
        <label htmlFor="expenseDay">What day?</label>
        <input
          type="number"
          name="expenseDay"
          value={expenseDay}
          onChange={handleExpenseDay}
          maxLength="2"
          minLength="2"
          max="31"
          min="01"
        ></input>
        <label htmlFor="expenseMonth">Choose a month</label>
        <select
          name="expenseMonth"
          id="expenseMonth"
          form="monthForm"
          onChange={handleExpenseMonth}
        >
          <option value={expenseMonth}>January</option>
          <option value={expenseMonth}>February</option>
          <option value={expenseMonth}>March</option>
          <option value={expenseMonth}>April</option>
          <option value={expenseMonth}>May</option>
          <option value={expenseMonth}>June</option>
          <option value={expenseMonth}>July</option>
          <option value={expenseMonth}>August</option>
          <option value={expenseMonth}>September</option>
          <option value={expenseMonth}>October</option>
          <option value={expenseMonth}>November</option>
          <option value={expenseMonth}>December</option>
        </select>
        <label htmlFor="expenseYear">Choose a year</label>
        <input
          type="number"
          name="expenseYear"
          value={expenseYear}
          onChange={handleExpenseYear}
        ></input>
        <label htmlFor="expenseAmount">How much did you spend?</label>
        <input
          type="number"
          name="expenseAmount"
          value={expenseAmount}
          onChange={handleExpenseAmount}
        ></input>

        <button type="submit" onClick={handleSubmit}>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseEntry;
