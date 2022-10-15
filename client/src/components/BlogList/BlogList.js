import React from "react";

import "./BlogList.css"
import {CreatedContent} from "../CreatedContent/CreatedContent";

export class BlogList extends React.Component{
    render(){
        let numberOfPost = this.props.num;
        let post = []
        for(let j = 0; j < numberOfPost; j++){
            post.push(<CreatedContent/>);
        }
        return(
            <div className="singleContentElement">
                <h1 id="Title">{this.props.title}</h1>
                <div className='blog'>
                    {post}
                </div>
            </div>
        );
    }
}