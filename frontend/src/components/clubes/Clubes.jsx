import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Clubes = () => {
  return (
    <div className="hero-container">
      <h1>Mis clubes</h1>
      <hr />
      {/* Seguirian los Cards */}

        {/* Cardd de ejemplo */}
        <div className="club-cards-parent">
            <div className="club-card-child violet">
                <FontAwesomeIcon icon={faBook} size="3x" />
                <p>Club de Lectura</p>
            </div>

            <div className="club-card-child violet">
                <FontAwesomeIcon icon={faBook} size="3x" />
                <p>Club de Misterio</p>
            </div>

            <div className="club-card-child red">
                <FontAwesomeIcon icon={faBook} size="3x" />
                <p>Club de Romance</p>
            </div>
        </div>
        

      <div className="break"></div>

      <h1>Descubre</h1>
      <hr />
      {/* Cards */}

        <div className="club-card-parent">
            <div className="club-card-child blue">
                <FontAwesomeIcon icon={faBook} size="3x" />
                <p>Club de Sherlock Holmes</p>
            </div>
        </div>
      

    </div>
  );
};

export default Clubes;
