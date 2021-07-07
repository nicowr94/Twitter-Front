import React, { useState } from "react";
import "../css/Login.css";
import InputForm from "../InputForm";

const listaInputs = [
  {
    id: 1,
    name: "username",
    text: "Teléfono, correo o usuario",
    type: "text",
    autofocus:"autoFocus"
  },
  {
    id: 2,
    name: "password",
    text: "Contraseña",
    type: "password",
    autofocus:""
  },
];

export const Login = () => {
  // const [user, setUser] = useState({ name: "", pass: "" });
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msgError, setMsgError] = useState(false);

  const handleChange = (e, name) => {
    console.log(name);
    if (name === "username") setName(e);
    else setPass(e);
  };

  const iniciarSesion = async () => {
    // const data = { email: name, password: pass };
    const data = {
      email: name,
      password: pass,
    };

    const response = await fetch(`http://localhost:4000/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok === true) window.location.href = "https://www.google.com/";
    else setMsgError(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <i className="fa fa-twitter fa-3x"></i>
          <h1>Iniciar sesión en Twitter</h1>
        </div>

        <div className="card">
          <p
            className={msgError ? "msg_error_visible" : "msg_error_nv"}
            display="none"
          >
            El nombre de usuario y la contraseña que ingresaste no coinciden con
            nuestros registros. Por favor, revisa e inténtalo de nuevo.
          </p>

          {listaInputs.map((element) => (
            <div key={element.id}>
              <InputForm
                text={element.text}
                type={element.type}
                name={element.name}
                autofocus={element.autofocus}
                callback={(e, name) => handleChange(e, name)}
              ></InputForm>
            </div>
          ))}

          <div className="form-group-btn" onClick={iniciarSesion}>
            <span className="span-btn">Iniciar sesión</span>
          </div>

          <div className="form-links">
            <a href="https://twitter.com/account/begin_password_reset">
              <span>¿Olvidaste tu contraseña?</span>
            </a>
            <span aria-hidden="true">
              <span>·</span>
            </span>
            <a href="https://twitter.com/account/begin_password_reset">
              <span>Regístrate en Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
