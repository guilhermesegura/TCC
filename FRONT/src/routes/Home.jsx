import React from "react";
import home from "../assets/home.png";
import home2 from "../assets/home2.png";
import foto1 from "../assets/foto1.svg";
import foto2 from "../assets/foto2.svg";
import foto3 from "../assets/foto3.svg";
import foto4 from "../assets/foto4.svg";
import foto5 from "../assets/foto5.svg";

import "./Home.css";

function Home() {
  const participantes = [
    { id: 1, nome: "Guilherme Segura", foto: foto1 },
    { id: 2, nome: "Wallace Lins", foto: foto2 },
    { id: 3, nome: "André Calmon", foto: foto3 },
    { id: 4, nome: "Phellip Waki", foto: foto4 },
    { id: 5, nome: "Raphael Câmara", foto: foto5 },
  ];

  participantes.sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div className="conteudo">
      <div className="container">
        <h1 className="texto">
          Aulas online <br />
          para rever e <br />
          recuperar!
        </h1>
        <img src={home} alt="Meu SVG" className="imagem1" />

        <img src={home2} alt="Meu SVG" className="imagem2" />
        <div className="texto-container">
          <h3 className="aprendizado">Aprendizado inteligente</h3>
          <p className="aprendizado-texto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="participantes">
        <h1 className="titulo3">Sobre nós</h1>
        <div className="participantes-grid">
          {participantes.map((participante) => (
            <div key={participante.id} className="participante">
              <img src={participante.foto} alt={participante.nome} />
              <h2 className="nome">{participante.nome}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
