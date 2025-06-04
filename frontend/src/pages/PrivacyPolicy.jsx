import React, { useEffect } from "react";
import "./terms.css";
import TopNav from "../components/nav/TopNav";
import Footer from "../components/footer/Footer";
import GoToTop from "../components/goToTop/GoToTop";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <>
      <TopNav />
      <div className="about-container">
        <h2>Política de Privacidad</h2>

        <p>
          En <strong>InkLink</strong> valoramos y protegemos tu privacidad. Esta
          política explica cómo recopilamos, usamos y protegemos tus datos
          personales.
        </p>

        <ul className="privacy-list">
          <li className="privacy-item">
            <strong>1. Datos Recopilados:</strong> Recopilamos información que
            proporcionás al registrarte y utilizar la plataforma, como nombre,
            correo electrónico y actividad dentro de la app.
          </li>
          <li className="privacy-item">
            <strong>2. Uso de Datos:</strong> Los datos se utilizan
            exclusivamente para mejorar tu experiencia, personalizar contenido y
            mantener la seguridad de la comunidad.
          </li>
          <li className="privacy-item">
            <strong>3. Compartición de Datos:</strong> No compartimos tu
            información personal con terceros sin tu consentimiento, salvo
            requerimiento legal.
          </li>
          <li className="privacy-item">
            <strong>4. Seguridad:</strong> Implementamos medidas técnicas y
            organizativas para proteger tus datos contra accesos no autorizados,
            pérdidas o alteraciones.
          </li>
          <li className="privacy-item">
            <strong>5. Derechos del Usuario:</strong> Podés solicitar acceso,
            rectificación o eliminación de tus datos en cualquier momento
            contactándonos.
          </li>
        </ul>

        <p>
          Al usar InkLink, aceptás esta política. Para consultas o reclamos,
          podés comunicarte con nuestro equipo mediante los canales oficiales.
        </p>
      </div>

      <GoToTop />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
