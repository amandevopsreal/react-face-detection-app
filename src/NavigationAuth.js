import React from "react";
import './Navigation.css'
import {
    Link
} from "react-router-dom";
const NavigationAuth = ({ onRouteChange, isSignedIn }) => {



    return (

        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to={"/"} onClick={() => onRouteChange("signin")} className="f3 link  color  pa3 pointer">Sign In</Link>
            <Link to={"/signup"} onClick={() => onRouteChange("register")} className="f3 link  color  pa3 pointer">Register</Link>
        </nav>

    );



}

export default NavigationAuth;
