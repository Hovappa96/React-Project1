import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [details, setDetails] = useState({
        email: "", password: ""
    })

    const navigate = useNavigate();


    const OnChangeEvent = (event) => {
        const { name, value } = event.target;
        setDetails((preValue) => {
            return { ...preValue, [name]: value }
        })
    }


    const OnClickButton = async () => {
        let { email, password } = details
        let result = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        result = await result.json();
        console.log(result)

        setDetails({ email: "", password: "" })
        navigate("/")
    }


    return (
        <div className="login">
            <div className="main_div">
                <h1>Login</h1>
                <input
                    className="inputBox"
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={details.email}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={details.password}
                    onChange={OnChangeEvent}
                />
                <button className="btn1" onClick={OnClickButton}>Login</button>
            </div>
        </div>
    )
}


export default Login;