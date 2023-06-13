import { Outlet } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    
      <div className='App'>
        <Navbar/>
        <div className="container2">
          <Outlet/>
        </div>
        <Footer/>
      </div>
      
  )
}

export default App
