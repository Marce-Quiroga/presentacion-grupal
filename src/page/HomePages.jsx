import React from "react";
import Main from "../components/Main";

export default function HomePages({ integrantes, setIntegrantes }) {
  return (
    <div>
      <Main integrantes={integrantes} setIntegrantes={setIntegrantes} />
    </div>
  );
}