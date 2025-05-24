import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./cardClub.css";
import ModalConfirmDelete from "../modalDelete/ModalConfirmDelete";


import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

/* Acá están los cards de cada club */
const CardClub = ({ club, showButtons }) => {

  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate("/modifyclub");
  };

  const handleClickActivity = () => {
    navigate("/newact");
  }

  const [showModal, setShowModal] = useState(false);

  const handleClickDelete = (d) => {
    d.stopPropagation();
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Club eliminado");
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div
      to={`/clubDetails/${club.id}`}
      className={`club-card-child ${club.color}`}
    >
      <FontAwesomeIcon icon={faBook} size="3x" />
      <p>{club.name}</p>
      {showButtons && (
        <div className="btn-cards">
          <button type="submit" className="btn-card" onClick={handleClickEdit}>Modificar</button>
          <button type="submit" className="btn-card" onClick={handleClickDelete}>Eliminar</button>
          <button type="submit" className="btn-card" onClick={handleClickActivity} title="Agregar Nueva Actividad">
            <FontAwesomeIcon icon={faPlus} id="btn-plus" />
          </button> 
        </div>
      )}
      {showModal && (<ModalConfirmDelete onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />)}
    </div>
  );
};

export default CardClub;
