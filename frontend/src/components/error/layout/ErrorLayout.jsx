import React from "react";
import { Link } from "react-router";

import "./ErrorLayout.css";

const ErrorLayout = ({ code, title, description, image }) => {
  return (
    <div className="error-container">
      {image && (
        <img src={image} alt="Error illustration" className="error-image" />
      )}
      <h1 className="error-code">{code}</h1>
      <h2 className="error-title">{title}</h2>
      <p className="error-description">{description}</p>

      <Link to="/dashboard" className="link-button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default ErrorLayout;
