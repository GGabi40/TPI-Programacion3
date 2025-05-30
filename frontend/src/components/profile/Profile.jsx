import React, { useState, useEffect, useContext } from "react";

import "../../styles/profile/profile.css";

import LayoutProfile from "./layoutProfile/LayoutProfile"; // layout general
import UserTable from "./AdminManagement/UsersTable"; // tabla de usuarios
import ClubsTable from "./AdminManagement/ClubsTable"; // tabla de clubes
import FooterSmall from "../footer/FooterSmall";
import ProfileForm from "./profileForm/ProfileForm";

import { useFetch } from "../hook/useFetch";
import { AuthenticationContext } from '../services/auth.context';

const { getById } = useFetch("/users");

/* Renderiza perfiles dependiendo de ROL de USUARIO */
const Profile = () => {
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
  
  // Agg isLoading
  {if (!user) return (<p>Cargando perfil...</p>)};

  const handleEditProfile = () => setShow(!show);

  return (
    /* Layout de Perfil: recibe usuario
      dependiendo del rol, se renderiza distintos elementos y componentes 
    */
   <>
    <LayoutProfile user={user}>
      {user.role === "superadmin" && (
        <div className="tools">
          <h3 className="superadmin-title">Gestión de Usuarios (SuperAdmin)</h3>
          <UserTable />

          <h3 className="superadmin-title">Gestión de Clubes (SuperAdmin)</h3>
          <ClubsTable />
        </div>
      )}

      {user.role === "admin" && (
        <div className="tools">
          <h3 className="superadmin-title">Gestión de Clubes (Admin)</h3>
          <ClubsTable />
        </div>
      )}

      {user.role === "user" && user &&(
        <div className="tools">
          <div className="form">
            <button 
              className="link-button" 
              onClick={handleEditProfile}>
              {show ? 'Cerrar Edición' : 'Editar Perfil'}
            </button>
            
            <ProfileForm 
              user={user} 
              setUser={setUser} 
              show={show} 
              setShow={setShow} 
              className={show ? 'profile-edit' : '' } 
            />
          </div>

        </div>
      )}
    </LayoutProfile>
    
    <FooterSmall />
   </>

  );
};

export default Profile;
