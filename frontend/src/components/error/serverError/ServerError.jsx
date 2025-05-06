import React from 'react'
import ErrorLayout from "../layout/ErrorLayout";

import ServerErrorImg from "../../../assets/img/error-img/error-500.webp";

const ServerError = () => {
  return (
    <ErrorLayout
      code="500"
      title="¡Uy! Algo salió mal"
      description="Ocurrió un problema inesperado en nuestro servidor. Estamos trabajando para solucionarlo. Por favor, intentá de nuevo más tarde."
      image={ServerErrorImg}
    />
  )
}

export default ServerError