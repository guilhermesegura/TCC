import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

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
    })


  return (
    <div>
        <h1 className="titulo">Tabela de Aulas</h1>
        <div>
            {classes.length === 0 ? (<p>Nenhuma aula disponível</p>): (
                <table>
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
                                {c.data}
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