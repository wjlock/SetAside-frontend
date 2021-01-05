import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const id = localStorage.getItem("jwtToken");
            await axios.get(`http://localhost:8000/api/expenses/${id}/myExpenses`)
                .then(res => {
                    setExpenses(res.data);
                    console.log(expenses);
                    console.log('test')
                });
        };
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col-md-4">
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
                <p>Monthly Income: ${props.user.income}</p>
            </div>
            <div>
                <div>
                    {expenses.map((expense, index) => 
                    <h3 key={index}> {expense.name}: $
                    {expense.amount}{"....................... "}
                    {expense.month}{" "}
                    {expense.day}, {" "}
                    {expense.year}
                    </h3>
                    )}
                </div>
            </div>
        </div>
    )


}

export default Profile;