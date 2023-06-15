import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

import Home from './routes/Home.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Login/Login'
import Cursos from './routes/Cursos.jsx'
import NovaAula from './routes/NovaAula.jsx'
import Aulas from './routes/Aulas.jsx'
import AdminAulas from './routes/AdminAulas.jsx'
import Aula from './routes/Aula.jsx'
import EditaAula from './routes/EditaAula.jsx'
import AdminUser from './routes/AdminUser.jsx'
import NovoUser from './routes/NovoUser.jsx'
import EditaUser from './routes/EditaUser.jsx'

const router = createBrowserRouter([{
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/sobre",
      element: <Sobre/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/cadastro",
      element: <Cadastro/>,
    },
    {
      path:"/cursos",
      element: <Cursos/>,
    },
    {
      path:"/novaaula",
      element: <NovaAula/>,
    },
    {
      path:"/aulas/:materia",
      element: <Aulas/>
    },
    {
      path:"/adminaulas",
      element: <AdminAulas/>
    },
    {
      path:"/aula/:id",
      element: <Aula/>
    },
    {
      path:"/editaaula/:id",
      element:<EditaAula/>
    },
    {
      path:"/adminusuarios",
      element:<AdminUser/>
    },
    {
      path:"/novousuario",
      element:<NovoUser/>
    },
    {
      path:"/editausuario/:id",
      element:<EditaUser/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
