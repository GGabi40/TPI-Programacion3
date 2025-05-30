import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Search from "../../search/Search";

const ClubsTable = () => {
  const mockClubs = [
    {
      id: 1,
      name: "Club de Lectura",
      description: "Un espacio para amantes de los libros.",
      restricted: false,
      interest: "Literatura",
      gender: "Mixto",
      isActive: true,
      activityId: 101,
    },
    {
      id: 2,
      name: "Club de Ciencia",
      description: "Exploramos el mundo con experimentos y debates.",
      restricted: true,
      interest: "Ciencia",
      gender: "Ciencia",
      isActive: false,
      activityId: 102,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  
    // filtra usuarios de lista de usuarios
    const filteredClubs = mockClubs.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleEditClub = (id) => {
    console.log("Editar club", id);
  };

  const handleDeleteClub = (id) => {
    console.log("Eliminar club", id);
  };

  return (
    <div className="user-table-container">
      <Search
        onSearch={setSearchTerm}
        placeholder="Buscar Club..."
        showButton={false}
      />
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            {/* <th>Descripción</th> */}
            <th>Restringido</th>
            <th>Interés</th>
            <th>Género</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredClubs.map((club) => (
            <tr key={club.id}>
              <td>{club.id}</td>
              <td>{club.name}</td>
              {/* <td>{club.description}</td> */}
              <td>{club.restricted ? "Sí" : "No"}</td>
              <td>{club.interest}</td>
              <td>{club.gender}</td>
              <td>
                <span
                  className={club.isActive ? "status-active" : "status-inactive"}
                >
                  {club.isActive ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => handleEditClub(club.id)}
                >
                  Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteClub(club.id)}
                  title="Eliminar Club"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubsTable;
