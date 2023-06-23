import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import blogFetch from "../axios/config"

import "./Aula.css"

import seta from "../assets/seta-branca.png"

function Aula() {
    const {id} = useParams()

    const [post, setPost] = useState({})
    const [paragrafo, setParagrafo] = useState([])

    const getPost = async(id) =>{
        try {

            const response = await blogFetch.get(`/api/v1/classes/${id}`)
            const data = response.data.singleclass
            setPost(data)

            const paragrafos = data.texto.split("\n")
            setParagrafo(paragrafos)
            

        } catch (error) {
            console.log(error)
        }
    }

    

    useEffect(()=>{
        getPost(id)
    }, [])
  return (
    <div>
        <div>
            <Link to={`/aulas/${post.materia}`}><img src={seta} alt="seta" className="seta-icon"/></Link>
        </div>
        <div>
            <h1 className="titulo-aula">{post.titulo}</h1>
        </div>
        <div className="container-aula">
            {paragrafo.map((p, index)=>(
                <p key={index} className="texto-aula">{p}</p>
            ))}
        </div>
    </div>
  )
}

export default Aula