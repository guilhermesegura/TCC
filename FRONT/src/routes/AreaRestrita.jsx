import React from 'react'
import {IoMdPeople} from "react-icons/io";
import {IoIosPerson} from "react-icons/io";
import {IoIosCopy} from "react-icons/io";
import { IoMdExit} from "react-icons/io";
import { ImFileText2 } from "react-icons/im";

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import blogFetch from '../axios/config';

import "./AreaRestrita.css"

function AreaRestrita(props) {
    const [User, setUser] = useState({})
    useEffect(()=>{ 
    }, [])
    
  return (
    <div className='materias'>
        <div className='materia'>
            <IoIosPerson size="large" className='icon'/>
            <Link className="btn-materia" to={`/editausuario/${User.id}`}>
                <span>Perfil</span>
            </Link>
        </div>
        <div className='materia'>
            <ImFileText2 size="large" className='icon'/>
            <Link className='btn-materia' to={"/cursos"}>
                <span>Conteúdo</span>
            </Link>
        </div>
        {User.role === 'admin' &&
            <div className='materia'>
            <IoMdPeople size="large" className='icon'/>
                <Link className="btn-materia" to={"/adminusuarios"}>
                    <span className='texto-materia'>Gerenciar usuários</span>
                </Link>
            </div>
        }
        {User.role === "admin" && 
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