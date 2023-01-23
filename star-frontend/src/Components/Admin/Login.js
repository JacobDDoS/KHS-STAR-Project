import React, { useState } from 'react'
import { useEffect } from 'react';
import cookies from '../../data/cookies'

import serverURL from '../../data/serverURL';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const seeIfLoggedIn = async () => {

    const opts = {  method: "GET", 
                    'credentials': 'include',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin':'http://localhost:3000/',
                        'Content-Type': 'application/json',
                    })
                 }

    fetch(`${serverURL}/homepage/pictureShowcase`, opts)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const addAward = async () => {
    console.log("called");
    const delOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000/',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "membersOfAward": "Adan;Alex;Jacob",
            "date": "2022-11-26T18:52:18.366+00:00",
            "awardName": "Best STAR Project",
            "pictureOfAwardURL": "htsfdfstps://cdn.mos.cms.futurecdn.net/LZUsfgcXH7WMeVvuHYsoSA-1200-80.png",
            "description": "Thfsfsdfsdfese dudes were so awesome with their STsdfsdAR project omg!"
        })
    }

    fetch(`${serverURL}/api/add/Award`, delOptions)
        .then(res => console.log(res))
            // .then(response=>response.json())
            // .then(data=>console.log(data))
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    const requestOptions = {
        credentials: 'include',
        method: 'POST',
        withCredientials: true,
        body: data
    }

    

    fetch(`${serverURL}/login`, requestOptions)
        .then(response => [...response.headers])
        .then(data => console.log(data));
  }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
        
    </div>
  )
}

export default Login