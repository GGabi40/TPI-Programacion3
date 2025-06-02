import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Search from "../../search/Search";
import { useFetch } from "../../hook/useFetch";
import { AuthenticationContext } from "../../services/auth.context";
import { successToast, errorToast } from "../../toast/NotificationToast";
import { showConfirmAlert } from "../../sweetAlert/ConfirmAlert";

import "sweetalert2/dist/sweetalert2.min.css";

const ClubsTable = () => {
  const { getAll, put, del } = useFetch("/clubs");
  const { token } = useContext(AuthenticationContext);
  const [allClubs, setAllClubs] = useState([]);
  const [editingClubId, setEditingClubId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const clubsData = await getAll(token);
        setAllClubs(clubsData);
      } catch (error) {
        console.error("Error al cargar clubes:", error);
        errorToast("Error al cargar clubes");
      }
    };

    fetchClubs();
  }, [token]);

  const filteredClubs = allClubs.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClub = (id, currentName) => {
    setEditingClubId(id);
    setEditedName(currentName);
  };

  /* QUE FUNCIONE */
  const handleSaveClub = async (id) => {
    try {
      await put({ name: editedName }, id, token);

      const updatedClubs = allClubs.map((club) =>
        club.id === id ? { ...club, name: editedName } : club
      );
      setAllClubs(updatedClubs);
      setEditingClubId(null);
      setEditedName("");

      successToast("Club actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar club:", error);
      errorToast("Error al actualizar club");
    }
  };

  const handleDeleteClub = (id) => {
    showConfirmAlert(id, async (idToDelete) => {
      try {
        const deleted = await del(idToDelete, token);
        if (deleted) {
          const updatedClubs = allClubs.filter((c) => c.id !== idToDelete);
          setAllClubs(updatedClubs);
          successToast("Club eliminado correctamente");
        }
      } catch (error) {
        console.error("Error eliminando club:", error);
        errorToast("Error eliminando club");
      }
    });
  };

  return (
    <>
      <Search
        onSearch={setSearchTerm}
        placeholder="Buscar Club..."
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
                  <td>
                    {editingClubId === club.id ? (
                      <input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="edit-user-rol"
                      />
                    ) : (
                      club.name
                    )}
                  </td>
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
                    {editingClubId === club.id ? (
                      <button
                        className="btn-save"
                        onClick={() => handleSaveClub(club.id)}
                      >
                        Guardar
                      </button>
                    ) : (
                      <button
                        className="btn-edit"
                        onClick={() => handleEditClub(club.id, club.name)}
                      >
                        Editar
                      </button>
                    )}
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
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>
                  No se encontraron clubes
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClubsTable;
