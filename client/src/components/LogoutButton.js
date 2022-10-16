import React, { useState, useEffect } from "react";
import localStorageTTL from "./localStorageTTL";
const IdentityUsersKey = "identityUsersV2"

const LogoutButton = (props) => {

    const logout = async () => {
        const result = await props.desoIdentity.logoutAsync(props.publicKey);
        
        let user = {}
        if (localStorageTTL.getWithExpiry(IdentityUsersKey) === 'undefined'){
          user = {}
        } else if (localStorageTTL.getWithExpiry(IdentityUsersKey)){
          user = JSON.parse(localStorageTTL.getWithExpiry(IdentityUsersKey) || '{}')
        }
    
        if(!user.publicKey){
            props.setLoggedIn(false);
            props.setPublicKey(null);
        }
    }

    return (
      <h1 style={{fontSize: "1rem", color: "white", zIndex: "3"}} onClick={logout}>Logout</h1>
    );
};

export default LogoutButton;