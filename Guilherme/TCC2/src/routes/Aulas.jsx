import blogFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import seta from "../assets/seta-branca.svg"

import "./Aulas.css"

function Aulas() {
    const [posts, setPosts] = useState([])
    const {materia} = useParams()

    const getPosts = async()=>{
        try {
          const response = await blogFetch.get(`/api/v1/classes?materia=${materia}`)
          const data = response.data.classes
          setPosts(data)
        } catch (e) {
          console.log(e)
        }
      }

      const parseDate = (date) => {
        let dia = new Date (date)
        var options = {year: 'numeric', month: 'long', day: 'numeric' }
        return dia.toLocaleDateString("pt-BR", options)
      }

      useEffect(()=>{
        getPosts()
      })

  return (
    <div>
        <Link to={"/cursos"} ><img src={seta} alt="icone de seta" className="seta-icon"/></Link>
      <h1 className="titulo">Aulas Disponíveis</h1>
      <div className="posts">
      {posts.length === 0 ? (<p className="sem-aula" >Nenhuma Aula disponível</p>): (
        posts.map((post)=>(
          <div className="post" key={post._id}>
          <h2>{post.titulo}</h2>
          <p>{parseDate(post.data)}</p>
          <Link to={`/posts/${post._id}`} className="btn">Ver mais</Link>
          </div>
        ))
      )}
      </div>
    </div>
  )
}

export default Aulas