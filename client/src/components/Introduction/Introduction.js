import React from 'react';

import "./Introduction.css"
import {AboutUs} from "../AboutUs/AboutUs";
import patreon from "../../assets/pat.gif";


let intros = {
    p:"Do what you love the the way of how you can access your data securely for both yourself and your community.",
    title: "Blockchain Tech"
};
export class Introduction extends React.Component{
    render() {
        return(
            <div className="introduction">
                <h1 id={"bitTitle"} style={{marginTop: "20vh"}}>What is the Private-Bit?</h1>
                <h4 style={{fontSize: "3rem", marginBottom: "20vh"}}>The Private-Bit is the first decentralized membership-oriented platform for creators.</h4>
                <div className="explanation">
                    <h1 style={{fontSize: "5rem", zIndex: "1", margin: "30px", width: "60%"}}>THINK PATREON BUT DECENTRALIZED.</h1>
                    <img style={{width: "35%"}} className="patreon" src={patreon}/>
                </div>
                {/*<div>
                    <div id="newTechIntro">
                        <AboutUs title={intros.title} intro ={intros.p}/>
                        <AboutUs title={intros.title} intro ={intros.p}/>
                    </div>
                    <div id="newTechIntro">
                        <AboutUs title={intros.title} intro ={intros.p}/>
                        <AboutUs title={intros.title} intro ={intros.p}/>
                    </div>
                    <div id="newTechIntro">
                        <AboutUs title={intros.title} intro ={intros.p}/>
                        <AboutUs title={intros.title} intro ={intros.p}/>
                    </div>
                </div>*/}
            </div>
        );
    }
}