import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Clubes = () => {
  const navigate = useNavigate();

  const handleViewDetails = (club) => {
    navigate("/clubDetails", { state: { club } });
  };

  return (

    <div className="hero-container">
      <h1>Mis clubes</h1>
      <hr />
      {/* Seguirian los Cards */}

      {/* Cardd de ejemplo */}
      <div className="club-cards-parent">
        <div className="club-card-child violet"
          onClick={() => handleViewDetails({
            name: "Club de Lectura",
            description: "Un club para amantes de la lectura.",
            progress: "sincronica",
            gender: "ficcion",
            interest: "Novelas clásicas",
            privacy: false,
            restriction: false
          })}
        >
          <FontAwesomeIcon icon={faBook} size="3x" />
          <p>Club de Lectura</p>
        </div>

        <div
          className="club-card-child violet"
          onClick={() => handleViewDetails({
            name: "Club de Misterio",
            description: "Lectura de novelas de misterio y suspenso.",
            progress: "asincronica",
            gender: "misterio",
            interest: "Sherlock Holmes, Agatha Christie",
            privacy: false,
            restriction: false
          })}>
          <FontAwesomeIcon icon={faBook} size="3x" />
          <p>Club de Misterio</p>
        </div>

        <div className="club-card-child red"
          onClick={() => handleViewDetails({
            name: "Club de Romance",
            description: "Historias de amor y drama.",
            progress: "sincronica",
            gender: "romance",
            interest: "Jane Austen, Nicholas Sparks",
            privacy: true,
            restriction: false
          })}
        >
          <FontAwesomeIcon icon={faBook} size="3x" />
          <p>Club de Romance</p>
        </div>
      </div>


      <div className="break"></div>

      <h1>Descubre</h1>
      <hr />
      {/* Cards */}

      <div className="club-card-parent">
        <div
          className="club-card-child blue"
          onClick={() => handleViewDetails({
            name: "Club de Sherlock Holmes",
            description: "Amantes del detective más famoso.",
            progress: "asincronica",
            gender: "misterio",
            interest: "Arthur Conan Doyle",
            privacy: false,
            restriction: false
          })}
        >
          <FontAwesomeIcon icon={faBook} size="3x" />
          <p>Club de Sherlock Holmes</p>
        </div>
      </div>


    </div>
  );
};

export default Clubes;
