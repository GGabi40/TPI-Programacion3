import React from "react";
import "./clubList.css";

import CardClub from "../cardClub/CardClub";

/* Acá se van a listar los clubes por mapeo */
/* Facilita la reutilizacion */
const ClubList = ({ clubs, title, showButtons }) => {
  return (
    <div className="club-list">
      <h2>{title}</h2>
      <hr />

      <div className="club-cards-parent">
        {clubs.map((club, index) => (
          <CardClub key={index} club={club} showButtons={showButtons} />
        ))}
      </div>
    </div>
  );
};

export default ClubList;
