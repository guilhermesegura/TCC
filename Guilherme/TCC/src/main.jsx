import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Login.jsx'
import Cursos from './routes/Cursos.jsx'

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
      path:"/cursos",
      element: <Cursos/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
