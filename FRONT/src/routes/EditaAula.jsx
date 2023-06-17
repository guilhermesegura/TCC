import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import {useNavigate, useParams, Link} from "react-router-dom"

import seta from "../assets/seta-branca.svg"

import "./EditaAula.css"

function EditaAula() {
    const {id} = useParams()
    const [Class, setClass] = useState({})
    const [titulo, setTitulo] = useState()
    const [texto, setTexto] = useState()
    const [materia, setMateria] = useState()
    const [materias, setMaterias] = useState([])
    const navigate = useNavigate()

    const getAula = async(id)=>{
       const response = await blogFetch.get(`/api/v1/classes/${id}`)
       const data = response.data.singleclass
       setClass(data) 
    }

    const editaAula = async (e)=>{
        e.preventDefault()
        await blogFetch.patch(`/api/v1/classes/${id}`, {
            titulo: titulo, texto: texto, materia: materia,
          }).then(()=>{window.alert("Aula editada com sucesso"); navigate("/adminaulas")}, ()=>{window.alert("Algum erro ocorreu verifique os campos")})
          
    }

    const getMaterias = async () => {
        try {
          const response = await blogFetch.get("/materias")
          const data = response.data.subject
          
          setMaterias(data.filter(materia => materia !== Class.materia))
    
    
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
          getAula(id)
          getMaterias()
      }, [Class.materia])

  return (
    <div className='nova-aula'>
      <div>
      <Link to={`/adminaulas`} ><img src={seta} alt="icone de seta" className="seta-icon"/></Link>
      </div>
      <h2>Editando Aula:</h2>
      <form onSubmit={(e) => editaAula(e)}>
        <div className="form-control">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" placeholder='Digite o tìtulo' defaultValue={Class.titulo}  onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="texto">Conteúdo:</label>
          <textarea id="texto" name="texto" className="textarea-edit" placeholder='Digite o texto da aula' defaultValue={Class.texto} onChange={(e) => setTexto(e.target.value)} />
        </div>
        <div className="form-control">
          <select name="materias" id="materias" onChange={(e) => setMateria(e.target.value)}>
            {materias.map((m, index) => (
              <option value={m} key={index}>{m}</option>
            ))}
            <option value={Class.materia} selected>{Class.materia}</option>
          </select>

        </div>
        <input type="submit" value="Editar Aula" className='btn2-edita' />
      </form>
      <div className="espaço"></div>
    </div>

  )
}

export default EditaAula