import React, { useState } from "react";
import "../../styles/nav/leftNav.css";

import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="burger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div 
        className={`overlay ${isOpen ? "show" : ""}`} 
        onClick={closeMenu}
      ></div>

      <nav id="leftNav" className={isOpen ? "open" : "collapsed"}>
        <div className="logo">
          <a href="/dashboard">
          <img src={logo} alt="Logo Inklink" className="imgLogo" /> </a>
          <h1>InkLink</h1>
          <h3 className="nav-usuario">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            Nombre_Usuario
          </h3>
        </div>

        <div className="buttons">
          <Link to="/dashboard" className="link-button nav-btn" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/mi-perfil" className="link-button nav-btn" onClick={closeMenu}>
            Mi Perfil
          </Link>
          <Link to="/mis-clubes" className="link-button nav-btn" onClick={closeMenu}>
            Mis Clubes
          </Link>
          <Link to="/descubre" className="link-button nav-btn" onClick={closeMenu}>
            Descubre
          </Link>
          <Link to="/profileForm" className="link-button nav-btn" onClick={closeMenu}>
            Editar Perfil
          </Link>
        </div>

        <span className="quienes-somos">Grupo 1 | TPI Programacion 3</span>
      </nav>
    </>
  );
};

export default LeftNav;
