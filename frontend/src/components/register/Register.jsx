import React from "react";
import Footer from "../footer/Footer";
import TopNav from "../nav/TopNav";
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { errorToast, successToast } from "../toast/NotificationToast";

import { useFetch } from "../hook/UseFetch";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    backend: "",
  });
  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthdate: "",
      backend: "",
    });

    let formIsValid = true;
    const newErrors = {};

    if (!userName) {
      errorToast("El nombre de usuario es requerido.");
      newErrors.userName = "El nombre de usuario es requerido.";
      formIsValid = false;
    }

    if (!email) {
      newErrors.email = "El email es requerido.";
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "La contraseña es requerida.";
      formIsValid = false;
    }

    if (!confirmPassword) {
      errorToast("Por favor confirme su contraseña.");
      newErrors.confirmPassword = "Por favor confirme su contraseña.";
      formIsValid = false;
    }

    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
      formIsValid = false;
    }

    if (!birthdate) {
      newErrors.birthdate = "La fecha de nacimiento es requerida.";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return;
    }

    const newUser = {
      username: userName,
      email,
      password,
      birthday: birthdate,
      avatar: avatar || "/avatars/avatar1.png", // si avatar está vacío, pone el enlace
    };

    try {
      const { post } = useFetch("/register");

      const response = await post(newUser);
      if (response.message.includes("ya está")) {
        setErrors((prev) => ({ ...prev, backend: response.message }));
        errorToast(response.message);
        return;
      }

      successToast("Usuario registrado exitosamente. Inicie sesión para continuar.");
      navigate("/login");
    } catch (err) {
      console.log("Error: ", err);
      return;
    }
  };

  const avatarList = [
    "/avatars/avatar1.png",
    "/avatars/avatar2.png",
    "/avatars/avatar3.png",
    "/avatars/avatar4.png",
    "/avatars/avatar5.png",
    "/avatars/avatar6.png",
  ];

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
          {errors.userName && <p className="error">{errors.userName}</p>}

          <label>Ingrese su email:</label>
          <input
            type="email"
            placeholder="email@ejemplo.com"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Ingrese su clave:</label>
          <input
            type="password"
            placeholder="Contraseña segura"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label>Confirmar clave:</label>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <label>Fecha de nacimiento</label>
          <input
            type="date"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          {errors.birthdate && <p className="error">{errors.birthdate}</p>}

          <label>Seleccione un Avatar:</label>
          <div className="avatar-selector">
            {avatarList.map((avatarPath, index) => (
              <img
                key={index}
                src={avatarPath}
                alt={`Avatar ${index + 1}`}
                onClick={() => setAvatar(avatarPath)}
                className={avatar === avatarPath ? "selected" : ""}
                style={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
            ))}
          </div>
          {errors.backend && <p className="error">{errors.backend}</p>}

          <button type="submit">Crear Cuenta</button>

          <p>
            ¿Ya tiene una cuenta?{" "}
            <Link to="/login" id="redireccion">
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
