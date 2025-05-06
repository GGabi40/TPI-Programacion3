import React from "react";
import ErrorLayout from "../layout/ErrorLayout";

import NotFoundImg from "../../../assets/img/error-img/error-404.webp";

const NotFound = () => {
  return (
    <ErrorLayout
      code="404"
      title="Página no encontrada"
      description="Lo sentimos, no pudimos encontrar lo que estabas buscando."
      image={NotFoundImg}
    />
  );
};

export default NotFound;
