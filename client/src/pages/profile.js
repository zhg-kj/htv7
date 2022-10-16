import React, { useState, useEffect } from 'react'
import "../styles/profile.css"

import Wallet from '../assets/wallet.PNG';

function Profile(props) {
  return (
  <div className="root-profile-container">  
    <div className="profile-container">
      <div className="profile-left">
        <h1 style={{fontSize: "7rem", color: "white"}}>WELCOME ZHGKJ</h1>
      </div>
      <div className='profile-right'>
        <div className='wallet'>
        <img style={{width: "90%"}} src={Wallet} alt='Post.' />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Profile;