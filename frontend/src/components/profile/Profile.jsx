import React from "react";

import "../../styles/profile/profile.css";

import LayoutProfile from "./layoutProfile/LayoutProfile"; // layout general
import UserTable from "./AdminManagement/UsersTable"; // tabla de usuarios
import ClubsTable from "./AdminManagement/ClubsTable"; // tabla de clubes


/* Renderiza perfiles dependiendo de ROL de USUARIO */
const Profile = () => {
  // const { user } = useAuth(); // iría con un contexto

  const user = { // ejemplo de usuario
    username: "papas",
    email: "papas@email.com",
    birthday: "2000-02-14",
    avatar: "/avatars/avatar1.png",
    isActive: true,
    role: "superadmin",
  };

  return (
    /* Layout de Perfil: recibe usuario
      dependiendo del rol, se renderiza distintos elementos y componentes 
    */
    <LayoutProfile user={user}>
      {user.role === "superadmin" && (
        <div className="tools">
          <h3 className="superadmin-title">Gestión de Usuarios (SuperAdmin)</h3>
          <UserTable />

          {/* ESTO VA? */}
          <h3 className="superadmin-title">Gestión de Clubes (SuperAdmin)</h3>
          <ClubsTable /> 
        </div>
      )}

      {user.role === "admin" && (
        <div className="tools">
          <h3 className="superadmin-title">Gestión de Clubes (Admin)</h3>
          <p>
            Acá vendrían los clubes a administrar (Podría ser una tabla con
            todos los clubes?)
          </p>
        </div>
      )}

      {user.role === "user" && (
        <div className="tools">
          <h3 className="superadmin-title">Actualizar mis Datos</h3>
          <p>Acá tendría el formulario para modificar datos</p>
        </div>
      )}
    </LayoutProfile>
  );
};

export default Profile;
