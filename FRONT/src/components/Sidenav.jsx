import React from 'react'
import {GrMoreVertical} from "react-icons/gr"
import {GrUserAdd} from "react-icons/gr";
import {GrUser} from "react-icons/gr";
import {GrDocumentText} from "react-icons/gr";
import { IoMdExit} from "react-icons/io";

import styles from "./sidenav.module.css"
import { Link } from 'react-router-dom';
import blogFetch from '../axios/config';


function Sidenav(props) {
  return (
    <div>
        <button className={styles.menuBtn}>
        <GrMoreVertical/>
        </button>
        <Link className={styles.sideitem} to={`/editausuario/${props.id}`}>
            <GrUser/>
            <span className={styles.linkText}>Conta</span>
        </Link>
        {props.role === 'admin' &&
        <div>
            <Link className={styles.sideitem} to={"/adminusuarios"}>
                <GrUserAdd/>
                <span className={styles.linkText}>Gerenciar usuários</span>
            </Link>
            <Link className={styles.sideitem} to={"/adminaulas"}>
                <GrDocumentText/>
                <span className={styles.linkText}>Gerenciar Aulas</span>
            </Link>
        </div>}
        <button className={styles.sideitem} onClick={()=>{/*rota pra excluir o token e navigate para voltar para a Home*/}}>
            <IoMdExit/>
            <span>Sair</span>
        </button>
    </div>
  )
}

export default Sidenav