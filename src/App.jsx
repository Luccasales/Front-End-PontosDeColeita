import React from 'react'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  './App.css'

//pages
import Home from './pages/home/Home'
import Estoque from './pages/estoque/Estoque'
import Doacoes from './pages/doacoes/doacoes'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/doacoes" element = {<Doacoes />} />
          <Route path="/estoque" element = {<Estoque />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App