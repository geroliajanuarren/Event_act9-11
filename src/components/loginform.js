import React, { useState } from "react";
import "./loginform.css";
import Image from '../images/fb.png'

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const forInput = {
        border: "none",
        backgroundColor: "rgb(229, 226, 226)",
        height: "4em",
        width: "80%",
        borderRadius: "0.25em",
        textAlign: "center",
        padding: "2em",

    }

     const forBg = {
        backgroundColor: "white",
        width: "30em",
        height: "35em",
        position: "relative",
        borderRadius: "1em",
        boxShadow: "0 0.188em 1.550em rgb(100,156,156)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
     }

     const loginBtn = {
        width: "40%",
        height: "3em",
        backgroundColor: "rgb(32, 177, 255)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s",
        borderRadius: "0.25em",
        cursor: "pointer",
     }

    return (
        <div style={forBg}>
            <h1>Login</h1>
            <input style={forInput} type="text" placeholder="username" />
            <input style={forInput} type="password" placeholder="password" />

            <div className="login-btn" style={loginBtn} onClick={popup}>Login</div>

            <p className="text">or login using</p>

            <div className="alt-login" style={{width: "80%", height: "3em", display: "flex", justifyContent: "space-around"}}>
                <div className="fb"></div>
                <div className="gg"></div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>
        
    )
} 

export default LoginForm;