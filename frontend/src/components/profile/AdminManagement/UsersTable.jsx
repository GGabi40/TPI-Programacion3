import React, { useState } from "react";
import Search from "../../search/Search";

const UsersTable = () => {
  /* EJEMPLO CON USUARIOS RANDOM */
  const mockUsers = [
    {
      id: 1,
      username: "juanito",
      email: "juanito@email.com",
      role: "admin",
      isActive: true,
    },
    {
      id: 2,
      username: "laura23",
      email: "laura@email.com",
      role: "user",
      isActive: false,
    },
    {
      id: 3,
      username: "laura21",
      email: "laura@email.com",
      role: "user",
      isActive: false,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // filtra usuarios de lista de usuarios
  const filteredUsers = mockUsers.filter((u) =>
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* Establecer funciones */
  const handleEditRole = (id) => {
    console.log("Editar rol de", id);
  };

  const handleDeleteUser = (id) => {
    console.log("Eliminar usuario", id);
  };

  return (
    <div className="user-table-container">
      <Search
        onSearch={setSearchTerm}
        placeholder="Buscar Username o email..."
        showButton={false}
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ?
          filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <span
                  className={u.isActive ? "status-active" : "status-inactive"}
                >
                  {u.isActive ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => handleEditRole(u.id)}
                >
                  Editar rol
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteUser(u.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          )) : <p className="dark">No se encontraron usuarios</p>}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
