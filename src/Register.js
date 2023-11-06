import React, { useState } from "react";
import './Register.css'
import { useNavigate } from "react-router-dom"
const Register = ({ onRouteChange }) => {
    const [user, setUser] = useState({
        name: "",
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
    const onRegister = async () => {
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name,
            })
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
        <article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <div className="box">
                <div className="outdiv">
                    <h2>Register</h2>
                    <div className="inputBox">
                        <input type="text" required="required" id="name" name='name' onChange={onChange} />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required" id="email" name='email' onChange={onChange} />
                        <span>E-mail</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" id="password" name='password' onChange={onChange} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <input onClick={onRegister} type="submit" value="Register" />
                </div>
            </div>
        </article>

    );
}

export default Register;