import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica de autenticação
    // Aqui você pode fazer a validação do email e senha
    // ou enviar os dados para o servidor

    console.log("Email:", email);
    console.log("Password:", password);

    // Limpar os campos após o submit
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h1 className="titulo">Página de login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
        </div>
        <Link to="/login" className="button1">
          Entrar
        </Link>
        <Link to="/cadastro" className="button1">
          Registrar
        </Link>
      </form>
    </div>
  );
}

export default Login;
