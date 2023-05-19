import blogFetch from "../axios/config"

import { useState, useEffect } from "react"


function NovaAula() {
    const [titulo, setTitulo] = useState()
    const [texto, setTexto] = useState()
    const [materias, setMaterias] = useState([])
    const [materia, setMateria] = useState()

    const criaAula = async (e) =>{
        e.preventDefault()
        const aula = {titulo, texto, materia}
        console.log(aula)
        await blogFetch.post("/api/v1/classes", {
            titulo: titulo, texto: texto, materia: materia,
        })
    }

    const getMaterias = async()=>{
        try {
            const response = await blogFetch.get("/materias")
            const data = response.data.subject
            
            setMaterias(data)
            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMaterias()
    },[])

  return (

        <div className='nova-aula'>
    <h2>inserir nova Aula:</h2>
    <form onSubmit={(e)=> criaAula(e)}>
      <div className="form-control">
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" placeholder='Digite o tìtulo' onChange={(e)=> setTitulo(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="texto">Conteúdo:</label>
        <textarea  id="texto" name="texto" placeholder='Digite o texto da aula' onChange={(e) => setTexto(e.target.value)}/>
      </div>
      <div className="form-control">
        <select name="materias" id="materias" onChange={(e)=> setMateria(e.target.value)}>
        {materias.map((m, index)=>(
            <option value={m} key={index}>{m}</option>
        ))}
        <option value="" disabled selected hidden>Selecione a Matéria</option>
        </select>
        
      </div>
      <input type="submit" value="Criar Aula" className='btn' />
    </form>
  </div>

  )
}

export default NovaAula