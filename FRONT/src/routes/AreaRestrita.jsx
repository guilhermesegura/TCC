import React from 'react'
import {IoMdPeople} from "react-icons/io";
import {IoIosPerson} from "react-icons/io";
import {IoIosCopy} from "react-icons/io";
import { IoMdExit} from "react-icons/io";
import { ImFileText2 } from "react-icons/im";

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogFetch from '../axios/config';

import "./AreaRestrita.css"

function AreaRestrita() {
    const [User, setUser] = useState({})
    const navigate = useNavigate()
    const id = sessionStorage.getItem("id")
    // const access_token = sessionStorage.getItem("access-token")
    const refresh_token = sessionStorage.getItem("refresh-token")

    const getUser = async(id)=>{
        const response = await blogFetch.get(`/api/users/${id}`)
        const data = response.data.user
        setUser(data) 
     }

    const handleLogout = async()=>{
        await blogFetch.delete("/api/refreshToken/", {data: {refreshToken: refresh_token}})
        .then(()=>{sessionStorage.clear();window.alert("Logout realizado com sucesso");navigate("/")}, ()=>{window.alert("Ocorreu algum erro no servidor contate o suporte")})
    }

    useEffect(()=>{ 
        getUser(id)

    }, [])
    
  return (
    <div className='materias'>
        <div className='materia'>
            <IoIosPerson size="large" className='icon'/>
            <Link className="btn-materia" to={`/editausuario/${User._id}`} state={"arearestrita"}>
                <span>Perfil</span>
            </Link>
        </div>
        <div className='materia'>
            <ImFileText2 size="large" className='icon'/>
            <Link className='btn-materia' to={`/cursos`}>
                <span>Conteúdo</span>
            </Link>
        </div>
        {User.roles === 'ADMIN' &&
            <div className='materia'>
            <IoMdPeople size="large" className='icon'/>
                <Link className="btn-materia" to={"/adminusuarios"}>
                    <span className='texto-materia'>Gerenciar usuários</span>
                </Link>
            </div>
        }
        {User.roles === "ADMIN" && 
        <div className='materia'>
        <IoIosCopy size="large" className='icon'/>
            <Link className="btn-materia" to={"/adminaulas"}>
                <span className='texto-materia'>Gerenciar Aulas</span>
            </Link>
        </div>}
            
            
        
        <div className='materia'>
            <IoMdExit size="large" className='icon'/>
            <button className="btn-materia" onClick={()=>handleLogout()}>
                <span>Sair</span>
            </button>
        </div>
    </div>
  )
}
  


export default AreaRestrita