import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [user, setUser] = useState({
        fname: "", lname: "", email: "", mobile: "", password: "", cpassword: ""
    })
    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    })

    const OnChangeEvent = (event) => {
        const { name, value } = event.target
        return setUser((preValue) => {
            return { ...preValue, [name]: value }
        })
    }

    const OnClickButton = async () => {
        let { fname, lname, email, mobile, password, cpassword } = user

        let result = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fname, lname, email, mobile, password, cpassword
            })
        })
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/")
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <div className="main_div">
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    value={user.fname}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Last Name"
                    name="lname"
                    value={user.lname}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Email Address"
                    name="email"
                    value={user.email}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Mobile Number"
                    name="mobile"
                    value={user.mobile}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    value={user.password}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Confirm Password"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={OnChangeEvent}
                />
                <button className="btn1" onClick={OnClickButton}>SignUp</button>
            </div>
            <div>
                <Link to="/login">Go To Login Page</Link>
            </div>
        </div>
    )
}

export default SignUp;