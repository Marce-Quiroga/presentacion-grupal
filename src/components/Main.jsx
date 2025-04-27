import React, { useState } from "react";

export default function Main({ setIntegrantes }) {
  const [nuevo, setNuevo] = useState({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const agregarIntegrante = (e) => {
    e.preventDefault();
    setIntegrantes(prev => [...prev, nuevo]);
    setNuevo({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });
  };

  return (
    <main>
      
      <form onSubmit={agregarIntegrante}>
        <h2>Agregar Nuevo Integrante</h2>
        <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" value={nuevo.apellido} onChange={handleChange} required />
        <input name="legajo" placeholder="Legajo" value={nuevo.legajo} onChange={handleChange} required />
        <input name="github" placeholder="GitHub URL" value={nuevo.github} onChange={handleChange} required />
        <input name="foto" placeholder="URL de la Foto" value={nuevo.foto} onChange={handleChange} required />
        <button type="submit">Agregar</button>
      </form>
    </main>
  );
}