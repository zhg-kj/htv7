import React, {useEffect, useState} from "react";
import "../styles/viewContent.css";
import { useLocation } from 'react-router-dom'
import like from "../assets/likeFeature.png"
import liked from "../assets/likedFeature.png"

const ViewContent = (props) => {
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setIsLike(props.isLike);
  }, []);

  const location = useLocation()
  return (
    <div className="view-content-container">
        <div className="userPost">
            <div className="userHeader">
                <img src={props.profileImageURL} />
                <div className="userHeaderInfo">
                    <h4>User name</h4>
                    <h5>location</h5>
                </div>
            </div>
            <img className='post-image' src={props.imageURL} alt='Post.' />
            <div>
                <img className='function-image' src={isLike ? liked : like} alt={'like function'} onClick={(e) => {setIsLike(!isLike)}}/>
                <p>Hi</p>
            </div>
        </div>
    </div>
  );
};

export default ViewContent;