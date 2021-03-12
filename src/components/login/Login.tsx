import React, { useState } from 'react';
import './Login.css';

export default function Login({ setToken }:any)
{
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = async (e:any) => {
        //e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
      
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"  onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

async function loginUser(credentials:object) {
    return fetch('http://localhost:8080/login',{
        method:'POSt',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

