import React from "react";
import './Signin.css';
const Signin = ({onRouteChange}) => {
    return (
        <article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center ">
        <div className="box ">
            <form autocomplete="off">
                <h2>Sign in</h2>
                <div className="inputBox">
                    <input type="text" required="required"/>
                        <span>E-mail</span>
                        <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required="required"/>
                        <span>Password</span>
                        <i></i>
                </div>
                <div className="links">
                    <p onClick={()=>onRouteChange("register")} href="#">Register</p>
                </div>
                <input onClick={()=>onRouteChange("home")} type="submit" value="Sign In"/>
            </form>
        </div>
        </article>
    );
}

export default Signin;