import React, { useState } from "react";
import './Signin.css';
import { Link, useNavigate } from "react-router-dom"
const Signin = ({ onRouteChange }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        console.log(e)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();
    const onLogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email, password: user.password })
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authtoken)
            onRouteChange("home")
            navigate("/home")
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center ">
            <div className="box ">
                <dic className="outdiv">
                    <h2>Sign in</h2>
                    <div className="inputBox">
                        <input id="email" name='email' type="text" required="required" onChange={onChange} />
                        <span>E-mail</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input id="password" name='password' type="password" required="required" onChange={onChange} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link to={"/signup"} onClick={() => onRouteChange("register")} href="#">Register</Link>
                    </div>
                    <input onClick={onLogin} type="submit" value="Sign In" />
                </dic>
            </div>
        </article>
    );
}

export default Signin;