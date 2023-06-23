import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import {useNavigate, useParams} from "react-router-dom"
import { Link, useLocation } from "react-router-dom"

import seta from "../assets/seta-branca.png"


import "./EditaAula.css"

function EditaUser() {
    const {id} = useParams()
    const {state} = useLocation()
    const [User, setUser] = useState({})
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()
    const [permissao, setPermissao] = useState([])
    const navigate = useNavigate()

    const getUser = async(id)=>{
       const response = await blogFetch.get(`/api/users/${id}`)
       const data = response.data.user
       setUser(data) 
    }

    const editaUser = async (e)=>{
        e.preventDefault()
        await blogFetch.patch(`/api/users/${id}`, {
            username: username, email: email, password: password, roles: role,
          }).then(()=>{window.alert("Usuário editado com sucesso"); navigate(`/${state}`)}, ()=>{window.alert("Algum erro ocorreu verifique os campos")})
          
    }

    const getRoles = async () => {
        try {
          const response = await blogFetch.get("/roles")
          const data = response.data.roles
          
          setPermissao(data.filter(roles => roles !== User.roles))
          
          
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
          getUser(id)
          getRoles()
      }, [User.roles])

  return (
    <div className='nova-aula'>
      <div>
      <Link to={`/${state}`} ><img src={seta} alt="icone de seta" className="seta-icon"/></Link>
      </div>
      <h2>Editando Usuário:</h2>
      <form onSubmit={(e) => editaUser(e)}>
      <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Digite o nome do usuário' defaultValue={User.username}  onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder='Digite o E-mail' defaultValue={User.email}  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" name="password" placeholder='Digite a Senha' defaultValue={User.password}  onChange={(e) => setPassword(e.target.value)} />
        </div>
        
      
          {state === "arearestrita"? (""): (
          <div className="form-control">
          <label htmlFor="roles">Permissão:</label>
          <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
            {permissao.map((m, index) => (
              <option value={m} key={index}>{m}</option>
            ))}
            <option value={User.roles} selected>{User.roles}</option>
          </select> 
          </div>
          ) }
        
        <input type="submit" value="Editar Usuario" className='btn2-edita' />
      </form>
      <div className="espaço"></div>
    </div>

  )
}

export default EditaUser