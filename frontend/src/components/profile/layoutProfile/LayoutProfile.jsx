import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/profile/profile.css";
import LeftNav from "../../nav/LeftNav";

const LayoutProfile = ({ user, children }) => {
    const formatDate = (dateString) => {
    if (!dateString) return "Fecha inválida";

    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <LeftNav />
      <div className="profile-container-container">
        <section className="profile-container">
          <div className="profile-card">
            <div className="profile-avatar">
              <img src={user.avatar} alt={`Avatar de ${user.username}`} />
            </div>

            <h1>Datos de Usuario</h1>
            <h2 className="profile-username">
              <FontAwesomeIcon
                icon={faUser}
                style={{ marginRight: "10px", color: "white" }}
              />
              {user.username}
            </h2>
            <p className="profile-email">📧 {user.email}</p>
            <p className="profile-role">
              🛡️ Rol: <strong>{user.role.toUpperCase()}</strong>
            </p>
            <p className="profile-birthday">
              🎂 Cumpleaños: {user.birthday ? formatDate(user.birthday) : "No especificado"}
            </p>
            <p
              className={`profile-status ${
                user.isActive ? "active" : "inactive"
              }`}
            >
              {user.isActive ? "🟢 Activo" : "🔴 Inactivo"}
            </p>

            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutProfile;
