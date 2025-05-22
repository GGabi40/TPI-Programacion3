import React from 'react';
import '../../styles/nav/topNav.css';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';

import logo from '../../assets/img/logo/Logo-InkLink.webp';
import Login from '../login/Login';
import Register from '../register/Register';

const TopNav = () => {
  const location = useLocation();

  return (
    <nav id='topNav'>
      <div className="logo top">
        <a href="/">

          <img src={logo} alt="Logo Inklink" className='imgLogo' /> </a>
        <h1>InkLink</h1>
      </div>

      <div className="buttons top">
        {location.pathname !== '/login' && (
          <Link to="/login" className="link-button">Login</Link>)}
        {location.pathname !== '/register' && (
          <Link to="/register" className="link-button">Register</Link>
        )}
      </div>
    </nav>
  );
};

export default TopNav;