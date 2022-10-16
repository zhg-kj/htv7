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
        <button onClick={logout}>Logout</button>
    );
};

export default LogoutButton;