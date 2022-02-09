import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.access
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    const {access, refresh} = userToken;
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(access);
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken();
  }

  return {
    clearToken: clearToken,
    setToken: saveToken,
    token
  }
  
}
