//Integrantes Grupo N2
//Amoedo Pablo Isaias
//Brandan Cesar
//Carrizo Mauro Martin
//Martinez Ismael Rodrigo
//Quiroga Marcela Noemi

import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePages from "./page/HomePages.jsx";
import NosotrosPages from "./page/NosotrosPages.jsx";
import LoginPages from "./page/LoginPages.jsx";
import "./style/App.css";

function App() {
  const [integrantes, setIntegrantes] = useState([
    {
      nombre: "Ismael",
      apellido: "Marinez",
      legajo: "61350",
      github: "https://github.com/IsmaelM96",
      foto: "/programadoruno.png"
    },
    {
      nombre: "Mauro",
      apellido: "Carrizo",
      legajo: "61565",
      github: "https://github.com/DarkoDarkShadow",
      foto: "/imagenMauro.png"
    },
    {
      nombre: "Marcela",
      apellido: "Quiroga",
      legajo: "62175",
      github: "https://github.com/Marce-Quiroga",
      foto: "/programadoracinco.png"
    },
    {
      nombre: "Pablo",
      apellido: "Amoedo",
      legajo: "61719",
      github: "https://github.com/Kryfter",
      foto: "programadortres.png"
    }, {
      nombre: "Cesar",
      apellido: "Brandan",
      legajo: "62138",
      github: "https://github.com/diago2390",
      foto: "programadorcuatro.png"
    }
  ]);

  const [logueado, setLogueado] = useState(false);

  return (
    <div className="App">
      <Header />
      {!logueado ? (
  <LoginPages setLogueado={setLogueado} />
  ) : (
  <>

    <NosotrosPages integrantes={integrantes} />
    <HomePages integrantes={integrantes} setIntegrantes={setIntegrantes} />
    
    
  </>
  )}

      
      <Footer />
    </div>
  );
}

export default App;
