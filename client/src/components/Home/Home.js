import React from 'react';

import "./Home.css"
import {Title} from "../Title/Title";
import {BlogList} from "../BlogList/BlogList";

export class Home extends React.Component{
    render(){
        return(
            <div>
                <Title/>
                <div className="content">
                    <div className="left">
                        <BlogList title="Top Creators" num={8} style={{float:"left"}}/>
                    </div>
                    <div className="right">
                        <BlogList title="Recommended for you" num={4}/>
                        <BlogList title="Most Recent" num={6}/>
                    </div>
                </div>
            </div>
        );
    }
}
