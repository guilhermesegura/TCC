import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import {useNavigate, useParams} from "react-router-dom"

import "./EditaAula.css"

function EditaUser() {
    const {id} = useParams()
    const [User, setUser] = useState({})
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [permissao, setPermissao] = useState()
    const [roles, setRoles] = useState([])
    const navigate = useNavigate()

    const getUser = async(id)=>{
       const response = await blogFetch.get(`/api/v1/users/${id}`)
       const data = response.data.user
       setUser(data) 
    }

    const editaUser = async (e)=>{
        e.preventDefault()
        await blogFetch.patch(`/api/v1/users/${id}`, {
            email: email, password: password, permissao: permissao,
          }).then(()=>{window.alert("Usuário editado com sucesso"); navigate("/adminusuarios")}, ()=>{window.alert("Algum erro ocorreu verifique os campos")})
          
    }

    const getRoles = async () => {
        try {
          const response = await blogFetch.get("/roles")
          const data = response.data.roles
          
          setRoles(data.filter(roles => roles !== User.permissao))
    
    
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
          getUser(id)
          getRoles()
      }, [User.permissao])

  return (
    <div className='nova-aula'>
      <h2>Editando Usuário:</h2>
      <form onSubmit={(e) => editaUser(e)}>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder='Digite o E-mail' defaultValue={User.email}  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" name="password" placeholder='Digite a Senha' defaultValue={User.password}  onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-control">
          <select name="permissao" id="permissao" onChange={(e) => setPermissao(e.target.value)}>
            {roles.map((m, index) => (
              <option value={m} key={index}>{m}</option>
            ))}
            <option value={User.permissao} selected>{User.permissao}</option>
          </select>

        </div>
        <input type="submit" value="Editar Usuario" className='btn2-edita' />
      </form>
      <div className="espaço"></div>
    </div>

  )
}

export default EditaUser