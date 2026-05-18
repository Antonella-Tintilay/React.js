import { useState } from 'react'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Contador from './components/Contador.jsx'
import './App.css'
import ContactForm from './components/ContactForm.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  return (
    <>
      <Header />
      <Contador/>
      <ContactForm/>
      <div className="contenedor-cards">
        <Card titulo="Heladera No Frost"
            descripcion="Capacidad 300L, eficiencia energética A, enfriamiento uniforme"
            imagen=""
            precio={1200000}>
            <button className="btn-comprar">Comprar ahora</button></Card>

        <Card 
          titulo="Lavarropas Automático"
          descripcion="Carga frontal, 7kg, centrifugado 1000rpm, 15 programas"
          imagen=""
          precio={500000}>
          <button className="btn-comprar">Comprar ahora</button></Card>

        <Card 
          titulo="Microondas Digital"
          descripcion="25 litros, 800W, panel táctil, 8 recetas automáticas"
          imagen=""
          precio={700000}>
          <button className="btn-comprar">Compra ahora</button></Card>

        <Card 
          titulo="Cafetera Expresso"
          descripcion="Máquina automática, vapor integrado, depósito 1.5L"
          imagen=""
          precio={150000}>
          <button className="btn-comprar">Comprar ahora</button></Card>

        <Card 
          titulo="Licuadora Profesional"
          descripcion="3 velocidades, 1.5L, cuchillas de acero inoxidable"
          imagen=""
          precio={100000}>
          <button className="btn-comprar">Compra ahora</button></Card>
      <ProductList/>

      </div>
      <Footer />
    </>
  )
}
export default App;
