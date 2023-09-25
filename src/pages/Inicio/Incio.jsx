import React from "react";
import "./inicio.css";

export default function App() {
  return (
    <div className="container">
      <div className="logo">
        <div className="fotoLogo">
          <img src="logoProjeto.svg" alt="" height={90} />
        </div>
        <div className="textoLogo">lightweight</div>
      </div>
      <img src="eduardopng.png" alt="" className="edu" />
      <div className="botao"> 
      <button class="button-32" role="button">Login</button>
      </div>
    </div>
  );
}
