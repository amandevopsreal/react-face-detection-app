import React from "react";
import './Register.css'
const Register = ({onRouteChange}) => {
    return (
        <article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <div className="box">
                <form autocomplete="off">
                    <h2>Register</h2>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>E-mail</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <input onClick={() => onRouteChange("home")} type="submit" value="Register" />
                </form>
            </div>
        </article>

    );
}

export default Register;