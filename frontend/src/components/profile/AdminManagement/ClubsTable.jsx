import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Search from "../../search/Search";
import { useFetch } from "../../hook/useFetch";
import { AuthenticationContext } from "../../services/auth.context";

const ClubsTable = () => {
  const { getAll } = useFetch("/clubs");
  const { token } = useContext(AuthenticationContext);
  const [allClubs, setAllClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const clubsData = await getAll(token);
      setAllClubs(clubsData);
    };

    fetchClubs();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // filtra usuarios de lista de usuarios
  const filteredClubs = allClubs.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClub = (id) => {
    console.log("Editar club", id);
  };

  const handleDeleteClub = (id) => {
    console.log("Eliminar club", id);
  };

  return (
    <>
      <Search
        onSearch={setSearchTerm}
        placeholder="Buscar Club..."
        showButton={false}
      />
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Restringido</th>
              <th>Interés</th>
              <th>Género</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                <tr key={club.id}>
                  <td>{club.id}</td>
                  <td>{club.name}</td>
                  <td>{club.restricted ? "Sí" : "No"}</td>
                  <td>{club.interest}</td>
                  <td>{club.gender}</td>
                  <td>
                    <span
                      className={
                        club.isActive ? "status-active" : "status-inactive"
                      }
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
              ))
            ) : (
              <p className="dark">No se encontraron clubs</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClubsTable;
