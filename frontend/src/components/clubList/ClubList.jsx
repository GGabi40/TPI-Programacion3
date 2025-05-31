import React from "react";
import "./clubList.css";

import CardClub from "../cardClub/CardClub";

/* Acá se van a listar los clubes por mapeo */
/* Facilita la reutilizacion */
const ClubList = ({ clubs, title, setAllClubs, showButtons }) => {
  return (
    <div className="club-list">
      <h2>{title}</h2>
      <hr />

      <div className="club-cards-parent">
        {clubs.length > 0 ? (
          clubs.map((club, index) => (
            <CardClub
              key={index}
              club={club}
              setAllClubs={setAllClubs}
              showButtons={showButtons}
              allClubs={clubs}
            />
          ))
        ) : (
          <>
            <div className="nada-aqui-container">
              {title.includes("Descubre") ? 
              (<h2 className="text-align">No hay nada aquí...</h2>) : 
              (<h2 className="text-align">No te uniste a ningún club...</h2>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ClubList;
