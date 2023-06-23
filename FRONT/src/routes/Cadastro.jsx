import React, { useState } from "react";
import { Link } from "react-router-dom";
import seta from "../assets/seta-branca.png";

// import './Cadastro.css'

function Cadastro() {
  const [nome, setNome] = useState(""); // Campo para inserir o nome do usuário
  const [email, setEmail] = useState(""); // Campo para inserir o email do usuário
  const [senha, setSenha] = useState(""); // Campo para inserir a senha do usuário

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica de cadastro

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);

    // Limpar os campos após o submit
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <div className="cadastro-container">
      <Link to="/login">
        <img src={seta} alt="icone de seta" className="seta-icon" />
      </Link>

      <h1 className="titulo2">Página de cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome" className="label">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
            className="input"
          />
        </div>
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
          <label htmlFor="senha" className="label">
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
            className="input"
          />
        </div>
        <button type="submit" className="button2">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
