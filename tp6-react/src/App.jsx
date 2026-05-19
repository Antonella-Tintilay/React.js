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
      <section id="Inicio"><Contador/></section>
      <section id="producto"><ProductList/></section>
      <section id="contacto"><ContactForm/></section>
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
          imagen="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400"
          precio={700000}>
          <button className="btn-comprar">Compra ahora</button></Card>

        <Card 
          titulo="Licuadora Profesional"
          descripcion="3 velocidades, 1.5L, cuchillas de acero inoxidable"
          imagen="https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400"
          precio={100000}>
          <button className="btn-comprar">Compra ahora</button></Card>
      </div>
      <section id="tarea"><TodoApp/></section>
      <Footer />
    </>
  )
}
export default App;
