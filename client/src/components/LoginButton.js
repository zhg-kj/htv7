import React, { useState, useEffect } from "react";
import DesoIdentity from "./DesoIdentity";
import localStorageTTL from "./localStorageTTL";

const IdentityUsersKey = "identityUsersV2";

// LoginButton requires setPublicKey and setLoggedIn
const LoginButton = (props) => {
    const [desoIdentity, setDesoIdentity] = useState(null);

    useEffect(() => {
        const deso = new DesoIdentity();
        setDesoIdentity(deso);
    }, []);

    const login = async () => {
        const user = await desoIdentity.loginAsync(4);
        props.setPublicKey(user.publicKey);
        props.setLoggedIn(true);
    }

    return (
        <button onClick={login}>Login</button>
    );
};

export default LoginButton;