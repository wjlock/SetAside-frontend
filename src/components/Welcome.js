import React from "react";
import logo from "../Asset/SetAside.png"
// import { Switch } from 'react-router-dom'

const Welcome = () => {
  return (
    <div id="welcomePage">
      <h1 id="welcomeHeader">Welcome to SetAside</h1>
      <img id="setAsideLogo" src={logo} alt="logo-SetAside"/>
      <div className='welcomeButtons'>
      <a id="welcomeButtonSignup" href='/signup'>Signup</a>{" "}
      <a id="welcomeButtonLogin" href='/login'>Login</a>
      </div>
    </div>
  );
};
export default Welcome;