import React, { useState, useEffect } from "react";
// LoginButton requires setPublicKey and setLoggedIn
const LoginButton = (props) => {
    const login = async () => {
        const user = await props.desoIdentity.loginAsync(4);

        props.setPublicKey(user.publicKey);
        props.setLoggedIn(true);
    }

    return (
        <img src="https://images.deso.org/c185ae975cbb9bf62e63c447c02714cb73fe9e35754b23ee23f9303034a5d7cc.webp" onClick={login} alt="login-lock"/>
    );
};

export default LoginButton;