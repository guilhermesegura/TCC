import blogFetch from "../axios/config"

import './NovaAula.css'

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import seta from "../assets/seta-branca.png"


function NovoUser() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [roles, setRoles] = useState([])
  const [permissao, setPermissao] = useState()

  const criaAula = async (e) => {
    e.preventDefault()
    
    await blogFetch.post("/api/register", {
      username: username, email: email, password: password, roles: permissao,
    }).then(()=>{window.alert("Usuário criado com sucesso")}, ()=>{window.alert(`Algum erro ocorreu verifique os campos`)})
      
 
  }

  const getRoles = async () => {
    try {
      const response = await blogFetch.get("/roles")
      const data = response.data.roles

      setRoles(data)


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRoles()
  }, [])

  return (

    <div className='nova-aula'>
      <h2>Inserir novo usuário:</h2>
      <div>
      <Link to={`/adminusuarios`}><img src={seta} alt="seta" className="seta-icon"/></Link>
      </div>
      <form onSubmit={(e) => criaAula(e)}>
      <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Digite o Nome do usuário' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder='Digite o E-mail' onChange={(e) => setEmail(e.target.value)} />
         
        </div>
        <div className="form-control">
          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" name="password" placeholder='Digite a Senha' onChange={(e) => setPassword(e.target.value)} />
          
        </div>
        <div className="form-control">
          <select name="Roles" id="Roles" onChange={(e) => setPermissao(e.target.value)}>
            {roles.map((m, index) => (
              <option value={m} key={index}>{m}</option>
            ))}
            <option value="" disabled selected hidden>Selecione a Permissão</option>
          </select>

  

        </div>
        <input type="submit" value="Criar Usuário" className='btn2' />
      </form>
    </div>

  )
}

export default NovoUser