import React from "react";

const Profile = () => {
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(data)
    let { fname, lname, email, mobile } = data
    return (
        <div className="profile">
            <h1>User Details</h1>
            <ul>
                <li>first name : {fname}</li>
                <li>last name : {lname}</li>
                <li>email address :{email}</li>
                <li>mobile number :{mobile}</li>
            </ul>
        </div>
    )
}


export default Profile;