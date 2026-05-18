import { useState } from 'react'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Card titulo="Celulares" descripcion="Gama alta" />
      <Card titulo="Muebles" descripcion="Todo tipo" />
      <Card titulo="Electrodomésticos" descripcion="Mejor calidad y precio" />
      <Footer/>
    </>
  )
}

export default App
