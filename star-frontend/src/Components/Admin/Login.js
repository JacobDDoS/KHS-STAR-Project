import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cookies from '../../data/cookies'

import serverURL from '../../data/serverURL';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        .then(data => 
            {
                if (data.length === 4) {
                    navigate("/admin");
                }
            });
  }

  return (
    <div style={{"height": "100vh", "marginTop": "100px"}}>
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
                <button type='submit'>
                    Login
                </button>
            </div>
            <br/>
            <div>
                <p><b>Note:</b> that if you login correctly, it will redirect you to the admin page where you can create, update, & delete information</p>
            </div>
        </form>
        
    </div>
  )
}

export default Login