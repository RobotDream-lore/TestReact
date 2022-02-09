import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const LOGIN_URL = 'http://127.0.0.1:8000/auth/jwt/create';

async function loginUser(credentials) {
 return fetch(LOGIN_URL, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then( data => 
    { 
        if (data.status != 200 ) throw data.status; 
        else return data;
    })
    .then( (data) => { return data.json() });

}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    }).catch( err => { setError( err.toString() ) } );
    
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      { error.length > 0 ? <p>{error}</p> : "" }
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
