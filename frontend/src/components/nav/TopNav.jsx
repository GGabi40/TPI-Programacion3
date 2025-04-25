import React from 'react'
import '../../styles/nav/topNav.css'
import { Link } from 'react-router'

import logo from '../../assets/img/logo/Logo-InkLink.webp';

const TopNav = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="Logo Inklink" />
            <h1>InkLink</h1>
        </div>

        <div className="buttons">
            <Link to="/" className="link-button">Login</Link>
            <Link to="/register" className="link-button">Register</Link>
        </div>
    </nav>
  )
}

export default TopNav