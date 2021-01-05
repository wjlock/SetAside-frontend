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
    const [phoneNumber, setPhoneNumber] = useState('');
    const [income, setIncome] = useState('');
    const [savings, setSavings] = useState('');
    const [currentAccount, setCurrentAccount] = useState('');
    const [residence, setResidence] = useState('');
    const [rent, setRent] = useState('');
    const [utilities, setUtilities] = useState('');
    const [phone, setPhone] = useState('');
    const [internet, setInternet] = useState('');
    const [insurance, setInsurance] = useState('');
    const [groceries, setGroceries] = useState('');
    const [childCare, setChildCare] = useState('');
    const [dryCleaning, setDryCleaning] = useState('');
    const [houseCleaning, setHouseCleaning] = useState('');
    const [petCare, setPetCare] = useState('');
    const [gas, setGas] = useState('');
    const [carInsurance, setCarInsurance] = useState('');
    const [carRepairs, setCarRepairs] = useState('');
    const [carWash, setCarWash] = useState('');
    const [parking, setParking] = useState('');
    const [publicTransportation, setPublicTransportation] = useState('');
    const [rideShare, setRideShare] = useState('');
    const [television, setTelevision] = useState('');
    const [movies, setMovies] = useState('');
    const [concerts, setConcerts] = useState('');
    const [miscellaneous, setMiscellaneous] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
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

    const handleRent = (e) => {
        setRent(e.target.value);
    }
    
    const handleUtilities = (e) => {
        setUtilities(e.target.value);
    }
    
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    
    const handleInternet = (e) => {
        setInternet(e.target.value);
    }
    
    const handleInsurance = (e) => {
        setInsurance(e.target.value);
    }

    const handleGroceries = (e) => {
        setGroceries(e.target.value);
    }

    const handleChildCare = (e) => {
        setChildCare(e.target.value);
    }

    const handleDryCleaning = (e) => {
        setDryCleaning(e.target.value);
    }

    const handleHouseCleaning = (e) => {
        setHouseCleaning(e.target.value);
    }

    const handlePetCare = (e) => {
        setPetCare(e.target.value);
    }

    const handleGas = (e) => {
        setGas(e.target.value);
    }

    const handleCarInsurance = (e) => {
        setCarInsurance(e.target.value);
    }

    const handleCarRepairs = (e) => {
        setCarRepairs(e.target.value);
    }

    const handleCarWash = (e) => {
        setCarWash(e.target.value);
    }

    const handleParking = (e) => {
        setParking(e.target.value);
    }

    const handlePublicTransportation = (e) => {
        setPublicTransportation(e.target.value);
    }

    const handleRideShare = (e) => {
        setRideShare(e.target.value);
    }

    const handleTelevision = (e) => {
        setTelevision(e.target.value);
    }

    const handleMovies = (e) => {
        setMovies(e.target.value);
    }

    const handleConcerts = (e) => {
        setConcerts(e.target.value);
    }

    const handleMiscellaneous = (e) => {
        setMiscellaneous(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { name, email, password, phone, income, savings, currentAccount, rent, utilities, phone, internet, insurance, groceries, childCare, dryCleaning, houseCleaning, petCare, gas, carInsurance, carRepairs, carWash, parking, publicTransportation, rideShare, television, movies, concerts, miscellaneous };
            
            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            }).then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    if (redirect) return <Redirect to='/profile' />
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
                            <label htmlFor="phone number">Phone number</label>
                            <input type="number" name="phone number" value={phoneNumber} onChange={handlePhoneNumber} className="form-control" />
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
                            <input type="number" name="home" value={rent} onChange={handleRent} className="form-control" />
                            <label>Utlities</label>
                            <input type="number" name="home" value={utilities} onChange={handleUtilities} className="form-control" />
                            <label>Phone</label>
                            <input type="number" name="home" value={phone} onChange={handlePhone} className="form-control" />
                            <label>Internet</label>
                            <input type="number" name="home" value={internet} onChange={handleInternet} className="form-control" />
                            <label>Insurance</label>
                            <input type="number" name="home" value={insurance} onChange={handleInsurance} className="form-control" />
                            </ol>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Daily</label>
                            <ol>
                            <label>Groceries</label>
                            <input type="number" name="daily" value={groceries} onChange={handleGroceries} className="form-control" />
                            <label>Child Care</label>
                            <input type="number" name="daily" value={childCare} onChange={handleChildCare} className="form-control" />
                            <label>Dry Cleaning</label>
                            <input type="number" name="daily" value={dryCleaning} onChange={handleDryCleaning} className="form-control" />
                            <label>House Cleaning</label>
                            <input type="number" name="daily" value={houseCleaning} onChange={handleHouseCleaning} className="form-control" />
                            <label>Pet Care</label>
                            <input type="number" name="daily" value={petCare} onChange={handlePetCare} className="form-control" />
                            </ol>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Transportation</label>
                            <ol>
                            <label>Gas</label>
                            <input type="number" name="gas" value={gas} onChange={handleGas} className="form-control" />
                            <label>Car Insurance</label>
                            <input type="number" name="carInsurance" value={carInsurance} onChange={handleCarInsurance} className="form-control" />
                            <label>Repairs</label>
                            <input type="number" name="transportation" value={carRepairs} onChange={handleCarRepairs} className="form-control" />
                            <label>Car Wash</label>
                            <input type="number" name="transportation" value={carWash} onChange={handleCarWash} className="form-control" />
                            <label>Parking</label>
                            <input type="number" name="transportation" value={parking} onChange={handleParking} className="form-control" />
                            <label>Public Transporation</label>
                            <input type="number" name="transportation" value={publicTransportation} onChange={handlePublicTransportation} className="form-control" />
                            <label>Taxi/Uber</label>
                            <input type="number" name="transportation" value={rideShare} onChange={handleRideShare} className="form-control" />
                            </ol>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Entertainment</label>
                            <ol>
                            <label>Television</label>
                            <input type="number" name="entertainment" value={television} onChange={handleTelevision} className="form-control" />
                            <label>Movies</label>
                            <input type="number" name="entertainment" value={movies} onChange={handleMovies} className="form-control" />
                            <label>Concerts</label>
                            <input type="number" name="entertainment" value={concerts} onChange={handleConcerts} className="form-control" />
                            <label>Misc</label>
                            <input type="number" name="entertainment" value={miscellaneous} onChange={handleMiscellaneous} className="form-control" />
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
