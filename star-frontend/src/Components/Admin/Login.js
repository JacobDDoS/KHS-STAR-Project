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

  const addAward = () => {
    const delOptions = {
        method: 'POST',
        credentials: 'include+',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "membersOfAward": "Adan;Alex;Jacob",
            "date": "2022-11-26T18:52:18.366+00:00",
            "awardName": "Best STAR Project",
            "pictureOfAwardURL": "https://cdn.mos.cms.futurecdn.net/LZUsfgcXH7WMeVvuHYsoSA-1200-80.png",
            "description": "These dudes were so awesome with their STAR project omg!"
        })
    }

    fetch(`${serverURL}/api/add/Award`, delOptions)
            .then(response=>response)
            .then(data=>console.log(data))
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
        <button onClick={addAward}>
            Add award
        </button>
    </div>
  )
}

export default Login