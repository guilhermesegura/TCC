import blogFetch from "../axios/config"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import parseDate from "../components/parseDate"
import "./AdminAulas.css"

function AdminAulas() {

    const [classes, setClasses] = useState([])
    
    const getClasses = async()=>{
        try{
            const response = await blogFetch.get("/api/v1/classes")
            const data = response.data.classes
            setClasses(data)
            
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getClasses()
    },[])

    const handleDelete = async(id)=>{
        try {
            
        setClasses(classes.filter((c)=> c._id !== id))
        await blogFetch.delete(`/api/v1/classes/${id}`)
        }
        catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1 className="titulo">Tabela de Aulas</h1>
        <div className="container-tabela">
            {classes.length === 0 ? (<p>Nenhuma aula disponível</p>): (
                <table className="styled-table">
                <thead>
                    <tr>
                        <th>
                            Título
                        </th>
                        <th>
                            Matéria
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
                    {classes.map((c)=>(
                        <tr key={c._id}>
                            <td className="dado-tabela">
                                {c.titulo}
                            </td>
                            <td>
                                {c.materia}
                            </td>
                            <td>
                                {parseDate(c.data)}
                            </td>
                            <td>
                                Editar
                            </td>
                            <td>
                                <button onClick={()=>{handleDelete(c._id)}} className="btn">Apagar</button>
                            </td>
                        </tr>
                    ))}
                               
                </tbody>
            </table>
            )}
            
        </div>
    </div>
  )
}

export default AdminAulas