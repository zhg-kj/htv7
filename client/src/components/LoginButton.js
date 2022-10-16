import React from "react";
import Lock from "../assets/lock.gif"
// LoginButton requires setPublicKey and setLoggedIn
const LoginButton = (props) => {
    const login = async () => {
        const user = await props.desoIdentity.loginAsync(4);

        props.setPublicKey(user.publicKey);
        props.setLoggedIn(true);
    }

    return (
        <img className="clickable" style={{width: "250px"}} src={Lock} onClick={login} alt="login-lock"/>
    );
};

export default LoginButton;