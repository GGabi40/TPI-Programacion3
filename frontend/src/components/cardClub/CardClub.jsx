import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import "./cardClub.css";
import { showConfirmAlert } from "../sweetAlert/ConfirmAlert";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hook/useFetch";

const { del } = useFetch("/clubs");

/* Acá están los cards de cada club */
const CardClub = ({ club, showButtons, setAllClubs, allClubs }) => {
  const navigate = useNavigate();

  const handleClickEdit = (id) => {
    navigate(`/modifyclub/${id}`);
  };

  const handleClickActivity = () => {
    navigate("/newact");
  };

  const handleDelete = async (id) => {
    const deleteClub = await del(id);

    if(deleteClub) {
      const updatedClubs = allClubs.filter((c) => c.id !== id);
      setAllClubs(updatedClubs);
    }
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
          <button
            type="submit"
            className="btn-card"
            onClick={() => handleClickEdit(club.id)}
          >
            Modificar
          </button>
          <button
            type="submit"
            className="btn-card"
            onClick={() => showConfirmAlert(club.id, handleDelete)}
          >
            Eliminar
          </button>
          <button
            type="submit"
            className="btn-card"
            onClick={handleClickActivity}
            title="Agregar Nueva Actividad"
          >
            <FontAwesomeIcon icon={faPlus} id="btn-plus" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardClub;
