import React from "react";
import "./Login.css";
import InputForm from "./InputForm";

const myList = [
  {
    id: 1,
    name: "Correo",
    type: "text",
  },
  {
    id: 2,
    name: "Contraseña",
    type: "password",
  },
];

export const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <i class="fa fa-twitter fa-3x"></i>
          <h1>Iniciar sesión en Twitter</h1>
        </div>
        <div className="card">
          {myList.map((card) => (
            <div key={card.id}>
              <InputForm name={card.name} type={card.type}></InputForm>
            </div>
          ))}

          <div class="form-group-btn">
            <span class="span-btn">Iniciar sesión</span>
          </div>

          <div className="form-links">
            <a href="https://twitter.com/account/begin_password_reset" class="">
              <span class="">¿Olvidaste tu contraseña?</span>
            </a>
            <span aria-hidden="true" class="">
              <span class="">·</span>
            </span>
            <a href="/i/flow/signup" role="link" class="">
              <span class="">Regístrate en Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
