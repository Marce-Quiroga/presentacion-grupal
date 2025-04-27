import React from "react";

export default function Nosotros({ integrantes }) {
  return (
    <section>
      <h2 className="tituloIntegrantes">Integrantes</h2>
      <div className="integranteTarjeta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {integrantes.map((i, idx) => (
          <div key={idx} className="tarjeta" style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <img src={i.foto} alt={`${i.nombre} ${i.apellido}`} width={100} />
            <h3>{i.nombre} {i.apellido}</h3>
            <p>Legajo: {i.legajo}</p>
            <a href={i.github} target="_blank" rel="noopener noreferrer">GitHub</a> 
          </div>
        ))}
      </div>
    </section>
  );
}