import React, { useState, useEffect, useContext } from "react";

import "../../styles/profile/profile.css";

import LayoutProfile from "./layoutProfile/LayoutProfile"; // layout general
import UserTable from "./AdminManagement/UsersTable"; // tabla de usuarios
import ClubsTable from "./AdminManagement/ClubsTable"; // tabla de clubes
import ProfileForm from "./profileForm/ProfileForm";

import { useFetch } from "../hook/useFetch";
import { AuthenticationContext } from "../services/auth.context";

import Loading from "../error/loading/Loading";

/* Renderiza perfiles dependiendo de ROL de USUARIO */
const Profile = () => {
  const { getById, isLoading } = useFetch("/users");
  const { token, userId } = useContext(AuthenticationContext);
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const userData = await getById(userId, token);
        setUser(userData);
      }
    };
    fetchUser();
  }, [userId]);

  // isLoading
  if (isLoading) return <Loading />;

  const handleEditProfile = () => setShow(!show);

  return (
    /* Layout de Perfil: recibe usuario
      dependiendo del rol, se renderiza distintos elementos y componentes 
    */
    <>
      <LayoutProfile user={user}>
        {user.role === "superadmin" && (
          <div className="tools">
            <div className="form">
              <button className="link-button" onClick={handleEditProfile}>
                {show ? "Cerrar Edición" : "Editar Perfil"}
              </button>

              {show && (
                <ProfileForm
                  user={user}
                  setUser={setUser}
                  show={show}
                  setShow={setShow}
                  className={show ? "profile-edit" : ""}
                />
              )}
            </div>
            <h3 className="superadmin-title">
              Gestión de Usuarios (SuperAdmin)
            </h3>
            <UserTable />

            <h3 className="superadmin-title">Gestión de Clubes (SuperAdmin)</h3>
            <ClubsTable />
          </div>
        )}

        {user.role === "admin" && (
          <div className="tools">
            <div className="form">
              <button className="link-button" onClick={handleEditProfile}>
                {show ? "Cerrar Edición" : "Editar Perfil"}
              </button>

              {show && (
                <ProfileForm
                  user={user}
                  setUser={setUser}
                  show={show}
                  setShow={setShow}
                  className={show ? "profile-edit" : ""}
                />
              )}
            </div>

            <h3 className="superadmin-title">Gestión de Clubes (Admin)</h3>
            <ClubsTable />
          </div>
        )}

        {user.role === "user" && user && (
          <div className="tools">
            <div className="form">
              <button className="link-button" onClick={handleEditProfile}>
                {show ? "Cerrar Edición" : "Editar Perfil"}
              </button>

              {show && (
                <ProfileForm
                  user={user}
                  setUser={setUser}
                  show={show}
                  setShow={setShow}
                  className={show ? "profile-edit" : ""}
                />
              )}
            </div>
          </div>
        )}
      </LayoutProfile>
    </>
  );
};

export default Profile;
