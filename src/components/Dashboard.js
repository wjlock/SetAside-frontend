import { PieChart } from 'react-minimal-pie-chart';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, sum
  } from 'mathjs'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
 


const Dashboard = () => {
    
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
    const [barHome, setBarHome] = useState('');
    const [barTransportation, setBarTransportation] = useState('');
    const [barDaily, setBarDaily] = useState('');
    const [barEntertainment, setBarEntertainment] = useState('');
    const [totalBudget, setTotalBudget] = useState('')
    const [expenses, setExpenses ] = useState([])
    const [expensesGroupedByCategory, setExpensesGroupByCategory] = useState({})

    const home = [rent, insurance, phone, utilities, internet]
    const transportation = [gas, carInsurance, carRepairs, carWash, parking, publicTransportation, rideShare]
    const daily = [groceries, childCare, dryCleaning, houseCleaning, petCare]
    const entertainment = [television, movies, concerts, miscellaneous]


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
    //grabbing info from current user budget to set range of spending and showing on progress by category 
    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/users/current`
        ).then((data)=> {
            const userData = data.data
            setRent(userData.rent)
            setUtilities(userData.utilities)
            setPhone(userData.phone)
            setInternet(userData.internet)
            setInsurance(userData.insurance)
            setGroceries(userData.groceries)
            setChildCare(userData.childCare)
            setDryCleaning(userData.dryCleaning)
            setHouseCleaning(userData.houseCleaning)
            setPetCare(userData.petCare)
            setGas(userData.gas)
            setCarInsurance(userData.carInsurance)
            setCarRepairs(userData.carRepairs)
            setCarWash(userData.carWash)
            setParking(userData.parking)
            setPublicTransportation(userData.publicTransportation)
            setMiscellaneous(userData.miscellaneous)
            setConcerts(userData.concerts)
            setMovies(userData.movies)
            setTelevision(userData.television)
            setRideShare(userData.rideShare)
            console.log(data);
        })
        .then(() => {
            setBarHome(sum(home) / totalBudget)
            setBarTransportation(sum(transportation) )
            setBarDaily(sum(daily))
            setBarEntertainment(sum(entertainment))
            setTotalBudget(sum(home) + sum(transportation) + sum(daily) + sum(entertainment))
        }) 
    },[])

    function groupByCategory(expenseArr) {
        let output= {}
        for(let expense of expenseArr) {
            if(output[expense.category] === undefined){
                output[expense.category] = []
            }
            output[expense.category].push(expense) 
        } 
        return output
    }

    //pie-chart induvidual spending of expenses 
        useEffect(() => {
            const id = localStorage.getItem("jwtToken");
            axios.get(
              `${process.env.REACT_APP_SERVER_URL}/api/expenses/${id}/myExpenses`
            ).then((data) => {
                setExpenses(data.data)
                setExpensesGroupByCategory(groupByCategory(data.data))
            }) ;
        },[])
        function sumExpenses(expensesArr) {
            let output = 0;
            for(let expense of expensesArr) {
                output += expense.amount
            }
            return output
        }
        console.log(totalBudget, expenses, sumExpenses(expenses))

        return(
            //budget make it in range 
            //preset average value 
            <div>
                <h3>Your Budget</h3>
                <div>
                    <div className="progress">
                    <label className="totalSpending">Over all spending</label>
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${sumExpenses(expenses) / totalBudget}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className="home">Home</label>
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className="transportation">Transportation</label>
                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className='daily'>Daily</label>
                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className='entertainment'>Entertainment</label>
                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <p> </p>
            <h3>Spent so far</h3>
            {/* spending */}
            <PieChart className="pie-chart" lineWidth="50" paddingAngle="1" labelPosition='78' labelStyle={{fontSize: '5px'}} animate
                animationDuration={500} animationEasing="ease-out"
            data={[
                { title: 'Rent',
                    value: rent,
                    color: '#E38627'
                },
                { title: 'Utilities',
                    value: utilities,
                    color: '#C13C37'
                },
                { title: 'Phone',
                    value: phone,
                    color: '#6A2135' 
                },
                { title: 'Internet',
                    value: internet,
                    color: '#194D33' 
                },
                { title: 'Insurance',
                    value: insurance,
                    color: '#343a40' 
                },
                { title: 'Groceries',
                    value: groceries,
                    color: '#17a2b8' 
                },
                { title: 'Child Care',
                    value: childCare,
                    color: '#ffc107' 
                },
                { title: 'Dry Cleaning',
                    value: dryCleaning,
                    color: '#6610f2' 
                },
                { title: 'House Cleaning',
                    value: houseCleaning,
                    color: '#20c997' 
                },
                { title: 'Pet Care',
                    value: petCare,
                    color: '#6c757d' 
                },
                { title: 'Gas',
                    value: gas,
                    color: '#28a745' 
                },
                { title: 'Car Insurance',
                    value: carInsurance,
                    color: '#dc3545' 
                },
                { title: 'Car Repairs',
                    value: carRepairs,
                    color: '#fff' 
                },
                { title: 'Car Wash',
                    value: carWash,
                    color: '#e83e8c' 
                },
                { title: 'Parking',
                    value: parking,
                    color: '#6f42c1' 
                },
                { title: 'Public Transportation',
                    value: publicTransportation,
                    color: '#007bff' 
                },
                { title: 'Ride Share',
                    value: rideShare,
                    color: '#322267' 
                },
                { title: 'Television',
                    value: television,
                    color: '#C787D0' 
                },
                { title: 'Movies',
                    value: movies,
                    color: '#D08E87' 
                },
                { title: 'Concerts',
                    value: concerts,
                    color: '#D0C387' 
                },
                { title: 'Miscellaneous',
                    value: miscellaneous,
                    color: '#ABD087' 
                },
            ]}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            />
            </div>
        );
    }
export default Dashboard;