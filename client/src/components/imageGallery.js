import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/imageGallery.css';

const test = [{id: 1, body: "Test1", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 2, body: "Test2", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 3, body: "Test3", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 4, body: "Test4", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 5, body: "Test5", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 6, body: "Test6", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"}]

export default function ImageGallery(props) {

  const postCard = (post) => {
    return (
      <Link to={`/content/${post.id}`} state={{ post: post }} key={post.id}>
        <div className="post-card">
          <img className='post-image' src={post.imageURL} alt='Post.' />
          <h4 className='post-body'>{post.body}</h4>
        </div>
      </Link>
    )
  }

  return (
    <div className="gallery-container">
      {test.map((post) => postCard(post))}
    </div>
  );
}