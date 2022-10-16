import React from 'react';

import "./AboutUs.css"
import webIntroPic from "../../Assets/WebIntro.png";

export class AboutUs extends React.Component{
    render() {
        return(
            <div className="usingTech">
                <img src={webIntroPic} alt="Company Intro"/>
                <h1>{this.props.title}</h1>
                <p>{this.props.intro}</p>
            </div>
        );
    }
}