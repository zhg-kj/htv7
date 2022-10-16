import React from 'react';

import "./Introduction.css"
import {AboutUs} from "../AboutUs/AboutUs";


let intros = {
    p:"Do what you love the the way of how you can access your data securely for both yourself and your community.",
    title: "Blockchain Tech"
};
export class Introduction extends React.Component{
    render() {
        return(
            <div className="introduction">
                <h1 id={"bitTitle"}>What is BITch?</h1>
                <p>BITch is one of the innovative web app using cutting edge technology like Blockchain, NFT, <br/> your assets and privacy while you enjoying the fun</p>
                <div>
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
                </div>
            </div>
        );
    }
}