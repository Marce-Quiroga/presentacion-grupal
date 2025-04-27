import React from "react";
import Nosotros from "../components/Nosotros";

export default function NosotrosPages({ integrantes }) {
  return (
    <div>
      <h2 className="tituloNosotros">Página de Nosotros</h2>
      <Nosotros integrantes={integrantes} />
    </div>
  );
}