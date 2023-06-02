import React from 'react';
import MeuSvg from '../assets/home.svg';
import foto1 from '../assets/foto1.svg';
import foto2 from '../assets/foto2.svg';
import foto3 from '../assets/foto3.svg';
import foto4 from '../assets/foto4.svg';
import foto5 from '../assets/foto5.svg';

import "./Home.css"

function Home() {
  const participantes = [
    { id: 1, nome: 'Guilherme Segura', foto: foto1 },
    { id: 2, nome: 'Wallace Lins', foto: foto2 },
    { id: 3, nome: 'André Calmon', foto: foto3 },
    { id: 4, nome: 'Phellip Waki', foto: foto4 },
    { id: 5, nome: 'Raphael Câmara', foto: foto5 },
  ];

  return (
    <div>
      <div className="container">

        <p className="texto"> Aulas online <br/> para rever  <br/> ou recuperar! </p>

        <img src={MeuSvg} alt="Meu SVG" className="imagem" />

      </div>

      <div className="participantes">
        <h1 className="titulo3">Participantes do Projeto</h1>
        <div className="participantes-grid">
          {participantes.map((participante) => (
            <div key={participante.id} className="participante">
              <img src={participante.foto} alt={participante.nome} />
              <h2 className="nome">{participante.nome}</h2>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p className="copy_right">
          <span>Ajudatec</span> &copy; 2023
        </p>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
