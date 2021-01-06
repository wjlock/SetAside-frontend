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
    const [expensesGroupedByCategory, setExpensesGroupByCategory] = useState({
        Daily:[],
        Home:[],
        Transportation:[],
        Entertainment:[]
    })

    const [expensesGroupByName, setExpensisesGroupByName] = useState({})
    
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

    //pie-chart
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
    function groupByName(expenseArr) {
        let output= {}
        for(let expense of expenseArr) {
            if(output[expense.name] === undefined){
                output[expense.name] = []
            }
            output[expense.name].push(expense) 
        } 
        return output
    }

    //progress bar  
        useEffect(() => {
            const id = localStorage.getItem("jwtToken");
            axios.get(
              `${process.env.REACT_APP_SERVER_URL}/api/expenses/${id}/myExpenses`
            ).then((data) => {
                setExpenses(data.data)
                setExpensesGroupByCategory(groupByCategory(data.data))
                setExpensisesGroupByName(groupByName(data.data))
            }) ;
        },[])
        function sumExpenses(expensesArr) {
            if (expensesArr===undefined){
                return 0
            }
            let output = 0;
            for(let expense of expensesArr) {
                output += expense.amount
            }
            return output
        }

        
        const dailyWidth = sumExpenses(expensesGroupedByCategory.Daily) / sum(daily) * 100
        const homeWidth = sumExpenses(expensesGroupedByCategory.Home) / sum(home) * 100
        const entertainmentWidth = sumExpenses(expensesGroupedByCategory.Entertainment) / sum(entertainment) * 100
        const transportationWidth = sumExpenses(expensesGroupedByCategory.Transportation) / sum(transportation) * 100

        const colorMap = {
            'Rent': '#E38627',
            'Utilities': '#C13C37',
            'Phone': '#6A2135',
            'Internet': '#194D33',
            'Insurance': '#343a40',
            'Groceries': '#17a2b8',
            'Child Care': '#ffc107',
            'Dry Cleaning': '#6610f2',
            'House Cleaning': '#20c997',
            'Pet Care': '#6c757d',
            'Gas': '#28a745',
            'Car Insurance': '#dc3545',
            'Car Repairs': '#fff',
            'Car Wash': '#e83e8c',
            'Parking': '#6f42c1',
            'Public Transportation': '#007bff',
            'Ride Share': '#322267',
            'Television': '#C787D0',
            'Movies': '#D08E87',
            'Concerts': '#D0C387',
            'Miscellaneous': '#ABD087'
        }
        let pieData = []
         for(let expensesName of Object.keys(expensesGroupByName)){
             let total= sumExpenses(expensesGroupByName[expensesName])
             if (total > 0) {
                 pieData.push({
                     title: expensesName,
                     value: total,
                     color: colorMap[expensesName]
                 })
             }

         }
        return(
            
            //budget make it in range 
            //preset average value 
            <div>
                <h3>Your Monthly Budget</h3>
                <div>
                    <div className="progress">
                    <label className="totalSpending">Over all spending</label>
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${sumExpenses(expenses) / totalBudget}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className="home">Home</label>
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${homeWidth}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className="transportation">Transportation</label>
                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${transportationWidth}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className='daily'>Daily</label>
                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${dailyWidth}%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <div className="progress">
                    <label className='entertainment'>Entertainment</label>
                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: `${entertainmentWidth}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
                <p> </p>
                <h3 id="dashboardPieChart">Individual Expenses</h3>
                {/* spending */}
            <PieChart className="pie-chart" lineWidth="50" paddingAngle="1" labelPosition='78' labelStyle={{fontSize: '5px'}} animate
                animationDuration={500} animationEasing="ease-out"
            data={pieData}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            />
            </div>
        );
    }
export default Dashboard;