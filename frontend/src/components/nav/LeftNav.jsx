import React from 'react';
import '../../styles/nav/leftNav.css';

import logo from '../../assets/img/logo/Logo-InkLink.webp';
import { Link } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LeftNav = () => {
  return (
    <nav id='leftNav'>
      <div className="logo">
            <img src={logo} alt="Logo Inklink" />
            <h1>InkLink</h1>
            <h3 className='nav-usuario'>
              <FontAwesomeIcon icon={faUser} style={{ marginRight:'10px'}} />
              Nombre_Usuario
            </h3>
        </div>

        <div className="buttons">
            <Link to="/dashboard" className="link-button nav-btn">Inicio</Link>
            <Link to="/mi-perfil" className="link-button nav-btn">Mi Perfil</Link>
            <Link to="/mis-clubes" className="link-button nav-btn">Mis Clubes</Link>
            <Link to="/descubre" className="link-button nav-btn">Descubre</Link>
        </div>


        <span className='quienes-somos'>Grupo 1 | TPI Programacion 3</span>
    </nav>
  )
}

export default LeftNav