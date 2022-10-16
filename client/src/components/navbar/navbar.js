import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import './navbar.css';
 
// Display Navbar
export default function Navbar(props) {
 return (
   <div className="navigationBar">
      <div className="navleft">
        <NavLink className="navbar-brand" to="/">
          <h1 style={{fontSize: "1rem", color: "white"}}>HOME</h1>
        </NavLink>
      </div>
      <div className="navright">
        <LogoutButton publicKey={props.publicKey} setPublicKey={props.setPublicKey} setLoggedIn={props.setLoggedIn} desoIdentity={props.desoIdentity}/>
      </div>
   </div>
 );
}