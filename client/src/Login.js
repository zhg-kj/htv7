import React, { useState, useEffect } from "react";
import DesoIdentity from "./components/DesoIdentity";

const IdentityUsersKey = "identityUsersV2"

const Login = () => {
    // Initialize the desoIdentity class
    const [desoIdentity, setDesoIdentity] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [publicKey, setPublicKey] = useState(null)

    useEffect(() => {
        const deso = new DesoIdentity();
        setDesoIdentity(deso);

        let user = {}
        if (localStorage.getItem(IdentityUsersKey) === 'undefined'){
          user = {}
        } else if (localStorage.getItem(IdentityUsersKey)){
          user = JSON.parse(localStorage.getItem(IdentityUsersKey) || '{}')
        }
    
        if(user.publicKey){
            setLoggedIn(true)
            setPublicKey(user.publicKey)
        }
    });

    const login = async () => {
        const user = await desoIdentity.loginAsync(4)
        setPublicKey(user.publicKey)
        setLoggedIn(true)
    }

    return (
        <div>
            <h1>{publicKey}</h1>
            <button onClick={login}>Open window</button>
        </div>
    );
};

export default Login;