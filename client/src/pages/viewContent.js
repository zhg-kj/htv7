import React, {useEffect, useState} from "react";
import "../styles/viewContent.css";
import { useLocation } from 'react-router-dom'
import profilePic from "../assets/profile1.png"
import like from "../assets/likeFeature.png"
import liked from "../assets/likedFeature.png"

const ViewContent = (props) => {
    const [isLike, setIsLike] = useState(false);

  const location = useLocation()
  const { post } = location.state
  return (
    <div className="view-content-container">
        <div className="userPost">
            <div className="userHeader">
                <img src={profilePic} />
                <div className="userHeaderInfo">
                    <h4>User name</h4>
                    <h5>location</h5>
                </div>
            </div>
            <img className='post-image' src={post.imageURL} alt='Post.' />
            <img className='function-image' src={isLike ? liked : like} alt={'like function'} onClick={(e) => {setIsLike(!isLike)}}/>
            <p>{post.body}</p>
        </div>
    </div>
  );
};

export default ViewContent;