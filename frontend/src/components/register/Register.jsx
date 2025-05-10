import React from "react";
import Footer from "../footer/Footer";
import TopNav from "../nav/TopNav";
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { errorToast, successToast } from '../../toast/NotificationToast';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!userName) {
      errorToast("El nombre de usuario es requerido.");
      return;
    }

    if (!email) {
      setErrors({ ...errors, email: true });
      return;
    }

    if (!password) {
      setErrors({ ...errors, password: true });
      return;
    }

    if(!confirmPassword) {
      errorToast("Las contraseñas no coinciden.");
      return;
    }

    if(!birthdate) {
      errorToast("La fecha de nacimiento es requerida.");
      return;
    }

    const newUser = {
      userName,
      email,
      password,
      confirmPassword,
      birthdate
    };

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (!res.ok) {
        errorToast("Error al registrar usuario.")
      }

      const userId = await res.json();

      successToast("Usuario registrado exitosamente. Inicie sesion para continuar.")
      navigate("/login");

    } catch (err) {
      errorToast("Error al registrar usuario.");
    }
  }

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
        <form onSubmit={handleSubmit}>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            placeholder="Ej: juan_perez"
            value={userName}
            onChange={handleUserNameChange}
          />

          <label>Ingrese su email:</label>
          <input
            type="email"
            placeholder="email@ejemplo.com"
            value={email}
            onChange={handleEmailChange}
          />

          <label>Ingrese su clave:</label>
          <input
            type="password"
            placeholder="Contraseña segura"
            value={password}
            onChange={handlePasswordChange}
          />

          <label>Confirmar clave:</label>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <label>Fecha de nacimiento</label>
          <input
            type="date"
            value={birthdate}
            onChange={handleBirthdateChange}
          />

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
