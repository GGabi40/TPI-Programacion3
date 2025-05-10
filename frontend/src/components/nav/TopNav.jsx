import React from 'react';
import '../../styles/nav/topNav.css';
import { Link } from 'react-router';
import { useState } from 'react';

import logo from '../../assets/img/logo/Logo-InkLink.webp';
import Register from '../register/Register';

const TopNav = ({ showRegisterButton }) => {
  return (
    <nav id='topNav'>
        <div className="logo top">
            <img src={logo} alt="Logo Inklink" className='imgLogo' />
            <h1>InkLink</h1>
        </div>

        <div className="buttons top">
            <Link to="/" className="link-button">Login</Link>
            {showRegisterButton && (
            <Link to="/register" className="link-button">Register</Link>
            )}
        </div>
    </nav>
  );
};

export default TopNav;