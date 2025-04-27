import React, { useState } from "react";

export default function LoginPages({ setLogueado }) {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "admin" && clave === "1234") {
      setLogueado(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <section className="sectionLogin">
      <h2 className="loginInicio">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
}
