import React, {useState} from 'react';
import { AuthenticationContext } from '../auth.context';

const tokenValue = localStorage.getItem("inklink-token");

const AuthContextProvider = ({children}) => {
    
    const [token, setToken] = useState(tokenValue);

    const handleUserLogin = (token) => {
        localStorage.setItem("inklink-token", token);
        setToken(token);
    }

    const handleUserLogout = () => {
        localStorage.removeItem("inklink-token");
        setToken(null);
    }

  return (
    <AuthenticationContext.Provider value={{token, handleUserLogin, handleUserLogout}}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthContextProvider
