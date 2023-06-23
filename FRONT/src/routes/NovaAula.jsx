import blogFetch from "../axios/config"

import './NovaAula.css'

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import seta from "../assets/seta-branca.png"

import Popup from "../components/Popup"

function NovaAula() {
  const [titulo, setTitulo] = useState()
  const [texto, setTexto] = useState()
  const [materias, setMaterias] = useState([])
  const [materia, setMateria] = useState()
  const [Gpopup, setGpopup] = useState(false)

  const criaAula = async (e) => {
    e.preventDefault()
    const aula = { titulo, texto, materia }
    await blogFetch.post("/api/v1/classes", {
      titulo: titulo, texto: texto, materia: materia,
    }).then(()=>{/*setGpopup(true)*/window.alert("Aula criada com sucesso")}, ()=>{window.alert("Algum erro ocorreu verifique os campos")})

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

  useEffect(() => {
    getMaterias()
  }, [])

  return (

    <div className='nova-aula'>
      <h2>Inserir uma nova aula:</h2>
      <div>
      <Link to={`/adminaulas`}><img src={seta} alt="seta" className="seta-icon"/></Link>
      </div>
      <form onSubmit={(e) => criaAula(e)}>
        <div className="form-control">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" placeholder='Digite o tìtulo' onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="texto">Conteúdo:</label>
          <textarea id="texto" name="texto" className="textarea" placeholder='Digite o texto da aula' onChange={(e) => setTexto(e.target.value)} />
        </div>
        <div className="form-control">
          <select name="materias" id="materias" onChange={(e) => setMateria(e.target.value)}>
            {materias.map((m, index) => (
              <option value={m} key={index}>{m}</option>
            ))}
            <option value="" disabled selected hidden>Selecione a Matéria</option>
          </select>

        </div>
        <input type="submit" value="Criar Aula" className='btn2' />
      </form>
      <Popup trigger={Gpopup} setTrigger={setGpopup}>
        <img src="https://www.favertaxis.com/img/check.gif" alt="gif" className="gGif" />
        <h2>Aula criada !</h2>
      </Popup>
    </div>

  )
}

export default NovaAula