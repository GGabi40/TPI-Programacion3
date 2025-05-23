import React from "react";
import { Link } from "react-router";
import "./cardClub.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

/* Acá están los cards de cada club */
const CardClub = ({ club, showButtons }) => {

  return (
    <Link
      to={`/clubDetails/${club.id}`}
      className={`club-card-child ${club.color}`}
    >
      <FontAwesomeIcon icon={faBook} size="3x" />
      <p>{club.name}</p>
      {showButtons && (
        <div className="btn-cards">
          <button type="submit" className="btn-card">Modificar</button>
          <button type="submit" className="btn-card">Eliminar</button>
          <button type="submit" className="btn-card">
            <FontAwesomeIcon icon={faPlus} id="btn-plus" />
          </button>
        </div>
      )}
    </Link>
  );
};

export default CardClub;
