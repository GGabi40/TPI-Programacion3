import React from "react";
import "./JoinAdmin.css";
import { useNavigate } from "react-router";
import LeftNav from "../../components/nav/LeftNav";

import { infoToast, successToast } from "../../components/toast/NotificationToast";

const JoinAdmin = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    successToast("Redireccionando a enlace de pago...");
    setTimeout(() => {
        infoToast('Nos comunicaremos contigo')
        navigate('/dashboard')
    }, 1500);
  };

  return (
    <div>
      <LeftNav />
      <div className="hero-container">
        <section className="admin-hero">
          <h1>¿Querés ser Administrador de Clubes?</h1>
          <p className="subtitle">
            ¡Transformá tu pasión por la lectura en liderazgo digital!
          </p>
          <p>
            Al convertirte en <strong>Administrador</strong>, podés crear y
            gestionar tus propios clubes de lectura, moderar participantes,
            proponer actividades exclusivas y construir una comunidad literaria
            única.
          </p>

          <div className="highlight-price">
            <span className="price-label">Acceso único por</span>
            <div className="price-glow">$1999 ARS</div>
          </div>

          <p>
            Este pequeño aporte nos ayuda a mantener la plataforma en
            funcionamiento y seguir creando herramientas para la comunidad.
          </p>

          <button className="btn-admin-cta" onClick={handleAdminClick}>
            ¡Quiero ser Admin!
          </button>
        </section>
      </div>
    </div>
  );
};

export default JoinAdmin;
