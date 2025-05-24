import React from "react";
import Footer from "../footer/Footer";
import TopNav from "../nav/TopNav";
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { validateEmail, validatePassword } from "../auth/Auth.services";
import { errorToast, successToast } from "../toast/NotificationToast";

import { useFetch } from "../hook/UseFetch";

const { post } = useFetch("/login");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrors({ ...errors, email: true });
      emailRef.current.focus();
      errorToast("Email invalido");
      return;
    } else {
      setErrors({ ...errors, email: false });
    }

    if (!validatePassword(password, 1)) {
      setErrors({ ...errors, password: true });
      errorToast("La contraseña es requerida");
      passwordRef.current.focus();
      return;
    } else {
      setErrors({ ...errors, password: false });
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await post(userData);
      const { token } = response;

      if (token) {
        localStorage.setItem("inklink-token", token);
        
        successToast("Inicio de sesión exitoso.");
        navigate("/dashboard");
      } else {
        errorToast("Credenciales inválidas o respuesta inesperada.");
      }
    } catch (e) {
      console.error("error ", e);
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <TopNav />
      <div className="background-animated">
        <div className="light-orb"></div>
      </div>

      <div className="form-container margin">
        <div className="logo-form">
          <img src={logo} alt="Logo Inklink" />
        </div>
        <div className="form">
          <h3 className="title-form">NOS ALEGRA VERTE OTRA VEZ</h3>
          <form onSubmit={handleSubmit}>
            <div className=".">
              <input
                type="email"
                className={errors.email ? "error-input" : ""}
                placeholder="Ingrese su email:"
                onChange={handleEmailChange}
                value={email}
                ref={emailRef}
              />
              {errors.email && (
                <p className="error-text">El email es requerido.</p>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                className={errors.password ? "error-input" : ""}
                placeholder="Ingrese su clave:"
                onChange={handlePasswordChange}
                value={password}
                ref={passwordRef}
              />
              {errors.password && (
                <p className="error-text">El password es requerido.</p>
              )}
            </div>
            {/* achicar los botones */}
            <button type="submit">Iniciar sesión</button>
            <button type="button" onClick={handleNavigateToRegister}>
              Registrarse
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
