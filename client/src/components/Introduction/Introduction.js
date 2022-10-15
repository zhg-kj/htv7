import React from 'react';

import "./Introduction.css"
import {AboutUs} from "../AboutUs/AboutUs";


export class Introduction extends React.Component{
    render() {
        return(
            <div className="introduction">
                <h1 id={"bitTitle"}>What is BITch?</h1>
                <p>BITch is one of the innovative web app using cutting edge technology like Blockchain, NFT, <br/> your assets and privacy while you enjoying the fun</p>
                <AboutUs/>
            </div>
        );
    }
}