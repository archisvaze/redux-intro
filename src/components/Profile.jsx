import React from 'react'
import { useSelector } from 'react-redux'
export default function () {
    const { user } = useSelector(state => state.userInfo)
    return (
        <div className='profile-container'>
            <p className="name">Name : {user.name}</p>
            <p className="email">Email : {user.email} </p>
            <p className="location">Location : {user.location}</p>
        </div>
    )
}
