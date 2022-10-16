import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import './navbar.css';
import DesoApi from "../../deso/desoAPI";
 
// Display Navbar
export default function Navbar(props) {
 const [balance, setBalance] = useState(0.0);

 useEffect(() => {
  getBalance();
 }, []);

 const getBalance = async () => {
  const result = await new DesoApi().getSingleProfile(props.publicKey)
  setBalance(result["Profile"]["DESOBalanceNanos"] / 1000000000)
 }

 return (
   <div className="navigationBar">
      <div className="navleft">
        <NavLink className="navbar-brand" to="/">
          <h1 style={{fontSize: "1rem", color: "white"}}>HOME</h1>
        </NavLink>
      </div>
      <div className="navright">
        <h1 style={{fontSize: "1rem", color: "white", marginRight: "20px"}}>DeSo Balance: {balance}</h1>
        <NavLink className="navbar-brand" to="/search">
          <h1 style={{fontSize: "1rem", color: "white", marginRight: "20px"}}>SEARCH</h1>
        </NavLink>
        <NavLink className="navbar-brand" to="/profile">
          <h1 style={{fontSize: "1rem", color: "white", marginRight: "20px"}}>PROFILE</h1>
        </NavLink>
        <LogoutButton publicKey={props.publicKey} setPublicKey={props.setPublicKey} setLoggedIn={props.setLoggedIn} desoIdentity={props.desoIdentity}/>
      </div>
   </div>
 );
}