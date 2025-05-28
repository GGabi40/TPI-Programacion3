import React, { useState, useContext, useEffect } from "react";
import "../../styles/nav/leftNav.css";

import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link, useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { AuthenticationContext } from '../services/auth.context';
import { useFetch } from "../hook/UseFetch";

const { getById } = useFetch("/users");

const LeftNav = () => {
  const navigate = useNavigate();
  const { handleUserLogout, token, userId } = useContext(AuthenticationContext);
  const [user, setUser] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const logout = () => {
    handleUserLogout();
    closeMenu();
    navigate("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const userData = await getById(userId, token);
        setUser(userData);
      }
    };
    fetchUser();
  }, [userId]);

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

          <Link to="/dashboard">
            <img src={logo} alt="Logo Inklink" className="imgLogo" />
          </Link>

          <h1>InkLink</h1>

          <h3 className="nav-usuario">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            {user ? user.username : "Cargando..."}
          </h3>
        </div>

        <div className="buttons">
          <div className="btns-1">
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
          </div>

          <div className="btns-2">
            <button onClick={logout} className="link-button nav-btn cerrar-sesion-btn">
              Cerrar sesión
            </button>
          </div>

        </div>

        <span className="quienes-somos">Grupo 1 | TPI Programacion 3</span>
      </nav>
    </>
  );
};

export default LeftNav;
