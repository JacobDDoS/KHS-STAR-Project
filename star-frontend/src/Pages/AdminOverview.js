import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Login from '../Components/Admin/Login';

import cookies from '../data/cookies';

const AdminOverview = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //On initial render, check to see if cookie for JSESSIONID exists
    //If not -> login 
    //Or show normal admin overview 
        //Note it does not check to see if it is valid
        //Later requests which require it will fail and then it will redirect back to here w/o the expired JSESSIONID cookie
    useEffect(()=>{
        if (cookies.get('JSESSIONID') !== undefined) {
            setIsLoggedIn(true);
            console.log("logged in!")
        }
        console.log(cookies.get('JSESSIONID'));
    }, [])
    return (
        <div>
            <h2>Admin Overview</h2>
            {!isLoggedIn ? <Login/> : null}
        </div>
    )
}

export default AdminOverview