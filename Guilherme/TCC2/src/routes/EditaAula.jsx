import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import {useNavigate, useParams} from "react-router-dom"

function EditaAula() {
    const {id} = useParams()
    const {Class, setClass} = useState({})

    const getAula = (id)=>{
       const response = blogFetch.get(`/api/v1/classes/${id}`)
       const data = response.data.singleclass
       setClass(data) 
    }

  return (
    <div className='nova-aula'>
      <h2>Editando Aula:</h2>
      <form onSubmit={(e) => criaAula(e)}>
        <div className="form-control">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" placeholder='Digite o tìtulo' value={Class.titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="texto">Conteúdo:</label>
          <textarea id="texto" name="texto" className="textarea" placeholder='Digite o texto da aula' value={Class.texto} onChange={(e) => setTexto(e.target.value)} />
        </div>
        <div className="form-control">
          <select name="materias" id="materias" onChange={(e) => setMateria(e.target.value)}>
            {materias.map((m, index) => (
              <option value={m} key={index}>{m}</option>
            ))}
            <option value={Class.materia} selected></option>
          </select>

        </div>
        <input type="submit" value="Editar Aula" className='btn2' />
      </form>
    </div>

  )
}

export default EditaAula