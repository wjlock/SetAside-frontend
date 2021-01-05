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
    const [pieHome, setPieHome] = useState('');
    const [pieTransportation, setPieTransportation] = useState('');
    const [pieDaily, setPieDaily] = useState('');
    const [pieEntertainment, setPieEntertainment] = useState('');

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
        .then(()=> {
            setPieHome(sum(home))
            setPieTransportation(sum(transportation))
            setPieDaily(sum(daily))
            setPieEntertainment(sum(entertainment))
        }) 
    })
    
        return(
            //budget make it in range 
            //preset average value 
            <div>
                <div>
                <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '25%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '75%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            {/* spending */}
            <PieChart className="pie-chart" lineWidth="40" paddingAngle="1" labelPosition='78' labelStyle={{fontSize: '7px'}} animate
                animationDuration={500} animationEasing="ease-out"
            data={[
                { title: 'Home',
                    value: pieHome,
                    color: '#E38627'
                },
                { title: 'Transportation',
                    value: pieTransportation,
                    color: '#C13C37'
                },
                { title: 'Entertainment',
                    value: pieEntertainment,
                    color: '#6A2135' 
                },
                { title: 'Daily',
                    value: pieDaily,
                    color: '#194D33' 
                },
            ]}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            />
            </div>
        );
    }
export default Dashboard;