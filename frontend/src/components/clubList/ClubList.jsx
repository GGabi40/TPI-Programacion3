import React from "react";
import "./clubList.css";

import CardClub from "../cardClub/CardClub";

/* Acá se van a listar los clubes */
/* Facilita la reutilizacion */
const ClubList = ({ clubs, title }) => {
  return (
    <div className="club-list">
      <h2>{title}</h2>
      <hr />

      <div className="club-cards-parent">
        {clubs.map((club, index) => (
          <CardClub key={index} club={club} />
        ))}
      </div>
    </div>
  );
};

export default ClubList;
