import React from 'react'

import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from "../../assets/img/logo/Logo-InkLink.webp";


const FooterSmall = () => {
  return (
      <footer className='footer-small'>
        
            <div className="logo-footer">
              <img src={logo} alt="Logo InkLink" />
              <h2 className='nombre-pagina'>InkLink</h2>
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
      
         
      
            <div className="grupo">
              <span>Hecho con 💖 por Grupo 1 | TPI Programacion 3</span>
            </div>  
      </footer>
  )
}

export default FooterSmall
