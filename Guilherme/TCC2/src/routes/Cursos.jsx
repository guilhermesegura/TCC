import blogFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./Cursos.css"

function Cursos() {

  const[posts, setPosts] = useState([])
  const[materias, setMaterias] = useState([])

  const getPosts = async()=>{
    try {
      const response = await blogFetch.get('/api/v1/classes')
      const data = response.data.classes
      setPosts(data)

      
      
      

    } catch (e) {
      console.log(e)
    }
  }
  const getMaterias = async () => {
    try {
      const response = await blogFetch.get("/materias")
      const data = response.data.subject

      setMaterias(data)


    } catch (error) {
      console.log(error)
    }
  }

  const parseDate = (date) => {
    let dia = new Date (date)
    var options = {year: 'numeric', month: 'long', day: 'numeric' }
    return dia.toLocaleDateString("pt-BR", options)
  }

  useEffect(()=> {
    getPosts()
    getMaterias()
    
  },[])

  return (
    
    <div>
      <h1 className="titulo-materia">Matérias Disponíveis</h1>
      <div className="materias">
      {materias.length === 0 ? (<p>Nenhuma Matéria disponível</p>): (
        materias.map((materia, index)=>(
          <div className="materia" key={index}>
          <h2 className="materia-nome">{materia}</h2>
          <Link to={`/aulas/${materia}`} className="btn-materia">Ver mais</Link>
          </div>
        ))
      )}
      </div>
    </div>
  )
}

export default Cursos