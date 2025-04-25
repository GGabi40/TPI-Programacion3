import React from "react";
import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from "../../assets/img/logo/Logo-InkLink.webp";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <h2>InkLink</h2>
        <img src={logo} alt="Logo InkLink" />
      </div>

      <div className="footer nosotros">
        <h3>Sobre Nosotros</h3>
        <Link to="/" className="link-subrayado">
          Quienes Somos
        </Link>
      </div>

      <div className="footer contacto">
        <h3>Contacto</h3>
        <div className="redes-sociales">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>

      <div className="footer legal">
        <h3>Legal</h3>
        <Link to="/" className="link-subrayado">
          Términos y Condiciones
        </Link>
        <Link to="/" className="link-subrayado">
          Política de Privacidad
        </Link>
      </div>

      <div className="grupo">
        <span>Hecho con 💖 por Grupo 1 | TPI Programacion 3</span>
      </div>
    </footer>
  );
};

export default Footer;
