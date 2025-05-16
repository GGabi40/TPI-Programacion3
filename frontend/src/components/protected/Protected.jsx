import React from 'react'
import { Outlet, Navigate } from 'react-router';


//se saca el islogged y se toma el token de local storage
const Protected = ({isLogged}) => {
    if (!isLogged) {
        return <Navigate to="/login" replace />;
    } else{
        return <Outlet/>
    }
}

export default Protected