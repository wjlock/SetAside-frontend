import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route, Switch, Redirect } from "react-router-dom";

// import ExpenseEdit from "./components/ExpenseEdit";

const Profile = (props) => {
    const [expenses, setExpenses] = useState([]);
    const [shouldReload, setShouldReload] = useState(false);

    useEffect(() => {
            const id = localStorage.getItem("jwtToken");
            axios.get(`${REACT_APP_SERVER_URL}/api/expenses/${id}/myExpenses`)
                .then(res => {
                    setExpenses(res.data);
                    setShouldReload(false);
                });
    }, [shouldReload]);


    const handleDelete = (id) => {
        debugger
        axios.delete(`${REACT_APP_SERVER_URL}/api/expenses/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            setShouldReload(true);
          })
      }

    return (
        <div className="row">
            <div className="col-md-4">
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
                <p>Monthly Income: ${props.user.income}</p>
            </div>
            <div>
                <h1 id="profileHeader">My Expenses</h1>
                <div class="expenses">
                    {expenses.map((expense, index) => 
                    <h3 id="expensesText" key={index}> {expense.name}: $
                    {expense.amount}{"....................... "}
                    {expense.month}{" "}
                    {expense.day}, {" "}
                    {expense.year}{"           "} 
                    <Link to={`/editexpense/${expense._id}`} id="editButton">⚙︎</Link> 
                    <button class="btn btn-primary btn-lg btn-block" id="deleteButton" type="submit" onClick={() => handleDelete(expense._id)}>X</button> 
                    </h3>
                    )}
                </div>
            </div>
        </div>
    )


}

export default Profile;