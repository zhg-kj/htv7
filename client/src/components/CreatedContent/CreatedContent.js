import React from 'react';

import blogpost from "../../assets/blogpost.jpeg";
import "./CreatedContent.css";


const blog = {
    img : blogpost,
    creator : 'Taylor Marry',
    bio: "My name is Taylor Merry, and please givvvvvve me big big kiss!",
    description : "My a full time stripper working Rabel Toronto, Pay me and see more 😍😍😍!"
}
export class CreatedContent extends React.Component{
    render() {
        return(
            <div className="post">
                <div className="horizontal">
                    <img src={blog.img} alt='background' id="profilePic"/>
                    <p style={{marginLeft:"20px"}}>{blog.bio}</p>
                </div>
                <p style={{marginTop:"10px"}}>{blog.description}</p>
                <h3 style={{fontSize:"20px", textAlign:"right"}}>{`---- Created by ${blog.creator}`}</h3>
            </div>
        );
    }
}