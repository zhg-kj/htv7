import React from "react";
import "../styles/viewContent.css";
import { useLocation } from 'react-router-dom'

const ViewContent = (props) => {
  const location = useLocation()
  const { post } = location.state

  return (
    <div className="view-content-container">
      <h1>{post.body}</h1>
    </div>
  );
};

export default ViewContent;