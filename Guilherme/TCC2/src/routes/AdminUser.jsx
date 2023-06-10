import blogFetch from "../axios/config"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import parseDate from "../components/parseDate"
import "./AdminAulas.css"

function AdminUser() {

    const [users, setUsers] = useState([])
    
    const getUsers = async()=>{
        try{
            const response = await blogFetch.get("/api/v1/users")
            const data = response.data.users
            setUsers(data)
            
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    const handleDelete = async(id)=>{
        try {
            
        setUsers(users.filter((c)=> c._id !== id))
        await blogFetch.delete(`/api/v1/users/${id}`)
        }
        catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <div>
            <h1 className="titulo">Tabela de Usuários</h1>
        </div>
        <div className="container-tudo">
        <div className="container-botao">
            <Link to={"/novousuario"} className="btn-nova">Novo Usuário</Link>
        </div>
        <div className="container-tabela">
            {users.length === 0 ? (<p>Nenhum Usuário disponível</p>): (
                <table className="styled-table">
                <thead>
                    <tr>
                        <th>
                            E-mail
                        </th>
                        <th>
                            Permissão
                        </th>
                        <th>
                            Data
                        </th>
                        <th>
                            Editar
                        </th>
                        <th>
                            Apagar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((c)=>(
                        <tr key={c._id}>
                            <td className="dado-tabela">
                                {c.email}
                            </td>
                            <td>
                                {c.permissao}
                            </td>
                            <td>
                                {parseDate(c.data)}
                            </td>
                            <td>
                                <Link to={`/editausuario/${c._id}`} className="link-editar">Editar</Link>
                            </td>
                            <td>
                                <button onClick={()=>{handleDelete(c._id)}} className="btn-apagar">Apagar</button>
                            </td>
                        </tr>
                    ))}
                               
                </tbody>
            </table>
            )}
            
        </div>
        </div>
    </div>
  )
}

export default AdminUser