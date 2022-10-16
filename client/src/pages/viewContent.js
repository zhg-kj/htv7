import React, {useEffect, useState} from "react";
import "../styles/viewContent.css";
import { useLocation } from 'react-router-dom'
import like from "../assets/likeFeature.png"
import liked from "../assets/likedFeature.png"

const ViewContent = (props) => {
  const [isLike, setIsLike] = useState(false);

  const location = useLocation()
  const { post } = location.state

  useEffect(() => {
    setIsLike(props.isLike);
  }, []);

  return (
    <div className="view-content-container">
        <div className="userPost">
            <div className="userHeader">
                <div className="userHeaderInfo">
                    <h4>AllenX</h4>
                    <h5>Toronto</h5>
                </div>
            </div>
            <img className='post-image' src={post.imageURL} alt='Post.' />
            <div>
                <img className='function-image' src={isLike ? liked : like} alt={'like function'} onClick={(e) => {setIsLike(!isLike)}}/>
                <p>{post.body}</p>
            </div>
        </div>
    </div>
  );
};

export default ViewContent;