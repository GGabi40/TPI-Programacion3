import React from "react";
import Footer from "../footer/Footer";
import TopNav from "../nav/TopNav";
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <TopNav showRegisterButton={false} />
      <div className="background-animated">
        <div className="light-orb"></div>
      </div>

      <div className="form-container margin">
        <div className="logo-form">
          <img src={logo} alt="Logo Inklink" />
        </div>

        <h2 id="crearCuenta" className="text-align">
          CREE SU CUENTA
        </h2>
        <br />
        <form>
          <label>Nombre de Usuario:</label>
          <input type="text" placeholder="Ej: juan_perez" />

          <label>Ingrese su email:</label>
          <input type="email" placeholder="email@ejemplo.com" />

          <label>Ingrese su clave:</label>
          <input type="password" placeholder="Contraseña segura" />

          <label>Confirmar clave:</label>
          <input type="password" placeholder="Confirmar contraseña" />

          <label>Fecha de nacimiento</label>
          <input type="date" />

          <button type="submit">Crear Cuenta</button>

          <p>
            ¿Ya tiene una cuenta?{" "}
            <Link to="/" id="redireccion">
              Iniciar sesión
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
