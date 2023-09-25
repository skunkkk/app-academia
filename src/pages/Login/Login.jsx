import React from "react";
import "./Login.css";

export default function () {
  return (
    <div className="container-login">
      <div className="logo">
        <div className="fotoLogo">
          <img src="logoProjeto.svg" alt="" height={90} />
        </div>
        <div className="textoLogo">lightweight</div>
      </div>
      <h1>Cadastre-se</h1>
      <div className="box-login">
        <form>
          <p>
            <input type="text" className="input" />
          </p>
          <p>
            <input type="text" className="input" />
          </p>
          <p>
            <input type="text" className="input" />
          </p>
        </form>
      </div>
    </div>
  );
}
