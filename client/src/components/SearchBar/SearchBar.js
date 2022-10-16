import React from "react";
import { NavLink } from "react-router-dom";

import "./SearchBar.css";

const creators = [{username: "ElonMa", PublicKeyBase58Check: ""}]

export class SearchBar extends React.Component{
    render() {
        return(
            <div style={{display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center"}}>
                <h2 className="searchHead">Experience over 100,000,000 awesome creators on the Private-Bit</h2>
                <div className="searchField">
                    <input placeholder="Search for a creator."/>
                    <NavLink className="navbar-brand" to="/creator">
                        <h1 style={{fontSize: "1rem", color: "black", margin: "0", marginLeft: "10px"}}>SEARCH</h1>
                    </NavLink>
                </div>
            </div>
        );
    }
}