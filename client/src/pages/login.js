import React from "react";
import LoginButton from "../components/LoginButton";

const Login = (props) => {
    return (
        <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                <LoginButton style={{margin: "auto"}} setPublicKey={props.setPublicKey} setLoggedIn={props.setLoggedIn} desoIdentity={props.desoIdentity}/>
                <h1 style={{fontSize: "5rem"}}>UNLOCK?</h1>
            </div>
        </div>
    );
};

export default Login;