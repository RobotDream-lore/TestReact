import React, { useState } from 'react';
import './Logout.css';



export default function Logout({ clearToken }) {
  
    return(
      <div className="login-wrapper">
        <button onClick={() => 
            {
                clearToken();
            }}>Logout</button>
      </div>
    )
}


  
