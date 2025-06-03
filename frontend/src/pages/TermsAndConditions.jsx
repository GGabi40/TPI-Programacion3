import React from "react";
import "./terms.css";
import TopNav from "../components/nav/TopNav";
import Footer from "../components/footer/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <TopNav />
      <div className="about-container">
        <h2>Términos y Condiciones</h2>

        <p>
          Al utilizar la aplicación <strong>InkLink</strong>, aceptás cumplir
          con estos términos y condiciones. Estos fueron redactados con el fin
          de garantizar un uso justo, respetuoso y seguro para toda la
          comunidad.
        </p>

        <ul className="terms-list">
          <li className="term-item">
            <strong>1. Uso Responsable:</strong> Los usuarios se comprometen a
            utilizar la plataforma de manera ética, evitando cualquier
            comportamiento ofensivo o dañino hacia otras personas.
          </li>
          <li className="term-item">
            <strong>2. Propiedad del Contenido:</strong> Todo el contenido
            generado por los usuarios es de su propiedad, pero al compartirlo en
            InkLink, aceptan que pueda ser visible dentro de la comunidad.
          </li>
          <li className="term-item">
            <strong>3. Protección de Datos:</strong> Respetamos tu privacidad.
            Los datos personales serán protegidos y no se compartirán con
            terceros sin consentimiento explícito.
          </li>
          <li className="term-item">
            <strong>4. Modificaciones:</strong> InkLink se reserva el derecho de
            actualizar estos términos en cualquier momento. Se notificará a los
            usuarios ante cambios relevantes.
          </li>
          <li className="term-item">
            <strong>5. Contacto:</strong> Para cualquier duda o sugerencia podés
            comunicarte con el equipo de desarrollo a través de los canales
            oficiales.
          </li>
        </ul>

        <p>
          Al continuar navegando y utilizando InkLink, estás aceptando estos
          términos. ¡Gracias por ser parte de nuestra comunidad literaria!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
