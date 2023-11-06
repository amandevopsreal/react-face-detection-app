import React from "react";
import './Navigation.css'
import {
    Link
} from "react-router-dom";
const Navigation = ({ onRouteChange, isSignedIn }) => {


    return (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to={"/dashboard"} onClick={() => onRouteChange("signout")} className="f3 link  color  pa3 pointer">View Profile</Link>
            <Link to={"/"} onClick={() => onRouteChange("signout")} className="f3 link  color  pa3 pointer">Sign Out</Link>
        </nav>
    );



}

export default Navigation;
