import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import './navbar.css';
 
// Display Navbar
export default function Navbar(props) {
 return (
   <div className="navigationBar">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
        Home
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       
       <LogoutButton publicKey={props.publicKey} setPublicKey={props.setPublicKey} setLoggedIn={props.setLoggedIn} desoIdentity={props.desoIdentity}/>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Record
              </NavLink>
            </li>
            <li className="nav-item">
                 <NavLink className="nav-link" to="/price">
                     Price
                 </NavLink>
             </li>
             <li className="nav-item">
                 <NavLink className="nav-link" to="/product">
                     Product
                 </NavLink>
             </li>
         </ul>
           <button type='button' id='loginButton'>Login</button>
       </div>

       <div className="creator button" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="pages/creator">
               Logout
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}