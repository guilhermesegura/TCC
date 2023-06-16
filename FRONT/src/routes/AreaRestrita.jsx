import React from 'react'
import {IoMdPeople} from "react-icons/io";
import {IoIosPerson} from "react-icons/io";
import {IoIosCopy} from "react-icons/io";
import { IoMdExit} from "react-icons/io";
import { ImFileText2 } from "react-icons/im";

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogFetch from '../axios/config';

import "./AreaRestrita.css"

function AreaRestrita() {
    const [User, setUser] = useState({})
    const {id} = useParams()

    const getUser = async(id)=>{
        const response = await blogFetch.get(`/api/users/${id}`)
        const data = response.data.user
        setUser(data) 
     }

    useEffect(()=>{ 
        getUser(id)
    }, [])
    
  return (
    <div className='materias'>
        <div className='materia'>
            <IoIosPerson size="large" className='icon'/>
            <Link className="btn-materia" to={`/editausuario/${User._id}`}>
                <span>Perfil</span>
            </Link>
        </div>
        <div className='materia'>
            <ImFileText2 size="large" className='icon'/>
            <Link className='btn-materia' to={"/cursos"}>
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
            <button className="btn-materia" onClick={()=>{/*rota pra excluir o token e navigate para voltar para a Home*/}}>
                <span>Sair</span>
            </button>
        </div>
    </div>
  )
}
  


export default AreaRestrita