import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import SignUp from "./Components/SignUp"
import PrivateComponent from "./Components/PrivateComponent"
import Login from "./Components/Login"
import AddProduct from "./Components/AddProduct"
import GetProduct from "./Components/GetProduct"
import UpdateProduct from "./Components/UpdateProduct"
import Profile from "./Components/Profile"



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route element={<PrivateComponent />}>
                        <Route path="/" element={<GetProduct />} />
                        <Route path="/add" element={<AddProduct />} />
                        <Route path="/update/:id" element={<UpdateProduct />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/logout" element={<h1>Logout Component</h1>} />
                    </Route>
                    <Route path="signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;