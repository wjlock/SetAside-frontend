// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// import keys from '../utils/credentials';
// const { REACT_APP_SERVER_URL } = keys;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [phone, setPhone] = useState('');
    const [income, setIncome] = useState('');
    const [savings, setSavings] = useState('');
    const [currentAccount, setCurrentAccount] = useState('');
    const [funds, setFunds] = useState({
        home: 0,
        daily: 0,
        transportation: 0,
        entertainment: 0,
      }) 
      const handleChange = (e) => {
        setFunds({ 
          ...funds,
          [e.target.name]:e.target.value
        })
      }


    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleSavings = (e) => {
        setSavings(e.target.value);
    }
    const handleIncome = (e) => {
        setIncome(e.target.value);
    }

    const handleCurrentAccount = (e) => {
        setCurrentAccount(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { name, email, password };
            
            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    if (redirect) return <Redirect to='/login' />
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone number</label>
                            <input type="number" name="phone" value={phone} onChange={handlePhone} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="income">Income</label>
                            <input type="number" name="income" value={income} onChange={handleIncome} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="savings">Savings goals</label>
                            <input type="number" name="savings" value={savings} onChange={handleSavings} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="account">Current Account Status (Balance & Savings)</label>
                            <input type="number" name="account" value={currentAccount} onChange={handleCurrentAccount} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Home</label>
                            <ol>
                            <label>Mortage/Rent</label>
                            <input type="number" name="home" value={funds.home} onChange={handleChange} className="form-control" />
                            <label>Utlities</label>
                            <input type="number" name="home" value={funds.home} onChange={handleChange} className="form-control" />
                            <label>Phone</label>
                            <input type="number" name="home" value={funds.home} onChange={handleChange} className="form-control" />
                            <label>Internet</label>
                            <input type="number" name="home" value={funds.home} onChange={handleChange} className="form-control" />
                            <label>Insurance</label>
                            <input type="number" name="home" value={funds.home} onChange={handleChange} className="form-control" />
                            </ol>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Daily</label>
                            <ol>
                            <label>Groceries</label>
                            <input type="number" name="daily" value={funds.daily} onChange={handleChange} className="form-control" />
                            <label>Child Care</label>
                            <input type="number" name="daily" value={funds.daily} onChange={handleChange} className="form-control" />
                            <label>Dry Cleaning</label>
                            <input type="number" name="daily" value={funds.daily} onChange={handleChange} className="form-control" />
                            <label>House Cleaning</label>
                            <input type="number" name="daily" value={funds.daily} onChange={handleChange} className="form-control" />
                            <label>Pet Care</label>
                            <input type="number" name="daily" value={funds.daily} onChange={handleChange} className="form-control" />
                            </ol>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Transportation</label>
                            <ol>
                            <label>Gas</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            <label>Car Insurance</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            <label>Repairs</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            <label>Car Wash</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            <label>Parking</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            <label>Public Transporation</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            <label>Taxi/Uber</label>
                            <input type="number" name="transportation" value={funds.transportation} onChange={handleChange} className="form-control" />
                            </ol>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Entertainment</label>
                            <ol>
                            <label>Cable</label>
                            <input type="number" name="entertainment" value={funds.entertainment} onChange={handleChange} className="form-control" />
                            <label>Movies</label>
                            <input type="number" name="entertainment" value={funds.entertainment} onChange={handleChange} className="form-control" />
                            <label>Concerts</label>
                            <input type="number" name="entertainment" value={funds.entertainment} onChange={handleChange} className="form-control" />
                            <label>Misc</label>
                            <input type="number" name="entertainment" value={funds.entertainment} onChange={handleChange} className="form-control" />
                            </ol>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="number">Savings/Investment</label>
                            <input type="number" name="savings" value={funds.savings} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Personal</label>
                            <input type="number" name="personal" value={funds.personal} onChange={handleChange} className="form-control" />
                        </div> */}
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
