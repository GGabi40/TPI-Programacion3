import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/profile/profile.css";
import LeftNav from "../../nav/LeftNav";

const LayoutProfile = ({ user, children }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-AR", options);
  };

  return (
    <div>
      <LeftNav />

      <section className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">
            <img src={user.avatar} alt={`Avatar de ${user.username}`} />
          </div>

          <h1>Datos de Usuario</h1>
          <h2 className="profile-username">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px", color:'white' }} />
            {user.username}
          </h2>
          <p className="profile-email">📧 {user.email}</p>
          <p className="profile-role">🛡️ Rol: <strong>{user.role.toUpperCase()}</strong></p>
          <p className="profile-birthday">
            🎂 Cumpleaños: {formatDate(user.birthday)}
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
  );
};

export default LayoutProfile;
