import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Exer1 from './pages/Exer1'
import Exer2 from './pages/Exer2'

function App() {
  return (
    <>
    <Header/>

    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/Exer1" element={<Exer1 />} />
      <Route path="/Exer2" element={<Exer2 />} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App
