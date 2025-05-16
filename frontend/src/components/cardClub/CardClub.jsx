import React from "react";
import "./cardClub.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

/* Acá están los cards de cada club */
const CardClub = ({ club }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/clubDetails");
  };

  return (
    <div
      className={`club-card-child ${club.color}`}
      onClick={handleViewDetails}
    >
      <FontAwesomeIcon icon={faBook} size="3x" />
      <p>{club.name}</p>
    </div>
  );
};

export default CardClub;
