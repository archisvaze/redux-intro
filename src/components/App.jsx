import React from 'react'
import Profile from './Profile'
import Login from './Login'


import { toggleTheme } from "../slices/themeSlice"
import { useSelector, useDispatch } from 'react-redux';



export default function App() {
    const { theme } = useSelector(state => state.toggleTheme)
    const dispatch = useDispatch()


    return (
        <div className="container" style={{backgroundColor: theme ==="Light" ? "white" : "black", color: theme ==="Light" ? "black": "white"}}>
            <Profile />
            <Login />

            <button onClick={(e) => dispatch(toggleTheme(theme))} className="theme-toggle">Theme: {theme}</button>
        </div>
    )
}
