import React from "react";

import "./SearchBar.css";

export class SearchBar extends React.Component{
    render() {
        return(
            <div>
                <h1 id="searchHead">Search over 100,000,000 awesome BITchors on THE BITch</h1>
                <div className="searchField">
                    <input placeholder="Search BITches" />
                    <button type="button" id="searchBtn">BITch</button>
                </div>
            </div>
        );
    }
}