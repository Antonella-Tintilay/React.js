import { useState } from 'react';

function Header () {
    return(
        <header>
            <h1>Ventas</h1>
            <nav>
                <a href="#inicio">Inicio</a>
                <a href="#productos">Producto</a>
                <a href="#contacto">Contacto</a>
                <a href="#tarea">Tareas</a>
            </nav>
        </header>
    )
}
export default Header;