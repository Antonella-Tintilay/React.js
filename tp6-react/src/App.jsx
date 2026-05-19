import { useState } from 'react'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Contador from './components/Contador.jsx'
import './App.css'
import ContactForm from './components/ContactForm.jsx'
import ProductList from './components/ProductList.jsx'
import TodoApp from './components/TodoApp.jsx'

function App() {
  return (
    <>
      <Header />
      <Contador/>
      <ContactForm/>
      <div className="contenedor-cards">
        <Card titulo="Heladera No Frost"
            descripcion="Capacidad 300L, eficiencia energética A, enfriamiento uniforme"
            imagen="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400"
            precio={1200000}>
            <button className="btn-comprar">Comprar ahora</button></Card>

        <Card 
          titulo="Lavarropas Automático"
          descripcion="Carga frontal, 7kg, centrifugado 1000rpm, 15 programas"
          imagen="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400"
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
      <TodoApp/>

      </div>
      <Footer />
    </>
  )
}
export default App;
