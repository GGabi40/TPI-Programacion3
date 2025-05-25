import React from 'react'
import { Outlet, Navigate } from 'react-router';
import { useContext } from 'react';
import { isTokenValid } from '../services/auth/tokenValidation';
import { AuthenticationContext } from '../services/auth.context';


const Protected = () => {
    const {token} = useContext(AuthenticationContext);
    if (!isTokenValid(token)) {
        return <Navigate to="/login" replace />;
    } else{
        return <Outlet/>
    }
}

export default Protected