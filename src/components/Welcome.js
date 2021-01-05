import React from "react";
import logo from "../Asset/SetAside.png"
// import { Switch } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to SetAside</h1>
      <img src={logo} alt="logo-SetAside"/>
      <div className='login'>
      <a href='/signup'>Signup</a>{" "}
      <a href='/login'>Login</a>
      </div>
    </div>
  );
};
export default Welcome;