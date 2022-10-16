import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/imageGallery.css';

const test = [{id: 1, body: "Cyberpunk City by zhgkj", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 2, body: "Anime Dragon Girl by AllenX", imageURL: "https://wallpaperaccess.com/full/2855881.jpg"},
              {id: 3, body: "LOL Fan Art by DYLin", imageURL: "https://pbs.twimg.com/media/E8Q9OZmXsAA4RZt?format=jpg&name=large"},
              {id: 4, body: "Eating Chicken by Jacsun", imageURL: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc315a26ed0d1220c/6025d6ae3e70bb4c12c71fd6/2021_2_15_NasusKim.jpg"},
              {id: 5, body: "Big Teddy Bear by Jacsun", imageURL: "https://images.hdqwalls.com/wallpapers/lol-game-fanart-4k-xp.jpg"},
              {id: 6, body: "Dystopia by zhgkj", imageURL: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg"},
              {id: 7, body: "Cyberpunk City by zhgkj", imageURL: "https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg"},
              {id: 8, body: "Anime Dragon Girl by AllenX", imageURL: "https://wallpaperaccess.com/full/2855881.jpg"},
              {id: 9, body: "LOL Fan Art by DYLin", imageURL: "https://pbs.twimg.com/media/E8Q9OZmXsAA4RZt?format=jpg&name=large"},
              {id: 10, body: "Eating Chicken by Jacsun", imageURL: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc315a26ed0d1220c/6025d6ae3e70bb4c12c71fd6/2021_2_15_NasusKim.jpg"},
              {id: 11, body: "Big Teddy Bear by Jacsun", imageURL: "https://images.hdqwalls.com/wallpapers/lol-game-fanart-4k-xp.jpg"},
              {id: 12, body: "Dystopia by zhgkj", imageURL: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg"}]

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