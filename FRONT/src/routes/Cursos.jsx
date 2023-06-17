import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import "./Cursos.css";

import seta from "../assets/seta-branca.svg"

function Cursos() {
  const [materias, setMaterias] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id")

  const getMaterias = async () => {
    try {
      const response = await blogFetch.get("/materias");
      const data = response.data.subject;

      setMaterias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaterias();
    
  }, []);

  return (
    <div>
      <div>
      <Link to={`/arearestrita/${id}`} ><img src={seta} alt="icone de seta" className="seta-icon"/></Link>
      </div>
    <div className="cursos">
      <h1 className="titulo-materia">Matérias Disponíveis</h1>
      <div className="materias">
        {materias.length === 0 ? (
          <p>Nenhuma Matéria disponível</p>
        ) : (
          materias.map((materia, index) => (
            <div className="materia" key={index}>
              <h2 className="materia-nome">{materia}</h2>
              <Link to={`/aulas/${materia}`} className="btn-materia">
                Ver mais
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}

export default Cursos;
