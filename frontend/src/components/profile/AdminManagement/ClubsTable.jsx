import React from "react";

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
      gender: "Femenino",
      isActive: false,
      activityId: 102,
    },
  ];

  const handleEditClub = (id) => {
    console.log("Editar club", id);
  };

  const handleDeleteClub = (id) => {
    console.log("Eliminar club", id);
  };

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Restringido</th>
            <th>Interés</th>
            <th>Género</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockClubs.map((club) => (
            <tr key={club.id}>
              <td>{club.id}</td>
              <td>{club.name}</td>
              <td>{club.description}</td>
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
                >
                  Eliminar
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
