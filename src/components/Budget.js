import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import keys from '../utils/credentials';
// const { REACT_APP_SERVER_URL } = keys;

const Budget = () => {
const [funds, setFunds] = useState({
  utilities: 0,
  bills: 0,
  food: 0,
  savings: 0,
  personal: 0,
}) 
const [redirect, setRedirect] = useState(false)
const handleChange = (e) => {
  setFunds({ 
    ...funds,
    [e.target.name]:e.target.value
  })
}

    const handleSubmit = (e) => {
      e.preventDefault();
      setRedirect(true) 

      // if (password === confirmPassword) {
      //     const newUser = { name, email, password };
          
      //     axios.post('/dashboard, newUser')
      //     .then(response => {
      //         console.log(response);
      //         setRedirect(true);
      //     })
      //     .catch(error => {
      //         console.log(error);
      //     })
      // }
  }
  if (redirect) {
    return <Redirect to='/dashboard'/>
    
  } 

    return (

        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Set Budget</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Rent/Mortgage</label>
                            {/* <input type="text" name="name" value={name} onChange={handleName} className="form-control" /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Utilities</label>
                            <input type="number" name="utilities" value={funds.utilities} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Bills</label>
                            <input type="number" name="bills" value={funds.bills} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Food/Restuarants</label>
                            <input type="number" name="food" value={funds.food} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Savings/Inverstment</label>
                            <input type="number" name="savings" value={funds.savings} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Personal</label>
                            <input type="number" name="personal" value={funds.personal} onChange={handleChange} className="form-control" />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="savings">Savings goals</label>
                            <input type="number" name="savings" value={savings} onChange={handleSavings} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="account">Current Account Status (Balance & Savings)</label>
                            <input type="number" name="account" value={currentAccount} onChange={handleCurrentAccount} className="form-control" />
                        </div> */}
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
 }

export default Budget;
