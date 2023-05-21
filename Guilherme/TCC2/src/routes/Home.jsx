import React from 'react'
import MeuSvg from '../assets/home.svg'

import "./Home.css"

function Home() {
  return (
    <div  className="container">

      <p className="texto"> Aulas online <br/> para rever  <br/> ou recuperar! </p>

      <img src={MeuSvg} alt="Meu SVG" className="imagem" />

    </div>
  )
}

export default Home