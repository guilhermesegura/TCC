import React from 'react';
import './Sobre.css';
import foto1 from '../assets/foto1.svg';
import foto2 from '../assets/foto2.svg';
import foto3 from '../assets/foto3.svg';
import foto4 from '../assets/foto4.svg';
import foto5 from '../assets/foto5.svg';

function Sobre() {
  const participantes = [
    { id: 1, nome: 'Guilherme Segura', foto: foto1 },
    { id: 2, nome: 'Wallace Lins', foto: foto2 },
    { id: 3, nome: 'André Calmon', foto: foto3 },
    { id: 4, nome: 'Phellip Waki', foto: foto4 },
    { id: 5, nome: 'Raphael Câmara', foto: foto5 },
  ];

  return (
    <div>
      <h1 className="titulo">Participantes do Projeto</h1>
      <div className="participantes">
        {participantes.map((participante) => (
          <div key={participante.id} className="participante">
            <img src={participante.foto} alt={participante.nome} />
            <h2 className="nome">{participante.nome}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;