import blogFetch from "../axios/config"

import axios from "axios"
import { useState, useEffect } from "react"
import "./Cursos.css"
import { Link } from "react-router-dom"

function Cursos() {

  const[posts, setPosts] = useState([])

  const getPosts = async()=>{
    try {
      const response = await blogFetch.get('/api/v1/classes')
      const data = response.data.classes
      setPosts(data)
      console.log(data)

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=> {
    getPosts()
    
  },[])

  return (
    <div>
      <p></p>
      </div>
    // <div>
    //   <h1>Aulas Disponíveis</h1>
    //   {posts.length === 0 ? (<p>Nenhuma Aula disponível</p>): (
    //     posts.map((post)=>(
    //       <div className="post" key={post.id}>
    //       <h2>{post.title}</h2>
    //       <p>{post.body}</p>
    //       <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
    //       </div>
    //     ))
    //   )}
    // </div>
  )
}

export default Cursos