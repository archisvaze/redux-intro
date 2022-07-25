import { useDispatch } from "react-redux";

import React from "react";

import { login, logout } from "../slices/userSlice";

const newUser = {
    name: "Archis",
    email: "vazearchis@gmail.com",
    location: "India"
}

export default function Login(props) {

    const dispatch = useDispatch();

    return (
        <div className="actions">
            <button
            onClick={(e) => {
                dispatch(login(newUser))
            }} className="login">Login</button>
            <button
            onClick={()=>{
                dispatch(logout())
            }} className="logout">Logout</button>
        </div>
    )
}

