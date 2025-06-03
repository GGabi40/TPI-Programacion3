import React, { useState, useEffect } from "react";
import { AuthenticationContext } from "../auth.context";

import { jwtDecode } from "jwt-decode";

const tokenValue = localStorage.getItem("inklink-token");

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(tokenValue);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
      setRole(decoded.role);
    }
  }, [token]);

  const handleUserLogin = (token) => {
    localStorage.setItem("inklink-token", token);
    setToken(token);
    setUserId(null);
  };

  const handleUserLogout = () => {
    localStorage.removeItem("inklink-token");
    setToken(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ token, userId, role, handleUserLogin, handleUserLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContextProvider;
