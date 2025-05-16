import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import LeftNav from '../nav/LeftNav';
import Search from '../search/Search';
import FooterSmall from '../footer/FooterSmall'

const MisClubes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/modifyclub");
  };

  return (
    <>
      <LeftNav />
      <div className="hero-container">
        <div className="hero-club">

          {/*probando aca decia hero-container */}
          <Search onSearch={(valor) => console.log("Buscando:", valor)} />

          <h1>Mis clubes</h1>
          <hr />
          
          <div className="club-cards-parent">
            <div className="club-card-child violet">
              <FontAwesomeIcon icon={faBook} size="3x" />
              <p>Club de Lectura</p>
              <div className="btn-cards">
                <button type="submit" onClick={handleClick}>
                  Modificar
                </button>
                <button type="submit">Eliminar</button>
              </div>
            </div>

            <div className="club-card-child violet">
              <FontAwesomeIcon icon={faBook} size="3x" />
              <p>Club de Misterio</p>
              <div className="btn-cards">
                <button type="submit">Modificar</button>
                <button type="submit">Eliminar</button>
              </div>
            </div>

            <div className="club-card-child red">
              <FontAwesomeIcon icon={faBook} size="3x" />
              <p>Club de Romance</p>
              <div className="btn-cards">
                <button type="submit">Modificar</button>
                <button type="submit">Eliminar</button>
              </div>
            </div>
          </div>
          <button id="btn-add" type="submit" className="agregar-clubs">
            <b>+</b>
          </button>
          <div className="break"></div>
        </div>
      </div>
      <FooterSmall /> 
    </>
  );
};

export default MisClubes;
