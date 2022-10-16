import React, { useState, useEffect } from "react";
// LoginButton requires setPublicKey and setLoggedIn
const LoginButton = (props) => {
    const login = async () => {
        const user = await props.desoIdentity.loginAsync(4);

        props.setPublicKey(user.publicKey);
        props.setLoggedIn(true);
    }

    return (
        <button onClick={login}>Login</button>
    );
};

export default LoginButton;