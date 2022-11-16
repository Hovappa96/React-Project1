import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./style.css"

const NavBar = () => {
    const auth = localStorage.getItem("user");
    let navigate = useNavigate();

    const Logout = () => {
        localStorage.clear();
        navigate("/signup")
    }

    return (
        <div className="nav-ul" style={{ textAlign: "right" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOImEXsxdUffQABLHvFkySd1arxAXfbXKjBMjkgOJ2yXgpZuGWQoAN7Uf5ninAIUIyEc&usqp=CAU"
                alt="logo"
                className="logo"
            />
            {auth ?
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update/:id">Update Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={Logout} to="/signup">Logout</Link></li>
                </ul>
                :
                <ul>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default NavBar;